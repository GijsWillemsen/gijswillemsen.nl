import { useState } from "react";
import svgPaths from "@/imports/home/svg-m1o4ua2i7m";
import imgSableLogo from "@/imports/home/34e1a05dacba882243b613622d41219303fb8cb9.png";
import imgWlmsnLogo from "@/imports/home/dd38095cc809e55f1fdd3091393db1050e65d719.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Footer } from "./footer";
import { useSiteInfo } from "@/hooks/useSiteInfo";

const FONT = "'Silkscreen', sans-serif";

/* ── Name Header ── */
function MobileNameHeader() {
  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      <svg
        className="block w-full h-auto"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1004.77 327.878"
      >
        <g id="name header">
          <g id="header - gijs willemsen back">
            <g id="Vector 1">
              <path d={svgPaths.p2ffb4680} fill="white" />
              <path d={svgPaths.p2828b680} fill="white" />
              <path d={svgPaths.p20942600} fill="white" />
              <path d={svgPaths.p3b8af00} fill="white" />
              <path d={svgPaths.p1ab7c8f0} fill="white" />
              <path d={svgPaths.p13b92a00} fill="white" />
              <path d={svgPaths.p2e549d00} fill="white" />
              <path d={svgPaths.p308c1540} fill="white" />
              <path d={svgPaths.p366b4600} fill="white" />
              <path d={svgPaths.p26164d00} fill="white" />
              <path d={svgPaths.p10bf7080} fill="white" />
              <path d={svgPaths.p1386f900} fill="white" />
              <path d={svgPaths.p2ffb4680} stroke="white" />
              <path d={svgPaths.p2828b680} stroke="white" />
              <path d={svgPaths.p20942600} stroke="white" />
              <path d={svgPaths.p3b8af00} stroke="white" />
              <path d={svgPaths.p1ab7c8f0} stroke="white" />
              <path d={svgPaths.p13b92a00} stroke="white" />
              <path d={svgPaths.p2e549d00} stroke="white" />
              <path d={svgPaths.p308c1540} stroke="white" />
              <path d={svgPaths.p366b4600} stroke="white" />
              <path d={svgPaths.p26164d00} stroke="white" />
              <path d={svgPaths.p10bf7080} stroke="white" />
              <path d={svgPaths.p1386f900} stroke="white" />
            </g>
            <path d={svgPaths.p38ae8700} fill="white" id="Vector 3" stroke="white" />
          </g>
          <g filter="url(#mobileFilter0)" id="Ellipse">
            <ellipse cx="338.493" cy="163.939" fill="#002BFF" rx="183.625" ry="163.939" />
          </g>
          <g filter="url(#mobileFilter1)" id="Ellipse_2">
            <ellipse cx="924.503" cy="110.032" fill="#2D3436" rx="68.2091" ry="45.4727" transform="rotate(21.9739 924.503 110.032)" />
          </g>
          <g id="header - gijs willemsen front">
            <g id="Vector 1_2">
              <path d={svgPaths.p22f2e80} stroke="white" />
              <path d={svgPaths.p1943e500} stroke="white" />
              <path d={svgPaths.p10f8ae00} stroke="white" />
              <path d={svgPaths.p295acb00} stroke="white" />
              <path d={svgPaths.p34f96200} stroke="white" />
              <path d={svgPaths.p33ef2380} stroke="white" />
              <path d={svgPaths.p17b83f0} stroke="white" />
              <path d={svgPaths.p6013030} stroke="white" />
              <path d={svgPaths.p36158d80} stroke="white" />
              <path d={svgPaths.p1a7fbf80} stroke="white" />
              <path d={svgPaths.p11b91300} stroke="white" />
              <path d={svgPaths.p11956c00} stroke="white" />
            </g>
            <path d={svgPaths.p38ae8700} id="Vector 3_2" stroke="white" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="327.878" id="mobileFilter0" width="367.251" x="154.868" y="0">
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
            <feMerge>
              <feMergeNode in="shape" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="98.5978" id="mobileFilter1" width="131.038" x="858.984" y="60.7333">
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
            <feMerge>
              <feMergeNode in="shape" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

/* ── Info Row ── */
function InfoItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <p
        className="font-bold text-[#a8a8a8] uppercase"
        style={{ fontFamily: FONT, fontSize: 11, letterSpacing: "1.1px" }}
      >
        {label}
      </p>
      <div className="text-white" style={{ fontFamily: FONT, fontSize: 16 }}>
        {children}
      </div>
    </div>
  );
}

/* ── Wave Bands ── */
function MobileWaves() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(120px, 28vw, 420px)" }}
    >
      {/* Layer 1 — darkest navy */}
      <div className="absolute inset-x-0 bottom-0 h-full">
        <svg
          className="absolute inset-0 block size-full"
          fill="none"
          preserveAspectRatio="xMidYMax slice"
          viewBox="0 0 1865 478.004"
        >
          <path d={svgPaths.p294fdc00} fill="#000C46" />
        </svg>
      </div>

      {/* Layer 2 — mid blue with grain */}
      <div className="absolute inset-x-0 bottom-0" style={{ height: "85%" }}>
        <svg
          className="absolute inset-0 block size-full"
          fill="none"
          preserveAspectRatio="xMidYMax slice"
          viewBox="0 0 1865 393"
        >
          <path d={svgPaths.p24882b00} fill="#001788" />
        </svg>
      </div>

      {/* Layer 3 — bright blue */}
      <div className="absolute inset-x-0 bottom-0" style={{ height: "70%" }}>
        <svg
          className="absolute inset-0 block size-full"
          fill="none"
          preserveAspectRatio="xMidYMax slice"
          viewBox="0 0 1865 495.181"
        >
          <path d={svgPaths.p1cff7580} fill="#002BFF" />
        </svg>
      </div>
    </div>
  );
}

/* ── Blue Ellipse ── */
function MobileEllipse() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[60px] flex items-center justify-center overflow-hidden" style={{ height: 200 }}>
      <svg
        className="block w-[140%] max-w-[600px] h-auto opacity-40"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 849.488 328"
      >
        <g filter="url(#mobileEllipseFilter)">
          <ellipse cx="424.744" cy="164" fill="#002BFF" rx="424.744" ry="164" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="328" id="mobileEllipseFilter" width="849.488" x="0" y="0">
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
            <feMerge>
              <feMergeNode in="shape" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

/* ── Main Mobile Page ── */
interface MobileHomePageProps {
  onResume?: () => void;
  onProjects?: () => void;
  onBrandClick?: () => void;
}

export function MobileHomePage({ onResume, onProjects, onBrandClick }: MobileHomePageProps) {
  const { data: siteInfo } = useSiteInfo();
  const handleResume = onResume ?? (() => { window.location.href = siteInfo.navigation.resume; });
  const handleProjects = onProjects ?? (() => { window.location.href = siteInfo.navigation.projects; });
  const handleBrand = onBrandClick ?? (() => window.scrollTo({ top: 0, behavior: "smooth" }));
  const [cyberHovered, setCyberHovered] = useState(false);

  return (
    <>
      <div className="min-h-screen w-full bg-[#181818] flex flex-col">

        {/* ── Navigation ── */}
        <nav className="flex items-center justify-center gap-3 px-5 pt-6 pb-2">
          <button
            type="button"
            onClick={handleResume}
            className="border-2 border-[#f2f1f0] rounded-[12px] px-5 py-2.5 text-white cursor-pointer transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            style={{ fontFamily: FONT, fontSize: 16 }}
          >
            Resume
          </button>
          <button
            type="button"
            onClick={handleProjects}
            className="border-2 border-[#f2f1f0] rounded-[12px] px-5 py-2.5 text-white cursor-pointer transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            style={{ fontFamily: FONT, fontSize: 16 }}
          >
            Projects
          </button>
        </nav>

        {/* ── Hero Section ── */}
        <section className="relative flex flex-col items-center px-5 pt-8 pb-4 overflow-hidden">
          {/* Blue ellipse glow behind name */}
          <MobileEllipse />

          {/* Name header SVG */}
          <div className="relative z-10 w-full">
            <MobileNameHeader />
          </div>
        </section>

        {/* ── Tagline ── */}
        <section className="px-6 py-4 text-center">
          <p
            className="text-white leading-relaxed"
            style={{ fontFamily: FONT, fontSize: 18 }}
          >
            ICT, Engineering, CS,{"\n"}
            Robotics AND{" "}
            <span
              onMouseEnter={() => setCyberHovered(true)}
              onMouseLeave={() => setCyberHovered(false)}
              className="cursor-pointer transition-colors duration-200 hover:text-[#002BFF]"
            >
              {cyberHovered ? "Hacking (°  °)" : "CYBERSECURITY"}
            </span>
          </p>
        </section>

        {/* ── Info Grid ── */}
        <section className="grid grid-cols-2 gap-x-6 gap-y-5 px-6 py-6">
          <InfoItem label="Country">
            <p>{siteInfo.hero.country}</p>
          </InfoItem>
          <InfoItem label="Uptime">
            <p>{siteInfo.hero.uptime}</p>
          </InfoItem>
          <InfoItem label="Language">
            <p>{siteInfo.hero.language}</p>
          </InfoItem>
          <InfoItem label="Mail">
            <a
              href={`mailto:${siteInfo.hero.mail}`}
              className="hover:underline focus:outline-none focus-visible:underline break-all"
            >
              {siteInfo.hero.mail.toUpperCase()}
            </a>
          </InfoItem>
        </section>

        {/* ── Spacer to push waves down ── */}
        <div className="flex-1" />

        {/* ── Wave Bands ── */}
        <MobileWaves />
      </div>

      {/* ── Brand logos ── */}
      <div className="fixed bottom-4 right-4 flex items-center gap-2 opacity-30 hover:opacity-60 transition-opacity duration-300 z-50">
        <div className="relative size-[32px] overflow-hidden">
          <ImageWithFallback alt="WLMSN logo" className="absolute inset-0 max-w-none object-cover size-full" src={imgWlmsnLogo} />
        </div>
        <div className="relative size-[36px] overflow-hidden">
          <ImageWithFallback alt="SABLE logo" className="absolute h-[160.47%] left-[-87.58%] max-w-none top-[-36.1%] w-[285.27%]" src={imgSableLogo} />
        </div>
      </div>

      {/* ── Footer ── */}
      <Footer onResume={onResume} onProjects={onProjects} />

      {/* ── Brand text ── */}
      <button
        type="button"
        onClick={handleBrand}
        className="fixed bottom-4 left-4 opacity-30 whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity duration-300 focus:outline-none z-50"
        style={{ fontFamily: FONT, fontSize: 11, color: "#f2f1f0" }}
      >
        {siteInfo.brand}
      </button>
    </>
  );
}
