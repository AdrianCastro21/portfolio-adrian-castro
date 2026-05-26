import React from "react";
import { useLocation } from "react-router";
import { useLanguage } from "../i18n/LanguageContext";
import { caseStudyTranslations } from "../i18n/caseStudyTranslations";

const originalText = new WeakMap<Text, string>();
const originalAttributeValues = new WeakMap<Element, Partial<Record<string, string>>>();

function normalizeText(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function translatedTextFor(original: string) {
  const translated = caseStudyTranslations[normalizeText(original)];
  if (!translated) return undefined;

  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}

function isCurrentTranslatedValue(current: string, original: string) {
  const translated = translatedTextFor(original);
  return translated ? normalizeText(current) === normalizeText(translated) : false;
}

function translateNodeText(node: Text, language: "es" | "en") {
  const currentValue = node.nodeValue ?? "";
  const savedOriginal = originalText.get(node);
  const original =
    savedOriginal && (normalizeText(currentValue) === normalizeText(savedOriginal) || isCurrentTranslatedValue(currentValue, savedOriginal))
      ? savedOriginal
      : currentValue;

  if (originalText.get(node) !== original) {
    originalText.set(node, original);
  }

  if (language === "es") {
    if (node.nodeValue !== original) {
      node.nodeValue = original;
    }
    return;
  }

  const nextValue = translatedTextFor(original);

  if (nextValue) {
    if (node.nodeValue !== nextValue) {
      node.nodeValue = nextValue;
    }
  }
}

function translateAttributes(element: Element, language: "es" | "en") {
  ["alt", "aria-label", "title"].forEach((attribute) => {
    const currentValue = element.getAttribute(attribute);
    if (!currentValue) return;

    const savedValues = originalAttributeValues.get(element) ?? {};
    const savedOriginal = savedValues[attribute];
    const originalValue =
      savedOriginal && (normalizeText(currentValue) === normalizeText(savedOriginal) || isCurrentTranslatedValue(currentValue, savedOriginal))
        ? savedOriginal
        : currentValue;
    originalAttributeValues.set(element, { ...savedValues, [attribute]: originalValue });

    if (language === "es") {
      if (element.getAttribute(attribute) !== originalValue) {
        element.setAttribute(attribute, originalValue);
      }
      return;
    }

    const nextValue = translatedTextFor(originalValue);
    if (nextValue) {
      if (element.getAttribute(attribute) !== nextValue) {
        element.setAttribute(attribute, nextValue);
      }
    }
  });
}

function translateTree(root: Element, language: "es" | "en") {
  const treeWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  let currentNode = treeWalker.nextNode();

  while (currentNode) {
    textNodes.push(currentNode as Text);
    currentNode = treeWalker.nextNode();
  }

  textNodes.forEach((node) => translateNodeText(node, language));
  root.querySelectorAll("[alt], [aria-label], [title]").forEach((element) => {
    translateAttributes(element, language);
  });
}

export function PageTranslator() {
  const { language } = useLanguage();
  const location = useLocation();

  React.useEffect(() => {
    const root = document.querySelector("main");
    if (!root) return;

    translateTree(root, language);

    const observer = new MutationObserver((mutations) => {
      const shouldTranslate = mutations.some((mutation) => {
        if (mutation.type === "childList") return mutation.addedNodes.length > 0;
        return mutation.type === "characterData" || mutation.type === "attributes";
      });

      if (shouldTranslate) {
        requestAnimationFrame(() => translateTree(root, language));
      }
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["alt", "aria-label", "title"],
      characterData: true,
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [language, location.pathname]);

  return null;
}
