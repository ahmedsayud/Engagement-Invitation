"use client";

import { MessageCircle, Sparkles, Heart } from "lucide-react";
import confetti from "canvas-confetti";

export default function RSVPSection() {
  const whatsappMessage = encodeURIComponent(
    "ألف مبروك لأحمد & آلاء بمناسبة الخطوبة المباركة! 💍🤍 يسعدني ويشرفني الحضور ومشاركتكم الفرحة إن شاء الله ✨"
  );
  const whatsappUrl = `https://wa.me/201011541853?text=${whatsappMessage}`;

  const triggerConfetti = () => {
    // Multi-stage fireworks explosion
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ["#f1dfa6", "#cba35c", "#e28d9f", "#ffffff", "#ffd700"],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <section className="scene" id="rsvp">
      <div className="scene-container">
        <div className="signpost">
          <div className="kicker">تأكيد الحضور والمباركة</div>
          <h2 className="signpost-title">شاركونا الفرحة</h2>

          {/* Ornate separator */}
          <div className="signpost-ornament">
            <svg viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10 H80 M120 10 H200" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
              <polygon points="100,3 107,10 100,17 93,10" fill="currentColor" fillOpacity="0.9" />
            </svg>
          </div>

          <p
            style={{
              color: "var(--text-soft)",
              fontSize: "1.08rem",
              lineHeight: "2",
              marginBottom: "1.8rem",
            }}
          >
            وجودكم يضفي على ليلتنا بهجة وسروراً..
            <br />
            يسعدنا تأكيد حضوركم وإرسال تهنئتكم الكريمة للعروسين 💍
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn"
              id="whatsapp-rsvp-btn"
              style={{
                background: "linear-gradient(160deg, #25D366, #128C7E)",
                color: "#ffffff",
                borderColor: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <MessageCircle size={22} />
              <span>إرسال تهنئة وتأكيد الحضور عبر واتساب 💬</span>
            </a>

            {/* Confetti Explosion Button */}
            <button
              onClick={triggerConfetti}
              className="gold-btn gold-btn--ghost"
              id="confetti-btn"
            >
              <Sparkles size={20} className="text-amber-300" />
              <span>انثر زينة الفرح والمباركات 🎉✨</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
