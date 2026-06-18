import { useEffect } from "react";
import { HomePage } from "./components/home-page";

export default function App() {
  useEffect(() => {
    document.title = "Home | Gijs Willemsen";

    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = "/favicon.ico";
  }, []);

  return (
    <div className="size-full bg-[#181818]">
      <HomePage />
    </div>
  );
}
