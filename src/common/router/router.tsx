import { createBrowserRouter } from "react-router-dom";
import { App } from "../../App";
import Modules from "components/Modules/Modules";
import TheoryDetails from "components/Recipe/Recipe";

export const PATH = {
  HOME: "/",
  MODULES: "/modules",
  THEORY: "/theory",
} as const;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/modules",
        element: <Modules />,
      },
      {
        path: "/theory",
        element: <TheoryDetails />,
      },
    ],
  },
]);
