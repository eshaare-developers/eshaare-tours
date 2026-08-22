import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header */}
      <header className="border-b border-zinc-100 bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Icon */}
            <div className="flex items-center justify-center w-9 h-9 rounded bg-emerald-800 text-white font-bold text-lg shadow-sm">
              E
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-zinc-900">Eshaare Tours</span>
              <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-semibold mt-0.5">Dubai</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600">
            <a href="#about" className="hover:text-emerald-800 transition-colors">About Us</a>
            <a href="#packages" className="hover:text-emerald-800 transition-colors">Planned Packages</a>
            <a href="#enquiry" className="hover:text-emerald-800 transition-colors">Enquiry</a>
          </nav>
          <div>
            <a
              href="#enquiry"
              className="inline-flex h-9 items-center justify-center rounded-full bg-emerald-800 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-950"
            >
              Inquire Now
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12 md:py-20 flex flex-col gap-16">
        
        {/* Hero / About Section */}
        <section id="about" className="flex flex-col gap-5 text-center md:text-left max-w-3xl">
          <div className="inline-flex self-center md:self-start items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/50 px-3 py-1 text-xs font-semibold text-emerald-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            Dubai-Based Tour Specialists
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            Your journey,<br />
            <span className="text-emerald-800 italic font-semibold">made beautifully simple.</span>
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Welcome to Eshaare Tours. We are a Dubai-based tour package company preparing to launch a range of carefully curated travel experiences. Our team is currently designing unique journeys to help you explore the best of Dubai, and we look forward to welcoming you soon.
          </p>
        </section>

        {/* Planned Packages Section */}
        <section id="packages" className="flex flex-col gap-6 border-t border-zinc-100 pt-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Planned Tour Packages</h2>
            <p className="text-zinc-600">
              A sneak peek at the curated travel experiences we are currently planning for our launch:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-zinc-50 border border-zinc-100 rounded-xl flex items-start gap-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold shrink-0 mt-0.5">1</span>
              <div>
                <h3 className="font-semibold text-zinc-900">Desert Safaris & Dunes</h3>
                <p className="text-sm text-zinc-600 mt-1">Immersive desert experiences, camel treks, sandboarding, and stargazing in the dunes.</p>
              </div>
            </div>
            <div className="p-5 bg-zinc-50 border border-zinc-100 rounded-xl flex items-start gap-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold shrink-0 mt-0.5">2</span>
              <div>
                <h3 className="font-semibold text-zinc-900">Modern City Explorations</h3>
                <p className="text-sm text-zinc-600 mt-1">Guided itineraries exploring Dubai's modern wonders, architectural marvels, and iconic landmarks.</p>
              </div>
            </div>
            <div className="p-5 bg-zinc-50 border border-zinc-100 rounded-xl flex items-start gap-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold shrink-0 mt-0.5">3</span>
              <div>
                <h3 className="font-semibold text-zinc-900">Historic Dubai & Creek Tours</h3>
                <p className="text-sm text-zinc-600 mt-1">Step back in time with cultural walks through historic neighborhoods and traditional abra crossings.</p>
              </div>
            </div>
            <div className="p-5 bg-zinc-50 border border-zinc-100 rounded-xl flex items-start gap-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold shrink-0 mt-0.5">4</span>
              <div>
                <h3 className="font-semibold text-zinc-900">Tailored Private Journeys</h3>
                <p className="text-sm text-zinc-600 mt-1">Custom-made, premium itineraries crafted specifically to match your travel preferences and pace.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Google Form Section */}
        <section id="enquiry" className="flex flex-col gap-6 border-t border-zinc-100 pt-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Get in Touch</h2>
            <p className="text-zinc-600">
              Have questions or want to inquire about our upcoming tours? Fill out our pre-launch enquiry form below:
            </p>
          </div>
          <div className="w-full bg-zinc-50 border border-zinc-100 rounded-xl overflow-hidden p-1 shadow-sm">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf_xxxx/viewform?embedded=true"
              width="100%"
              height="600"
              title="Eshaare Tours Enquiry Form"
              className="w-full rounded-lg bg-white"
              style={{ border: "none" }}
            >
              Loading…
            </iframe>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 bg-zinc-50 py-12 mt-16 text-zinc-600">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded bg-emerald-800 text-white font-bold text-base shadow-sm">
                E
              </div>
              <span className="text-lg font-bold tracking-tight text-zinc-900">Eshaare Tours</span>
            </div>
            <p className="text-sm text-zinc-500 mt-1">
              Travel & tour specialists based in Dubai, UAE. Connecting dreams into destinations.
            </p>
          </div>

          {/* Column 2: Direct Contact */}
          <div className="flex flex-col gap-3 text-sm">
            <h4 className="font-bold text-zinc-900 uppercase tracking-wider text-xs">Direct Contact</h4>
            <div className="flex flex-col gap-2 text-zinc-600">
              <a href="tel:+971557338429" className="hover:text-emerald-800 transition-colors">
                +971 55 733 8429
              </a>
              <a href="mailto:info@eshaareuae.com" className="hover:text-emerald-800 transition-colors">
                info@eshaareuae.com
              </a>
              <span className="text-zinc-500">
                Al Twar 5, Dubai, UAE
              </span>
            </div>
          </div>

          {/* Column 3: Social Links */}
          <div className="flex flex-col gap-3 text-sm">
            <h4 className="font-bold text-zinc-900 uppercase tracking-wider text-xs">Follow Us</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-zinc-600">
              <a href="https://www.instagram.com/eshaare_tours/?utm_source=qr&r=nametag" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-800 transition-colors">
                Instagram
              </a>
              <a href="https://wa.me/971557338429" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-800 transition-colors">
                WhatsApp
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-800 transition-colors">
                Facebook
              </a>
              <a href="https://www.linkedin.com/in/eshaare-tours" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-800 transition-colors">
                LinkedIn
              </a>
              <a href="https://t.me/eshaaretours" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-800 transition-colors">
                Telegram
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="max-w-5xl mx-auto px-4 border-t border-zinc-200/60 mt-8 pt-8 text-center">
          <p className="text-xs text-zinc-400">
            &copy; 2026 Eshaare Tours. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
