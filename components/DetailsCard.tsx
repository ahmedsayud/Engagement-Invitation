"use client";

import { useEffect, useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function DetailsCard() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  // Calculate upcoming Thursday date at 7:00 PM
  const [eventDate, setEventDate] = useState<Date>(() => {
    const d = new Date();
    const currentDay = d.getDay(); // 0 is Sunday, 4 is Thursday
    let daysUntilThursday = (4 - currentDay + 7) % 7;
    if (daysUntilThursday === 0 && d.getHours() >= 23) {
      daysUntilThursday = 7;
    }
    const target = new Date(d);
    target.setDate(d.getDate() + (daysUntilThursday === 0 ? 0 : daysUntilThursday));
    target.setHours(19, 0, 0, 0); // 7:00 PM
    return target;
  });

  const [dateDisplay, setDateDisplay] = useState("الخميس القادم - 7:00 مساءً");

  useEffect(() => {
    const formatted = eventDate.toLocaleDateString("ar-EG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setDateDisplay(`${formatted} - الساعة 7:00 مساءً`);

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = eventDate.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isExpired: false,
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [eventDate]);

  // Google Calendar URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "حفل خطوبة أحمد & آلاء 💍"
  )}&dates=${eventDate.toISOString().replace(/-|:|\.\d+/g, "")}/${new Date(
    eventDate.getTime() + 4 * 60 * 60 * 1000
  )
    .toISOString()
    .replace(/-|:|\.\d+/g, "")}&details=${encodeURIComponent(
    "حفل خطوبة أحمد & آلاء المبارك، بحضوركم تكتمل فرحتنا 🤍"
  )}&location=${encodeURIComponent("عند محطة المياه الكبيرة بالسجاعية - أرض السمسار")}`;

  return (
    <section className="scene" id="details">
      <div className="scene-container">
        <div className="signpost">
          {/* Finial Crown */}
          <svg className="signpost-finial" viewBox="0 0 60 46" fill="currentColor">
            <path d="M30 0L38 18L58 10L46 32L54 46H6L14 32L2 10L22 18L30 0Z" />
          </svg>

          <div className="kicker">موعد الحفل المبارك</div>
          <h2 className="signpost-title">يسعدنا حضوركم</h2>

          {/* Ornate separator */}
          <div className="signpost-ornament">
            <svg viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10 H80 M120 10 H200" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
              <polygon points="100,3 107,10 100,17 93,10" fill="currentColor" fillOpacity="0.9" />
              <circle cx="85" cy="10" r="2.5" fill="currentColor" fillOpacity="0.6" />
              <circle cx="115" cy="10" r="2.5" fill="currentColor" fillOpacity="0.6" />
            </svg>
          </div>

          {/* Date & Time Badges */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.9rem",
              margin: "1.2rem 0 1.8rem 0",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "rgba(203, 163, 92, 0.12)",
                border: "1px solid var(--line)",
                padding: "0.65rem 1.4rem",
                borderRadius: "999px",
                color: "var(--text-accent)",
                fontFamily: "var(--font-heading)",
                fontSize: "1.05rem",
                fontWeight: 600,
              }}
            >
              <Calendar size={20} className="text-amber-300" />
              <span>{dateDisplay}</span>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "rgba(203, 163, 92, 0.08)",
                border: "1px solid var(--line)",
                padding: "0.5rem 1.2rem",
                borderRadius: "999px",
                color: "var(--text-soft)",
                fontFamily: "var(--font-heading)",
                fontSize: "0.98rem",
              }}
            >
              <MapPin size={18} className="text-amber-300" />
              <span>الموقع: عند محطة المياه الكبيرة بالسجاعية - أرض السمسار</span>
            </div>
          </div>

          {/* Live Countdown Timer */}
          <div style={{ marginTop: "1.6rem" }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--text-accent-2)",
                fontSize: "0.95rem",
                fontWeight: 600,
                marginBottom: "0.4rem",
              }}
            >
              الوقت المتبقي على الفرحة ⏳
            </div>

            {timeLeft.isExpired ? (
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text-accent)",
                  fontSize: "1.8rem",
                  padding: "1rem",
                }}
              >
                🎉 الحفل الآن! نتشرف بحضوركم 🎉
              </div>
            ) : (
              <div className="count-grid">
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
            )}
          </div>

          {/* Add to Calendar Button */}
          <div style={{ marginTop: "2rem" }}>
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn gold-btn--ghost"
              id="add-calendar-btn"
            >
              <Calendar size={18} />
              <span>إضافة إلى تقويم Google 📅</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
