import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eshaare Tours - Upcoming Dubai Tour Packages",
  description: "Eshaare Tours is a Dubai-based tour package company preparing to launch curated travel experiences.",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
