import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3B0A22",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmed-alaa-engagement.vercel.app"),
  title: "أحمد & آلاء | دعوة خطوبة 💍✨",
  description: "يسعدنا ويشرفنا حضوركم لمشاركتنا فرحة حفل خطوبتنا المبارك، بحضوركم تكتمل فرحتنا 🤍",
  openGraph: {
    title: "أحمد & آلاء | دعوة خطوبة 💍✨",
    description: "يسعدنا ويشرفنا حضوركم لمشاركتنا فرحة حفل خطوبتنا المبارك، بحضوركم تكتمل فرحتنا 🤍",
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
    description: "يسعدنا ويشرفنا حضوركم لمشاركتنا فرحة حفل خطوبتنا المبارك، بحضوركم تكتمل فرحتنا 🤍",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
