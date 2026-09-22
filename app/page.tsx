import React from "react";
import Image from "next/image";
import LeadForm from "./components/LeadForm";

/* ─────────────────────────────────────────────
   SVG ICONS (inline, no external dependency)
───────────────────────────────────────────── */
const IconMapPin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const IconClock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconSun = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const IconCity = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="3" y1="22" x2="21" y2="22" /><rect x="2" y="4" width="6" height="18" /><rect x="10" y="8" width="12" height="14" /><line x1="14" y1="8" x2="14" y2="4" /><line x1="18" y1="8" x2="18" y2="4" /><line x1="14" y1="4" x2="18" y2="4" />
  </svg>
);

const IconBoat = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 17l1.5-4.5L12 5l7.5 7.5L21 17" /><path d="M2 21a5 5 0 0 0 10 0 5 5 0 0 0 10 0" />
  </svg>
);

const IconStar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconUser = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

const IconMessage = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconPhone = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 5.93 5.93l.88-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.27 16.92z" />
  </svg>
);

const IconMail = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconWhatsApp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const IconArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const tours = [
  {
    id: "desert",
    title: "Desert Safaris & Dunes",
    desc: "Immersive desert experiences including camel treks, sandboarding, and stargazing beneath UAE skies.",
    img: "/images/homepage/tour-desert-safari.webp",
    alt: "UAE desert dunes at sunset",
    Icon: IconSun,
  },
  {
    id: "city",
    title: "Modern City Explorations",
    desc: "Guided itineraries through Dubai's modern wonders — iconic landmarks, architectural marvels, and skyline views.",
    img: "/images/homepage/tour-city-dubai.webp",
    alt: "Dubai city skyline at night",
    Icon: IconCity,
  },
  {
    id: "creek",
    title: "Historic Dubai & Creek Tours",
    desc: "Step back in time with cultural walks through historic Al Fahidi and traditional abra crossings on the Dubai Creek.",
    img: "/images/homepage/tour-creek-heritage.webp",
    alt: "Dubai Creek and heritage area",
    Icon: IconBoat,
  },
  {
    id: "private",
    title: "Tailored Private Journeys",
    desc: "Custom-made itineraries crafted specifically to match your travel preferences, pace, and group needs.",
    img: "/images/homepage/tour-private-journey.webp",
    alt: "Private scenic travel experience",
    Icon: IconStar,
  },
];

const whyItems = [
  {
    Icon: IconUser,
    title: "Personal 1-to-1 Consultation",
    desc: "Every enquiry is handled directly by our team — no bots, no call centres. We take time to understand your travel goals.",
  },
  {
    Icon: IconMapPin,
    title: "Based Right Here in Dubai",
    desc: "Our team is located in Dubai, giving us local knowledge and on-the-ground experience you can rely on.",
  },
  {
    Icon: IconStar,
    title: "Tailored to You",
    desc: "We don't sell off-the-shelf packages. Every journey is shaped around your preferences, schedule, and group.",
  },
  {
    Icon: IconMessage,
    title: "Direct WhatsApp Support",
    desc: "Reach us instantly on WhatsApp throughout your enquiry process — quick, simple, and personal.",
  },
];

const aboutFeatures = [
  {
    Icon: IconCheck,
    title: "Dubai-based team",
    desc: "We operate from Dubai with direct knowledge of UAE travel experiences.",
  },
  {
    Icon: IconCheck,
    title: "Personalised planning",
    desc: "Itineraries shaped to your interests, budget, and travel style.",
  },
  {
    Icon: IconCheck,
    title: "End-to-end support",
    desc: "From initial enquiry to your return — we're here to help throughout.",
  },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════
          NAVBAR / TOPBAR
      ══════════════════════════════════════ */}
      <header className="topbar" role="banner">
        <a href="#top" className="flex items-center gap-3" aria-label="Eshaare Tours Home">
          <Image
            src="/fox-logo.webp"
            alt="Eshaare Tours Logo"
            width={100}
            height={56}
            className="topbar-logo-img"
            priority
          />
          <span
            style={{
              fontFamily: "var(--font-great-vibes), cursive",
              fontSize: "24px",
              fontWeight: "600",
              color: "var(--green)",
              lineHeight: 1,
            }}
          >
            Eshaare Tours
          </span>
        </a>

        <nav aria-label="Main Navigation">
          <a href="#top">Home</a>
          <a href="#tours">Tours</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a
            href="https://wa.me/971557338429"
            target="_blank"
            rel="noopener noreferrer"
            className="pill whatsapp-btn small topbar-nav-cta"
            aria-label="Contact Eshaare Tours on WhatsApp"
          >
            <IconWhatsApp />
            <span>WhatsApp Us</span>
          </a>

          <button
            id="hamburger-btn"
            className="hamburger-btn"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div id="mobile-menu" className="mobile-menu" aria-hidden="true">
        <div id="mobile-menu-overlay" style={{ position: "absolute", inset: 0 }} />
        <div className="mobile-menu-panel">
          <a href="#top">Home</a>
          <a href="#tours">Tours &amp; Services</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <div className="mobile-menu-cta">
            <a
              href="https://wa.me/971557338429"
              target="_blank"
              rel="noopener noreferrer"
              className="pill whatsapp-btn"
            >
              <IconWhatsApp />
              WhatsApp Us
            </a>
            <a href="tel:+971557338429" className="pill secondary">
              <IconPhone />
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section className="hero" aria-label="Hero">
        {/* Background image */}
        <div className="hero-bg" aria-hidden="true">
          <Image
            src="/images/homepage/hero-dubai-skyline.webp"
            alt="Dubai skyline at golden hour"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        {/* Overlay */}
        <div className="hero-overlay" aria-hidden="true" />

        {/* Content */}
        <div className="hero-inner">
          <div className="hero-grid">
            {/* Left Column: Text & CTAs */}
            <div className="hero-text-col">
              <div className="hero-badge fade-up" aria-label="Dubai-based Travel & Tour Specialists">
                <span className="hero-badge-dot" aria-hidden="true" />
                Dubai-based Travel &amp; Tour Specialists
              </div>

              <h1 className="fade-up fade-up-delay-1">
                Your journey,{" "}
                <br />
                <em>made beautifully simple.</em>
              </h1>

              <p className="hero-desc fade-up fade-up-delay-2">
                Eshaare Tours is a Dubai-based travel company helping you discover
                the UAE and beyond — with personalised itineraries, hands-on
                support, and a team that genuinely cares about your experience.
              </p>

              <div className="hero-ctas fade-up fade-up-delay-2">
                <a
                  href="https://wa.me/971557338429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill whatsapp-btn"
                  aria-label="Contact Eshaare Tours on WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp Us
                </a>
                <a href="#tours" className="pill secondary">
                  Explore Tours <IconArrowRight />
                </a>
              </div>

              <a href="tel:+971557338429" className="hero-phone fade-up fade-up-delay-3">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 5.93 5.93l.88-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.27 16.92z" />
                </svg>
                +971 55 733 8429
              </a>
            </div>

            {/* Right Column: Compact Lead Form */}
            <div className="hero-form-col fade-up fade-up-delay-1">
              <LeadForm variant="compact" />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hero-scroll-cue" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TRUST BAR
      ══════════════════════════════════════ */}
      <div className="trust-bar" role="complementary" aria-label="Why trust Eshaare Tours">
        <div className="trust-bar-inner">
          <div className="trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            Based in Dubai, UAE
          </div>
          <div className="trust-divider" aria-hidden="true" />
          <div className="trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
            1-to-1 Personal Consultation
          </div>
          <div className="trust-divider" aria-hidden="true" />
          <div className="trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Direct WhatsApp Support
          </div>
          <div className="trust-divider" aria-hidden="true" />
          <div className="trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Tailored Itineraries
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          TOURS / SERVICES SECTION
      ══════════════════════════════════════ */}
      <section className="section-wrap services-section" id="tours" aria-labelledby="tours-heading">
        <div className="services-header">
          <div>
            <span className="section-eyebrow">EXPLORE WITH ESHAARE</span>
            <h2 className="section-h2" id="tours-heading">
              Travel experiences made around you.
            </h2>
          </div>
          <p className="section-sub">
            From classic UAE adventures to fully personalised journeys — we help
            you explore Dubai and the Emirates in a way that feels right for
            you.
          </p>
        </div>

        <div className="tour-grid" role="list">
          {tours.map((tour) => (
            <article className="tour-card" key={tour.id} role="listitem">
              <div className="tour-card-img">
                <Image
                  src={tour.img}
                  alt={tour.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
                <div className="tour-card-icon" aria-hidden="true">
                  <tour.Icon />
                </div>
              </div>
              <div className="tour-card-body">
                <h3>{tour.title}</h3>
                <p>{tour.desc}</p>
                <a
                  href="https://wa.me/971557338429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tour-card-link"
                  aria-label={`Enquire about ${tour.title} on WhatsApp`}
                >
                  Enquire Now <IconArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY CHOOSE ESHAARE
      ══════════════════════════════════════ */}
      <section className="section-wrap why-section" aria-labelledby="why-heading">
        <div style={{ textAlign: "center", marginBottom: "0" }}>
          <span className="section-eyebrow">WHY ESHAARE</span>
          <h2 className="section-h2" id="why-heading">
            Why travel with Eshaare?
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            We believe great travel starts with great support. Here is what sets
            us apart.
          </p>
        </div>

        <div className="why-grid">
          {whyItems.map((item, idx) => (
            <div className="why-card" key={idx}>
              <div className="why-icon" aria-hidden="true">
                <item.Icon />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT SECTION
      ══════════════════════════════════════ */}
      <section className="section-wrap about-section" id="about" aria-labelledby="about-heading">
        <div className="about-grid">
          {/* Image */}
          <div className="about-image-wrap">
            <Image
              src="/images/homepage/about.webp"
              alt="Dubai heritage district — Al Fahidi"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
            <div className="about-image-badge">
              <p>Al Twar 5</p>
              <strong>Dubai, United Arab Emirates</strong>
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <span className="section-eyebrow">ABOUT US</span>
            <h2 className="section-h2" id="about-heading">
              A travel company built on personal care.
            </h2>
            <p className="section-sub">
              Eshaare Tours is a Dubai-based travel and tour company. We help
              individuals, families, and groups plan meaningful journeys in and
              around the UAE — with attention to detail, honest advice, and
              direct human support from start to finish.
            </p>
            <p className="section-sub" style={{ marginTop: "16px" }}>
              Whether you are visiting Dubai for the first time, looking for an
              authentic desert experience, or planning a tailored private trip —
              we work closely with you to make it happen simply and well.
            </p>

            <div className="about-features">
              {aboutFeatures.map((f, idx) => (
                <div className="about-feature" key={idx}>
                  <div className="about-feature-icon" aria-hidden="true">
                    <f.Icon />
                  </div>
                  <div className="about-feature-text">
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "36px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/971557338429"
                target="_blank"
                rel="noopener noreferrer"
                className="pill whatsapp-btn"
                aria-label="Chat with Eshaare Tours on WhatsApp"
              >
                <IconWhatsApp />
                Chat with Us
              </a>
              <a href="tel:+971557338429" className="pill secondary">
                <IconPhone />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ENQUIRY CTA SECTION
      ══════════════════════════════════════ */}
      <section className="section-wrap cta-section" aria-labelledby="cta-heading">
        <div className="cta-inner">
          <span className="section-eyebrow">GET IN TOUCH</span>
          <h2 className="section-h2" id="cta-heading">
            Ready to plan your next journey?
          </h2>
          <p className="section-sub">
            Tell us what you are looking for and our team will help you plan the
            right experience — no pressure, no rush.
          </p>

          <div className="cta-actions">
            <a
              href="https://wa.me/971557338429"
              target="_blank"
              rel="noopener noreferrer"
              className="pill whatsapp-btn"
              aria-label="Contact us via WhatsApp"
            >
              <IconWhatsApp />
              WhatsApp Us
            </a>
            <a href="#contact" className="pill cta-secondary-btn">
              Send an Enquiry <IconArrowRight />
            </a>
          </div>

          <a href="tel:+971557338429" className="cta-phone">
            <IconPhone />
            +971 55 733 8429
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT + GOOGLE FORM SECTION
      ══════════════════════════════════════ */}
      <section className="section-wrap contact-section" id="contact" aria-labelledby="contact-heading">
        <div style={{ marginBottom: "52px" }}>
          <span className="section-eyebrow">CONTACT</span>
          <h2 className="section-h2" id="contact-heading">
            We&apos;re here to help.
          </h2>
          <p className="section-sub">
            Reach us directly by phone, email, or WhatsApp — or fill out the
            form below and we will get back to you shortly.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact cards */}
          <div className="contact-cards">
            <a href="https://wa.me/971557338429" target="_blank" rel="noopener noreferrer" className="contact-card" aria-label="WhatsApp Eshaare Tours">
              <div className="contact-card-icon" aria-hidden="true">
                <IconWhatsApp />
              </div>
              <div className="contact-card-text">
                <p>WhatsApp</p>
                <span>+971 55 733 8429</span>
              </div>
            </a>

            <a href="tel:+971557338429" className="contact-card" aria-label="Call Eshaare Tours">
              <div className="contact-card-icon" aria-hidden="true">
                <IconPhone />
              </div>
              <div className="contact-card-text">
                <p>Phone</p>
                <span>+971 55 733 8429</span>
              </div>
            </a>

            <a href="mailto:info@eshaareuae.com" className="contact-card" aria-label="Email Eshaare Tours">
              <div className="contact-card-icon" aria-hidden="true">
                <IconMail />
              </div>
              <div className="contact-card-text">
                <p>Email</p>
                <span>info@eshaareuae.com</span>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/place/25%C2%B015'51.6%22N+55%C2%B023'07.4%22E/@25.26434,55.385375,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              aria-label="View Eshaare Tours location on Google Maps"
            >
              <div className="contact-card-icon" aria-hidden="true">
                <IconMapPin />
              </div>
              <div className="contact-card-text">
                <p>Address</p>
                <span>Office 28, Room 308, 3rd Floor, Arzoo Building, M9-1, 16th Street, Al Twar 5, Dubai</span>
              </div>
            </a>
          </div>

          {/* Lead Enquiry Form (Google Form Backend) */}
          <div className="contact-form-panel" id="enquiry">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
