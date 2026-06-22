import { useEffect, useRef } from "react";

/**
 * Renders a Credly badge embed. Scripts inserted via innerHTML do not execute,
 * so we inject the markup and then recreate any <script> tags as real elements,
 * which lets Credly's embed.js find the `[data-share-badge-id]` div and swap in
 * the live badge iframe.
 */
export function CredlyBadge({ embedHtml }: { embedHtml: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    container.innerHTML = embedHtml;
    container.querySelectorAll("script").forEach((old) => {
      const s = document.createElement("script");
      if (old.src) s.src = old.src;
      if (old.type) s.type = old.type;
      s.async = true;
      s.textContent = old.textContent;
      old.replaceWith(s);
    });
  }, [embedHtml]);

  return <div ref={ref} />;
}
