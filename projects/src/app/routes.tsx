import { useEffect } from "react";
import { createBrowserRouter } from "react-router";
import { ProjectsPage } from "./components/projects-page";
import { ErrorPage } from "./components/error-page";

function Projects() {
  useEffect(() => {
    document.title = "Projects | Gijs Willemsen";
  }, []);
  return <ProjectsPage />;
}

function NotFound() {
  useEffect(() => {
    document.title = "Error | Gijs Willemsen";
  }, []);
  return <ErrorPage />;
}

export const router = createBrowserRouter([
  { path: "/", Component: Projects },
  { path: "*", Component: NotFound },
]);
