import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScaledCanvasProps {
  /** Intrinsic design width of the canvas in px. */
  width: number;
  /** Intrinsic design height of the canvas in px. */
  height: number;
  /** Background color used behind the scaled canvas. */
  background?: string;
  children: ReactNode;
}

/**
 * Renders a fixed-size design canvas and scales it proportionally to fill the
 * available width, keeping the original absolute layout pixel-accurate.
 */
export function ScaledCanvas({ width, height, background = "#181818", children }: ScaledCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => setScale(el.clientWidth / width);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [width]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden"
      style={{ background, height: height * scale }}
    >
      <div
        style={{
          width,
          height,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
