import { useEffect } from "react";
import { createBrowserRouter } from "react-router";
import { HomePage } from "./components/home-page";
import { ErrorPage } from "./components/error-page";

function Home() {
  useEffect(() => {
    document.title = "Home | Gijs Willemsen";
  }, []);
  return <HomePage />;
}

function NotFound() {
  useEffect(() => {
    document.title = "Error | Gijs Willemsen";
  }, []);
  return <ErrorPage />;
}

export const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "*", Component: NotFound },
]);
