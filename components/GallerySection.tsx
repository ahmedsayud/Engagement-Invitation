"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function GallerySection() {
  const images = [
    {
      src: "/images/custom2.jpg",
      alt: "أحمد يقدم الوردة لآلاء - بداية الحكاية",
      title: "بداية أجمل حكاية",
      caption: "",
      type: "portrait",
    },
    {
      src: "/images/custom3.jpg",
      alt: "أحمد وآلاء في الطفولة معاً - رفقاء الدرب",
      title: "رفقاء الدرب والروح",
      caption: "",
      type: "portrait",
    },
    {
      src: "/images/photo1.jpg",
      alt: "خاتم الخطوبة وباقة الزهور الملكية",
      title: "عقد المحبة والنصيب",
      caption: "«واليوم نلبس دبلتنا ونبدأ أجمل فصول العمر 💍🤍»",
      type: "landscape",
    },
  ];

  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    if (activeIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowLeft") setActiveIdx((activeIdx + 1) % images.length);
      if (e.key === "ArrowRight") setActiveIdx((activeIdx - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIdx, images.length]);

  return (
    <section className="scene" id="gallery" aria-label="لحظات لا تُنسى">
      <div className="scene-container">
        <div className="text-center" style={{ marginBottom: "2rem" }}>
          <div className="kicker">ذكريات وحكايات</div>
          <h2
            style={{
              fontFamily: "var(--font-heading, 'El Messiri', serif)",
              color: "var(--text-accent, #f0cb75)",
              fontSize: "clamp(1.85rem, 6.5vw, 2.5rem)",
              lineHeight: "1.6",
              fontWeight: 700,
            }}
          >
            لحظات لا تُنسى
          </h2>
        </div>

        <div className="gallery-stack">
          {images.map((item, index) => (
            <figure
              key={index}
              className={`gallery-item gallery-item--${item.type}`}
              onClick={() => setActiveIdx(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIdx(index);
                }
              }}
            >
              <div className="gallery-par">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 550px"
                  className="ph-img enhanced-photo"
                  priority={index === 0}
                />
                <div className="gallery-card-glow" />
                <div className="card-corner-decor tl" />
                <div className="card-corner-decor tr" />
                <div className="card-corner-decor bl" />
                <div className="card-corner-decor br" />
                <div className="gallery-caption-bar">
                  <span className="gallery-caption-title">{item.title}</span>
                  {item.caption && <p className="gallery-caption-text">{item.caption}</p>}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {activeIdx !== null && (
        <div
          className="lightbox-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveIdx(null);
          }}
        >
          <div className="lightbox-dialog">
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setActiveIdx(null)}
              aria-label="إغلاق"
            >
              ✕
            </button>
            <div className="lightbox-stage">
              <button
                type="button"
                className="lightbox-nav-btn lightbox-nav--prev"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIdx((activeIdx - 1 + images.length) % images.length);
                }}
                aria-label="الصورة السابقة"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
              <div className="lightbox-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images[activeIdx].src}
                  alt={images[activeIdx].alt}
                  className="lightbox-full-img"
                />
                <div className="lightbox-corner-accent tl" />
                <div className="lightbox-corner-accent tr" />
                <div className="lightbox-corner-accent bl" />
                <div className="lightbox-corner-accent br" />
              </div>
              <button
                type="button"
                className="lightbox-nav-btn lightbox-nav--next"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIdx((activeIdx + 1) % images.length);
                }}
                aria-label="الصورة التالية"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            </div>
            <div className="lightbox-details">
              <h3 className="lightbox-title">{images[activeIdx].title}</h3>
              <p className="lightbox-caption">{images[activeIdx].caption}</p>
              <span className="lightbox-counter-pill">
                {activeIdx + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
