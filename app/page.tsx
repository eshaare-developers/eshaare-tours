import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 font-sans">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo placeholder */}
            <div className="w-8 h-8 rounded bg-zinc-900 dark:bg-white flex items-center justify-center">
              <span className="text-white dark:text-zinc-900 font-extrabold text-sm">ET</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Eshaare Tours</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-12 md:py-16 flex flex-col gap-12">
        {/* Intro Section */}
        <section className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Curated Journeys in Dubai
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Welcome to Eshaare Tours. We are a Dubai-based tour package company preparing to launch a range of carefully curated travel experiences. Our team is currently designing unique journeys to help you explore the best of Dubai, and we look forward to welcoming you soon.
          </p>
        </section>

        {/* Planned Packages Section */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight">Planned Tour Packages</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Here is a preview of the upcoming travel experiences we are currently planning:
          </p>
          <ul className="mt-2 space-y-3 pl-1">
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 flex-shrink-0" />
              <span className="font-medium">Desert Safaris & Dunes</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 flex-shrink-0" />
              <span className="font-medium">Modern City Explorations</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 flex-shrink-0" />
              <span className="font-medium">Historic Dubai & Creek Tours</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 flex-shrink-0" />
              <span className="font-medium">Tailored Private Journeys</span>
            </li>
          </ul>
        </section>

        {/* Google Form Section */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight">Get in Touch</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Have questions or want to inquire about our upcoming tours? Fill out our pre-launch enquiry form below:
          </p>
          <div className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden p-1">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf_xxxx/viewform?embedded=true"
              width="100%"
              height="600"
              title="Eshaare Tours Enquiry Form"
              className="w-full rounded-lg bg-white dark:bg-zinc-900"
              style={{ border: "none" }}
            >
              Loading…
            </iframe>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            &copy; 2026 Eshaare Tours. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
