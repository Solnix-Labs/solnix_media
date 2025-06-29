import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import AnalyticsTracker from "@/components/analytics-tracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

// Google Analytics / Google Ads IDs pulled from env variables so they can be configured without touching the codebase
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "";

// Build a comma-separated list for the gtag initialisation (gtag can accept multiple IDs)
const GTAG_IDS = [GA_MEASUREMENT_ID, GOOGLE_ADS_ID].filter(Boolean);

export const metadata: Metadata = {
  title: "Solnix Media | Empowering SMBs with Stronger Web Presence",
  description: "Tailored digital solutions and modern components to help small and medium businesses stand out and grow online.",
  keywords: "web development, SMB solutions, digital marketing, website design, online presence, small business web design, custom web solutions",
  authors: [{ name: "Solnix Media Team" }],
  creator: "Solnix Media",
  publisher: "Solnix Media",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://solnixmedia.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Solnix Media | Empowering SMBs with Stronger Web Presence",
    description: "Tailored digital solutions and modern components to help small and medium businesses stand out and grow online.",
    url: "https://solnixmedia.com",
    siteName: "Solnix Media",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Solnix TradeMark Black.svg",
        width: 1200,
        height: 630,
        alt: "Solnix Media - Empowering SMBs with Stronger Web Presence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solnix Media | Empowering SMBs with Stronger Web Presence",
    description: "Tailored digital solutions and modern components to help small and medium businesses stand out and grow online.",
    creator: "@solnixmedia",
    images: ["/Solnix TradeMark Black.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your actual Google verification code
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Optimized resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.simpleicons.org" />
        <link rel="preconnect" href="https://cdn.magicui.design" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="https://cdn.magicui.design/ocean-small.webm"
          as="video"
          type="video/webm"
        />

        {/* Optimized favicon setup */}
        <link rel="icon" href="/Solnix TradeMark Black.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Google Tag (gtag.js) */}
        {GTAG_IDS.length > 0 && (
          <>
            {/* Load the gtag library once */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_IDS[0]}`}
              strategy="afterInteractive"
            />
            {/* Configure all provided measurement IDs */}
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                ${GTAG_IDS.map(id => `gtag('config', '${id}', { send_page_view: false });`).join('\n')}
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Track SPA navigations */}
          <AnalyticsTracker />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
