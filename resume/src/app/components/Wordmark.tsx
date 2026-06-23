import svgPaths from "../../imports/Resume/svg-j8xt1btrdk";

/** Large grain-textured "RESUME" wordmark. */
export function Wordmark() {
  return (
    <div className="mx-auto w-full max-w-[760px]">
      <svg
        className="block h-auto w-full"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 982 169"
      >
        <g filter="url(#wordmark_noise)">
          <path d={svgPaths.p1158f980} fill="white" />
          <path d={svgPaths.p218c3900} fill="white" />
          <path d={svgPaths.p21b26880} fill="white" />
          <path d={svgPaths.p31ab0700} fill="white" />
          <path d={svgPaths.p2eb6c500} fill="white" />
          <path
            clipRule="evenodd"
            d={svgPaths.p31d46280}
            fill="white"
            fillRule="evenodd"
          />
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="169"
            id="wordmark_noise"
            width="982"
            x="0"
            y="0"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feTurbulence
              baseFrequency="0.49019607901573181 0.49019607901573181"
              numOctaves="3"
              result="noise"
              seed="6249"
              stitchTiles="stitch"
              type="fractalNoise"
            />
            <feColorMatrix
              in="noise"
              result="alphaNoise"
              type="luminanceToAlpha"
            />
            <feComponentTransfer in="alphaNoise" result="coloredNoise1">
              <feFuncA
                tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
                type="discrete"
              />
            </feComponentTransfer>
            <feComposite
              in="coloredNoise1"
              in2="shape"
              operator="in"
              result="noise1Clipped"
            />
            <feFlood floodColor="#002BFF" result="color1Flood" />
            <feComposite
              in="color1Flood"
              in2="noise1Clipped"
              operator="in"
              result="color1"
            />
            <feMerge result="effect1_noise">
              <feMergeNode in="shape" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
