import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/home/HomePage";
import DevelopersPage from "../pages/developers/DevelopersPage";
import ProjectsPage from "../pages/projects/ProjectsPage";
import OffersPage from "../pages/offers/OffersPage";
import ProjectDetailsPage from "../pages/project-details/ProjectDetailsPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "developers", element: <DevelopersPage /> },
      { path: "developers/:id", element: <ProjectDetailsPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "offers", element: <OffersPage /> },
    ],
  },
]);