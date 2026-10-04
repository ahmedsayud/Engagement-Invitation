"use client";

import { Sparkles, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="scene scene-hero" id="hero">
      <div className="scene-container text-center">
        <div className="hero-bism">بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</div>

        <div className="kicker">دعوة حفل خطوبة مبارك</div>

        <p
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--text-accent)",
            fontSize: "clamp(1.05rem, 3.8vw, 1.25rem)",
            lineHeight: "2.1",
            maxWidth: "520px",
            margin: "0 auto 1.4rem auto",
            opacity: 0.95,
          }}
        >
          «وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً»
        </p>

        {/* Hero Names */}
        <h1 className="hero-names">
          <span>أحمد</span>
          <div className="hero-ring-badge" title="خاتم الخطوبة 💍">
            <svg
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2l3 3-3 3-3-3 3-3z" fill="currentColor" fillOpacity="0.4" />
              <circle cx="12" cy="14" r="7" />
            </svg>
          </div>
          <span>آلاء</span>
        </h1>

        <div
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--text-soft)",
            fontSize: "1.15rem",
            marginTop: "1.2rem",
            lineHeight: "1.8",
          }}
        >
          يتشرفان بدعوتكم لمشاركتهما أجمل لحظات العمر والفرحة
          <br />
          <span style={{ color: "var(--text-accent)", fontWeight: 600 }}>
            بحضوركم تكتمل فرحتنا 🤍✨
          </span>
        </div>

        <a href="#details" className="hero-scroll" aria-label="التمرير لتفاصيل الحفل">
          <span>تفاصيل الحفل</span>
          <ChevronDown size={22} className="hero-scroll-arrow" />
        </a>
      </div>
    </section>
  );
}
