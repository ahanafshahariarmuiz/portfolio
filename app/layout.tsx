import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const BASE_URL = "https://ahnafshahriarmuiz.com/";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ahnaf Shahriar Muiz — Full-Stack Developer & Designer",
    template: "%s | Ahnaf Shahriar Muiz",
  },
  description:
    "Portfolio of Ahnaf Shahriar Muiz — a self-taught full-stack developer from Bangladesh who designs, builds, and ships polished web applications with a strong focus on clean UI and performance.",
  keywords: [
    "Ahnaf Shahriar Muiz",
    "full-stack developer",
    "web developer Bangladesh",
    "Next.js developer",
    "React developer",
    "UI designer",
    "portfolio",
    "Dinajpur",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Ahnaf Shahriar Muiz",
    title: "Ahnaf Shahriar Muiz — Full-Stack Developer & Designer",
    description:
      "Self-taught developer turning ideas into polished web products. Clean design, real performance, shipped applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahnaf Shahriar Muiz — Full-Stack Developer & Designer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AhnafSMuiz",
    creator: "@AhnafSMuiz",
    title: "Ahnaf Shahriar Muiz — Full-Stack Developer & Designer",
    description:
      "Self-taught developer turning ideas into polished web products.",
    images: ["/og-image.png"],
  },
  authors: [{ name: "Ahnaf Shahriar Muiz", url: BASE_URL }],
  creator: "Ahnaf Shahriar Muiz",
  icons: {
    icon: [{ url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  verification: {
    google: "Z7PsY4ZOW5MBFeOaQfHWJFBJTxBN21HiqGwnG-wszG8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased bg-orange-50`}
    >
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
