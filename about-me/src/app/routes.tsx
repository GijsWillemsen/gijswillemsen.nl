import { useEffect } from "react";
import { createBrowserRouter } from "react-router";
import { AboutMePage } from "./components/about-page";
import { ErrorPage } from "./components/error-page";

function About() {
  useEffect(() => {
    document.title = "About Me | Gijs Willemsen";
  }, []);
  return <AboutMePage />;
}

function NotFound() {
  useEffect(() => {
    document.title = "Error | Gijs Willemsen";
  }, []);
  return <ErrorPage />;
}

export const router = createBrowserRouter([
  { path: "/", Component: About },
  { path: "*", Component: NotFound },
]);
