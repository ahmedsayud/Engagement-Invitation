"use client";

import { useState } from "react";
import confetti from "canvas-confetti";

interface GateEnvelopeProps {
  onOpen: () => void;
}

export default function GateEnvelope({ onOpen }: GateEnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleOpen = () => {
    if (isOpening || isDone) return;
    setIsOpening(true);

    // Launch celebratory confetti burst
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#f1dfa6", "#cba35c", "#e28d9f", "#ffffff"],
    });

    onOpen();

    setTimeout(() => {
      setIsDone(true);
    }, 2200);
  };

  if (isDone) return null;

  return (
    <div className={`gate ${isOpening ? "is-opening" : ""}`} id="gate-screen">
      {/* Background sparks */}
      <div className="gate-sparks" aria-hidden="true">
        <i style={{ top: "15%", left: "20%", animationDelay: "0.2s" }} />
        <i style={{ top: "25%", right: "18%", animationDelay: "1.2s" }} />
        <i style={{ top: "70%", left: "15%", animationDelay: "0.8s" }} />
        <i style={{ top: "80%", right: "22%", animationDelay: "1.8s" }} />
        <i style={{ top: "45%", left: "85%", animationDelay: "0.5s" }} />
        <i style={{ top: "55%", left: "10%", animationDelay: "1.5s" }} />
      </div>

      {/* Ornate corner borders */}
      <svg className="gate-corner gate-corner--tl" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5 H45 C65 5 80 20 80 40 V50 C80 70 65 85 45 85 H5 V5Z" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
        <path d="M12 12 H40 C55 12 68 25 68 40 V45 C68 60 55 73 40 73 H12 V12Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="25" cy="25" r="3" fill="currentColor" fillOpacity="0.8" />
      </svg>
      <svg className="gate-corner gate-corner--tr" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5 H45 C65 5 80 20 80 40 V50 C80 70 65 85 45 85 H5 V5Z" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
        <path d="M12 12 H40 C55 12 68 25 68 40 V45 C68 60 55 73 40 73 H12 V12Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="25" cy="25" r="3" fill="currentColor" fillOpacity="0.8" />
      </svg>
      <svg className="gate-corner gate-corner--bl" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5 H45 C65 5 80 20 80 40 V50 C80 70 65 85 45 85 H5 V5Z" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
        <path d="M12 12 H40 C55 12 68 25 68 40 V45 C68 60 55 73 40 73 H12 V12Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="25" cy="25" r="3" fill="currentColor" fillOpacity="0.8" />
      </svg>
      <svg className="gate-corner gate-corner--br" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5 H45 C65 5 80 20 80 40 V50 C80 70 65 85 45 85 H5 V5Z" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
        <path d="M12 12 H40 C55 12 68 25 68 40 V45 C68 60 55 73 40 73 H12 V12Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="25" cy="25" r="3" fill="currentColor" fillOpacity="0.8" />
      </svg>

      <div className="hero-bism">بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</div>
      <div className="kicker" style={{ color: "var(--gold-bright)", marginBottom: "1.2rem" }}>
        دعوة حفل خطوبة
      </div>

      {/* 3D Envelope */}
      <div
        className="envelope"
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        aria-label="افتح دعوة الخطوبة"
        id="envelope-btn"
      >
        <div className="env-back" />

        {/* Letter inside */}
        <div className="env-letter">
          <svg className="env-letter-crown" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
          </svg>
          <div className="env-letter-names">أحمد & آلاء</div>
          <div className="env-letter-line">دعوة خاصة لحضور حفل الخطوبة 💍</div>
        </div>

        {/* Envelope Pocket */}
        <div className="env-pocket" />

        {/* Envelope Flap */}
        <div className="env-flap" />

        {/* Wax Seal Monogram */}
        <div className="env-seal">
          <svg className="seal-svg" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="sealGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f7e4b5" />
                <stop offset="45%" stopColor="#cba35c" />
                <stop offset="85%" stopColor="#8d682e" />
                <stop offset="100%" stopColor="#5a3e14" />
              </radialGradient>
              <filter id="sealShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.5" />
              </filter>
            </defs>
            <circle cx="70" cy="70" r="60" fill="url(#sealGrad)" filter="url(#sealShadow)" />
            <circle cx="70" cy="70" r="52" stroke="#fceecb" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
            <circle cx="70" cy="70" r="48" stroke="#8d682e" strokeWidth="1" fill="none" />
            {/* Arabic Monogram: أ & أ */}
            <text
              x="70"
              y="78"
              textAnchor="middle"
              fill="#2e1d08"
              fontSize="26"
              fontFamily="var(--font-display)"
              fontWeight="700"
              style={{ filter: "drop-shadow(0 1px 1px rgba(255,255,255,0.4))" }}
            >
              أ & آ
            </text>
          </svg>
        </div>
      </div>

      <div className="gate-names">أحمد & آلاء</div>
      <div className="gate-hint">اضغط لفتح الدعوة ✉️✨</div>
    </div>
  );
}
