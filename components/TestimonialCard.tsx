import { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="rounded-2xl border border-[rgba(0,217,255,0.12)] bg-[rgba(30,58,95,0.35)] backdrop-blur-sm p-6 flex flex-col gap-4 min-w-[300px] max-w-sm snap-start">
      {/* Quote mark */}
      <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true">
        <path
          d="M0 18V10.8C0 4.8 3.6 1.2 10.8 0L12 2.4C8.4 3.6 6.6 5.4 6 8.4H10.8V18H0ZM13.2 18V10.8C13.2 4.8 16.8 1.2 24 0L25.2 2.4C21.6 3.6 19.8 5.4 19.2 8.4H24V18H13.2Z"
          fill="#00D9FF"
          fillOpacity="0.4"
        />
      </svg>

      <p className="text-[#FFF9F5]/80 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>

      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
          <span className="text-white text-xs font-bold">{t.initials}</span>
        </div>
        <div>
          <div className="text-[#FFF9F5] text-sm font-semibold">{t.name}</div>
          <div className="text-[#4DD0E1] text-xs">{t.handle} · {t.platform}</div>
        </div>
      </div>
    </div>
  );
}
