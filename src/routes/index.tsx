import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileText,
  Layers,
  Share2,
  ArrowRight,
  Sprout,
  ShoppingBag,
  Landmark,
  Microscope,
  Building2,
  Handshake,
} from "lucide-react";
import { motion } from "motion/react";

import { Reveal } from "@/components/Reveal";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import olive from "@/assets/olive.jpg";
import coffee from "@/assets/coffee.jpg";
import rice from "@/assets/rice.jpg";
import cardamom from "@/assets/cardamom.jpg";

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
    body: "The producer records what they know — practices, testing, origin — in their own words.",
  },
  {
    icon: Layers,
    title: "Structure",
    body: "Each statement is placed in a fixed structure, with its evidence state shown honestly.",
  },
  {
    icon: Share2,
    title: "Share",
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
  { icon: Sprout, role: "Producer", question: "Does my distinction travel?" },
  { icon: ShoppingBag, role: "Buyer", question: "What am I actually sourcing?" },
  { icon: Landmark, role: "Institution", question: "What is declared and what is not?" },
  { icon: Microscope, role: "Researcher", question: "Can this be compared across regions?" },
  { icon: Building2, role: "Government", question: "Is the record legible at scale?" },
  { icon: Handshake, role: "Trade body", question: "Can producers be seen beyond codes?" },
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
          className="mx-auto flex min-h-[90vh] max-w-[1320px] items-center px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="grid w-full items-center gap-14 lg:grid-cols-[55fr_45fr] lg:gap-16">
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
                className="mt-6 max-w-[15ch] font-serif text-[2.6rem] leading-[1.06] text-navy sm:text-6xl lg:text-[4.25rem]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease }}
              >
                The product moves.
                <br />
                The understanding doesn&apos;t.
              </motion.h1>
              <motion.p
                className="mt-8 max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted-foreground"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 }}
              >
                HEDAMO structures producer-declared product intelligence into a portable,
                transparent product profile that can travel with every product.
              </motion.p>
              <motion.div
                className="mt-10 flex flex-wrap items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.24 }}
              >
                <a
                  href="#profiles"
                  className="inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3 text-sm text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
                >
                  Explore product profile
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  to="/applications"
                  className="inline-flex items-center gap-2 rounded-sm border border-navy/25 px-6 py-3 text-sm text-navy transition-all hover:-translate-y-0.5 hover:bg-secondary"
                >
                  Start producer application
                </Link>
              </motion.div>
              <motion.p
                className="mt-8 text-[13px] text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.36 }}
              >
                Used by Producers • Buyers • Institutions • Researchers
              </motion.p>
            </div>

            {/* Editorial photo composition */}
            <motion.div
              aria-hidden="true"
              className="relative mx-auto hidden aspect-[4/5] w-full max-w-[520px] sm:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease }}
            >
              <img
                src={olive}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute top-0 left-0 h-[58%] w-[62%] rounded-sm object-cover shadow-[0_30px_60px_-30px_rgba(20,30,55,0.35)]"
              />
              <img
                src={coffee}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute top-[16%] right-0 h-[34%] w-[34%] rounded-sm object-cover shadow-[0_24px_50px_-26px_rgba(20,30,55,0.4)]"
              />
              <img
                src={cardamom}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute bottom-0 left-[8%] h-[36%] w-[36%] rounded-sm object-cover shadow-[0_24px_50px_-26px_rgba(20,30,55,0.4)]"
              />
              <img
                src={rice}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute right-[2%] bottom-[6%] h-[46%] w-[52%] rounded-sm object-cover shadow-[0_30px_60px_-30px_rgba(20,30,55,0.35)]"
              />
            </motion.div>
          </div>
        </section>

        {/* How it works */}
        <section aria-labelledby="how-heading" className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <Reveal className="rounded-2xl border border-border bg-card px-6 py-14 sm:px-12 sm:py-16">
            <p className="eyebrow">In three steps</p>
            <h2 id="how-heading" className="mt-4 max-w-2xl text-3xl text-navy sm:text-4xl">
              How HEDAMO works
            </h2>
            <ol className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-6">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 0.08} className="relative">
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute top-full left-1/2 h-10 w-px -translate-x-1/2 bg-border sm:top-6 sm:left-auto sm:-right-3 sm:h-px sm:w-6 sm:translate-x-0"
                    />
                  )}
                  <div className="flex items-center gap-3">
                    <s.icon className="h-5 w-5 text-green" aria-hidden="true" strokeWidth={1.5} />
                    <span className="eyebrow">Step {i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-navy">{s.title}</h3>
                  <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </Reveal>
              ))}
            </ol>
          </Reveal>
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
