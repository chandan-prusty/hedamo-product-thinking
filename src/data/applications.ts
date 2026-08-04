import { CheckCircle2, CircleDashed, HelpCircle, Search, XCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type StageKey = "submitted" | "needs-information" | "under-review" | "closed";
export type StatusKey = "Submitted" | "Needs Information" | "Under Review" | "Approved" | "Not Proceeding";

export type Stage = {
  key: StageKey;
  label: string;
  icon: LucideIcon;
  /** token-based classes */
  dot: string;
  text: string;
};

export const STAGES: Stage[] = [
  {
    key: "submitted",
    label: "Submitted",
    icon: CircleDashed,
    dot: "bg-muted-foreground",
    text: "text-muted-foreground",
  },
  {
    key: "needs-information",
    label: "Needs Information",
    icon: HelpCircle,
    dot: "bg-amber-note",
    text: "text-amber-note",
  },
  {
    key: "under-review",
    label: "Under Review",
    icon: Search,
    dot: "bg-navy",
    text: "text-navy",
  },
  {
    key: "closed",
    label: "Decision",
    icon: CheckCircle2,
    dot: "bg-green",
    text: "text-green",
  },
];

export const OUTCOME_ICON: Record<"Approved" | "Not Proceeding", LucideIcon> = {
  Approved: CheckCircle2,
  "Not Proceeding": XCircle,
};

export type Application = {
  id: string;
  product: string;
  category: string;
  status: StatusKey;
  submitted: string;
  progress: number;
  stageIndex: number;
  reviewerNote: string;
  summary: string;
  missingDocuments: string[];
  evidence: string[];
  feedback: string;
  nextAction: string;
};

export const APPLICATIONS: Application[] = [
  {
    id: "hd-2401",
    product: "Organic Honey",
    category: "Apiary · Uttarakhand",
    status: "Submitted",
    submitted: "14 March 2026",
    progress: 25,
    stageIndex: 0,
    reviewerNote: "Received. Queued for structure check.",
    summary:
      "Single-origin forest honey with producer-declared harvesting windows and moisture readings across two seasons.",
    missingDocuments: ["Moisture test report (2026 harvest)"],
    evidence: ["Harvest log 2024–2025", "Apiary location statement", "Two product photographs"],
    feedback: "No reviewer assigned yet. Declarations are legible and complete for intake.",
    nextAction: "No action needed. Expect a structure check within five working days.",
  },
  {
    id: "hd-2402",
    product: "Turmeric Powder",
    category: "Rhizome · Erode",
    status: "Needs Information",
    submitted: "2 March 2026",
    progress: 50,
    stageIndex: 1,
    reviewerNote: "Curcumin figure declared without a supporting lab reference.",
    summary:
      "Declared curcumin content, curing method and drying duration. GI region reference is partly supported.",
    missingDocuments: ["Curcumin lab report", "Drying facility statement"],
    evidence: ["Curing method description", "GI region reference letter"],
    feedback:
      "The curcumin value is recorded as producer-declared. Attach the lab reference to move it to supported, or mark it as declared-only — both are honest states.",
    nextAction: "Upload the lab report or confirm the declaration stands without evidence.",
  },
  {
    id: "hd-2403",
    product: "Cardamom",
    category: "Spice · Kerala",
    status: "Under Review",
    submitted: "18 February 2026",
    progress: 75,
    stageIndex: 2,
    reviewerNote: "Structure complete. Reading declarations state by state.",
    summary:
      "Large-cardamom profile with altitude, curing temperature and grading declarations across three lots.",
    missingDocuments: [],
    evidence: ["Altitude survey", "Curing temperature log", "Grading sheet", "Three field photographs"],
    feedback:
      "All five evidence states are represented. Reviewer is confirming that private-by-choice fields are labelled, not hidden.",
    nextAction: "No action needed. A decision is expected within two weeks.",
  },
  {
    id: "hd-2404",
    product: "Coffee",
    category: "Arabica · Chikmagalur",
    status: "Approved",
    submitted: "9 January 2026",
    progress: 100,
    stageIndex: 3,
    reviewerNote: "Profile structured and published. No claims certified.",
    summary:
      "Washed arabica with declared fermentation hours, drying method and cupping notes from two independent sessions.",
    missingDocuments: [],
    evidence: ["Fermentation log", "Drying-bed record", "Two cupping sheets", "Farm boundary map"],
    feedback:
      "Profile is now portable. Gaps in soil testing remain shown openly as not declared.",
    nextAction: "Share the product profile link with buyers.",
  },
  {
    id: "hd-2405",
    product: "Olive Oil",
    category: "Extra virgin · Jordan",
    status: "Not Proceeding",
    submitted: "22 December 2025",
    progress: 100,
    stageIndex: 3,
    reviewerNote: "Withdrawn by producer pending the next pressing season.",
    summary:
      "Early-harvest pressing with declared acidity and cold-press temperature. Producer paused the application.",
    missingDocuments: ["Acidity test for the current lot"],
    evidence: ["Press schedule", "Grove statement"],
    feedback:
      "Not a rejection. The declaration set was incomplete for this season and the producer chose to pause.",
    nextAction: "Reopen the application when the next pressing is complete.",
  },
];
