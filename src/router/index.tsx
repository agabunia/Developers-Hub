import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import DevelopersPage from "../pages/DevelopersPage";
import ProjectsPage from "../pages/ProjectsPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "developers", element: <DevelopersPage /> },
      { path: "projects", element: <ProjectsPage /> },
    ],
  },
]);