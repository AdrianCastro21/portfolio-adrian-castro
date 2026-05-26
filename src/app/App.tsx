import { RouterProvider } from "react-router";
import { LanguageProvider } from "./i18n/LanguageContext";
import { router } from "./routes";

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
