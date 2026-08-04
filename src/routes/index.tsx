import { Fragment } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileText,
  Layers,
  Share2,
  ArrowRight,
  Sprout,
  UserRound,
  Landmark,
  ShoppingCart,
  FlaskConical,
  Globe,
} from "lucide-react";
import { motion } from "motion/react";

import { Reveal } from "@/components/Reveal";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import olive from "@/assets/olive.jpg";
import coffee from "@/assets/coffee.jpg";
import rice from "@/assets/rice.jpg";
import cardamom from "@/assets/cardamom.jpg";
import heroComposition from "@/assets/hero-composition.webp";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HEDAMO — The product moves. The understanding doesn't." },
      {
        name: "description",
        content:
          "HEDAMO structures producer-declared product intelligence into a portable, transparent product profile that travels with every product.",
      },
      { property: "og:title", content: "HEDAMO — Product intelligence, structured to travel" },
      {
        property: "og:description",
        content:
          "Declare, structure, share. A transparent product profile that carries what the product is.",
      },
    ],
  }),
  component: Home,
});

const steps = [
  {
    icon: FileText,
    title: "Declare",
    short: "Producers declare what they know about their product.",
    body: "The producer records what they know — practices, testing, origin — in their own words.",
  },
  {
    icon: Layers,
    title: "Structure",
    short: "HEDAMO structures the information into a standard product profile.",
    body: "Each statement is placed in a fixed structure, with its evidence state shown honestly.",
  },
  {
    icon: Share2,
    title: "Share",
    short: "The profile is portable, transparent, and ready to be shared.",
    body: "The profile travels with the product, readable by anyone who needs to understand it.",
  },
];

const profiles = [
  { name: "Zeitoun Heritage", type: "Olive oil", origin: "Jordan", img: olive, url: "https://www.hedamo.com/disclosures/zeitoun" },
  { name: "Yirgacheffe Kochere", type: "Coffee", origin: "Ethiopia", img: coffee, url: "https://www.hedamo.com/disclosures/yirgacheffe-kochere" },
  { name: "Sona Masoori Select", type: "Rice", origin: "Andhra Pradesh", img: rice, url: "https://www.hedamo.com/disclosures/sona-masoori" },
  { name: "Malabar Green", type: "Cardamom", origin: "Kerala", img: cardamom, url: "https://www.hedamo.com/disclosures/malabar-green" },
];

const audiences = [
  { icon: Sprout, role: "Producer", plural: "Producers", question: "Does my distinction travel?" },
  { icon: UserRound, role: "Reviewer", plural: "Reviewers", question: "What is declared and what is not?" },
  { icon: Landmark, role: "Institution", plural: "Institutions", question: "Is the record legible at scale?" },
  { icon: ShoppingCart, role: "Buyer", plural: "Buyers", question: "What am I actually sourcing?" },
  { icon: FlaskConical, role: "Researcher", plural: "Researchers", question: "Can this be compared across regions?" },
  { icon: Globe, role: "Trade body", plural: "Trade Bodies", question: "Can producers be seen beyond codes?" },
];


const contrasts = [
  { label: "Certification", body: "confirms a threshold." },
  { label: "Traceability", body: "records movement." },
  { label: "Product intelligence", body: "carries what the product is." },
];

const layers = [
  { code: "L1", name: "International", body: "Global standards and cross-border requirements." },
  { code: "L2", name: "National", body: "Country-level regulation and registries." },
  { code: "L3", name: "Community", body: "Regional and collective records of practice." },
  {
    code: "L4",
    name: "The HEDAMO layer",
    body: "What no certificate captures — the producer's own intelligence.",
  },
];

const evidenceStates = [
  { state: "Supported", note: "declared and backed by evidence" },
  { state: "Producer-declared", note: "the producer's own knowledge, in their words" },
  { state: "Partly supported", note: "some evidence, not yet complete" },
  { state: "Private by choice", note: "held back by the producer" },
  { state: "Not declared", note: "shown openly as a gap, never hidden" },
];

const turmericFields = [
  { field: "Curcumin, lab-tested", state: "Supported" },
  { field: "Curing & drying method", state: "Producer-declared" },
  { field: "GI region reference", state: "Partly supported" },
  { field: "Exact farm coordinates", state: "Private by choice" },
  { field: "Third-party social audit", state: "Not declared" },
];

const boundaries = [
  "It does not certify, verify, or approve.",
  "Producers own their declarations.",
  "Jurisdictions determine admissibility.",
  "HEDAMO maintains the structure.",
];

const ease = [0.22, 0.61, 0.36, 1] as const;


function Home() {
  return (
    <div className="min-h-screen scroll-smooth bg-background">
      <SiteHeader />
      <main id="main-content">
        {/* Hero */}
        <section
          aria-labelledby="hero-heading"
          className="mx-auto max-w-[1320px] px-4 pt-10 pb-8 sm:px-8 sm:pt-20 sm:pb-10"
        >
          <div className="grid w-full items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-14">
            <div>
              <motion.p
                className="eyebrow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Product intelligence structure
              </motion.p>
              <motion.h1
                id="hero-heading"
                className="mt-6 max-w-[14ch] font-serif text-[2.6rem] leading-[1.04] text-navy sm:text-6xl lg:text-[4.5rem]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease }}
              >
                The product moves. The understanding doesn&apos;t.
              </motion.h1>
              <motion.p
                className="mt-8 max-w-[46ch] text-[1.0625rem] leading-relaxed text-muted-foreground"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 }}
              >
                HEDAMO structures producer-declared product intelligence into a portable,
                transparent product profile.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.34, ease }}
              >
                <a
                  href="#profiles"
                  className="group btn-primary inline-flex items-center justify-center gap-3 rounded-sm bg-navy px-7 py-3.5 text-sm text-primary-foreground"
                >
                  Explore product profile
                  <ArrowRight className="arrow-slide h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  to="/applications"
                  className="btn-secondary inline-flex items-center justify-center gap-2 rounded-sm border border-navy/20 px-7 py-3.5 text-sm text-navy"
                >
                  Start producer application
                </Link>
              </motion.div>
            </div>

            {/* Editorial photo composition */}
            <motion.div
              className="relative mx-auto w-full max-w-[620px] overflow-visible"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease }}
            >
              <img
                src={heroComposition}
                alt="Olive branch with bowls of olives, cardamom, coffee beans, rice and olive oil"
                width={1280}
                height={1056}
                decoding="async"
                className="w-full object-contain"
              />
            </motion.div>
          </div>
        </section>

        {/* How HEDAMO works — connected panel */}
        <section aria-labelledby="how-heading" className="mx-auto max-w-[1320px] px-4 pb-16 sm:px-8">
          <h2 id="how-heading" className="sr-only">
            How HEDAMO works
          </h2>
          <Reveal className="rounded-2xl border border-border bg-card/60 px-5 py-8 sm:px-10 sm:py-10">
            <ol className="grid items-center gap-8 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:gap-4">
              {steps.map((s, i) => (
                <Fragment key={s.title}>
                  <li className="flex items-start gap-4 sm:gap-5">
                    <span className="flex h-14 w-14 sm:h-[4.25rem] sm:w-[4.25rem] shrink-0 items-center justify-center rounded-full bg-secondary">
                      <s.icon className="h-6 w-6 text-green" aria-hidden="true" strokeWidth={1.4} />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-navy">{s.title}</h3>
                      <p className="mt-1.5 max-w-[26ch] text-sm leading-relaxed text-muted-foreground">
                        {s.short}
                      </p>
                    </div>
                  </li>
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="mx-auto hidden h-px w-16 border-t border-dashed border-navy/25 sm:block"
                    />
                  )}
                </Fragment>

              ))}
            </ol>
          </Reveal>
        </section>

        {/* Used by strip */}
        <section aria-label="Used by" className="border-y border-border bg-secondary/70">
          <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-center gap-x-6 gap-y-4 px-4 py-5 sm:gap-x-10 sm:gap-y-5 sm:py-6 text-center sm:px-8">
            <p className="text-sm font-medium text-navy">Used by</p>
            {audiences.map((r) => (
              <div key={r.role} className="flex items-center gap-2.5">
                <r.icon className="h-5 w-5 text-green" aria-hidden="true" strokeWidth={1.3} />
                <span className="text-sm text-muted-foreground">{r.plural}</span>
              </div>
            ))}
          </div>
        </section>


        {/* Who it serves */}
        <section className="mx-auto max-w-[1320px] px-4 py-14 sm:px-8 sm:py-28" aria-labelledby="readers-heading">
          <Reveal>
            <p className="eyebrow">Who it serves</p>
            <h2 id="readers-heading" className="mt-4 max-w-2xl text-2xl text-navy sm:text-4xl">
              One profile. Six questions.
            </h2>
          </Reveal>
          <dl className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((r, i) => (
              <Reveal key={r.role} delay={i * 0.05} className="bg-card p-6 transition-colors hover:bg-secondary sm:p-8">
                <r.icon className="h-5 w-5 text-green" aria-hidden="true" strokeWidth={1.5} />
                <dt className="mt-5 font-serif text-lg text-navy">{r.role}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.question}</dd>
              </Reveal>
            ))}
          </dl>
        </section>

        {/* Sample profiles */}
        <section className="rule-top" id="profiles" aria-labelledby="profiles-heading">
          <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-8 sm:py-24">
            <Reveal>
              <p className="eyebrow">Sample product profiles</p>
              <h2 id="profiles-heading" className="mt-4 max-w-2xl text-2xl text-navy sm:text-4xl">
                Four products. One intelligence structure.
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
              {profiles.map((p, i) => (
                <Reveal as="li" key={p.name} delay={i * 0.06}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <article>
                      <div className="overflow-hidden rounded-sm bg-secondary">
                        <img
                          src={p.img}
                          alt={`${p.type} from ${p.origin}`}
                          width={1024}
                          height={768}
                          loading="lazy"
                          decoding="async"
                          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                      <h3 className="mt-5 font-serif text-xl text-navy">{p.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {p.type} · {p.origin}
                      </p>
                    </article>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Contrast band */}
        <section className="rule-top bg-secondary/60" aria-label="What each layer does">
          <div className="mx-auto grid max-w-[1320px] gap-px overflow-hidden px-4 py-16 sm:grid-cols-3 sm:px-8 sm:py-20">
            {contrasts.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06} className="px-1 sm:px-8">
                <p className="font-serif text-xl leading-snug text-navy sm:text-2xl">
                  {c.label}{" "}
                  <span className="text-muted-foreground">{c.body}</span>
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* The fourth layer */}
        <section className="rule-top" aria-labelledby="fourth-layer-heading">
          <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-8 sm:py-28">
            <div className="grid gap-14 lg:grid-cols-[45fr_55fr]">
              <Reveal>
                <p className="eyebrow">The fourth layer</p>
                <h2
                  id="fourth-layer-heading"
                  className="mt-4 max-w-[20ch] font-serif text-3xl leading-[1.15] text-navy sm:text-[2.5rem]"
                >
                  Most of what makes a product distinct lives in a layer no certificate reads.
                </h2>
                <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted-foreground">
                  International, national and community records each hold part of the story. The
                  fourth layer is the producer&apos;s own intelligence — how the product was grown,
                  cured, handled and tested — structured and shown honestly, state by state.
                </p>
              </Reveal>
              <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border">
                {layers.map((l, i) => (
                  <Reveal
                    as="li"
                    key={l.code}
                    delay={i * 0.05}
                    className={`flex items-baseline gap-4 p-6 sm:gap-6 sm:p-7 ${
                      l.code === "L4" ? "bg-secondary" : "bg-card"
                    }`}
                  >
                    <span className="font-serif text-sm text-green">{l.code}</span>
                    <span>
                      <span className="block font-serif text-lg text-navy">{l.name}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                        {l.body}
                      </span>
                    </span>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* One profile, read honestly */}
        <section className="rule-top bg-secondary/50" aria-labelledby="honest-heading">
          <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-8 sm:py-28">
            <Reveal>
              <p className="eyebrow">One turmeric profile, read honestly</p>
              <h2 id="honest-heading" className="mt-4 max-w-2xl text-2xl text-navy sm:text-4xl">
                Every field carries its own evidence state.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-10 lg:grid-cols-[55fr_45fr]">
              <Reveal>
                <dl className="grid gap-px overflow-hidden rounded-lg border border-border bg-border">
                  {turmericFields.map((f) => (
                    <div
                      key={f.field}
                      className="flex flex-wrap items-center justify-between gap-2 bg-card px-5 py-4 sm:gap-3 sm:px-6 sm:py-5"
                    >
                      <dt className="text-sm text-navy">{f.field}</dt>
                      <dd className="rounded-full border border-navy/15 px-3 py-1 text-xs text-muted-foreground">
                        {f.state}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
                  Missing isn&apos;t withheld, and withheld isn&apos;t undocumented — each is its own
                  honest state, never a mark against the producer, and never summed into a score.
                </p>
                <ul className="mt-7 space-y-3">
                  {evidenceStates.map((e) => (
                    <li key={e.state} className="text-sm leading-relaxed">
                      <span className="text-navy">{e.state}</span>
                      <span className="text-muted-foreground"> — {e.note}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="rule-top bg-secondary" aria-labelledby="philosophy-heading">
          <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-8 sm:py-28">
            <Reveal>
              <p className="eyebrow">Philosophy</p>
              <blockquote
                id="philosophy-heading"
                className="mt-6 max-w-3xl font-serif text-3xl leading-[1.25] text-navy sm:text-[2.75rem]"
              >
                HEDAMO structures what the producer declares.
              </blockquote>
            </Reveal>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {boundaries.map((b, i) => (
                <Reveal as="li" key={b} delay={i * 0.05} className="border-t border-navy/15 pt-4 text-sm leading-relaxed text-muted-foreground">
                  {b}
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Methodology & Engage */}
        <section className="rule-top" aria-label="Methodology and engagement">
          <div className="mx-auto grid max-w-[1320px] gap-px overflow-hidden px-4 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h3 className="font-serif text-2xl text-navy">Methodology</h3>
              <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
                How product information becomes structured, portable, and gap-visible.
              </p>
              <a
                href="#how-heading"
                className="mt-6 inline-flex items-center gap-2 text-sm text-navy underline-offset-4 hover:underline"
              >
                Read the methodology
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Reveal>
            <Reveal delay={0.08} className="mt-12 lg:mt-0">
              <h3 className="font-serif text-2xl text-navy">Engage</h3>
              <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
                For institutional briefings, disclosure readiness, or research correspondence.
              </p>
              <Link
                to="/backlog"
                className="mt-6 inline-flex items-center gap-2 text-sm text-navy underline-offset-4 hover:underline"
              >
                Share your question
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="rule-top bg-secondary/50" aria-label="Start with HEDAMO">
          <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 py-16 text-center sm:px-8 sm:py-20">
            <Reveal>
              <h2 className="max-w-[22ch] font-serif text-2xl leading-snug text-navy sm:text-3xl">
                Ready to structure your product intelligence?
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <a
                href="https://hedamo-product-disclosure-ai.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-sm bg-navy px-8 py-4 sm:w-auto text-sm text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                Start producer application
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
