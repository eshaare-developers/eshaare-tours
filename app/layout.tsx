import type { Metadata, Viewport } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import Script from "next/script";
import "./globals.css";

/* ─────────────────────────────────────────────
   FONTS
───────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

/* ─────────────────────────────────────────────
   VIEWPORT
───────────────────────────────────────────── */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#063024",
};

/* ─────────────────────────────────────────────
   METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Eshaare Tours | Dubai Travel & Tour Specialists",
  description:
    "Discover personalised travel experiences with Eshaare Tours, a Dubai-based travel and tour company offering tailored itineraries, desert safaris, city tours, and hands-on support for your journey.",
  keywords: [
    "Dubai tours",
    "UAE travel",
    "desert safari Dubai",
    "Dubai tour packages",
    "travel company Dubai",
    "Eshaare Tours",
    "personalised travel UAE",
  ],
  authors: [{ name: "Eshaare Tours" }],
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://eshaareuae.com",
    siteName: "Eshaare Tours",
    title: "Eshaare Tours | Dubai Travel & Tour Specialists",
    description:
      "Personalised travel experiences from Dubai. Desert safaris, city tours, historic heritage walks, and tailored private journeys — curated with care.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Dubai skyline at golden hour — Eshaare Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eshaare Tours | Dubai Travel & Tour Specialists",
    description:
      "Personalised travel experiences from Dubai. Desert safaris, city tours, and tailored private journeys.",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    ],
  },
};

/* ─────────────────────────────────────────────
   LAYOUT TYPES
───────────────────────────────────────────── */
interface LayoutProps {
  children: React.ReactNode;
}

/* ─────────────────────────────────────────────
   ROOT LAYOUT
───────────────────────────────────────────── */
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${greatVibes.variable} h-full`}
    >
      {/* Meta Pixel Code — script loads after interactive, noscript in head */}
      <head>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1599581298534068&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <Script
        id="meta-pixel"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var loaded = false;
              function loadPixel() {
                if (loaded) return;
                loaded = true;
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1599581298534068');
                fbq('track', 'PageView');
              }
              var events = ['pointerdown', 'scroll', 'touchstart', 'mousemove', 'keydown'];
              events.forEach(function(e) { window.addEventListener(e, loadPixel, { once: true, passive: true }); });
              setTimeout(loadPixel, 3500);
            })();
          `,
        }}
      />
      {/* End Meta Pixel Code */}

      {/* Mobile menu script — inline so it works before hydration */}
      <Script id="mobile-menu-script" strategy="afterInteractive">
        {`
          (function() {
            var btn = document.getElementById('hamburger-btn');
            var menu = document.getElementById('mobile-menu');
            var overlay = document.getElementById('mobile-menu-overlay');
            function close() {
              if (!btn || !menu) return;
              btn.classList.remove('open');
              btn.setAttribute('aria-expanded', 'false');
              menu.classList.remove('open');
              document.body.style.overflow = '';
            }
            function open() {
              if (!btn || !menu) return;
              btn.classList.add('open');
              btn.setAttribute('aria-expanded', 'true');
              menu.classList.add('open');
              document.body.style.overflow = 'hidden';
            }
            if (btn) {
              btn.addEventListener('click', function() {
                if (menu && menu.classList.contains('open')) {
                  close();
                } else {
                  open();
                }
              });
            }
            if (overlay) {
              overlay.addEventListener('click', close);
            }
            // Close on nav link click
            var links = document.querySelectorAll('#mobile-menu a');
            links.forEach(function(l) { l.addEventListener('click', close); });
            // Escape key
            document.addEventListener('keydown', function(e) {
              if (e.key === 'Escape') close();
            });
          })();
        `}
      </Script>

      <body className="min-h-full flex flex-col site-shell">
        {/* ── HEADER ─────────────────────────────────── */}
        <header className="topbar" role="banner">
          {/* Logo */}
          <a
            href="/#top"
            className="topbar-logo-link flex items-center gap-2 group shrink-0"
            aria-label="Eshaare Tours — Home"
          >
            <img
              src="/fox-logo.webp"
              alt="Eshaare Tours"
              width={100}
              height={70}
              style={{ height: "56px", width: "auto" }}
              className="topbar-logo-img object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="leading-none text-left min-w-0">
              <div
                className="topbar-brand-name font-bold text-[#063024] transition-colors duration-300"
                style={{ fontFamily: "var(--font-great-vibes), cursive", fontSize: "clamp(24px, 5vw, 32px)", lineHeight: "0.85", whiteSpace: "nowrap" }}
                aria-hidden="true"
              >
                Eshaare Tours
              </div>
              <p className="topbar-tagline text-[8.5px] tracking-[0.22em] uppercase mt-[0px] text-[#0b6e50] font-semibold">
                Connecting Dreams Into Destinations
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation">
            <a href="/#top">Home</a>
            <a href="/#tours">Tours</a>
            <a href="/#about">About</a>
            <a href="/#contact">Contact</a>
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/971557338429"
            target="_blank"
            rel="noopener noreferrer"
            className="pill whatsapp-btn small topbar-nav-cta"
            aria-label="Chat with us on WhatsApp"
          >
            {/* WhatsApp icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp Us
          </a>

          {/* Hamburger — mobile only */}
          <button
            id="hamburger-btn"
            className="hamburger-btn"
            aria-label="Open navigation menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </header>

        {/* ── MOBILE MENU ─────────────────────────────── */}
        <div
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Overlay backdrop */}
          <div id="mobile-menu-overlay" className="absolute inset-0" />

          {/* Panel */}
          <nav className="mobile-menu-panel" aria-label="Mobile navigation">
            <a href="/#top">Home</a>
            <a href="/#tours">Tours</a>
            <a href="/#about">About</a>
            <a href="/#contact">Contact</a>
            <div className="mobile-menu-cta">
              <a
                href="https://wa.me/971557338429"
                target="_blank"
                rel="noopener noreferrer"
                className="pill whatsapp-btn"
                style={{ justifyContent: "center" }}
                aria-label="Chat on WhatsApp"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
              <a
                href="tel:+971557338429"
                className="pill secondary"
                style={{ justifyContent: "center" }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 5.93 5.93l.88-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.27 16.92z" />
                </svg>
                +971 55 733 8429
              </a>
            </div>
          </nav>
        </div>

        {/* ── MAIN ───────────────────────────────────── */}
        <main className="flex-1" id="top">
          {children}
        </main>

        {/* ── FOOTER ─────────────────────────────────── */}
        <footer className="site-footer" role="contentinfo">
          <div className="footer-inner">
            <div className="footer-top">
              {/* Brand */}
              <div className="footer-brand">
                <div className="footer-logo">
                  <img src="/fox-logo.webp" alt="Eshaare Tours logo" width={100} height={70} style={{ height: "48px", width: "auto" }} />
                  <div className="footer-logo-text">
                    <span
                      className="name"
                      style={{
                        fontFamily: "var(--font-great-vibes), cursive",
                        fontSize: "22px",
                      }}
                    >
                      Eshaare Tours
                    </span>
                    <span className="tagline">
                      Connecting Dreams Into Destinations
                    </span>
                  </div>
                </div>
                <p className="footer-desc">
                  A Dubai-based travel and tour company offering personalised
                  travel experiences and direct customer support — helping you
                  explore the UAE and beyond with ease.
                </p>
              </div>

              {/* Explore */}
              <div className="footer-col">
                <h4>Explore</h4>
                <ul>
                  <li><a href="/#top">Home</a></li>
                  <li><a href="/#tours">Tours &amp; Services</a></li>
                  <li><a href="/#about">About Us</a></li>
                  <li><a href="/#contact">Contact</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div className="footer-col">
                <h4>Legal</h4>
                <ul>
                  <li><a href="/terms-and-conditions">Terms &amp; Conditions</a></li>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                  <li>
                    <a href="/refund-and-cancellation-policy">
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact & Social */}
              <div className="footer-col">
                <h4>Contact Us</h4>
                <ul className="footer-social-links">
                  <li>
                    <a href="tel:+971557338429">+971 55 733 8429</a>
                  </li>
                  <li>
                    <a href="mailto:info@eshaareuae.com">info@eshaareuae.com</a>
                  </li>
                  <li>
                    <span>Al Twar 5, Dubai, UAE</span>
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    <a
                      href="https://wa.me/971557338429"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/eshaare_tours/?utm_source=qr&r=nametag"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/eshaare-tours"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/eshaaretours"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom */}
            <div className="footer-bottom">
              <p className="footer-disclaimer">
                Eshaare Tours is a private travel and visa assistance company
                and is not affiliated with any embassy, consulate, immigration
                authority, VFS Global or government agency. Visa approval is
                solely at the discretion of the relevant authority.
              </p>
              <p className="footer-copyright">
                &copy; 2026 Eshaare Tours. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* ── FLOATING WHATSAPP (desktop) ─────────────── */}
        <a
          href="https://wa.me/971557338429"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp"
          aria-label="Chat with Eshaare Tours on WhatsApp"
          title="WhatsApp Us"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>

        {/* ── STICKY MOBILE BOTTOM BAR ─────────────────── */}
        <div className="sticky-mobile-bar" role="navigation" aria-label="Quick contact">
          <a href="tel:+971557338429" className="bar-call" aria-label="Call Eshaare Tours">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 5.93 5.93l.88-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.27 16.92z" />
            </svg>
            Call Us
          </a>
          <a
            href="https://wa.me/971557338429"
            target="_blank"
            rel="noopener noreferrer"
            className="bar-whatsapp"
            aria-label="WhatsApp Eshaare Tours"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </body>
    </html>
  );
}
