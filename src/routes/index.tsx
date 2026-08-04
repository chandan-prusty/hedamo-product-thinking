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
import heroComposition from "@/assets/hero-composition.png";


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
  { name: "Zeitoun Heritage", type: "Olive oil", origin: "Jordan", img: olive },
  { name: "Yirgacheffe Kochere", type: "Coffee", origin: "Ethiopia", img: coffee },
  { name: "Sona Masoori Select", type: "Rice", origin: "Andhra Pradesh", img: rice },
  { name: "Malabar Green", type: "Cardamom", origin: "Kerala", img: cardamom },
];

const audiences = [
  { icon: Sprout, role: "Producer", plural: "Producers", question: "Does my distinction travel?" },
  { icon: UserRound, role: "Reviewer", plural: "Reviewers", question: "What is declared and what is not?" },
  { icon: Landmark, role: "Institution", plural: "Institutions", question: "Is the record legible at scale?" },
  { icon: ShoppingCart, role: "Buyer", plural: "Buyers", question: "What am I actually sourcing?" },
  { icon: FlaskConical, role: "Researcher", plural: "Researchers", question: "Can this be compared across regions?" },
  { icon: Globe, role: "Trade body", plural: "Trade Bodies", question: "Can producers be seen beyond codes?" },
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
          className="mx-auto max-w-[1320px] px-5 pt-14 pb-10 sm:px-8 sm:pt-20"
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
                className="mt-10 flex flex-wrap items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.24 }}
              >
                <a
                  href="#profiles"
                  className="inline-flex items-center gap-3 rounded-sm bg-navy px-7 py-3.5 text-sm text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
                >
                  Explore product profile
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  to="/applications"
                  className="inline-flex items-center gap-2 rounded-sm border border-navy/20 px-7 py-3.5 text-sm text-navy transition-all hover:-translate-y-0.5 hover:bg-secondary"
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
                width={1200}
                height={1008}
                decoding="async"
                className="w-full object-contain drop-shadow-[0_4px_8px_rgba(20,30,55,0.12),0_16px_32px_rgba(20,30,55,0.18)] sm:drop-shadow-[0_5px_10px_rgba(20,30,55,0.12),0_22px_42px_rgba(20,30,55,0.18)] lg:drop-shadow-[0_6px_14px_rgba(20,30,55,0.12),0_32px_60px_rgba(20,30,55,0.20)] xl:drop-shadow-[0_8px_18px_rgba(20,30,55,0.12),0_44px_78px_rgba(20,30,55,0.22)]"
              />
            </motion.div>
          </div>
        </section>

        {/* How HEDAMO works — connected panel */}
        <section aria-labelledby="how-heading" className="mx-auto max-w-[1320px] px-5 pb-16 sm:px-8">
          <h2 id="how-heading" className="sr-only">
            How HEDAMO works
          </h2>
          <Reveal className="rounded-2xl border border-border bg-card/60 px-6 py-10 sm:px-10">
            <ol className="grid items-center gap-8 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:gap-4">
              {steps.map((s, i) => (
                <Fragment key={s.title}>
                  <li className="flex items-start gap-5">
                    <span className="flex h-[4.25rem] w-[4.25rem] shrink-0 items-center justify-center rounded-full bg-secondary">
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
          <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-center gap-x-10 gap-y-5 px-5 py-6 text-center sm:px-8">
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
        <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="readers-heading">
          <Reveal>
            <p className="eyebrow">Who it serves</p>
            <h2 id="readers-heading" className="mt-4 max-w-2xl text-3xl text-navy sm:text-4xl">
              One profile. Six questions.
            </h2>
          </Reveal>
          <dl className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((r, i) => (
              <Reveal key={r.role} delay={i * 0.05} className="bg-card p-8 transition-colors hover:bg-secondary">
                <r.icon className="h-5 w-5 text-green" aria-hidden="true" strokeWidth={1.5} />
                <dt className="mt-5 font-serif text-lg text-navy">{r.role}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.question}</dd>
              </Reveal>
            ))}
          </dl>
        </section>

        {/* Sample profiles */}
        <section className="rule-top" id="profiles" aria-labelledby="profiles-heading">
          <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-24">
            <Reveal>
              <p className="eyebrow">Sample product profiles</p>
              <h2 id="profiles-heading" className="mt-4 max-w-2xl text-3xl text-navy sm:text-4xl">
                Four products. One intelligence structure.
              </h2>
            </Reveal>
            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {profiles.map((p, i) => (
                <Reveal as="li" key={p.name} delay={i * 0.06}>
                  <article className="group">
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
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Philosophy */}
        <section className="rule-top bg-secondary" aria-labelledby="philosophy-heading">
          <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-28">
            <Reveal>
              <p className="eyebrow">Philosophy</p>
              <blockquote
                id="philosophy-heading"
                className="mt-6 max-w-3xl font-serif text-3xl leading-[1.25] text-navy sm:text-[2.75rem]"
              >
                HEDAMO structures what the producer declares. It does not certify, verify, or
                approve.
              </blockquote>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
