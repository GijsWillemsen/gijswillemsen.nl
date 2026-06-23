import svgPaths from "../../imports/Resume/svg-j8xt1btrdk";

/**
 * Layered blue wave graphic. The three layers are stacked so all three are
 * visible: darkest navy at the back, mid-blue in the middle, bright blue on top.
 * Each layer is absolutely positioned and offset so the darker ones peek out
 * from behind the bright blue rather than hiding beneath it.
 *
 * On narrow viewports the container scales down proportionally so the wave
 * curves keep their natural shape instead of being squished vertically.
 */
export function WaveBand() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        /* 420 / 1903 ≈ 22% — scales the height with the viewport width
           so the waves never look squished. Capped at 420px on large screens. */
        height: "clamp(160px, 22vw, 420px)",
      }}
    >
      {/* layer 1 — darkest navy, tallest, sits furthest back */}
      <div className="absolute inset-x-0 bottom-0 h-full">
        <svg
          className="absolute inset-0 block size-full"
          fill="none"
          preserveAspectRatio="xMidYMax slice"
          viewBox="0 0 1903.01 487.742"
        >
          <path d={svgPaths.p12cea170} fill="#000C46" />
        </svg>
      </div>

      {/* layer 2 — mid blue, shows above the bright blue */}
      <div className="absolute inset-x-0 bottom-0" style={{ height: "86%" }}>
        <svg
          className="absolute inset-0 block size-full"
          fill="none"
          preserveAspectRatio="xMidYMax slice"
          viewBox="0 0 1903.01 401.009"
        >
          <path d={svgPaths.p34a81600} fill="#001788" />
        </svg>
      </div>

      {/* layer 3 — bright blue, sits at the bottom */}
      <div className="absolute inset-x-0 bottom-0" style={{ height: "71%" }}>
        <svg
          className="absolute inset-0 block size-full"
          fill="none"
          preserveAspectRatio="xMidYMax slice"
          viewBox="0 0 1903.01 505.264"
        >
          <path d={svgPaths.p24813f00} fill="#002BFF" />
        </svg>
      </div>
    </div>
  );
}
