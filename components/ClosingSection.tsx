"use client";

import { Heart } from "lucide-react";

export default function ClosingSection() {
  return (
    <section className="scene" id="closing" style={{ paddingBottom: "5rem" }}>
      <div className="scene-container">
        <div
          style={{
            textAlign: "center",
            background: "var(--scrim-strong)",
            border: "1px solid var(--line)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "24px",
            padding: "2.6rem 1.6rem",
            boxShadow: "0 24px 60px -20px var(--shadow-card)",
          }}
        >
          {/* Islamic Du'aa */}
          <div
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-accent)",
              fontSize: "clamp(1.5rem, 6vw, 2.1rem)",
              lineHeight: "2",
              textShadow: "0 0 24px var(--glow-dua)",
              marginBottom: "1.2rem",
            }}
          >
            «اللهم بارك لهما وبارك عليهما واجمع بينهما في خير واجعله عقداً تنعقد به سعادتهما»
          </div>

          <div
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-soft)",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              marginBottom: "1.6rem",
            }}
          >
            دامت دياركم عامرة بالأفراح والمسرات.. والعاقبة عندكم جميعاً إن شاء الله 🤍
          </div>

          <div
            style={{
              fontFamily: "var(--font-display)",
              background: "var(--hero-names)",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              fontSize: "2rem",
              fontWeight: 700,
            }}
          >
            أحمد & آلاء
          </div>

          <div
            style={{
              marginTop: "2rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "var(--text-faint)",
              fontSize: "0.9rem",
            }}
          >
            <span>صُنعت بكل</span>
            <Heart size={15} fill="#e28d9f" color="#e28d9f" />
            <span>لمشاركتكم أسعد اللحظات</span>
          </div>
        </div>
      </div>
    </section>
  );
}
