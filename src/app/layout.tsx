import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";

const chillax = localFont({
  src: "./fonts/Chillax-Variable.ttf",
  variable: "--font-chillax",
  display: "swap",
  weight: "200 700",
});

const zodiak = localFont({
  src: [
    {
      path: "./fonts/Zodiak-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Zodiak-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/Zodiak-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Zodiak-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Zodiak-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Zodiak-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Zodiak-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Zodiak-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Zodiak-Extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Zodiak-ExtraboldItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/Zodiak-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Zodiak-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-zodiak",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

const siteDescription =
  "Giveon Apex manages Giveon Court — an 8-acre gated estate in Adukrom-Dawu with off-plan homes and Apex Cabins, a premium eco-lodge for investment and short-let stays near Safari Valley Eco Resort.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Giveon Apex | Elevated Living",
    template: "%s | Giveon Apex",
  },
  description: siteDescription,
  applicationName: "Giveon Apex",
  keywords: [
    "Giveon Apex",
    "Giveon Court",
    "Apex Cabins",
    "Adukrom-Dawu",
    "off-plan homes",
    "eco-lodge",
    "Ghana real estate",
    "Safari Valley",
    "gated estate",
  ],
  authors: [{ name: "Giveon Apex" }],
  creator: "Giveon Apex",
  publisher: "Giveon Apex",
  category: "real estate",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "/",
    siteName: "Giveon Apex",
    title: "Giveon Apex | Elevated Living",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Giveon Apex | Elevated Living",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000C04",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${chillax.variable} ${zodiak.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full max-w-dvw flex flex-col font-sans bg-[#000C04]">
        {children}
        <Footer />
      </body>
    </html>
  );
}
