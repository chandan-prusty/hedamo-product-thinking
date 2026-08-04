import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
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
  const primary = [
    { to: "/", label: "Overview" },
    { to: "/applications", label: "Producer Applications" },
    { to: "/backlog", label: "Product Backlog" },
  ];

  const secondary = [
    { href: "#", label: "Methodology" },
    { href: "#", label: "Research" },
    { href: "#", label: "Documentation" },
    { href: "#", label: "Contact" },
  ];

  return (
    <footer className="rule-top mt-16 sm:mt-24">
      <div className="mx-auto max-w-[1320px] px-4 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Navigation */}
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Navigate
              </h3>
              <ul className="mt-5 space-y-3">
                {primary.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="relative inline-block text-[15px] text-navy transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-navy after:transition-transform after:duration-300 hover:text-green hover:after:scale-x-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Resources
              </h3>
              <ul className="mt-5 space-y-3">
                {secondary.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="relative inline-block text-[15px] text-navy transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-navy after:transition-transform after:duration-300 hover:text-green hover:after:scale-x-100"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Philosophy */}
          <div className="lg:pl-8">
            <h3 className="font-serif text-2xl tracking-tight text-navy sm:text-3xl">
              HEDAMO
            </h3>
            <p className="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-muted-foreground">
              HEDAMO structures producer-declared product intelligence into portable, transparent product profiles.
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} HEDAMO · Track A Prototype
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#"
              className="group inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-navy"
              aria-label="GitHub"
            >
              <Github className="h-3.5 w-3.5" strokeWidth={1.6} />
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-navy after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                GitHub
              </span>
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-navy"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-3.5 w-3.5" strokeWidth={1.6} />
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-navy after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                LinkedIn
              </span>
            </a>
            <a
              href="mailto:hello@hedamo.com"
              className="group inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-navy"
              aria-label="Email"
            >
              <Mail className="h-3.5 w-3.5" strokeWidth={1.6} />
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-navy after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                Email
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

