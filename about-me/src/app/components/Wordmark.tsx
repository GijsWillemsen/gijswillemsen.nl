export function Wordmark() {
  return (
    <div className="mx-auto w-full max-w-[760px] mb-8">
      <svg
        className="block h-auto w-full"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 765 165"
      >
        <g filter="url(#about_wordmark_noise)">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 164.5L62 0H192L130.5 164.5H87L110 102H66L42.5 164.5H0ZM81.5 65.5L97 26H141.5L126.5 65.5H81.5Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M154 164.5L213 0H339.5L315.5 65.5L288.5 78L311.5 97L286 164.5H154ZM209.5 128.5L221.5 97H270.5L258 128.5H209.5ZM232.5 64L244 35H286L275 64H232.5Z" fill="white"/>
          <path d="M653 0H764.5L751 34.5H715L667 164.5H626.5L675 34.5H639.5L653 0Z" fill="white"/>
          <path d="M511 0L452.5 164.5H581L641.5 0H597.5L553.5 127H507L552 0H511Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M304.5 164.5L364 0H494.5L432.5 164.5H304.5ZM392.5 35L356 130H404L442 35H392.5Z" fill="white"/>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="164.5"
            id="about_wordmark_noise"
            width="764.5"
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
              baseFrequency="0.5 0.5"
              numOctaves="3"
              result="noise"
              seed="8485"
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
            <feMerge result="effect1_noise_54_23">
              <feMergeNode in="shape" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
