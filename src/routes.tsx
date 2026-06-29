import { createBrowserRouter } from "react-router";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Quizz from "./pages/Quizz";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "quizz", Component: Quizz },
    ],
  },
]);

export default router;
