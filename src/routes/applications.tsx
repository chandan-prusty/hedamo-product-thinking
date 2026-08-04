import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, FileWarning, Paperclip, MessageSquare, X } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import {
  APPLICATIONS,
  OUTCOME_ICON,
  STAGES,
  type Application,
} from "@/data/applications";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "My Applications — HEDAMO Producer Dashboard" },
      {
        name: "description",
        content:
          "Track producer applications through submission, information requests, review and decision — with reviewer notes at every stage.",
      },
      { property: "og:title", content: "My Applications — HEDAMO Producer Dashboard" },
      {
        property: "og:description",
        content: "A transparent status timeline for every producer declaration in progress.",
      },
    ],
  }),
  component: ApplicationsPage,
});

function statusTone(status: Application["status"]) {
  switch (status) {
    case "Needs Information":
      return "border-amber-note/40 text-amber-note";
    case "Under Review":
      return "border-navy/30 text-navy";
    case "Approved":
      return "border-green/40 text-green";
    case "Not Proceeding":
      return "border-destructive/30 text-destructive";
    default:
      return "border-border text-muted-foreground";
  }
}

function Timeline({ app }: { app: Application }) {
  return (
    <ol className="mt-6 flex items-start gap-2" aria-label="Status timeline">
      {STAGES.map((stage, i) => {
        const reached = i <= app.stageIndex;
        const isFinal = stage.key === "closed";
        const Icon =
          isFinal && app.stageIndex === 3
            ? OUTCOME_ICON[app.status as "Approved" | "Not Proceeding"]
            : stage.icon;
        const label = isFinal && app.stageIndex === 3 ? app.status : stage.label;
        const failed = isFinal && app.status === "Not Proceeding";
        return (
          <li key={stage.key} className="flex-1">
            <div className="flex items-center gap-2">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                  reached
                    ? failed
                      ? "border-destructive/40 text-destructive"
                      : `border-current ${stage.text}`
                    : "border-border text-muted-foreground/40"
                }`}
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              {i < STAGES.length - 1 && (
                <span className="relative h-px flex-1 bg-border">
                  <motion.span
                    className={`absolute inset-y-0 left-0 ${failed ? "bg-destructive/50" : stage.dot}`}
                    initial={{ width: 0 }}
                    animate={{ width: i < app.stageIndex ? "100%" : 0 }}
                    transition={{ duration: 0.7, delay: 0.15 * i }}
                  />
                </span>
              )}
            </div>
            <p
              className={`mt-2 text-[11px] leading-tight ${
                reached ? "text-foreground" : "text-muted-foreground/60"
              }`}
            >
              {label}
            </p>
          </li>
        );
      })}
    </ol>
  );
}

function ApplicationsPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = APPLICATIONS.find((a) => a.id === openId) ?? null;

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-20">
        <Reveal>
          <p className="eyebrow">Producer dashboard</p>
          <h1 className="mt-4 font-serif text-3xl text-navy sm:text-5xl">My Applications</h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Five declarations in progress. Every stage, note and gap is shown as it stands — nothing
            is scored or summarised.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-2">
          {APPLICATIONS.map((app, i) => (
            <Reveal as="li" key={app.id} delay={i * 0.06}>
              <article className="h-full border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setOpenId(app.id)}
                  aria-haspopup="dialog"
                  className="w-full p-7 text-left transition-colors hover:bg-secondary/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-serif text-2xl text-navy">{app.product}</h2>
                      <p className="mt-1 text-xs text-muted-foreground">{app.category}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-3 py-1 text-[11px] tracking-wide ${statusTone(app.status)}`}
                    >
                      {app.status}
                    </span>
                  </div>

                  <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-xs">
                    <div>
                      <dt className="eyebrow">Submitted</dt>
                      <dd className="mt-1 text-foreground">{app.submitted}</dd>
                    </div>
                    <div className="min-w-[7.5rem] flex-1">
                      <dt className="eyebrow">Progress</dt>
                      <dd className="mt-2 flex items-center gap-3">
                        <span className="h-1 flex-1 bg-border" aria-hidden="true">
                          <motion.span
                            className="block h-full bg-navy"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${app.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />
                        </span>
                        <span className="text-muted-foreground">{app.progress}%</span>
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-6 border-l-2 border-border pl-4 text-sm leading-relaxed text-muted-foreground italic">
                    {app.reviewerNote}
                  </p>

                  <Timeline app={app} />

                  <span className="mt-6 inline-flex items-center gap-2 text-xs text-navy">
                    Open application
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </button>
              </article>
            </Reveal>
          ))}
        </ul>
      </main>

      <AnimatePresence>
        {active && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-charcoal/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenId(null)}
              aria-hidden="true"
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label={`${active.product} application detail`}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-lg overflow-y-auto border-l border-border bg-card"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="flex items-start justify-between gap-4 border-b border-border p-5 sm:p-7">
                <div>
                  <p className="eyebrow">{active.status}</p>
                  <h2 className="mt-2 font-serif text-2xl text-navy sm:text-3xl">{active.product}</h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {active.category} · submitted {active.submitted}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenId(null)}
                  aria-label="Close application detail"
                  className="rounded-sm border border-border p-2 text-muted-foreground transition-colors hover:text-navy"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <div className="space-y-9 p-5 sm:p-7">
                <section>
                  <h3 className="eyebrow">Application summary</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">{active.summary}</p>
                </section>

                <section>
                  <h3 className="eyebrow flex items-center gap-2">
                    <FileWarning className="h-3.5 w-3.5" aria-hidden="true" /> Missing documents
                  </h3>
                  {active.missingDocuments.length ? (
                    <ul className="mt-3 space-y-2 text-sm text-foreground">
                      {active.missingDocuments.map((d) => (
                        <li key={d} className="border-l-2 border-amber-note/50 pl-3">
                          {d}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm text-muted-foreground">
                      Nothing outstanding. Undeclared fields are shown openly as gaps.
                    </p>
                  )}
                </section>

                <section>
                  <h3 className="eyebrow flex items-center gap-2">
                    <Paperclip className="h-3.5 w-3.5" aria-hidden="true" /> Evidence uploaded
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-foreground">
                    {active.evidence.map((e) => (
                      <li key={e} className="border-l-2 border-green/50 pl-3">
                        {e}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="eyebrow flex items-center gap-2">
                    <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" /> Reviewer feedback
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {active.feedback}
                  </p>
                </section>

                <section className="border border-border bg-secondary p-5">
                  <h3 className="eyebrow">Next action</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy">{active.nextAction}</p>
                </section>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <SiteFooter />
    </div>
  );
}
