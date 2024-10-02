import { createBrowserRouter } from "react-router-dom";
import Layout from "./featured/layout";
import Home from "./pages/Home";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    
    ],
  },
]);