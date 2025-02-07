// import { Page404 } from "common/components"
// import { App } from "../../app/App"
// import { Main } from "../../app/Main"
// import { Login } from "../../features/auth/ui/Login/Login"

import { createBrowserRouter } from "react-router-dom";
import { App } from "../../App";

// const PATH = {
//   ADIDAS: "/adidas",
//   PUMA: "/puma",
//   ABIBAS: "/abibas",
//   PRICE: "/price",
//   LOCALSTORAGE: "/localStorage",
// } as const;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "/",
    //     element: <Main />,
    //   },
    //   {
    //     path: Path.Login,
    //     element: <Login />,
    //   },
    //   {
    //     path: "*",
    //     element: <Page404 />,
    //   },
    // ],
  },
]);
