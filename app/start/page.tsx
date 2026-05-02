import Quiz from "@/components/Quiz";

export const metadata = {
  title: "Find Your Starting Point — Cash & Cache",
  description: "Answer 4 quick questions and we'll point you to the best resources for where you are right now.",
};

export default function StartPage() {
  return (
    <div className="min-h-screen">
      <div className="relative border-b border-[rgba(0,217,255,0.1)] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#00D9FF] opacity-[0.05] blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-2xl px-6 py-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#00D9FF]" />
            <span className="text-[#00D9FF] text-xs font-semibold uppercase tracking-widest">Find your starting point</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#FFF9F5] mb-3 leading-tight">
            Not sure where to begin?
          </h1>
          <p className="text-[#FFF9F5]/55 text-sm leading-relaxed max-w-md">
            Answer 4 quick questions. We&apos;ll match you to the 3 resources most relevant to where you are right now.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-12">
        <Quiz />
      </div>
    </div>
  );
}
