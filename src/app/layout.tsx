import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { BackToTop } from "@/components/BackToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Toaster } from "@/components/ui/sonner";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  verification: {
    google: "LIJ6ATSYrHNqgHoDDQPOJEFYzZ2NU4IB4n3egAlq1Ds",
  },
  title: {
    default: `${SITE_CONFIG.name} - Programming Tutor in Jaipur | Web Dev & DSA`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Learn programming, web development, DSA and more with Vishal Nama, an experienced tutor in Jaipur, Rajasthan. Online & offline sessions available across India. Book a free trial today.",
  keywords: [
    "programming tutor Jaipur",
    "web development classes Jaipur",
    "DSA tutor Rajasthan",
    "Python tutor Jaipur",
    "online coding classes India",
    "React Next.js tutor",
    "learn programming Jaipur",
    "coding mentor India",
    "Vishal Nama tutor",
    "JavaScript tutor Jaipur",
    "full stack web development Jaipur",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.siteUrl,
    siteName: `${SITE_CONFIG.name} - Programming Tutor`,
    title: `${SITE_CONFIG.name} - Programming Tutor in Jaipur | Web Dev & DSA`,
    description:
      "Learn programming, web development, DSA and more with Vishal Nama. Online & offline in Jaipur, Rajasthan. Book a free trial session today.",
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630, alt: `${SITE_CONFIG.name} - Programming Tutor` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} - Programming Tutor in Jaipur`,
    description: "Learn programming, web development & DSA with Vishal Nama. Online & offline in Jaipur.",
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: SITE_CONFIG.siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_CONFIG.siteUrl}/#person`,
      name: SITE_CONFIG.name,
      jobTitle: "Programming Tutor",
      url: SITE_CONFIG.siteUrl,
      email: SITE_CONFIG.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
      sameAs: [SITE_CONFIG.github, SITE_CONFIG.linkedin].filter(Boolean),
      knowsAbout: [
        "Python", "JavaScript", "C++", "Java", "React", "Next.js",
        "Node.js", "Data Structures", "Algorithms", "Web Development",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_CONFIG.siteUrl}/#business`,
      name: `${SITE_CONFIG.name} - Programming Tutor`,
      description: "One-on-one programming tutoring for Python, Web Development, DSA, and Interview Prep. Online and in-person sessions in Jaipur.",
      url: SITE_CONFIG.siteUrl,
      telephone: `+${SITE_CONFIG.whatsapp}`,
      email: SITE_CONFIG.email,
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.9124,
        longitude: 75.7873,
      },
      openingHours: "Mo-Sa 09:00-20:00",
      serviceType: ["Programming Tutoring", "Web Development Training", "DSA Coaching", "Interview Preparation"],
      areaServed: ["Jaipur", "Rajasthan", "India"],
    },
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_CONFIG.siteUrl}/#org`,
      name: `${SITE_CONFIG.name} - Programming Education`,
      url: SITE_CONFIG.siteUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <BackToTop />
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
