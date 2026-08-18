import { createBrowserRouter } from "react-router";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Quizz from "./pages/Quizz";
import TestPopState from "./pages/TestPopState";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "quizz", Component: Quizz },
      { path: "test-pop-state", Component: TestPopState },
    ],
  },
]);

export default router;
