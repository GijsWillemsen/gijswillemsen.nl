import svgPaths from "@/imports/Error-1/svg-4o99k3zvwb";
import imgSableLogo from "@/imports/home/34e1a05dacba882243b613622d41219303fb8cb9.png";
import imgWlmsnLogo from "@/imports/home/dd38095cc809e55f1fdd3091393db1050e65d719.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScaledCanvas } from "./scaled-canvas";
import { Footer } from "./footer";

/** Intrinsic design dimensions of the imported Figma error frame. */
const CANVAS_WIDTH = 1903;
const CANVAS_HEIGHT = 1150;

function NameHeader() {
  return (
    <div className="absolute inset-[18.96%_24.8%_66.35%_26.64%]" data-name="name header">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 924 169">
        <g filter="url(#filter0_n_26_690)" id="name header">
          <path d={svgPaths.p18a20b00} fill="var(--fill-0, white)" id="Vector" />
          <g id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pd831d80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 7" />
          <path clipRule="evenodd" d={svgPaths.p2ba1c000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 8" />
          <path clipRule="evenodd" d={svgPaths.p10806c32} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 10" />
          <g filter="url(#filter1_n_26_690)" id="Vector 11">
            <path d={svgPaths.p1a6d1900} fill="var(--fill-0, white)" />
            <path d={svgPaths.pf8c2a00} fill="var(--fill-0, white)" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p2efc9480} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 9" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="169" id="filter0_n_26_690" width="924" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence baseFrequency="0.49019607901573181 0.49019607901573181" numOctaves="3" result="noise" seed="6249" stitchTiles="stitch" type="fractalNoise" />
            <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
            <feComponentTransfer in="alphaNoise" result="coloredNoise1">
              <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
            </feComponentTransfer>
            <feComposite in="coloredNoise1" in2="shape" operator="in" result="noise1Clipped" />
            <feFlood floodColor="#002BFF" result="color1Flood" />
            <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
            <feMerge result="effect1_noise_26_690">
              <feMergeNode in="shape" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="169" id="filter1_n_26_690" width="121" x="803" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence baseFrequency="0.5 0.5" numOctaves="3" result="noise" seed="6719" stitchTiles="stitch" type="fractalNoise" />
            <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
            <feComponentTransfer in="alphaNoise" result="coloredNoise1">
              <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
            </feComponentTransfer>
            <feComposite in="coloredNoise1" in2="shape" operator="in" result="noise1Clipped" />
            <feFlood floodColor="rgba(0, 43, 255, 0.25)" result="color1Flood" />
            <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
            <feMerge result="effect1_noise_26_690">
              <feMergeNode in="shape" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

interface ErrorPageProps {
  onHome?: () => void;
  /** Error code shown in the top-left corner. */
  code?: string;
}

export function ErrorPage({ onHome, code = "404" }: ErrorPageProps) {
  const handleHome = onHome ?? (() => { window.location.href = "/"; });

  return (
    <>
      <ScaledCanvas width={CANVAS_WIDTH} height={CANVAS_HEIGHT} background="#181818">
        <div className="bg-[#181818] relative w-full h-full overflow-hidden" data-name="HomePage">
          <div className="absolute inset-[12.61%_0_18.77%_0]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1903.01 789.157">
              <path d={svgPaths.p10750f80} fill="var(--fill-0, #000C46)" id="Vector 4" />
            </svg>
          </div>
          <div className="absolute inset-[30.13%_0_19.12%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1903.01 583.576">
              <g filter="url(#filter0_n_26_688)" id="Vector">
                <path d={svgPaths.p13aec00} fill="var(--fill-0, #001788)" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="583.576" id="filter0_n_26_688" width="1903.01" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feTurbulence baseFrequency="0.49019607901573181 0.49019607901573181" numOctaves="3" result="noise" seed="629" stitchTiles="stitch" type="fractalNoise" />
                  <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
                  <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                    <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
                  </feComponentTransfer>
                  <feComposite in="coloredNoise1" in2="shape" operator="in" result="noise1Clipped" />
                  <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                  <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
                  <feMerge result="effect1_noise_26_688">
                    <feMergeNode in="shape" />
                    <feMergeNode in="color1" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-[45.52%_0_0_0]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1903.01 626.451">
              <path d={svgPaths.p2a51c100} fill="var(--fill-0, #002BFF)" id="Vector 6" />
            </svg>
          </div>
          <p className="absolute left-[48px] top-[40px] font-['Silkscreen',sans-serif] text-[20px] text-white whitespace-nowrap">
            {code}
          </p>
          <NameHeader />
          <p className="absolute left-0 right-0 top-[35%] text-center font-['Silkscreen',sans-serif] text-[20px] text-white whitespace-nowrap">
            I see you encountered an error :)
          </p>
          <button
            type="button"
            onClick={handleHome}
            className="absolute inset-[40.26%_45.1%_55.04%_45.19%] flex items-center justify-center p-[2.041px] rounded-[15.306px] border-[#f2f1f0] border-[2.041px] border-solid font-['Silkscreen',sans-serif] text-[24.489px] text-center text-white whitespace-nowrap cursor-pointer transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            data-name="Home button"
          >
            Home
          </button>
        </div>
      </ScaledCanvas>
      <Footer />
      <div className="fixed bottom-4 right-4 flex items-center gap-2 opacity-30 hover:opacity-60 transition-opacity duration-300 z-50">
        <div className="relative size-[41px] overflow-hidden">
          <ImageWithFallback alt="WLMSN logo" className="absolute inset-0 max-w-none object-cover size-full" src={imgWlmsnLogo} />
        </div>
        <div className="relative size-[47px] overflow-hidden">
          <ImageWithFallback alt="SABLE logo" className="absolute h-[160.47%] left-[-87.58%] max-w-none top-[-36.1%] w-[285.27%]" src={imgSableLogo} />
        </div>
      </div>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 left-4 font-['Silkscreen',sans-serif] text-[13px] text-[#f2f1f0] opacity-30 whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity duration-300 focus:outline-none z-50"
      >
        \\gijs willemsen \\WLMSN \\SABLE
      </button>
    </>
  );
}
