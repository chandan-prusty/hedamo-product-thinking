import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Layers, Share2, ArrowRight } from "lucide-react";
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
          "HEDAMO structures producer-declared product intelligence into a portable, transparent product profile.",
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

const readers = [
  { role: "Producer", question: "Does my distinction travel?" },
  { role: "Reviewer", question: "Is this declaration complete and legible?" },
  { role: "Institution", question: "What is declared and what is not?" },
  { role: "Buyer", question: "What am I actually sourcing?" },
  { role: "Researcher", question: "Can this be compared across regions?" },
  { role: "Trade body", question: "Can producers be seen beyond codes?" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-24">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Product intelligence structure
          </motion.p>
          <motion.h1
            className="mt-6 max-w-4xl font-serif text-[2.6rem] leading-[1.08] text-navy sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 0.61, 0.36, 1] }}
          >
            The product moves.
            <br />
            The understanding doesn&apos;t.
          </motion.h1>
          <motion.p
            className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            HEDAMO structures producer-declared product intelligence into a portable, transparent
            product profile.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.24 }}
          >
            <a
              href="#profiles"
              className="inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore product profile
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              to="/applications"
              className="inline-flex items-center gap-2 rounded-sm border border-navy/25 px-6 py-3 text-sm text-navy transition-colors hover:bg-secondary"
            >
              Start producer application
            </Link>
          </motion.div>
        </section>

        {/* How it works */}
        <section className="rule-top" aria-labelledby="how-heading">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <Reveal>
              <p className="eyebrow">How HEDAMO works</p>
              <h2 id="how-heading" className="mt-4 max-w-2xl text-3xl text-navy sm:text-4xl">
                Three steps, in a fixed order.
              </h2>
            </Reveal>
            <ol className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 0.08} className="bg-card p-8">
                  <div className="flex items-center gap-3">
                    <s.icon className="h-5 w-5 text-green" aria-hidden="true" strokeWidth={1.5} />
                    <span className="eyebrow">Step {i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-navy">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Sample profiles */}
        <section className="rule-top" id="profiles" aria-labelledby="profiles-heading">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
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
                    <div className="overflow-hidden bg-secondary">
                      <img
                        src={p.img}
                        alt={`${p.type} from ${p.origin}`}
                        width={1024}
                        height={768}
                        loading="lazy"
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

        {/* Who uses HEDAMO */}
        <section className="rule-top" aria-labelledby="readers-heading">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <Reveal>
              <p className="eyebrow">Who uses HEDAMO</p>
              <h2 id="readers-heading" className="mt-4 max-w-2xl text-3xl text-navy sm:text-4xl">
                One profile. Six questions.
              </h2>
            </Reveal>
            <dl className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {readers.map((r, i) => (
                <Reveal key={r.role} delay={i * 0.05} className="bg-card p-8">
                  <dt className="font-serif text-lg text-navy">{r.role}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {r.question}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* Philosophy */}
        <section className="rule-top bg-secondary" aria-labelledby="philosophy-heading">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
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
