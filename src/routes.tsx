import { createBrowserRouter } from "react-router";

import MainLayout from "./layouts/MainLayout";
import GuessBackColor from "./pages/GuessBackColor";
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
      { path: "guess-back-color", Component: GuessBackColor },
    ],
  },
]);

export default router;
