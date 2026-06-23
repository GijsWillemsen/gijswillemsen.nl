import { useSiteInfo } from "@/hooks/useSiteInfo";

const FONT = "'Silkscreen', monospace";

function ColumnLabel({ children }: { children: string }) {
  return (
    <p
      className="uppercase"
      style={{
        fontFamily: FONT,
        fontSize: 11,
        letterSpacing: "1.1px",
        color: "rgba(255,255,255,0.4)",
      }}
    >
      {children}
    </p>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="transition-opacity hover:opacity-100"
      style={{ fontFamily: FONT, fontSize: 14, color: "rgba(255,255,255,0.8)" }}
    >
      {label}
    </a>
  );
}

export function SiteFooter() {
  const { data: siteInfo } = useSiteInfo();

  return (
    <footer className="bg-[#016] px-6 pb-10 pt-10 sm:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="flex flex-col gap-4">
            <ColumnLabel>Pages</ColumnLabel>
            <FooterLink href={siteInfo.navigation.projects} label="Projects" />
            <FooterLink href={siteInfo.navigation.resume} label="Resume" />
          </div>
          <div className="flex flex-col gap-4">
            <ColumnLabel>Links</ColumnLabel>
            <FooterLink href={siteInfo.links.github.url} label="Github" />
            <FooterLink href={siteInfo.links.makerworld.url} label="Makerworld" />
          </div>
          <div className="flex flex-col gap-4">
            <ColumnLabel>Contact</ColumnLabel>
            <FooterLink
              href={`mailto:${siteInfo.contact.email}`}
              label={siteInfo.contact.email}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 border-t border-white/10 pt-6">
          {siteInfo.copyright.map((line) => (
            <p
              key={line}
              style={{
                fontFamily: FONT,
                fontSize: 11,
                color: "rgba(255,255,255,0.3)",
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
