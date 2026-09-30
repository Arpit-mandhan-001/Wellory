import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Raleway } from "next/font/google";
import "./globals.css";
import { bingoItalic, bingoRegular } from "@/font";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Wellory",
    template: "%s | Wellory",
  },

  description:
    "Wellory is a modern wellness platform designed to help you build healthier habits and live better every day.",

  keywords: [
    "Wellory",
    "wellness",
    "health",
    "healthy lifestyle",
    "wellbeing",
    "healthy habits",
    "energy drink",
  ],

  authors: [{ name: "Wellory" }],
  creator: "Wellory",
  publisher: "Wellory",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Wellory",
    description:
      "Wellory is a modern wellness platform designed to help you build healthier habits and live better every day.",
    siteName: "Wellory",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wellory",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wellory",
    description:
      "Wellory is a modern wellness platform designed to help you build healthier habits and live better every day.",
    images: ["/og-image.png"],
  },


  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${raleway.variable} ${bingoRegular.variable} ${bingoItalic.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
