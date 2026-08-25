import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="section-wrap" style={{ paddingTop: "140px", paddingBottom: "80px" }}>
      <div className="glass p-6 md:p-12" style={{ borderRadius: "28px" }}>
        <span style={{ color: "var(--mid)", letterSpacing: ".24em", fontSize: "10px", fontWeight: "700", textTransform: "uppercase" }}>
          LEGAL DOCUMENT
        </span>
        <h1 style={{ letterSpacing: "-.03em", margin: "9px 0 10px", font: "700 clamp(32px, 4vw, 48px)/1.05 Georgia, serif", color: "var(--green)" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "#386b5b", fontSize: "13px", marginBottom: "30px" }}>
          Last Updated: August 24, 2026
        </p>

        <div className="text-zinc-800 space-y-6 text-sm md:text-base leading-relaxed" style={{ color: "#285f4e" }}>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">1. Introduction</h2>
            <p className="mb-3">
              Welcome to ESHAARE Tours &amp; Visas (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our landing page, submit an inquiry, or purchase visa and travel services from us.
            </p>
          </div>

          <hr className="border-zinc-200/60 my-6" />

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">2. Information We Collect</h2>
            <p className="mb-3">
              We collect personal information that you voluntarily provide when inquiring about our services or filling out forms on this landing page:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>
                <strong>Contact &amp; Personal Data:</strong> Full name, email address, phone number, and WhatsApp contact details.
              </li>
              <li>
                <strong>Travel &amp; Visa Documentation:</strong> Passport copies, nationality, travel dates, destination details, and visa requirements necessary for application processing.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type, device information, and interaction data collected automatically via cookies or tracking pixels (e.g., Google Ads, Meta Pixel) when you interact with our landing page.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">3. How We Use Your Information</h2>
            <p className="mb-3">We process your personal data for specific business purposes, including:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>
                <strong>Service Fulfillment:</strong> Processing visa applications, processing travel bookings, and fulfilling requests submitted through the landing page.
              </li>
              <li>
                <strong>Direct Communication:</strong> Contacting you via call, email, or WhatsApp regarding your inquiry, booking confirmations, or status updates.
              </li>
              <li>
                <strong>Marketing &amp; Analytics:</strong> Measuring ad campaign performance, optimizing user experience, and providing relevant travel offers (you can opt out of promotional communications at any time).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">4. Data Sharing &amp; Third Parties</h2>
            <p className="mb-3">
              We do not sell your personal data. We only share your information with trusted third parties necessary to complete your travel services:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>
                <strong>Government &amp; Immigration Authorities:</strong> Required passport details and documents are submitted to immigration departments for visa processing.
              </li>
              <li>
                <strong>Travel Suppliers:</strong> Airlines, hotels, and tour operators involved in fulfilling your itinerary.
              </li>
              <li>
                <strong>Service Providers:</strong> IT, analytics, and messaging vendors who support our landing page operations and customer communications under strict confidentiality agreements.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">5. Data Security &amp; Retention</h2>
            <p className="mb-3">
              We implement industry-standard technical and organizational security measures to protect your personal information against unauthorized access, loss, or misuse. We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">6. Your Rights</h2>
            <p className="mb-3">
              Depending on applicable laws, you have the right to request access to, correction of, or deletion of your personal data held by us. To exercise any of these rights, please contact us using the details below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">7. Contact Us</h2>
            <p className="mb-3">If you have questions or concerns regarding this Privacy Policy or our data practices, please contact us:</p>
            <p className="font-semibold text-zinc-950">
              ESHAARE Tours &amp; Visas<br />
              28th office, 308 room, 3rd Floor, Arzoo Building<br />
              M9-1-16th street, Al Twar 5<br />
              Dubai, United Arab Emirates<br />
              Email: <a href="mailto:info@eshaareuae.com" style={{ color: "var(--green)", textDecoration: "underline" }}>info@eshaareuae.com</a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
