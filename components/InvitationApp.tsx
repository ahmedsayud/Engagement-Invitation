"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";

// Sparkle positions for the gate screen
const sparks = [
  [8, 16, 0],
  [22, 6, 4],
  [78, 9, 2],
  [90, 18, 6],
  [6, 55, 3],
  [93, 52, 1],
  [14, 82, 5],
  [85, 84, 2],
  [50, 4, 7],
  [38, 92, 4],
  [65, 88, 1],
  [30, 40, 6],
];

// Ornate Islamic/Arabic Divider Component
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 26" fill="none" className={`ornament ${className}`} aria-hidden="true">
      <path d="M110 3 L118 13 L110 23 L102 13 Z" fill="currentColor" opacity="0.9" />
      <path d="M110 7.5 L114 13 L110 18.5 L106 13 Z" fill="var(--ornament-notch)" opacity="0.55" />
      <path d="M96 13 C82 3, 66 23, 50 13 S 22 13, 8 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M124 13 C138 3, 154 23, 170 13 S 198 13, 212 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="5" cy="13" r="2.2" fill="currentColor" />
      <circle cx="215" cy="13" r="2.2" fill="currentColor" />
      <circle cx="50" cy="13" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="170" cy="13" r="1.5" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

// Gate Corner Border
export function GateCorner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  return (
    <svg viewBox="0 0 100 100" className={`gate-corner gate-corner--${pos}`} aria-hidden="true">
      <path d="M 6 94 C 12 58, 40 30, 94 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 18 78 C 24 60, 40 46, 60 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <path d="M 94 22 q -8 -6 -18 -4 q 8 6 18 4 Z" fill="currentColor" opacity="0.9" />
      <circle cx="6" cy="94" r="2.6" fill="currentColor" />
      <circle cx="26" cy="56" r="1.6" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

// Royal Wax Seal SVG
export function WaxSeal() {
  const outerPath = useMemo(() => {
    const points: [number, number][] = [];
    for (let i = 0; i < 28; i++) {
      const angle = (i / 28) * Math.PI * 2;
      const r = 90 + (i % 2 === 0 ? 4 : -3.5);
      points.push([100 + Math.cos(angle) * r, 100 + Math.sin(angle) * r]);
    }
    let d = `M ${points[0][0]} ${points[0][1]}`;
    for (let i = 1; i <= 28; i++) {
      const [nx, ny] = points[i % 28];
      const [px, py] = points[(i - 1) % 28];
      d += ` Q ${(px + nx) / 2 + (i % 2 ? 3 : -3)} ${(py + ny) / 2} ${nx} ${ny}`;
    }
    return `${d} Z`;
  }, []);

  const dots = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => {
        const angle = (i / 26) * Math.PI * 2;
        return [100 + Math.cos(angle) * 79, 100 + Math.sin(angle) * 79];
      }),
    []
  );

  return (
    <svg viewBox="0 0 200 200" className="seal-svg" aria-hidden="true">
      <defs>
        <radialGradient id="wax" cx="0.38" cy="0.3" r="0.9">
          <stop offset="0" stopColor="#f2dda6" />
          <stop offset="0.45" stopColor="#d3ab60" />
          <stop offset="0.8" stopColor="#a9803c" />
          <stop offset="1" stopColor="#8a6529" />
        </radialGradient>
        <radialGradient id="waxIn" cx="0.5" cy="0.42" r="0.75">
          <stop offset="0" stopColor="#e3c07b" />
          <stop offset="1" stopColor="#b48c44" />
        </radialGradient>
        <filter id="sealSoft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.6" />
        </filter>
      </defs>
      <path d={outerPath} fill="url(#wax)" />
      <path d={outerPath} fill="none" stroke="rgba(90,60,18,0.5)" strokeWidth="1.4" />
      <path d="M 38 62 C 52 34, 88 20, 122 26" fill="none" stroke="rgba(255,246,220,0.65)" strokeWidth="7" strokeLinecap="round" filter="url(#sealSoft)" />
      <circle cx="100" cy="100" r="79" fill="url(#waxIn)" />
      <circle cx="100" cy="100" r="79" fill="none" stroke="#6e4e1f" strokeWidth="1.8" />
      <circle cx="100" cy="100" r="69" fill="none" stroke="rgba(90,60,18,0.7)" strokeWidth="1.2" strokeDasharray="3 3.2" />
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.4" fill="#6e4e1f" />
      ))}
      <g transform="translate(70 54)" fill="#4d320d">
        <path d="M8 34 L4 12 L18 22 L30 6 L42 22 L56 12 L52 34 Z" />
        <rect x="8" y="37" width="44" height="5" rx="2.5" />
        <circle cx="30" cy="4" r="2.4" />
      </g>
      <text
        x="100"
        y="148"
        textAnchor="middle"
        fill="#3b2408"
        fontSize="30"
        fontFamily="var(--font-display)"
        fontWeight="700"
        style={{ letterSpacing: "1px" }}
      >
        أ & آ
      </text>
    </svg>
  );
}

// Signpost Wrapper with Finial & Scroll Reveal
export function Signpost({ kicker, title, children, className = "" }: { kicker?: string; title: string; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article ref={ref} className={`signpost reveal ${className}`}>
      <svg viewBox="0 0 58 44" fill="none" className="signpost-finial" aria-hidden="true">
        <line x1="29" y1="30" x2="29" y2="44" stroke="currentColor" strokeWidth="2" />
        <path d="M 17 26 L 13 10 L 22 17 L 29 5 L 36 17 L 45 10 L 41 26 Z" fill="currentColor" />
        <circle cx="29" cy="4" r="2.8" fill="currentColor" />
      </svg>
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 className="signpost-title">{title}</h2>
      <Ornament className="signpost-ornament" />
      {children}
    </article>
  );
}

// Main App Component
export default function InvitationApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isGateRemoved, setIsGateRemoved] = useState(false);
  const [targetDate, setTargetDate] = useState<Date>(() => {
    const d = new Date();
    const currentDay = d.getDay(); // 0 Sunday, 4 Thursday
    let daysUntilThursday = (4 - currentDay + 7) % 7;
    if (daysUntilThursday === 0 && d.getHours() >= 23) {
      daysUntilThursday = 7;
    }
    const target = new Date(d);
    target.setDate(d.getDate() + (daysUntilThursday === 0 ? 0 : daysUntilThursday));
    target.setHours(19, 0, 0, 0); // 7:00 PM
    return target;
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  });

  useEffect(() => {
    const calc = () => {
      const diff = targetDate.getTime() - new Date().getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
          isOver: false,
        });
      }
    };
    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  // Observer for reveal animations on general sections
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, [isGateRemoved]);

  const handleOpenEnvelope = () => {
    if (isOpen) return;
    setIsOpen(true);

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#f1dfa6", "#cba35c", "#e28d9f", "#ffffff"],
    });

    setTimeout(() => {
      setIsGateRemoved(true);
    }, 2100);
  };

  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
    "ألف مبروك لأحمد & آلاء بمناسبة الخطوبة المباركة! 💍🤍 يسعدني ويشرفني الحضور ومشاركتكم الفرحة إن شاء الله ✨"
  )}`;

  const mapsUrl = "https://maps.app.goo.gl/zMow3jPNzvKnBXFg6";

  const dateFormatted = targetDate.toLocaleDateString("ar-EG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="relative min-h-screen">
      {/* 3D Gate Screen */}
      {!isGateRemoved && (
        <div className={`gate ${isOpen ? "is-opening" : ""}`}>
          <div className="gate-sparks" aria-hidden="true">
            {sparks.map(([x, y, d], i) => (
              <i key={i} style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${d * 0.4}s` }} />
            ))}
          </div>

          <GateCorner pos="tl" />
          <GateCorner pos="tr" />
          <GateCorner pos="bl" />
          <GateCorner pos="br" />

          <p className="gate-bism">بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</p>
          <p className="gate-kicker">دعوة حفل خطوبة</p>

          <div
            className="envelope"
            role="button"
            tabIndex={0}
            aria-label="افتح الدعوة"
            onClick={handleOpenEnvelope}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleOpenEnvelope()}
          >
            <div className="env-back" />
            <div className="env-letter">
              <svg viewBox="0 0 60 46" className="env-letter-crown" aria-hidden="true" fill="currentColor">
                <path d="M8 34 L4 12 L18 22 L30 6 L42 22 L56 12 L52 34 Z" />
                <rect x="8" y="37" width="44" height="5" rx="2.5" />
              </svg>
              <p className="env-letter-names">أحمد & آلاء</p>
              <p className="env-letter-line">بحضوركم تكتمل فرحتنا 🤍</p>
            </div>
            <div className="env-pocket" />
            <div className="env-flap" />
            <div className="env-seal">
              <WaxSeal />
            </div>
          </div>

          <p className="gate-names">أحمد & آلاء</p>
          <Ornament className="gate-ornament" />
          <p className="gate-hint">اضغط على الظرف عشان تفتح ✉️</p>
        </div>
      )}

      {/* Main Scenes */}
      <main className="scenes">
        {/* 1. Hero Section */}
        <section className="scene scene-hero" aria-label="البداية">
          <div className="hero-content reveal">
            <p className="hero-bism">بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</p>
            <h1 className="hero-names">
              <span>أحمد</span>
              <svg viewBox="0 0 32 28" fill="currentColor" className="hero-heart" aria-hidden="true">
                <path d="M16 28 C16 28, 2 19.5, 2 9.5 A 7.5 7.5 0 0 1 16 5.2 A 7.5 7.5 0 0 1 30 9.5 C 30 19.5, 16 28, 16 28 Z" />
              </svg>
              <span>آلاء</span>
            </h1>
            <Ornament className="hero-ornament" />
            <a href="#invitation" className="hero-scroll">
              <span>انزل تبدأ الرحلة</span>
              <svg viewBox="0 0 22 26" fill="none" className="hero-scroll-arrow" aria-hidden="true">
                <path d="M11 2 V22 M4 15 L11 22 L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>

        {/* 2. Invitation Verse Section */}
        <section id="invitation" className="scene" aria-label="الدعوة">
          <Signpost kicker="الدعوة" title="حفل خطوبة مبارك">
            <p className="invite-verse">
              «وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً»
            </p>
            <p className="signpost-body">
              بكل الحب والسعادة
              <br />
              نتشرف بدعوتكم لمشاركتنا فرحة حفل خطوبتنا المبارك،
              <br />
              وحضوركم يسعدنا ويكمل فرحتنا 🤍
            </p>
            <p className="invite-names">أحمد & آلاء</p>
          </Signpost>
        </section>

        {/* 3. Countdown Section */}
        <section id="countdown" className="scene" aria-label="العداد التنازلي">
          <Signpost kicker="العدّاد" title="باقي على الفرح">
            {timeLeft.isOver ? (
              <p className="count-over">🎉 اليوم يوم الفرح نتشرف بحضوركم 🎉</p>
            ) : (
              <>
                <div className="count-grid" role="timer">
                  <div className="count-cell">
                    <span className="count-num">{timeLeft.seconds}</span>
                    <span className="count-label">ثانية</span>
                  </div>
                  <div className="count-cell">
                    <span className="count-num">{timeLeft.minutes}</span>
                    <span className="count-label">دقيقة</span>
                  </div>
                  <div className="count-cell">
                    <span className="count-num">{timeLeft.hours}</span>
                    <span className="count-label">ساعة</span>
                  </div>
                  <div className="count-cell">
                    <span className="count-num">{timeLeft.days}</span>
                    <span className="count-label">يوم</span>
                  </div>
                </div>
                <p className="count-caption">كل ثانية بتقرّبنا لليلة العمر ✨</p>
              </>
            )}
          </Signpost>
        </section>

        {/* 4. Date & Calendar Section */}
        <section id="date" className="scene" aria-label="الموعد">
          <Signpost kicker="الموعد" title="احفظ التاريخ">
            <div className="date-lines">
              <p className="date-main">{dateFormatted}</p>
              <p className="date-time">الساعة 7:00 مساءً</p>
              <p className="date-hijri">المكان: أمام البيت 🤍</p>
            </div>
            <a
              href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                "حفل خطوبة أحمد & آلاء 💍"
              )}&dates=${targetDate.toISOString().replace(/-|:|\.\d+/g, "")}/${new Date(
                targetDate.getTime() + 4 * 60 * 60 * 1000
              )
                .toISOString()
                .replace(/-|:|\.\d+/g, "")}&details=${encodeURIComponent(
                "حفل خطوبة أحمد & آلاء المبارك، بحضوركم تكتمل فرحتنا 🤍"
              )}&location=${encodeURIComponent("أمام البيت")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
                <path d="M3 10 h18 M8 3 v4 M16 3 v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M9 15.5 l2 2 l4 -4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>أضِف الموعد لتقويمك 📅</span>
            </a>
          </Signpost>
        </section>

        {/* 5. Photos Gallery */}
        <section id="gallery" className="scene" aria-label="لحظات مميزة">
          <div className="scene-container">
            <div className="gallery-head">
              <p className="kicker">اللقطات</p>
              <h2 className="gallery-title">لحظات لا تُنسى</h2>
              <Ornament className="signpost-ornament" />
            </div>
            <div className="gallery-stack">
              <figure className="gallery-item reveal">
                <div className="gallery-par">
                  <Image src="/images/photo1.jpg" alt="خاتم الخطوبة وباقة الورد" fill className="ph-img" priority />
                </div>
              </figure>
              <figure className="gallery-item reveal">
                <div className="gallery-par">
                  <Image src="/images/photo2.jpg" alt="أجواء الاحتفال الفاخرة" fill className="ph-img" />
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* 6. Arrival & Location */}
        <section id="arrival" className="scene scene-arrival" aria-label="الوصول للمكان">
          <div className="arrival-content reveal">
            <p className="kicker">الوصول</p>
            <h2 className="arrival-title">🤍 مستنيينكم تنورونا</h2>
            <Ornament className="signpost-ornament" />
            <p className="arrival-sub">
              المكان: <strong>أمام البيت</strong>
              <br />
              البوابة مفتوحة لاستقبالكم ومشاركتنا أجمل الأوقات
            </p>

            <div className="map-wrap" style={{ width: "100%", marginTop: "1.2rem" }}>
              <div className="map-frame">
                <iframe
                  title="موقع حفل الخطوبة"
                  src="https://maps.google.com/maps?q=30.0444,31.2357&z=15&output=embed"
                  loading="lazy"
                />
              </div>

              <div className="map-actions">
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="gold-btn">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="9" r="2.5" fill="currentColor" />
                  </svg>
                  <span>افتح الموقع على خرائط Google 🗺️</span>
                </a>
                <p className="map-note">لو توهت دوس على الزرار والخريطة هتوصلك لحد عندنا</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. RSVP WhatsApp */}
        <section id="rsvp" className="scene" aria-label="تأكيد الحضور">
          <Signpost kicker="تأكيد الحضور" title="شرّفنا بحضورك">
            <p className="rsvp-text">
              وجودك معانا في اليوم ده يعني لينا الدنيا كلها،
              <br />
              دوسة زرار واحدة وتبقى معانا وتبعث تهنئتك الكريمة 🤍
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="gold-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-2.9c-.3-.4 0-.6.1-.8l.4-.5c.1-.2.1-.3.2-.5s0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4.1.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.6-.3Z" />
                </svg>
                <span>أكّد حضورك وابعت تهنئة على واتساب 💬</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  confetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { y: 0.7 },
                    colors: ["#f1dfa6", "#cba35c", "#e28d9f", "#ffd700", "#ffffff"],
                  });
                }}
                className="gold-btn gold-btn--ghost"
              >
                <span>انثر زينة الفرح والمباركات 🎉✨</span>
              </button>
            </div>
          </Signpost>
        </section>

        {/* 8. Closing Section */}
        <section id="closing" className="scene scene-closing" aria-label="الختام">
          <div className="closing-content reveal">
            <Ornament className="signpost-ornament" />
            <p className="closing-dua">
              بارك الله لهما وبارك عليهما
              <br />
              وجمع بينهما في خير
            </p>
            <p className="closing-thanks">شكرًا إنكم شاركتونا الرحلة… مستنيينكم يوم الفرح 🤍</p>
            <Ornament className="signpost-ornament" />
            <p className="closing-footer">أمام البيت · دُعيتم بكل الحب 🤍</p>
          </div>
        </section>
      </main>
    </div>
  );
}
