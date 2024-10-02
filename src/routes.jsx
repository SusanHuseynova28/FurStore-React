import { createBrowserRouter } from "react-router-dom";
import Layout from "./featured/layout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    
  },
]);