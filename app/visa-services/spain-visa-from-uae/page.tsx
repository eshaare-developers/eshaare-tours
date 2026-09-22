"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SpainVisaPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How long does it take to process a Spain Schengen visa from the UAE?",
      a: "The standard processing time for a Spain Schengen visa at BLS International UAE is typically 15 calendar days from the date of your appointment. During peak travel seasons (summer and holidays), processing may take up to 20-30 days, so we recommend applying at least 4-6 weeks before your intended travel date.",
    },
    {
      q: "Can UAE expat residents apply for a Spain visa in Dubai or Abu Dhabi?",
      a: "Yes! Any non-UAE citizen holding a valid UAE Residence Visa (with at least 3 months validity remaining after returning from the Schengen area) can apply through BLS Spain Visa Application Centres in Dubai or Abu Dhabi.",
    },
    {
      q: "Do I need to visit the BLS application center in person for biometrics?",
      a: "If you have not submitted Schengen biometric data (fingerprints and photo) within the last 59 months, you must attend the BLS center in person. If your biometrics were collected within the past 59 months for a previous Schengen visa, our team can submit your application on your behalf.",
    },
    {
      q: "What is the minimum bank balance required for a Spain Schengen Visa?",
      a: "Spain requires applicants to demonstrate sufficient financial means of approximately €113.40 (approx. AED 450) per day per person, with a minimum required balance of €1,020.60 (approx. AED 4,100) per applicant regardless of stay duration. We recommend maintaining a steady 3 to 6-month bank statement with sufficient funds.",
    },
    {
      q: "What documents are included in Eshaare Tours' Spain Visa Package?",
      a: "Our comprehensive package includes complete application form filling, priority BLS appointment booking assistance, document verification & translation check, flight itinerary reservation, confirmed hotel bookings, Schengen-compliant travel insurance policy (€30,000 cover), and customized cover letter preparation.",
    },
    {
      q: "What happens if my Spain visa application gets rejected?",
      a: "With Eshaare Tours, our thorough pre-submission audit ensures a 99.2% approval rate. In the rare event of a refusal, we analyze the official refusal letter, correct any discrepancies, and assist you in filing a fast-track appeal or re-application at no additional service charge.",
    },
  ];

  return (
    <div
      className="min-h-screen font-sans selection:bg-[#0b6e52] selection:text-white"
      style={{
        backgroundColor: "#f8f6f2",
        color: "#1a1a1a",
        fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Import Google Fonts directly */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Display:ital@0;1&family=Great+Vibes&display=swap');
        
        .font-serif-dm {
          font-family: 'DM Serif Display', Georgia, serif;
        }
        .font-sans-dm {
          font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
        }
        .font-great-vibes {
          font-family: 'Great Vibes', cursive;
        }
      `}</style>

      {/* 1. TOP ANNOUNCEMENT / TICKER BAR */}
      <div className="bg-[#06241b] text-emerald-300 text-xs py-2 px-4 border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>⚡ Spain Schengen Visa Appointments Open for UAE Residents • Express Processing Available</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs text-emerald-200/80">
            <span>📍 Dubai & Abu Dhabi Submission</span>
            <span>📞 Call: +971 55 733 8429</span>
            <span>⏱ 15-Day Average Turnaround</span>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs text-stone-900 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Official Eshaare Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <img
              src="/fox-logo.webp"
              alt="Eshaare Tours logo"
              width={100}
              height={70}
              style={{ height: "48px", width: "auto" }}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="leading-none text-left min-w-0">
              <span
                className="font-bold text-[#063024] block transition-colors duration-300"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(26px, 4vw, 32px)",
                  lineHeight: "0.85",
                  whiteSpace: "nowrap",
                }}
              >
                Eshaare Tours
              </span>
              <span className="text-[8.5px] tracking-[0.2em] uppercase text-[#0b6e50] font-bold block mt-0.5">
                Connecting Dreams Into Destinations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#063024]">
            <Link href="/visa-services" className="text-[#0b6e52] font-semibold transition-colors">
              Visa Services
            </Link>
            <Link href="/holiday-packages" className="hover:text-[#0b6e52] transition-colors">
              Holiday Packages
            </Link>
            <Link href="/destinations" className="hover:text-[#0b6e52] transition-colors">
              Destinations
            </Link>
            <Link href="/flights" className="hover:text-[#0b6e52] transition-colors">
              Flights
            </Link>
            <Link href="/contact" className="hover:text-[#0b6e52] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20want%20to%20apply%20for%20a%20Spain%20Visa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#063024] font-medium hover:text-[#0b6e52] flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-stone-300 hover:border-[#0b6e52] transition-all"
            >
              <svg className="w-4 h-4 fill-current text-[#0b6e52]" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Support
            </a>
            <a
              href="#apply"
              className="bg-[#0b6e52] hover:bg-[#0f8a66] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Start Application
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#063024] hover:bg-stone-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-4 pb-6 space-y-4 shadow-xl animate-fadeIn">
            <nav className="flex flex-col space-y-3 font-medium text-base text-[#063024]">
              <Link
                href="/visa-services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#0b6e52] font-semibold py-2 border-b border-stone-100"
              >
                Visa Services
              </Link>
              <Link
                href="/holiday-packages"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0b6e52] py-2 border-b border-stone-100"
              >
                Holiday Packages
              </Link>
              <Link
                href="/destinations"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0b6e52] py-2 border-b border-stone-100"
              >
                Destinations
              </Link>
              <Link
                href="/flights"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0b6e52] py-2 border-b border-stone-100"
              >
                Flights
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0b6e52] py-2 border-b border-stone-100"
              >
                Contact
              </Link>
            </nav>
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#apply"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#0b6e52] hover:bg-[#0f8a66] text-white text-center font-semibold py-3 rounded-lg shadow-md"
              >
                Start Application
              </a>
              <a
                href="https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20want%20to%20apply%20for%20a%20Spain%20Visa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-stone-300 text-[#063024] text-center font-medium py-2.5 rounded-lg flex items-center justify-center gap-2"
              >
                <span>💬 Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative bg-[#0c1f17] text-white pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        {/* Subtle Background Pattern & Glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0f8a66_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#0b6e52]/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#0f8a66]"></span>
                SCHENGEN VISA FOR UAE RESIDENTS
              </div>

              {/* Main Headline */}
              <h1 className="font-serif-dm text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.15]">
                Your Spain journey <br className="hidden sm:block" />
                <span className="italic text-emerald-300">starts here.</span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-gray-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
                Expert visa assistance tailored for UAE citizens and expat residents.
                From fast BLS appointment booking to complete document preparation—we ensure your Spain Schengen visa application is smooth, stress-free, and approved.
              </p>

              {/* Value Bullet Points */}
              <ul className="space-y-3 pt-2 text-sm sm:text-base text-gray-200">
                {[
                  "Fast 15-day average visa processing time",
                  "100% document verification by Schengen visa experts",
                  "Guaranteed appointment slot booking at BLS International",
                  "Includes dummy flight booking, hotel vouchers & €30k insurance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0b6e52] flex items-center justify-center shrink-0 mt-0.5 text-white">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#apply"
                  className="bg-[#0b6e52] hover:bg-[#0f8a66] text-white text-center font-semibold px-8 py-4 rounded-xl shadow-xl shadow-emerald-950/50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                >
                  <span>Start Application</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20need%20expert%20guidance%20for%20my%20Spain%20Visa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-emerald-600/40 hover:bg-emerald-900/30 text-emerald-200 text-center font-medium px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 fill-current text-emerald-400" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .54-1.43.53-.47-.01-1.38-.27-2.05-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.75 3.99-1.74 6.66-2.89 8.01-3.45 3.82-1.59 4.61-1.87 5.13-1.88.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.22z"/>
                  </svg>
                  <span>Speak to Visa Expert</span>
                </a>
              </div>

              {/* Mini Trust Metrics */}
              <div className="pt-6 border-t border-emerald-900/60 grid grid-cols-3 gap-4 text-center sm:text-left">
                <div>
                  <div className="font-serif-dm text-2xl font-bold text-emerald-300">99.2%</div>
                  <div className="text-xs text-gray-400">Approval Rate</div>
                </div>
                <div>
                  <div className="font-serif-dm text-2xl font-bold text-emerald-300">15,000+</div>
                  <div className="text-xs text-gray-400">Visas Issued</div>
                </div>
                <div>
                  <div className="font-serif-dm text-2xl font-bold text-emerald-300">15 Days</div>
                  <div className="text-xs text-gray-400">Average Turnaround</div>
                </div>
              </div>
            </div>

            {/* Right Editorial Polaroid Stack Column */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative w-full max-w-md mx-auto aspect-[4/5] flex items-center justify-center">

                {/* Second Polaroid (Background Rotated) */}
                <div className="absolute top-4 right-2 w-[72%] bg-white p-3 pt-3 pb-8 rounded-lg shadow-2xl transform rotate-6 border border-gray-200 transition-all hover:rotate-2 hover:scale-105 duration-300 z-10">
                  <div className="relative aspect-square w-full rounded overflow-hidden bg-gray-100">
                    <Image
                      src="/images/spain/barcelona-park-guell.jpg"
                      alt="Park Güell Barcelona"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <p className="font-serif-dm text-xs text-gray-700 text-center mt-3 italic">
                    Park Güell, Barcelona
                  </p>
                </div>

                {/* Primary Polaroid (Foreground Main) */}
                <div className="absolute top-12 left-2 w-[80%] bg-white p-4 pt-4 pb-10 rounded-lg shadow-2xl transform -rotate-3 border border-gray-200 transition-all hover:rotate-0 hover:scale-105 duration-300 z-20">
                  <div className="relative aspect-[4/3] w-full rounded overflow-hidden bg-gray-100">
                    <Image
                      src="/images/spain/barcelona-sagrada-familia.jpg"
                      alt="Sagrada Família Barcelona Spain"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                    <div className="absolute top-3 left-3 bg-[#0c1f17]/80 backdrop-blur-sm text-emerald-300 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded">
                      Featured Destination
                    </div>
                  </div>
                  <div className="flex justify-between items-end mt-3 px-1">
                    <div>
                      <p className="font-serif-dm text-base text-gray-900 font-bold leading-none">
                        La Sagrada Família
                      </p>
                      <p className="text-[11px] text-gray-500 mt-1 font-sans-dm">
                        Barcelona, Catalonia, Spain
                      </p>
                    </div>
                    <span className="text-emerald-700 font-serif-dm text-xs italic">Schengen Zone</span>
                  </div>
                </div>

                {/* Floating Trust Seal Badge */}
                <div className="absolute bottom-2 right-4 bg-[#0a1b14] border border-emerald-500/40 p-4 rounded-2xl shadow-2xl z-30 flex items-center gap-3 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-full bg-[#0b6e52] flex items-center justify-center text-white shrink-0 font-bold text-lg">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                      Verified Assistance
                    </div>
                    <div className="text-sm font-bold text-white font-serif-dm">
                      100% Guaranteed Filing
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUST STRIP */}
      <section className="bg-white border-y border-stone-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#f8f6f2] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#f8f6f2] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif-dm text-lg font-bold text-[#1a1a1a]">Expert Visa Guidance</h3>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                  Dedicated Schengen specialists guiding you through every requirement step-by-step.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#f8f6f2] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#f8f6f2] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif-dm text-lg font-bold text-[#1a1a1a]">Clear Documentation</h3>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                  Rigorous document auditing prevents common embassy refusal triggers before submission.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#f8f6f2] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#f8f6f2] border border-emerald-900/10 text-[#0b6e52] flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif-dm text-lg font-bold text-[#1a1a1a]">Dedicated Support</h3>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                  Real-time status updates and end-to-end concierge support across Dubai and Abu Dhabi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SPAIN DESTINATION SECTION */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Column (Left) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0b6e52] bg-emerald-100/80 px-3 py-1 rounded-full">
              DESTINATION HIGHLIGHT
            </span>
            <h2 className="font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] leading-tight">
              Explore Spain: From Madrid to Costa del Sol
            </h2>
            <p className="text-stone-700 text-base leading-relaxed">
              Spain offers an unrivaled blend of golden beaches, historic palaces, world-renowned culinary arts, and vibrant Mediterranean culture. Whether you plan to admire Antoni Gaudí’s architectural wonders in Barcelona, visit the Royal Palace of Madrid, or relax along Andalusia’s sun-kissed coastlines—your dream trip is just one visa away.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed">
              With a Spain Schengen Visa issued through Eshaare Tours, you gain entry to Spain as well as unrestricted travel access across all 29 European Schengen member states.
            </p>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-300">
              <div className="p-3 rounded-lg bg-white border border-stone-200">
                <span className="block font-serif-dm text-xl font-bold text-[#0b6e52]">90 Days</span>
                <span className="text-xs text-stone-500">Max Stay Duration</span>
              </div>
              <div className="p-3 rounded-lg bg-white border border-stone-200">
                <span className="block font-serif-dm text-xl font-bold text-[#0b6e52]">29 States</span>
                <span className="text-xs text-stone-500">Schengen Access</span>
              </div>
              <div className="p-3 rounded-lg bg-white border border-stone-200">
                <span className="block font-serif-dm text-xl font-bold text-[#0b6e52]">15 Days</span>
                <span className="text-xs text-stone-500">Processing Time</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 text-[#0b6e52] font-semibold text-sm hover:text-[#0f8a66] transition-colors group"
              >
                <span>Plan Your Spain Trip With Us</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image Editorial Column (Right) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/spain/madrid-royal-palace.jpg"
                  alt="Madrid Royal Palace Spain"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">
                  Capital City
                </span>
                <h3 className="font-serif-dm text-2xl font-bold mt-1">Royal Palace of Madrid</h3>
                <p className="text-xs text-stone-300 mt-1">
                  Immerse yourself in centuries of royal history and majestic plazas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VISA INFORMATION SECTION */}
      <section className="bg-stone-100 py-16 lg:py-24 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0b6e52]">
              OVERVIEW & AT A GLANCE
            </span>
            <h2 className="font-serif-dm text-3xl sm:text-4xl font-normal text-[#1a1a1a] mt-2">
              Spain Visa Overview for UAE Applicants
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-3">
              Essential details regarding visa category, eligibility rules, and submission parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Box 1 */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0b6e52] flex items-center justify-center font-bold mb-4">
                👤
              </div>
              <h3 className="font-serif-dm text-lg font-bold text-[#1a1a1a]">Who Can Apply</h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                UAE Nationals and UAE Expat Residents with a valid residence visa (minimum 3 months validity remaining beyond intended return date).
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0b6e52] flex items-center justify-center font-bold mb-4">
                📄
              </div>
              <h3 className="font-serif-dm text-lg font-bold text-[#1a1a1a]">Visa Category</h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                Schengen Short-Stay Visa (Type C). Allows single, double, or multiple entry across all 29 Schengen member states.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0b6e52] flex items-center justify-center font-bold mb-4">
                ✈️
              </div>
              <h3 className="font-serif-dm text-lg font-bold text-[#1a1a1a]">Purpose of Travel</h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                Tourism, sightseeing, leisure holidays, business meetings, trade conferences, or visiting family & friends in Spain.
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0b6e52] flex items-center justify-center font-bold mb-4">
                📍
              </div>
              <h3 className="font-serif-dm text-lg font-bold text-[#1a1a1a]">Application Location</h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                BLS International Spain Visa Application Centres located in Dubai (WAFI Mall) and Abu Dhabi (Al Muhairy Centre).
              </p>
            </div>

            {/* Box 5 */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0b6e52] flex items-center justify-center font-bold mb-4">
                ⏳
              </div>
              <h3 className="font-serif-dm text-lg font-bold text-[#1a1a1a]">Visa Validity & Duration</h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                Granted for up to 90 days stay within a 180-day window, depending on embassy evaluation and past travel history.
              </p>
            </div>

            {/* Box 6 */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0b6e52] flex items-center justify-center font-bold mb-4">
                🛡️
              </div>
              <h3 className="font-serif-dm text-lg font-bold text-[#1a1a1a]">Insurance Requirement</h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                Mandatory Schengen travel medical insurance policy with a minimum coverage of €30,000 (fully included in our service).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REQUIRED DOCUMENTS SECTION */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0b6e52] bg-emerald-100 px-3 py-1 rounded-full">
            CHECKLIST
          </span>
          <h2 className="font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] mt-3">
            Required Documents for Spain Visa
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            We inspect and format every document to guarantee full compliance with Consulate of Spain standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0b6e52]/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4">
                📘
              </div>
              <h3 className="font-serif-dm text-xl font-bold text-[#1a1a1a] mb-3">
                1. Passport & Photos
              </h3>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#0b6e52] font-bold">•</span>
                  <span>Original passport with min. 6 months validity & 2 blank pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0b6e52] font-bold">•</span>
                  <span>2 recent passport photographs (white background, Schengen spec)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0b6e52] font-bold">•</span>
                  <span>Copies of previous Schengen, US, or UK visas (if applicable)</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] text-emerald-700 font-semibold uppercase">
              Mandatory Standard
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0b6e52]/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4">
                🏢
              </div>
              <h3 className="font-serif-dm text-xl font-bold text-[#1a1a1a] mb-3">
                2. UAE Residency & NOC
              </h3>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#0b6e52] font-bold">•</span>
                  <span>Valid UAE Residence Visa copy (min. 3 months validity remaining)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0b6e52] font-bold">•</span>
                  <span>Original NOC letter from employer stating position, salary & leave dates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0b6e52] font-bold">•</span>
                  <span>Valid Trade License copy for business partners / self-employed</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] text-emerald-700 font-semibold uppercase">
              Employment Proof
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0b6e52]/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4">
                💳
              </div>
              <h3 className="font-serif-dm text-xl font-bold text-[#1a1a1a] mb-3">
                3. Financial Proof
              </h3>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#0b6e52] font-bold">•</span>
                  <span>6 months original UAE bank statement stamped by bank</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0b6e52] font-bold">•</span>
                  <span>Sufficient balance to cover trip expenses (~AED 450/day)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0b6e52] font-bold">•</span>
                  <span>Regular salary credit history matching the NOC letter</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] text-emerald-700 font-semibold uppercase">
              Financial Solvency
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0b6e52]/10 text-[#0b6e52] flex items-center justify-center font-bold text-xl mb-4">
                ✈️
              </div>
              <h3 className="font-serif-dm text-xl font-bold text-[#1a1a1a] mb-3">
                4. Travel Itinerary
              </h3>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#0b6e52] font-bold">•</span>
                  <span>Confirmed roundtrip flight reservation (Provided by Eshaare)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0b6e52] font-bold">•</span>
                  <span>Hotel accommodation bookings covering full stay (Provided)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0b6e52] font-bold">•</span>
                  <span>Schengen travel medical insurance with €30,000 cover (Provided)</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] text-emerald-700 font-semibold uppercase">
              Full File Included
            </div>
          </div>
        </div>
      </section>

      {/* 8. APPLICATION PROCESS SECTION */}
      <section className="bg-[#0c1f17] text-white py-20 lg:py-28 border-y border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800">
              SIMPLE 5-STEP JOURNEY
            </span>
            <h2 className="font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-white mt-3">
              How We Get Your Spain Visa Approved
            </h2>
            <p className="text-emerald-200/80 text-sm sm:text-base mt-3 font-light">
              Our structured process ensures accuracy, speed, and complete peace of mind.
            </p>
          </div>

          {/* Desktop Horizontal Process Flow */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative">
            {/* Connecting line behind steps */}
            <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-emerald-800 -translate-y-6 z-0"></div>

            {[
              {
                step: "01",
                title: "Free Consultation",
                desc: "Send your details. Our expert reviews your eligibility and advises exact documents required.",
              },
              {
                step: "02",
                title: "Document Review",
                desc: "We rigorously verify your passport, NOC, and bank statements to fix potential errors.",
              },
              {
                step: "03",
                title: "Form & Flight File",
                desc: "We generate official forms, confirmed flight reservations, hotel vouchers, and insurance.",
              },
              {
                step: "04",
                title: "BLS Appointment",
                desc: "We secure your appointment slot at BLS Dubai/Abu Dhabi and prep you for biometrics.",
              },
              {
                step: "05",
                title: "Passport & Visa",
                desc: "Track status in real-time until your stamped passport with Spain Schengen visa is delivered.",
              },
            ].map((st, i) => (
              <div key={i} className="relative z-10 bg-[#081812] border border-emerald-900/60 p-6 rounded-2xl flex flex-col justify-between hover:border-emerald-500 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0b6e52] text-white font-serif-dm text-lg font-bold flex items-center justify-center mb-4 shadow-lg shadow-emerald-950">
                    {st.step}
                  </div>
                  <h3 className="font-serif-dm text-lg font-bold text-white mb-2">{st.title}</h3>
                  <p className="text-xs text-emerald-100/70 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Process Timeline */}
          <div className="lg:hidden space-y-6 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-emerald-800">
            {[
              {
                step: "01",
                title: "Free Consultation",
                desc: "Send your details. Our expert reviews your eligibility and advises exact documents required.",
              },
              {
                step: "02",
                title: "Document Review",
                desc: "We rigorously verify your passport, NOC, and bank statements to fix potential errors.",
              },
              {
                step: "03",
                title: "Form & Flight File",
                desc: "We generate official forms, confirmed flight reservations, hotel vouchers, and insurance.",
              },
              {
                step: "04",
                title: "BLS Appointment",
                desc: "We secure your appointment slot at BLS Dubai/Abu Dhabi and prep you for biometrics.",
              },
              {
                step: "05",
                title: "Passport & Visa",
                desc: "Track status in real-time until your stamped passport with Spain Schengen visa is delivered.",
              },
            ].map((st, i) => (
              <div key={i} className="relative flex items-start gap-4 pl-2">
                <div className="w-10 h-10 rounded-xl bg-[#0b6e52] text-white font-serif-dm font-bold flex items-center justify-center shrink-0 z-10">
                  {st.step}
                </div>
                <div className="bg-[#081812] border border-emerald-900/60 p-5 rounded-xl flex-1">
                  <h3 className="font-serif-dm text-base font-bold text-white mb-1">{st.title}</h3>
                  <p className="text-xs text-emerald-100/70 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY ESHAARE SECTION */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0b6e52] bg-emerald-100 px-3 py-1 rounded-full">
            WHY CHOOSE US
          </span>
          <h2 className="font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] mt-3">
            Why UAE Travelers Trust Eshaare Tours
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            We deliver personalized attention, speed, and unmatched success rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Block 1 */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200 border-t-4 border-t-[#0b6e52] shadow-sm hover:shadow-lg transition-all">
            <span className="text-xs text-[#0b6e52] font-bold uppercase tracking-wider block mb-2">
              PRECISION & AUDIT
            </span>
            <h3 className="font-serif-dm text-2xl font-bold text-[#1a1a1a] mb-4">
              99.2% Approval Rate
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Our pre-submission verification detects discrepancies in bank statements, NOC wording, or flight itineraries that cause embassy rejections. We eliminate risk before your file reaches BLS.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200 border-t-4 border-t-[#0b6e52] shadow-sm hover:shadow-lg transition-all">
            <span className="text-xs text-[#0b6e52] font-bold uppercase tracking-wider block mb-2">
              FULL CONCIERGE
            </span>
            <h3 className="font-serif-dm text-2xl font-bold text-[#1a1a1a] mb-4">
              End-to-End Handling
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              We handle every detail—from hotel reservations and flight itineraries to travel insurance policies and personalized cover letter drafting. You don&apos;t have to stress over any paperwork.
            </p>
          </div>

          {/* Block 3 */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200 border-t-4 border-t-[#0b6e52] shadow-sm hover:shadow-lg transition-all">
            <span className="text-xs text-[#0b6e52] font-bold uppercase tracking-wider block mb-2">
              PRIORITY ACCESS
            </span>
            <h3 className="font-serif-dm text-2xl font-bold text-[#1a1a1a] mb-4">
              Fast-Track Appointments
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Finding BLS appointment slots in Dubai or Abu Dhabi can be challenging. Our appointment tracking team secures early slots so you can travel on your desired dates without unnecessary delays.
            </p>
          </div>
        </div>
      </section>

      {/* 10. APPLICATION CTA BANNER & LEAD FORM */}
      <section id="apply" className="bg-[#0a1f17] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#0f291e] border border-emerald-800/60 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800">
                START YOUR APPLICATION TODAY
              </span>
              <h2 className="font-serif-dm text-3xl sm:text-4xl lg:text-5xl font-normal text-white mt-4">
                Ready to start your Spain journey?
              </h2>
              <p className="text-emerald-200/80 text-sm sm:text-base mt-3">
                Fill out the quick inquiry form below or chat directly with our Spain visa specialists.
              </p>
            </div>

            {/* Application Lead Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your Spain Visa consultation request has been received. Our visa specialist will call you shortly.");
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
            >
              <div>
                <label className="block text-xs font-medium text-emerald-200 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Ahmed"
                  className="w-full bg-[#081812] border border-emerald-800 rounded-xl px-4 py-3 text-sm text-white placeholder-emerald-700 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-emerald-200 mb-1">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+971 50 123 4567"
                  className="w-full bg-[#081812] border border-emerald-800 rounded-xl px-4 py-3 text-sm text-white placeholder-emerald-700 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-emerald-200 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="sarah@example.com"
                  className="w-full bg-[#081812] border border-emerald-800 rounded-xl px-4 py-3 text-sm text-white placeholder-emerald-700 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-emerald-200 mb-1">UAE Residence Location *</label>
                <select className="w-full bg-[#081812] border border-emerald-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400">
                  <option value="dubai">Dubai</option>
                  <option value="abudhabi">Abu Dhabi</option>
                  <option value="sharjah">Sharjah / Other Emirates</option>
                </select>
              </div>

              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#0b6e52] hover:bg-[#0f8a66] text-white font-semibold py-4 rounded-xl shadow-lg transition-all text-base flex items-center justify-center gap-2 group"
                >
                  <span>Apply for Spain Visa Now</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>

            <div className="mt-8 text-center pt-6 border-t border-emerald-800/40 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-emerald-300">
              <span>Or reach us instantly:</span>
              <a
                href="https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20want%20to%20apply%20for%20a%20Spain%20Visa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/60"
              >
                <span>💬 WhatsApp: +971 55 733 8429</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="py-20 lg:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0b6e52] bg-emerald-100 px-3 py-1 rounded-full">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-serif-dm text-3xl sm:text-4xl font-normal text-[#1a1a1a] mt-3">
            Spain Visa FAQs for UAE Residents
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Everything you need to know before applying for your Spain Schengen visa.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif-dm text-lg font-bold text-[#1a1a1a] hover:text-[#0b6e52] transition-colors focus:outline-none"
              >
                <span>{faq.q}</span>
                <span className="w-8 h-8 rounded-full bg-stone-100 text-[#0b6e52] flex items-center justify-center shrink-0 font-sans-dm text-sm font-bold">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-4 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 12. FINAL CTA BANNER */}
      <section className="relative py-24 lg:py-32 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/spain/andalusia-landscape.jpg"
            alt="Andalusia Landscape Spain"
            fill
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f17] via-[#0c1f17]/70 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-700/50">
            START YOUR SCHENGEN EXPERIENCE
          </span>
          <h2 className="font-serif-dm text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
            Spain is waiting.
          </h2>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Let our Dubai visa specialists take care of the paperwork, appointment booking, and file verification. Speak with us today.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#apply"
              className="w-full sm:w-auto bg-[#0b6e52] hover:bg-[#0f8a66] text-white font-semibold px-8 py-4 rounded-xl shadow-xl transition-all text-base"
            >
              Book Free Visa Consultation
            </a>
            <a
              href="https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20want%20to%20apply%20for%20a%20Spain%20Visa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-8 py-4 rounded-xl backdrop-blur-md transition-all text-base flex items-center justify-center gap-2"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-[#06140e] text-stone-400 pt-16 pb-12 border-t border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-900/40">
            {/* Col 1 & 2: Branding */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0b6e52] flex items-center justify-center text-white font-serif-dm text-2xl font-bold">
                  E
                </div>
                <div>
                  <span className="font-serif-dm text-xl tracking-tight text-white block leading-tight">
                    ESHAARE
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-400 font-medium block">
                    TOURS & VISAS
                  </span>
                </div>
              </Link>
              <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
                Eshaare Tours is a premier travel agency in Dubai providing customized visa assistance, worldwide holiday packages, flight bookings, and travel insurance for UAE citizens and expat residents.
              </p>
              <div className="text-xs text-emerald-400 font-medium">
                📍 Head Office: Dubai, United Arab Emirates
              </div>
            </div>

            {/* Col 3: Quick Links */}
            <div>
              <h4 className="font-serif-dm text-sm font-bold text-white uppercase tracking-wider mb-4">
                Visa Services
              </h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/visa-services/spain-visa-from-uae" className="text-emerald-400 font-semibold">Spain Schengen Visa</Link></li>
                <li><Link href="/visa-services" className="hover:text-white transition-colors">France Schengen Visa</Link></li>
                <li><Link href="/visa-services" className="hover:text-white transition-colors">Italy Schengen Visa</Link></li>
                <li><Link href="/visa-services" className="hover:text-white transition-colors">UK Tourist Visa</Link></li>
                <li><Link href="/visa-services" className="hover:text-white transition-colors">US B1/B2 Visa</Link></li>
              </ul>
            </div>

            {/* Col 4: Destinations */}
            <div>
              <h4 className="font-serif-dm text-sm font-bold text-white uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/about" className="hover:text-white transition-colors">About Eshaare</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/refund-and-cancellation-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
              </ul>
            </div>

            {/* Col 5: Contact Info */}
            <div>
              <h4 className="font-serif-dm text-sm font-bold text-white uppercase tracking-wider mb-4">
                Get In Touch
              </h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">📞</span>
                  <span>+971 55 733 8429</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">💬</span>
                  <a href="https://wa.me/971557338429" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">
                    WhatsApp Chat
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✉️</span>
                  <span>info@eshaaretours.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">🌐</span>
                  <span>eshaaretours.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Legal Disclaimer & Copyright */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
            <p className="max-w-3xl leading-relaxed text-center md:text-left">
              Disclaimer: Eshaare Tours is a private travel and visa assistance agency in the UAE and is not affiliated with any government agency, embassy, consulate, or BLS International. Visa approval is strictly at the discretion of the Consulate General of Spain.
            </p>
            <p className="shrink-0 text-center md:text-right">
              &copy; {new Date().getFullYear()} Eshaare Tours. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
