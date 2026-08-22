import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "Eshaare Tour - Upcoming Dubai Tour Packages",
  description: "Eshaare Tour is a Dubai-based tour package company preparing to launch curated travel experiences.",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col site-shell">
        {/* Header */}
        <header className="topbar">
          <a href="/#top" className="flex items-center gap-3 group shrink-0">
            <img
              src="/fox-logo.webp"
              alt="Eshaare Tour"
              width="100"
              height="70"
              className="h-[54px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {/* Brand Text */}
            <div className="leading-none text-left">
              <div
                className="text-2xl md:text-3xl lg:text-[32px] font-bold transition-colors duration-700 text-[#063024]"
                style={{
                  fontFamily: "var(--font-great-vibes), cursive",
                }}
                aria-label="Eshaare Tours & Visas"
              >
                Eshaare Tour
              </div>

              <p className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase mt-0 text-[#0b6e50] font-semibold">
                Connecting Dreams Into Destinations
              </p>
            </div>
          </a>
          <nav>
            <a href="/#top">About</a>
            <a href="/#packages">Planned Packages</a>
            <a href="/#enquiry">Enquiry Form</a>
          </nav>
          <a href="/#enquiry" className="pill primary small">
            Plan My Journey
          </a>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer>
          <div className="flex items-center gap-3 group shrink-0">
            <img
              src="/fox-logo.webp"
              alt="Eshaare Tour"
              width="75"
              height="50"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="leading-none text-left">
              <div
                className="text-2xl font-bold text-[#063024]"
                style={{
                  fontFamily: "var(--font-great-vibes), cursive",
                }}
                aria-label="Eshaare Tours & Visas"
              >
                Eshaare Tour
              </div>
              <p className="text-[8px] md:text-[9px] tracking-[0.25em] uppercase mt-0 text-[#0b6e50] font-semibold">
                Connecting Dreams Into Destinations
              </p>
            </div>
          </div>
          <div>
            <b>Explore</b>
            <a href="/#top">Home</a>
            <a href="/#packages">Planned Packages</a>
            <a href="/#enquiry">Enquiry Form</a>
          </div>
          <div>
            <b>Legal</b>
            <a href="/terms-and-conditions">Terms &amp; Conditions</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/refund-and-cancellation-policy">Refund Policy</a>
          </div>
          <div>
            <b>Direct Contact</b>
            <a href="tel:+971557338429">+971 55 733 8429</a>
            <a href="mailto:info@eshaareuae.com">info@eshaareuae.com</a>
            <span>Al Twar 5, Dubai, UAE</span>
          </div>
          <div>
            <b>Follow Us</b>
            <a
              href="https://www.instagram.com/eshaare_tours/?utm_source=qr&r=nametag"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a href="https://wa.me/971557338429" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.linkedin.com/in/eshaare-tours" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://t.me/eshaaretours" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          </div>
          
          {/* Legal Disclaimer */}
          <p style={{ textAlign: "center", width: "100%", maxWidth: "900px", margin: "0 auto" }}>
            Eshaare Tour is a private travel and visa assistance company and is not affiliated with any embassy, consulate, immigration authority, VFS Global or government agency. Visa approval is solely at the discretion of the relevant authority.
          </p>
          <p style={{ textAlign: "center", width: "100%", borderTop: "none", paddingTop: "0", marginTop: "10px" }}>
            &copy; 2026 Eshaare Tour. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
