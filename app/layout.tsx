import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const plausibleDomain = process.env.PLAUSIBLE_DOMAIN;

const title = "Flow402 — Internet-native credits for HTTP 402";
const description =
  "Charge per request without on-chain friction. Top up once with USDC; debit credits off-chain per call, return 402 when balance is low.";

export const metadata: Metadata = {
  metadataBase: new URL("https://flow402.com"),
  title,
  description,
  alternates: {
    canonical: "https://flow402.com/",
  },
  openGraph: {
    title,
    description,
    url: "https://flow402.com/",
    siteName: "Flow402",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#050915",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 text-slate-100 font-sans">
        {plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
        {children}
      </body>
    </html>
  );
}
