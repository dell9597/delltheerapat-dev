import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Frontend Architect | React & WordPress Expert",
    template: "%s | Frontend Architect",
  },
  description:
    "Senior Frontend Developer & Architect specializing in React, Next.js, and WordPress. Turning complex Figma designs into high-performance web systems. Based in Thailand.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "WordPress Developer",
    "Frontend Architect",
    "TypeScript",
    "Web Performance",
    "SEO Optimization",
    "นักพัฒนาเว็บ",
    "โปรแกรมเมอร์",
    "พัฒนาเว็บไซต์",
    "React",
    "WordPress",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "th_TH",
    url: "https://yourdomain.com",
    siteName: "Frontend Architect Portfolio",
    title: "Frontend Architect | React & WordPress Expert",
    description:
      "Senior Frontend Developer turning complex designs into high-performance web systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Frontend Architect Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Architect | React & WordPress Expert",
    description:
      "Senior Frontend Developer turning complex designs into high-performance web systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://yourdomain.com",
    languages: {
      "en-US": "https://yourdomain.com",
      "th-TH": "https://yourdomain.com/th",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Your Name",
              jobTitle: "Frontend Architect",
              description:
                "Senior Frontend Developer specializing in React, Next.js, and WordPress architectures.",
              url: "https://yourdomain.com",
              sameAs: [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "WordPress",
                "Web Performance",
                "SEO",
              ],
              offers: {
                "@type": "Offer",
                description:
                  "Frontend development, WordPress development, and web performance consulting",
              },
            }),
          }}
        />
      </head>
      <body className={`${sora.variable} ${jetbrains.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
