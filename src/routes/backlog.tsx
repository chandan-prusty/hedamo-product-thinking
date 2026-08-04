import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/backlog")({
  head: () => ({
    meta: [
      { title: "Observed Product Opportunities — HEDAMO Backlog" },
      {
        name: "description",
        content:
          "Five observed comprehension and workflow opportunities, prioritised by impact and effort across a quick-wins matrix.",
      },
      { property: "og:title", content: "Observed Product Opportunities — HEDAMO Backlog" },
      {
        property: "og:description",
        content: "A product backlog for first-time comprehension, onboarding and reviewer clarity.",
      },
    ],
  }),
  component: BacklogPage,
});

type Item = {
  id: string;
  priority: "P1" | "P2" | "P3";
  title: string;
  detail: string;
  impact: "High" | "Medium" | "Low";
  effort: "High" | "Medium" | "Low";
  owner: string;
  status: "Observed" | "Defined" | "In Progress";
};

const ITEMS: Item[] = [
  {
    id: "OPP-1",
    priority: "P1",
    title: "Homepage does not explain HEDAMO quickly",
    detail:
      "First-time visitors read three abstract statements before learning what HEDAMO produces. Comprehension arrives late.",
    impact: "High",
    effort: "Medium",
    owner: "Product Design",
    status: "In Progress",
  },
  {
    id: "OPP-2",
    priority: "P1",
    title: "Producer onboarding lacks guidance",
    detail:
      "Producers begin declaring without knowing which evidence states exist or what happens after submission.",
    impact: "High",
    effort: "High",
    owner: "Producer Experience",
    status: "Defined",
  },
  {
    id: "OPP-3",
    priority: "P2",
    title: "Product profile examples appear too late",
    detail:
      "The strongest proof of the model is a real profile, yet examples sit below several conceptual sections.",
    impact: "High",
    effort: "Low",
    owner: "Content",
    status: "Defined",
  },
  {
    id: "OPP-4",
    priority: "P2",
    title: "Primary CTA lacks clarity",
    detail:
      "A single ambiguous action serves two different audiences — producers who declare and readers who explore.",
    impact: "Medium",
    effort: "Low",
    owner: "Product Design",
    status: "In Progress",
  },
  {
    id: "OPP-5",
    priority: "P3",
    title: "Reviewer workflow could be more transparent",
    detail:
      "Producers cannot see which stage a declaration sits in, or what specifically is being asked of them.",
    impact: "Medium",
    effort: "Medium",
    owner: "Review Operations",
    status: "Observed",
  },
];

const COLUMNS: Item["status"][] = ["Observed", "Defined", "In Progress"];

const QUADRANTS = [
  {
    label: "Quick Wins",
    axis: "High impact · Low effort",
    ids: ["OPP-3"],
    tone: "border-green/40",
  },
  {
    label: "Strategic",
    axis: "High impact · High effort",
    ids: ["OPP-1", "OPP-2"],
    tone: "border-navy/30",
  },
  {
    label: "Minor",
    axis: "Low impact · Low effort",
    ids: ["OPP-4", "OPP-5"],
    tone: "border-border",
  },
];

function priorityTone(p: Item["priority"]) {
  return p === "P1" ? "text-destructive" : p === "P2" ? "text-amber-note" : "text-muted-foreground";
}

function Card({ item }: { item: Item }) {
  return (
    <article className="card-lift h-full border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <span className={`text-[11px] tracking-[0.16em] ${priorityTone(item.priority)}`}>
          {item.priority}
        </span>
        <span className="eyebrow">{item.id}</span>
      </div>
      <h3 className="mt-4 font-serif text-xl leading-snug text-navy">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
      <dl className="mt-6 grid grid-cols-2 gap-y-3 border-t border-border pt-5 text-xs">
        <div>
          <dt className="eyebrow">Impact</dt>
          <dd className="mt-1 text-foreground">{item.impact}</dd>
        </div>
        <div>
          <dt className="eyebrow">Effort</dt>
          <dd className="mt-1 text-foreground">{item.effort}</dd>
        </div>
        <div className="col-span-2">
          <dt className="eyebrow">Owner</dt>
          <dd className="mt-1 text-foreground">{item.owner}</dd>
        </div>
      </dl>
    </article>
  );
}

function BacklogPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-20">
        <Reveal>
          <p className="eyebrow">Product backlog</p>
          <h1 className="mt-4 font-serif text-3xl text-navy sm:text-5xl">
            Observed Product Opportunities
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Five comprehension and workflow observations, each stated as an issue rather than a
            solution, and sequenced by impact against effort.
          </p>
        </Reveal>

        <section className="mt-14" aria-labelledby="board-heading">
          <h2 id="board-heading" className="sr-only">
            Opportunity board
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {COLUMNS.map((col, ci) => (
              <div key={col}>
                <div className="flex items-baseline justify-between border-b border-border pb-3">
                  <h3 className="text-sm text-navy">{col}</h3>
                  <span className="text-xs text-muted-foreground">
                    {ITEMS.filter((i) => i.status === col).length}
                  </span>
                </div>
                <ul className="mt-5 space-y-5">
                  {ITEMS.filter((i) => i.status === col).map((item, i) => (
                    <Reveal as="li" key={item.id} delay={ci * 0.05 + i * 0.05}>
                      <Card item={item} />
                    </Reveal>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24" aria-labelledby="matrix-heading">
          <Reveal>
            <p className="eyebrow">Prioritisation</p>
            <h2 id="matrix-heading" className="mt-4 text-2xl text-navy sm:text-3xl">
              Priority matrix
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
            {QUADRANTS.map((q, i) => (
              <Reveal key={q.label} delay={i * 0.07} className="bg-card p-5 sm:p-7">
                <div className={`border-l-2 pl-4 ${q.tone}`}>
                  <h3 className="font-serif text-2xl text-navy">{q.label}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{q.axis}</p>
                </div>
                <ul className="mt-6 space-y-3">
                  {q.ids.map((id) => {
                    const item = ITEMS.find((it) => it.id === id)!;
                    return (
                      <li key={id} className="text-sm leading-snug text-foreground">
                        <span className="eyebrow mr-2">{id}</span>
                        {item.title}
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
