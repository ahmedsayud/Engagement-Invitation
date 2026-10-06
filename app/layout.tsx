import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3B0A22",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmed-alaa-engagement.vercel.app"),
  title: "أحمد & آلاء | دعوة خطوبة 💍✨",
  description: "بحضوركم تكتمل فرحتنا 🤍",
  openGraph: {
    title: "أحمد & آلاء | دعوة خطوبة 💍✨",
    description: "بحضوركم تكتمل فرحتنا 🤍",
    url: "https://ahmed-alaa-engagement.vercel.app",
    siteName: "دعوة خطوبة أحمد & آلاء",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/photo1.jpg",
        width: 1200,
        height: 630,
        alt: "دعوة خطوبة أحمد & آلاء",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "أحمد & آلاء | دعوة خطوبة 💍✨",
    description: "بحضوركم تكتمل فرحتنا 🤍",
    images: ["/images/photo1.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=El+Messiri:wght@400;500;600;700&family=Tajawal:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href={`/assets/index-YZphGmre.css?v=${Date.now()}`} />
        <style>{`
          /* ==========================================================================
             CRITICAL ULTRA-CONTRAST & HIGH VISIBILITY STYLING
             ========================================================================== */
          .map-note {
            color: #fff8eb !important;
            font-family: var(--font-heading, "El Messiri", serif) !important;
            font-size: 1.15rem !important;
            font-weight: 700 !important;
            background: linear-gradient(135deg, rgba(42, 14, 54, 0.95), rgba(20, 6, 26, 0.98)) !important;
            border: 1.5px solid #d4af37 !important;
            padding: 0.8rem 1.8rem !important;
            border-radius: 999px !important;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.9), 0 0 25px rgba(212, 175, 55, 0.4) !important;
            margin-top: 1.2rem !important;
            display: inline-block !important;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.95) !important;
            letter-spacing: 0.3px !important;
            position: relative !important;
            z-index: 10 !important;
          }

          .scene-closing .closing-content {
            background: linear-gradient(180deg, rgba(42, 14, 54, 0.96), rgba(18, 5, 22, 0.98)) !important;
            border: 2px solid rgba(212, 175, 55, 0.8) !important;
            box-shadow: 0 25px 80px rgba(0, 0, 0, 0.95), 0 0 45px rgba(212, 175, 55, 0.35) !important;
            border-radius: 26px !important;
            padding: 2.8rem 2rem !important;
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
          }

          .closing-dua {
            color: #fde8a0 !important;
            text-shadow: 0 0 25px rgba(253, 232, 160, 0.8), 0 2px 10px rgba(0, 0, 0, 0.95) !important;
            font-size: clamp(1.8rem, 6.5vw, 2.5rem) !important;
            font-weight: 700 !important;
            line-height: 1.8 !important;
          }

          .closing-thanks {
            color: #ffffff !important;
            font-size: 1.3rem !important;
            font-weight: 700 !important;
            text-shadow: 0 2px 12px rgba(0, 0, 0, 0.95) !important;
            margin: 1rem 0 !important;
            line-height: 1.8 !important;
          }

          .closing-footer {
            color: #fff4db !important;
            font-size: 1.15rem !important;
            font-weight: 700 !important;
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.25), rgba(42, 14, 54, 0.8)) !important;
            border: 1.5px solid #d4af37 !important;
            padding: 0.65rem 1.6rem !important;
            border-radius: 999px !important;
            display: inline-block !important;
            margin-top: 1.8rem !important;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.95) !important;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.7) !important;
          }

          .scene-arrival .arrival-content {
            background: linear-gradient(180deg, rgba(42, 14, 54, 0.96), rgba(18, 5, 22, 0.98)) !important;
            border: 2px solid rgba(212, 175, 55, 0.8) !important;
            box-shadow: 0 25px 80px rgba(0, 0, 0, 0.95), 0 0 45px rgba(212, 175, 55, 0.35) !important;
            border-radius: 26px !important;
            padding: 2.6rem 2rem !important;
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
          }

          .arrival-title {
            color: #fde8a0 !important;
            text-shadow: 0 0 28px rgba(253, 232, 160, 0.8), 0 2px 10px rgba(0, 0, 0, 0.95) !important;
            font-size: clamp(1.8rem, 6.5vw, 2.5rem) !important;
            font-weight: 700 !important;
          }

          .arrival-sub {
            color: #ffffff !important;
            font-size: 1.3rem !important;
            font-weight: 700 !important;
            line-height: 1.9 !important;
            text-shadow: 0 2px 12px rgba(0, 0, 0, 0.95) !important;
          }

          .rsvp-text {
            color: #fff6e4 !important;
            font-size: 1.25rem !important;
            font-weight: 600 !important;
            line-height: 2 !important;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.95) !important;
          }

          .signpost-body {
            color: #fff6e4 !important;
            font-size: 1.15rem !important;
            font-weight: 600 !important;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.85) !important;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
