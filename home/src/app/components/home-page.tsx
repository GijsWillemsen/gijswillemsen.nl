import { useState } from "react";
import svgPaths from "@/imports/home/svg-m1o4ua2i7m";
import imgSableLogo from "@/imports/home/34e1a05dacba882243b613622d41219303fb8cb9.png";
import imgWlmsnLogo from "@/imports/home/dd38095cc809e55f1fdd3091393db1050e65d719.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScaledCanvas } from "./scaled-canvas";
import { Footer } from "./footer";
import { useSiteInfo } from "@/hooks/useSiteInfo";

/** Intrinsic design dimensions of the imported Figma frame. */
const CANVAS_WIDTH = 1865;
const CANVAS_HEIGHT = 1127;

function NameHeader() {
  return (
    <div className="absolute h-[327.878px] left-[200px] top-[209px] w-[1004px]" data-name="name header">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1004.77 327.878">
        <g id="name header">
          <g id="header - gijs willemsen back">
            <g id="Vector 1">
              <path d={svgPaths.p2ffb4680} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2828b680} fill="var(--fill-0, white)" />
              <path d={svgPaths.p20942600} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3b8af00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1ab7c8f0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p13b92a00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2e549d00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p308c1540} fill="var(--fill-0, white)" />
              <path d={svgPaths.p366b4600} fill="var(--fill-0, white)" />
              <path d={svgPaths.p26164d00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p10bf7080} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1386f900} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2ffb4680} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p2828b680} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p20942600} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p3b8af00} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p1ab7c8f0} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p13b92a00} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p2e549d00} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p308c1540} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p366b4600} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p26164d00} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p10bf7080} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p1386f900} stroke="var(--stroke-0, white)" />
            </g>
            <path d={svgPaths.p38ae8700} fill="var(--fill-0, white)" id="Vector 3" stroke="var(--stroke-0, white)" />
          </g>
          <g filter="url(#filter0_n_16_65)" id="Ellipse">
            <ellipse cx="338.493" cy="163.939" fill="var(--fill-0, #002BFF)" rx="183.625" ry="163.939" />
          </g>
          <g filter="url(#filter1_n_16_65)" id="Ellipse_2">
            <ellipse cx="924.503" cy="110.032" fill="var(--fill-0, #2D3436)" rx="68.2091" ry="45.4727" transform="rotate(21.9739 924.503 110.032)" />
          </g>
          <g id="header - gijs willemsen front">
            <g id="Vector 1_2">
              <path d={svgPaths.p22f2e80} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p1943e500} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p10f8ae00} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p295acb00} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p34f96200} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p33ef2380} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p17b83f0} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p6013030} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p36158d80} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p1a7fbf80} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p11b91300} stroke="var(--stroke-0, white)" />
              <path d={svgPaths.p11956c00} stroke="var(--stroke-0, white)" />
            </g>
            <path d={svgPaths.p38ae8700} id="Vector 3_2" stroke="var(--stroke-0, white)" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="327.878" id="filter0_n_16_65" width="367.251" x="154.868" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence baseFrequency="0.5 0.5" numOctaves="3" result="noise" seed="5486" stitchTiles="stitch" type="fractalNoise" />
            <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
            <feComponentTransfer in="alphaNoise" result="coloredNoise1">
              <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
            </feComponentTransfer>
            <feComposite in="coloredNoise1" in2="shape" operator="in" result="noise1Clipped" />
            <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
            <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
            <feMerge result="effect1_noise_16_65">
              <feMergeNode in="shape" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="98.5978" id="filter1_n_16_65" width="131.038" x="858.984" y="60.7333">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feTurbulence baseFrequency="0.5 0.5" numOctaves="3" result="noise" seed="2708" stitchTiles="stitch" type="fractalNoise" />
            <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
            <feComponentTransfer in="alphaNoise" result="coloredNoise1">
              <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
            </feComponentTransfer>
            <feComposite in="coloredNoise1" in2="shape" operator="in" result="noise1Clipped" />
            <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
            <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
            <feMerge result="effect1_noise_16_65">
              <feMergeNode in="shape" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-[200px] top-[209px]" data-name="header">
      <NameHeader />
    </div>
  );
}

interface HomePageProps {
  onResume?: () => void;
  onProjects?: () => void;
  onBrandClick?: () => void;
}

export function HomePage({ onResume, onProjects, onBrandClick }: HomePageProps) {
  const { data: siteInfo } = useSiteInfo();
  const handleResume = onResume ?? (() => { window.location.href = siteInfo.navigation.resume; });
  const handleProjects = onProjects ?? (() => { window.location.href = siteInfo.navigation.projects; });
  const handleBrand = onBrandClick ?? (() => window.scrollTo({ top: 0, behavior: "smooth" }));
  const [cyberHovered, setCyberHovered] = useState(false);

  return (
    <>
    <ScaledCanvas width={CANVAS_WIDTH} height={CANVAS_HEIGHT} background="#181818">
      <div className="bg-[#181818] relative w-full h-full overflow-hidden" data-name="Home page">
        <div className="absolute h-[478.004px] left-0 top-[437.5px] w-[1865px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1865 478.004">
            <path d={svgPaths.p294fdc00} fill="var(--fill-0, #000C46)" id="Vector 4" />
          </svg>
        </div>
        <div className="absolute h-[393px] left-0 top-[518.5px] w-[1865px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1865 393">
            <g filter="url(#filter0_n_16_77)" id="Vector 5">
              <path d={svgPaths.p24882b00} fill="var(--fill-0, #001788)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="393" id="filter0_n_16_77" width="1865" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feTurbulence baseFrequency="0.5 0.5" numOctaves="3" result="noise" seed="9427" stitchTiles="stitch" type="fractalNoise" />
                <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
                <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                  <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
                </feComponentTransfer>
                <feComposite in="coloredNoise1" in2="shape" operator="in" result="noise1Clipped" />
                <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
                <feMerge result="effect1_noise_16_77">
                  <feMergeNode in="shape" />
                  <feMergeNode in="color1" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute h-[495.181px] left-0 top-[631.82px] w-[1865px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1865 495.181">
            <path d={svgPaths.p1cff7580} fill="var(--fill-0, #002BFF)" id="Vector 6" />
          </svg>
        </div>
        <Header />

        {/* === ICT text block + Cybersecurity (bound together so translations don't cause clipping) === */}
        <div className="absolute left-[243px] top-[482px] font-['Silkscreen',sans-serif] text-[32px] text-white leading-[normal] not-italic" data-name="ict-cyber-block">
          <p className="[word-break:break-word] whitespace-pre-wrap">
            ICT, Engineering, CS,
            <br aria-hidden />
            Robotics AND
          </p>
          <p
            onMouseEnter={() => setCyberHovered(true)}
            onMouseLeave={() => setCyberHovered(false)}
            className="[word-break:break-word] leading-[normal] whitespace-nowrap cursor-pointer transition-colors duration-200 hover:text-[#002BFF] mt-[-3px]"
            data-name="Component 2"
          >
            {cyberHovered ? "Hacking (°  °)" : "CYBERSECURITY"}
          </p>
        </div>
        {/* === Right-side info panel (flow layout to handle translations) === */}
        <div className="absolute left-[1255px] top-[523px] flex flex-col gap-[21px] font-['Silkscreen',sans-serif]" data-name="info-panel">
          {/* Country */}
          <div className="flex flex-row items-start gap-[12px]">
            <div className="w-[30px] h-[30px] flex-shrink-0 mt-[1px]" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
                <path d={svgPaths.pcbb300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="[word-break:break-word] font-bold leading-[normal] not-italic text-[#a8a8a8] text-[16px] whitespace-nowrap">Country</p>
              <p className="[word-break:break-word] leading-[normal] not-italic text-[20px] text-white whitespace-nowrap">
                {siteInfo.hero.country}
              </p>
            </div>
          </div>
          {/* Uptime */}
          <div className="flex flex-row items-start gap-[12px]">
            <div className="w-[30px] h-[30px] flex-shrink-0 mt-[1px]" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
                <path d={svgPaths.p34e51100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="[word-break:break-word] font-bold leading-[normal] not-italic text-[#a8a8a8] text-[16px] whitespace-nowrap">Uptime</p>
              <p className="[word-break:break-word] leading-[normal] not-italic text-[20px] text-white whitespace-nowrap">{siteInfo.hero.uptime}</p>
            </div>
          </div>
          {/* Language */}
          <div className="flex flex-row items-start gap-[12px]">
            <div className="w-[30px] h-[26px] flex-shrink-0 mt-[1px]" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 29">
                <path d={svgPaths.p1ff0f200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="[word-break:break-word] font-bold leading-[normal] not-italic text-[#a8a8a8] text-[16px] whitespace-nowrap">LANGUAGE</p>
              <p className="[word-break:break-word] leading-[normal] not-italic text-[20px] text-white whitespace-nowrap">{siteInfo.hero.language}</p>
            </div>
          </div>
          {/* Mail */}
          <div className="flex flex-row items-start gap-[12px]">
            <div className="w-[30px] h-[30px] flex-shrink-0 mt-[1px]" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
                <path d={svgPaths.p2b8942c0} id="Vector" stroke="var(--stroke-0, #F2F1F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="[word-break:break-word] font-bold leading-[normal] not-italic text-[#a8a8a8] text-[16px] whitespace-nowrap">MAIL</p>
              <a
                href={`mailto:${siteInfo.hero.mail}`}
                className="[word-break:break-word] leading-[normal] not-italic text-[20px] text-white whitespace-nowrap hover:underline focus:outline-none focus-visible:underline"
              >
                {siteInfo.hero.mail.toUpperCase()}
              </a>
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex h-[461.595px] items-center justify-center left-[1173px] top-[calc(50%-572.7px)] w-[891.477px]">
          <div className="flex-none rotate-[9.35deg]">
            <div className="h-[328px] relative w-[849.488px]" data-name="Ellipse">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 849.488 328">
                <g filter="url(#filter0_n_1_62)" id="Ellipse">
                  <ellipse cx="424.744" cy="164" fill="var(--fill-0, #002BFF)" rx="424.744" ry="164" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="328" id="filter0_n_1_62" width="849.488" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feTurbulence baseFrequency="0.5 0.5" numOctaves="3" result="noise" seed="5486" stitchTiles="stitch" type="fractalNoise" />
                    <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                      <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
                    </feComponentTransfer>
                    <feComposite in="coloredNoise1" in2="shape" operator="in" result="noise1Clipped" />
                    <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                    <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
                    <feMerge result="effect1_noise_1_62">
                      <feMergeNode in="shape" />
                      <feMergeNode in="color1" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={handleResume}
          className="absolute border-2 border-[#f2f1f0] border-solid h-[53px] left-[1415px] rounded-[15px] top-[50px] w-[181px] flex items-center justify-center font-['Silkscreen',sans-serif] text-[24px] text-white whitespace-nowrap cursor-pointer transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          data-name="Resume button"
        >
          Resume
        </button>
        <button
          type="button"
          onClick={handleProjects}
          className="absolute border-2 border-[#f2f1f0] border-solid h-[53px] left-[1620px] rounded-[15px] top-[50px] w-[181px] flex items-center justify-center font-['Silkscreen',sans-serif] text-[24px] text-white whitespace-nowrap cursor-pointer transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          data-name="Projects button"
        >
          Projects
        </button>
      </div>
    </ScaledCanvas>
    <div className="fixed bottom-4 right-4 flex items-center gap-2 opacity-30 hover:opacity-60 transition-opacity duration-300 z-50">
      <div className="relative size-[41px] overflow-hidden">
        <ImageWithFallback alt="WLMSN logo" className="absolute inset-0 max-w-none object-cover size-full" src={imgWlmsnLogo} />
      </div>
      <div className="relative size-[47px] overflow-hidden">
        <ImageWithFallback alt="SABLE logo" className="absolute h-[160.47%] left-[-87.58%] max-w-none top-[-36.1%] w-[285.27%]" src={imgSableLogo} />
      </div>
    </div>
    <Footer onResume={onResume} onProjects={onProjects} />
    <button
      type="button"
      onClick={handleBrand}
      className="fixed bottom-4 left-4 font-['Silkscreen',sans-serif] text-[13px] text-[#f2f1f0] opacity-30 whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity duration-300 focus:outline-none z-50"
    >
      {siteInfo.brand}
    </button>
    </>
  );
}
