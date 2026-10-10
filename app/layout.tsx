import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  manifest: "/manifest.webmanifest",
  title: "Verses of the Day",
  description: "Explore daily Bible verse selections and detailed guides to Bible reading providers.",
  icons: {
    icon: "/lifestages-icon.jpg",
    shortcut: "/lifestages-icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}



