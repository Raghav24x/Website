"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw, Lock, Unlock } from "lucide-react";
import { resources } from "@/data/resources";

const QUESTIONS = [
  {
    id: "context",
    question: "Which best describes you?",
    options: [
      { value: "solo",      label: "Solo creator or freelancer" },
      { value: "operator",  label: "Operator or solopreneur" },
      { value: "team",      label: "Part of a team or organisation" },
      { value: "exploring", label: "Just starting to explore AI" },
    ],
  },
  {
    id: "goal",
    question: "What's your main goal with AI right now?",
    options: [
      { value: "save-time",      label: "Save time on repetitive tasks" },
      { value: "build-better",   label: "Build better AI workflows" },
      { value: "stay-ahead",     label: "Stay ahead of what's coming" },
      { value: "make-decisions", label: "Make sharper strategic decisions" },
    ],
  },
  {
    id: "challenge",
    question: "What's your biggest blocker?",
    options: [
      { value: "too-many-tools",  label: "Too many tools, no real system" },
      { value: "cant-implement",  label: "I read about AI but can't implement it" },
      { value: "dont-know-where", label: "I don't know where to start" },
      { value: "workflows-break", label: "My AI outputs are inconsistent" },
    ],
  },
  {
    id: "work",
    question: "What kind of work do you do most?",
    options: [
      { value: "content",    label: "Content, writing, or media" },
      { value: "product",    label: "Product or tech" },
      { value: "research",   label: "Research or strategy" },
      { value: "operations", label: "Operations or admin" },
    ],
  },
] as const;

type QuestionId = (typeof QUESTIONS)[number]["id"];
type Answers = Partial<Record<QuestionId, string>>;

const WEIGHTS: Record<string, Record<string, number>> = {
  "context:solo":      { "r-cowork-pipeline": 3, "r-chief-content": 3, "r-claude-design": 2, "r-perplexity-comet": 2, "r-transferable-prompting": 2, "r-daily-intel": 2 },
  "context:operator":  { "r-pipeline": 3, "r-tool-graveyard": 3, "r-idea-funneling": 2, "r-second-opinion": 2, "r-tool-evaluator": 2, "r-intel-dashboard": 2 },
  "context:team":      { "r-bmad": 3, "r-second-opinion": 3, "r-gemini-workspace": 2, "r-tool-evaluator": 2, "r-gemini-intel": 2 },
  "context:exploring": { "r-transferable-prompting": 3, "r-claude-code-non-dev": 3, "r-costar": 2, "r-tool-graveyard": 2 },

  "goal:save-time":      { "r-pipeline": 3, "r-daily-intel": 3, "r-gemini-workspace": 2, "r-costar": 2, "r-precision-research": 2 },
  "goal:build-better":   { "r-autoresearch": 3, "r-pipeline": 3, "r-skills-fixes": 2, "r-chief-content": 2, "r-bmad": 2 },
  "goal:stay-ahead":     { "r-intel-dashboard": 3, "r-gemini-intel": 3, "r-daily-intel": 2, "r-perplexity-comet": 2, "r-precision-research": 2 },
  "goal:make-decisions": { "r-second-opinion": 3, "r-idea-funneling": 3, "r-tool-evaluator": 2, "r-precision-research": 2 },

  "challenge:too-many-tools":  { "r-tool-graveyard": 4, "r-tool-evaluator": 3, "r-costar": 2 },
  "challenge:cant-implement":  { "r-claude-code-non-dev": 3, "r-transferable-prompting": 3, "r-bmad": 2, "r-autoresearch": 2 },
  "challenge:dont-know-where": { "r-transferable-prompting": 4, "r-costar": 3, "r-claude-code-non-dev": 2 },
  "challenge:workflows-break": { "r-autoresearch": 4, "r-skills-fixes": 4, "r-pipeline": 2 },

  "work:content":    { "r-cowork-pipeline": 3, "r-chief-content": 3, "r-perplexity-comet": 3, "r-claude-design": 2, "r-daily-intel": 2 },
  "work:product":    { "r-bmad": 3, "r-autoresearch": 3, "r-skills-fixes": 2, "r-pipeline": 2 },
  "work:research":   { "r-intel-dashboard": 3, "r-precision-research": 3, "r-gemini-intel": 2, "r-second-opinion": 2, "r-idea-funneling": 2 },
  "work:operations": { "r-gemini-workspace": 3, "r-claude-code-non-dev": 3, "r-tool-graveyard": 2, "r-excel-model": 2 },
};

const PITCHES: Record<string, string> = {
  "r-autoresearch":          "Your skills keep drifting — this builds a self-testing loop so they stay sharp.",
  "r-pipeline":              "You're running the same multi-step task repeatedly. This builds the orchestrator once.",
  "r-second-opinion":        "Before any big call, run your thinking through this 4-prompt stress-test.",
  "r-daily-intel":           "Wake up to a brief that's already read the web for you.",
  "r-tool-evaluator":        "Score any tool across 8 dimensions before you commit to another subscription.",
  "r-bmad":                  "Full project lifecycle in one orchestrator — from analysis to shipping, AI-native.",
  "r-transferable-prompting":"10 minutes to build a prompt framework that travels with you across every tool.",
  "r-costar":                "Get sharper outputs without burning tokens — one structured template, endless use.",
  "r-intel-dashboard":       "Your own live monitoring system for any niche, built in Notion, no code.",
  "r-cowork-pipeline":       "Article, Notes, and LinkedIn post from one session — the exact pipeline we use.",
  "r-excel-model":           "Three tested workflows for turning messy data into clean models in Excel.",
  "r-gemini-workspace":      "Your inbox, calendar, and Drive — finally working together on command.",
  "r-gemini-intel":          "Research, mapping, and visual infographics from a single Gemini workflow.",
  "r-claude-design":         "From rough idea to polished visual without any design background.",
  "r-claude-code-non-dev":   "Five Claude Code workflows that need zero code — built for operators.",
  "r-skills-fixes":          "The five root causes behind inconsistent skill performance — and how to fix them.",
  "r-perplexity-comet":      "Honest test of Comet for newsletter work, with copy-paste templates.",
  "r-tool-graveyard":        "Audit every tool you're paying for and cut the dead weight fast.",
  "r-idea-funneling":        "Go from wide ideation to a clear, defensible decision without losing range.",
  "r-precision-research":    "Scope any research task to exactly what you need — no filler outputs.",
  "r-chief-content":         "Research, iterate, test — a full content cycle that sounds like you.",
};

function scoreAnswers(answers: Answers): string[] {
  const totals: Record<string, number> = {};
  for (const [qid, val] of Object.entries(answers)) {
    const key = `${qid}:${val}`;
    const weights = WEIGHTS[key] ?? {};
    for (const [rid, w] of Object.entries(weights)) {
      totals[rid] = (totals[rid] ?? 0) + w;
    }
  }
  return Object.entries(totals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([rid]) => rid);
}

function getResultIntro(answers: Answers): string {
  const contextMap: Record<string, string> = {
    solo:      "a solo creator",
    operator:  "an operator",
    team:      "someone working in a team",
    exploring: "someone just getting started",
  };
  const challengeMap: Record<string, string> = {
    "too-many-tools":  "cutting through tool overload",
    "cant-implement":  "moving from reading to building",
    "dont-know-where": "finding a clear entry point",
    "workflows-break": "getting consistent AI outputs",
  };
  const ctx   = contextMap[answers.context ?? ""]   ?? "you";
  const chal  = challengeMap[answers.challenge ?? ""] ?? "your challenge";
  return `Based on your focus on ${chal}, here's where to start as ${ctx}.`;
}

const catStyle: Record<string, { text: string; bg: string; border: string }> = {
  Tools:        { text: "#FF8C42", bg: "rgba(255,140,66,0.1)",    border: "rgba(255,140,66,0.25)" },
  "Skill File": { text: "#9B72FF", bg: "rgba(155,114,255,0.15)", border: "rgba(155,114,255,0.3)" },
  Templates:    { text: "#FFA726", bg: "rgba(255,167,38,0.12)",  border: "rgba(255,167,38,0.3)" },
  Guides:       { text: "#4DD0E1", bg: "rgba(77,208,225,0.1)",   border: "rgba(77,208,225,0.25)" },
  Frameworks:   { text: "#B388FF", bg: "rgba(179,136,255,0.1)",  border: "rgba(179,136,255,0.25)" },
};

export default function Quiz() {
  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [selected, setSelected] = useState<string | null>(null);

  const isDone = step === QUESTIONS.length;
  const question = !isDone ? QUESTIONS[step] : null;
  const isLast   = step === QUESTIONS.length - 1;

  function choose(value: string) {
    setSelected(value);
  }

  function advance() {
    if (!selected || !question) return;
    const next = { ...answers, [question.id]: selected };
    setAnswers(next);
    setSelected(null);
    setStep(step + 1);
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setSelected(null);
  }

  if (isDone) {
    const topIds = scoreAnswers(answers);
    const topResources = topIds
      .map((id) => resources.find((r) => r.id === id))
      .filter((r): r is (typeof resources)[number] => Boolean(r));
    const intro = getResultIntro(answers);

    return (
      <div className="space-y-8">
        <div>
          <p className="text-[#00D9FF] text-xs font-semibold uppercase tracking-widest mb-2">Your results</p>
          <p className="text-[#FFF9F5]/70 text-sm leading-relaxed">{intro}</p>
        </div>

        <div className="space-y-4">
          {topResources.map((r, i) => {
            const cs = catStyle[r.category] ?? { text: "#FFF9F5", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.1)" };
            const isPaid = r.tier === "paid";
            return (
              <div
                key={r.id}
                className="rounded-2xl border bg-[rgba(30,58,95,0.35)] p-5 backdrop-blur-sm"
                style={{ borderColor: isPaid ? "rgba(155,114,255,0.3)" : "rgba(0,217,255,0.2)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold"
                    style={{ borderColor: isPaid ? "rgba(155,114,255,0.4)" : "rgba(0,217,255,0.35)", color: isPaid ? "#9B72FF" : "#00D9FF" }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span
                        className="px-2 py-0.5 rounded-full border text-[10px] font-semibold uppercase tracking-wide"
                        style={{ color: cs.text, background: cs.bg, borderColor: cs.border }}
                      >
                        {r.category}
                      </span>
                      {isPaid ? (
                        <span className="flex items-center gap-1 text-[10px] font-semibold text-[#9B72FF]">
                          <Lock className="w-2.5 h-2.5" /> Premium
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[10px] font-semibold text-[#4DD0E1]">
                          <Unlock className="w-2.5 h-2.5" /> Free
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-[#FFF9F5] mb-1">{r.title}</h3>
                    <p className="text-xs text-[#00D9FF] mb-3 italic">{PITCHES[r.id]}</p>
                    <Link
                      href={`/library/${r.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold transition-opacity hover:opacity-75"
                      style={{ color: isPaid ? "#9B72FF" : "#00D9FF" }}
                    >
                      {isPaid ? "View resource" : "Get this free"} <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/library"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[rgba(0,217,255,0.1)] border border-[rgba(0,217,255,0.3)] text-[#00D9FF] text-sm font-semibold hover:bg-[rgba(0,217,255,0.2)] transition-colors"
          >
            Explore full library <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://cashandcache.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-[rgba(255,255,255,0.1)] text-[#FFF9F5]/60 text-sm font-semibold hover:text-[#FFF9F5] hover:border-[rgba(255,255,255,0.2)] transition-colors"
          >
            Subscribe free
          </a>
          <button
            onClick={reset}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-[#FFF9F5]/40 text-sm hover:text-[#FFF9F5]/70 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Start over
          </button>
        </div>

        {/* Escape hatch */}
        <p className="text-[#FFF9F5]/35 text-xs">
          None of these feel quite right?{" "}
          <a
            href="https://substack.com/chat/new?user=325219597-raghav-mehra&utm_source=direct-message-writer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9B72FF] hover:text-[#B388FF] transition-colors underline underline-offset-2"
          >
            Chat with us directly →
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Progress bar */}
      <div className="flex items-center gap-2">
        {QUESTIONS.map((_, i) => (
          <div
            key={i}
            className="h-1 flex-1 rounded-full transition-colors duration-300"
            style={{ background: i <= step ? "#00D9FF" : "rgba(0,217,255,0.15)" }}
          />
        ))}
      </div>

      <p className="text-[#FFF9F5]/35 text-xs font-medium">
        Question {step + 1} of {QUESTIONS.length}
      </p>

      <h2 className="text-xl font-bold text-[#FFF9F5] leading-snug">
        {question!.question}
      </h2>

      <div className="space-y-3">
        {question!.options.map((opt) => {
          const isChosen = selected === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => choose(opt.value)}
              className="w-full text-left px-5 py-4 rounded-xl border transition-all duration-150 text-sm font-medium"
              style={
                isChosen
                  ? { borderColor: "#00D9FF", background: "rgba(0,217,255,0.1)", color: "#FFF9F5" }
                  : { borderColor: "rgba(255,255,255,0.1)", background: "rgba(30,58,95,0.25)", color: "rgba(255,249,245,0.65)" }
              }
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      <button
        onClick={advance}
        disabled={!selected}
        className="flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm transition-all"
        style={
          selected
            ? { background: "#00D9FF", color: "#0A1628", cursor: "pointer" }
            : { background: "rgba(0,217,255,0.15)", color: "rgba(0,217,255,0.4)", cursor: "not-allowed" }
        }
      >
        {isLast ? "See my starting point" : "Next"} <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
