import { useEffect } from "react";
import { createBrowserRouter } from "react-router";
import { ResumePage } from "./components/resume-page";
import { ErrorPage } from "./components/error-page";

function Resume() {
  useEffect(() => {
    document.title = "Resume | Gijs Willemsen";
  }, []);
  return <ResumePage />;
}

function NotFound() {
  useEffect(() => {
    document.title = "Error | Gijs Willemsen";
  }, []);
  return <ErrorPage />;
}

export const router = createBrowserRouter([
  { path: "/", Component: Resume },
  { path: "*", Component: NotFound },
]);
