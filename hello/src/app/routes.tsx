import { useEffect } from "react";
import { createBrowserRouter } from "react-router";
import { HelloPage } from "./components/hello-page";
import { ErrorPage } from "./components/error-page";

function Hello() {
  useEffect(() => {
    document.title = "Hello | Gijs Willemsen";
  }, []);
  return <HelloPage />;
}

function NotFound() {
  useEffect(() => {
    document.title = "Error | Gijs Willemsen";
  }, []);
  return <ErrorPage />;
}

export const router = createBrowserRouter([
  { path: "/", Component: Hello },
  { path: "*", Component: NotFound },
]);
