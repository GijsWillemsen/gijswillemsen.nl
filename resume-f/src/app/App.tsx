import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = "/favicon.ico";
  }, []);

  return (
    <div className="min-h-full w-full bg-[#181818]">
      <RouterProvider router={router} />
    </div>
  );
}
