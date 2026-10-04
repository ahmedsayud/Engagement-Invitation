"use client";

import Image from "next/image";

export default function GallerySection() {
  const images = [
    {
      src: "/images/photo1.jpg",
      alt: "خاتم الخطوبة وباقة الزهور الملكية",
      caption: "«عقد المحبة وبداية أجمل حكاية 💍»",
    },
    {
      src: "/images/photo2.jpg",
      alt: "أجواء الاحتفال والأضواء الرومانسية",
      caption: "«ليلة من ليالي العمر تزدان بلقياكم ✨»",
    },
  ];

  return (
    <section className="scene" id="gallery">
      <div className="scene-container">
        <div className="text-center" style={{ marginBottom: "1.4rem" }}>
          <div className="kicker">لحظات لا تُنسى</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-accent)",
              fontSize: "clamp(1.75rem, 6.5vw, 2.3rem)",
              lineHeight: "1.6",
            }}
          >
            فرحة الخطوبة
          </h2>
        </div>

        <div className="gallery-stack">
          {images.map((item, index) => (
            <div key={index} className="gallery-item">
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={600}
                priority={index === 0}
              />
              <div className="gallery-overlay" />
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  right: "1.2rem",
                  left: "1.2rem",
                  zIndex: 2,
                  fontFamily: "var(--font-heading)",
                  color: "var(--gold-bright)",
                  fontSize: "1.05rem",
                  textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                  textAlign: "center",
                }}
              >
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
