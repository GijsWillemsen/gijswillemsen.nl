import { SVGProps } from "react"

export function Wordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="100%" height="auto" viewBox="0 0 842 171" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#filter0_n_30_11)">
        <path d="M177 169L238.086 1H358L342.163 41.8637H272.023L265.236 64.5682H324.061L308.224 100.893H251.662L242.612 128.136H308.224L292.386 169H177Z" fill="white"/>
        <path d="M435 170.333L500.961 1.33282H551L500.961 129.226H544.177L528.255 170.333H435Z" fill="white"/>
        <path d="M319 169L384.961 0H435L384.961 127.893H428.177L412.255 169H319Z" fill="white"/>
        <g filter="url(#filter1_n_30_11)">
          <path d="M721 169L739.204 123.006H788.46L772.398 169H721Z" fill="white"/>
          <path d="M745.628 110.171L793.814 0H842L793.814 110.171H745.628Z" fill="white"/>
        </g>
        <path fillRule="evenodd" clipRule="evenodd" d="M551 170L620.573 1H764L688.005 170H551ZM650.543 37.3671L606.658 134.703H659.106L705.131 37.3671H650.543Z" fill="white"/>
        <path d="M220 1.5L153 168.5H101L129.5 101.5H85.5L53.5 168.5H0L83 1.5H131.5L100.5 64H148.5L178.5 1.5H220Z" fill="white"/>
      </g>
      <defs>
        <filter id="filter0_n_30_11" x="0" y="0" width="842" height="170.333" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feTurbulence type="fractalNoise" baseFrequency="0.49019607901573181 0.49019607901573181" stitchTiles="stitch" numOctaves={3} result="noise" seed="6249" />
          <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
          </feComponentTransfer>
          <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
          <feFlood floodColor="#002BFF" result="color1Flood" />
          <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
          <feMerge result="effect1_noise_30_11">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
        </filter>
        <filter id="filter1_n_30_11" x="721" y="0" width="121" height="169" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feTurbulence type="fractalNoise" baseFrequency="0.5 0.5" stitchTiles="stitch" numOctaves={3} result="noise" seed="6719" />
          <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
          </feComponentTransfer>
          <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
          <feFlood floodColor="rgba(0, 43, 255, 0.25)" result="color1Flood" />
          <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
          <feMerge result="effect1_noise_30_11">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}
