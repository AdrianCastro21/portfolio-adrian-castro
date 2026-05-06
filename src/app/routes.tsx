import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { CaseStudyStaffing } from "./pages/CaseStudyStaffing";
import { CaseStudyKeobra } from "./pages/CaseStudyKeobra";
import { CaseStudyMeditate } from "./pages/CaseStudyMeditate";

// importa también el tercero cuando lo tengas
// import { CaseStudyEdtech } from "./pages/CaseStudyEdtech";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },

      { path: "case-study/staffing-system", Component: CaseStudyStaffing },
      { path: "case-study/construction-innovation", Component: CaseStudyKeobra },
      { path: "/case-study/meditate-app", Component: CaseStudyMeditate },

      // { path: "case-study/edtech-platform", Component: CaseStudyEdtech },
    ],
  },
]);
