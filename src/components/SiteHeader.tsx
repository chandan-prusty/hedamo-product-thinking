import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Overview" },
  { to: "/applications", label: "Producer Applications" },
  { to: "/backlog", label: "Product Backlog" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          to="/"
          className="font-serif text-lg tracking-[0.18em] uppercase text-navy"
          aria-label="HEDAMO home"
        >
          Hedamo
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1 overflow-x-auto">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative rounded-sm px-3 py-2 text-[13px] whitespace-nowrap text-muted-foreground transition-colors after:absolute after:bottom-1 after:left-3 after:h-px after:w-[calc(100%-1.5rem)] after:origin-left after:scale-x-0 after:bg-navy after:transition-transform after:duration-300 hover:text-navy hover:after:scale-x-100 data-[status=active]:text-navy data-[status=active]:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="rule-top mt-24">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Product thinking prototype — HEDAMO Track A. Structure only: HEDAMO does not certify,
          verify, or approve.
        </p>
      </div>
    </footer>
  );
}
