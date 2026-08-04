import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const nav = [
  { to: "/", label: "Overview" },
  { to: "/applications", label: "Producer Applications" },
  { to: "/backlog", label: "Product Backlog" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-sm">
      <div className="mx-auto grid h-14 max-w-[1320px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:h-16 sm:px-8">
        <Link
          to="/"
          className="truncate font-serif text-base tracking-[0.18em] uppercase text-navy sm:text-lg"
          aria-label="HEDAMO home"
        >
          Hedamo
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
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

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm text-navy transition-colors hover:bg-secondary md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Primary mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <ul className="mx-auto max-w-[1320px] px-4 py-2">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className="block rounded-sm px-1 py-3.5 text-[15px] text-muted-foreground transition-colors data-[status=active]:text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="rule-top mt-16 sm:mt-24">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8 sm:py-10">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Product thinking prototype — HEDAMO Track A. Structure only: HEDAMO does not certify,
          verify, or approve.
        </p>
      </div>
    </footer>
  );
}
