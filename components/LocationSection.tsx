"use client";

import { MapPin, ExternalLink, Navigation } from "lucide-react";

export default function LocationSection() {
  const mapUrl = "https://maps.app.goo.gl/zMow3jPNzvKnBXFg6";

  return (
    <section className="scene" id="location">
      <div className="scene-container">
        <div className="signpost">
          <div className="kicker">موقع الحفل</div>
          <h2 className="signpost-title">مكان اللقاء</h2>

          {/* Ornate separator */}
          <div className="signpost-ornament">
            <svg viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10 H80 M120 10 H200" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
              <polygon points="100,3 107,10 100,17 93,10" fill="currentColor" fillOpacity="0.9" />
            </svg>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              color: "var(--text-accent)",
              fontFamily: "var(--font-heading)",
              fontSize: "1.3rem",
              fontWeight: 700,
              marginBottom: "1.4rem",
            }}
          >
            <MapPin size={24} className="text-amber-300" />
            <span>عند محطة المياه الكبيرة بالسجاعية - أرض السمسار</span>
          </div>

          {/* Map Frame Card */}
          <div className="map-frame" style={{ marginBottom: "1.6rem" }}>
            <iframe
              title="موقع حفل الخطوبة"
              src="https://maps.google.com/maps?q=30.0444,31.2357&z=15&output=embed"
              loading="lazy"
              allowFullScreen
            />
            {/* Overlay button for instant tap */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(18, 10, 36, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  background: "rgba(42, 14, 54, 0.85)",
                  border: "1px solid var(--line)",
                  padding: "0.8rem 1.4rem",
                  borderRadius: "999px",
                  color: "var(--text-accent)",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1rem",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Navigation size={18} className="text-amber-300" />
                <span>اضغط لفتح الخريطة والملاحة</span>
              </div>
            </div>
          </div>

          {/* Open in Google Maps Direct Action Button */}
          <div>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn"
              id="open-map-btn"
            >
              <ExternalLink size={20} />
              <span>فتح الموقع في خرائط Google 🗺️</span>
            </a>
          </div>

          <p
            style={{
              color: "var(--text-soft)",
              fontSize: "0.95rem",
              marginTop: "1.2rem",
            }}
          >
            نسعد بتشريفكم وحضوركم لمشاركتنا فرحة العمر 🤍
          </p>
        </div>
      </div>
    </section>
  );
}
