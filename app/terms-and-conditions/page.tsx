import React from "react";

export default function TermsAndConditions() {
  return (
    <section className="section-wrap" style={{ paddingTop: "140px", paddingBottom: "80px" }}>
      <div className="glass p-6 md:p-12" style={{ borderRadius: "28px" }}>
        <span style={{ color: "var(--mid)", letterSpacing: ".24em", fontSize: "10px", fontWeight: "700", textTransform: "uppercase" }}>
          LEGAL DOCUMENT
        </span>
        <h1 style={{ letterSpacing: "-.03em", margin: "9px 0 10px", font: "700 clamp(32px, 4vw, 48px)/1.05 Georgia, serif", color: "var(--green)" }}>
          Terms &amp; Conditions
        </h1>
        <p style={{ color: "#386b5b", fontSize: "13px", marginBottom: "30px" }}>
          Last Updated: August 24, 2026
        </p>

        <div className="text-zinc-800 space-y-6 text-sm md:text-base leading-relaxed" style={{ color: "#285f4e" }}>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">1. Landing Page Offer &amp; Scope</h2>
            <p className="mb-3">
              This landing page is operated by ESHAARE Tours &amp; Visas (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). The promotions, packages, and express services featured on this page are governed by these Terms and Conditions. By submitting your details, requesting a quote, or making a booking through this page, you agree to these terms.
            </p>
          </div>

          <hr className="border-zinc-200/60 my-6" />

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">2. Offer Validity &amp; Price Adjustments</h2>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>
                <strong>Promotional Pricing:</strong> Prices, discounts, and package inclusions listed on this page are time-sensitive and subject to availability.
              </li>
              <li>
                <strong>Price Changes:</strong> Quotes provided are valid for 48 hours from the time of issuance, after which prices may be adjusted based on airline fares, hotel availability, government visa fee updates, or exchange rate fluctuations.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">3. Lead Submissions &amp; Communication Consent</h2>
            <p className="mb-3">
              By filling out any form, lead box, or booking request on this landing page, you explicitly consent to:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Being contacted by our travel consultants via phone call, email, or WhatsApp regarding your inquiry.</li>
              <li>Receiving booking updates, itinerary details, and promotional travel communications relevant to your request. You may opt out of promotional messages at any time.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">4. Visa Application &amp; Express Processing Terms</h2>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>
                <strong>No Guarantee of Approval:</strong> ESHAARE Tours &amp; Visas acts solely as an authorized agency to submit and track your visa applications. Approval, refusal, or processing delays are determined exclusively by the relevant government immigration authorities.
              </li>
              <li>
                <strong>Document Accuracy:</strong> You are responsible for ensuring that all uploaded documents (passports, photos, financial statements) are genuine and accurate. Submission of fraudulent documents will lead to immediate cancellation without refund.
              </li>
              <li>
                <strong>Non-Refundable Fees:</strong> All government visa fees and initial service charges processed via this offer are strictly non-refundable once submitted to the immigration system.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">5. Package Bookings &amp; Cancellation Policy</h2>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>
                <strong>Initial Deposit:</strong> Bookings made via promotional offers on this page require a minimum deposit to secure hotel rates and tour slots.
              </li>
              <li>
                <strong>Cancellation Deadlines:</strong> Refund eligibility for cancelled tour packages or hotel stays depends on individual supplier and hotel policies. Detailed cancellation terms will be attached to your official invoice upon booking confirmation.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">6. Limitation of Liability</h2>
            <p className="mb-3">
              ESHAARE Tours &amp; Visas shall not be held liable for travel disruptions, flight delays, entry refusals, or extra expenses incurred due to weather conditions, government policy changes, or personal travel document errors.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">7. Governing Law</h2>
            <p className="mb-3">
              These campaign terms are governed by the laws of the Emirate of Dubai and the United Arab Emirates.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">8. Contact &amp; Verification</h2>
            <p className="mb-3">For inquiries regarding promotional offers or current bookings made through this page:</p>
            <p className="font-semibold text-zinc-950">
              ESHAARE Tours &amp; Visas<br />
              28th office, 308 room, 3rd Floor, Arzoo Building<br />
              M9-1-16th street, Al Twar 5, Dubai, United Arab Emirates<br />
              Email: <a href="mailto:info@eshaareuae.com" style={{ color: "var(--green)", textDecoration: "underline" }}>info@eshaareuae.com</a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
