import type { ResumeContent } from "../lib/content";

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

export function SiteFooter({ footer }: { footer: ResumeContent["footer"] }) {
  return (
    <footer className="bg-[#016] px-6 pb-10 pt-10 sm:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="flex flex-col gap-4">
            <ColumnLabel>Pages</ColumnLabel>
            {footer.pages.map((p) => (
              <FooterLink key={p.label} href={p.href} label={p.label} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <ColumnLabel>Links</ColumnLabel>
            {footer.links.map((l) => (
              <FooterLink key={l.label} href={l.href} label={l.label} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <ColumnLabel>Contact</ColumnLabel>
            <FooterLink
              href={`mailto:${footer.email}`}
              label={footer.email}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 border-t border-white/10 pt-6">
          {footer.copyright.map((line) => (
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
