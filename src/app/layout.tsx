import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hodo Abdirizak — Software Engineer",
  description:
    "Portfolio of Hodo Abdirizak, a software engineer based in Toronto with experience at GoDaddy, TD Bank, and Global Solutions Team. Specializing in full-stack development with React, Vue, TypeScript, and more.",
  keywords: [
    "Hodo Abdirizak",
    "Software Engineer",
    "Full Stack Developer",
    "Toronto",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Hodo Abdirizak" }],
  openGraph: {
    title: "Hodo Abdirizak — Software Engineer",
    description:
      "Software engineer with production experience at GoDaddy, TD Bank, and Global Solutions Team. Building software that serves people.",
    url: "https://hodoabdirizak.com",
    siteName: "Hodo Abdirizak",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hodo Abdirizak — Software Engineer",
    description:
      "Software engineer with production experience at GoDaddy, TD Bank, and Global Solutions Team.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
