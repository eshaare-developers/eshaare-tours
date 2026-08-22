import React from "react";

export default function RefundAndCancellationPolicy() {
  return (
    <section className="section-wrap" style={{ paddingTop: "140px", paddingBottom: "80px" }}>
      <div className="glass p-6 md:p-12" style={{ borderRadius: "28px" }}>
        <span style={{ color: "var(--mid)", letterSpacing: ".24em", fontSize: "10px", fontWeight: "700", textTransform: "uppercase" }}>
          LEGAL DOCUMENT
        </span>
        <h1 style={{ letterSpacing: "-.03em", margin: "9px 0 10px", font: "700 clamp(32px, 4vw, 48px)/1.05 Georgia, serif", color: "var(--green)" }}>
          Refund &amp; Cancellation Policy
        </h1>
        <p style={{ color: "#386b5b", fontSize: "13px", marginBottom: "30px" }}>
          Last Updated: 22 August 2026
        </p>

        <div className="text-zinc-800 space-y-6 text-sm md:text-base leading-relaxed" style={{ color: "#285f4e" }}>
          <p>
            This Refund &amp; Cancellation Policy applies to services purchased from Eshaare Tours FZE LLC.
          </p>
          <p>
            By making a payment or authorising Eshaare Tours to proceed with a service, the customer agrees to this policy together with our Terms &amp; Conditions.
          </p>

          <hr className="border-zinc-200/60 my-6" />

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">1. Visa Assistance and Documentation Services</h2>
            <p className="mb-2">
              Eshaare Tours charges professional service fees for work including consultation, documentation review, application preparation, form completion, itinerary preparation, appointment assistance and related services.
            </p>
            <p className="mb-2 font-semibold">
              Once Eshaare Tours has commenced substantive work on a customer&apos;s case, the applicable professional service fee may become non-refundable.
            </p>
            <p className="mb-2">This applies even if the customer later:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Cancels the application / Fails to submit the application</li>
              <li>Changes their travel plans / destination / Decides not to travel</li>
              <li>Fails to attend an appointment / Withdraws an application</li>
              <li>Receives a visa refusal</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">2. Visa Refusals</h2>
            <p className="mb-2">
              Visa issuance is exclusively controlled by the relevant embassy, consulate, immigration authority or other competent authority.
            </p>
            <p>
              A visa refusal does not automatically entitle the customer to a refund of Eshaare Tours&apos; service fee, because the professional services may already have been performed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">3. Government, Embassy and Visa Centre Fees</h2>
            <p className="mb-2">Fees paid to third parties such as:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Embassies / Consulates / Immigration authorities</li>
              <li>VFS Global / BLS International / TLScontact / Other visa application centres</li>
            </ul>
            <p className="mt-3">
              are subject to the rules of the organisation receiving the payment and are generally outside the control of Eshaare Tours. Where those organisations classify a fee as non-refundable, Eshaare Tours cannot refund that amount.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">4. Appointment Assistance</h2>
            <p className="mb-2">
              Fees for appointment-related assistance may become non-refundable once appointment-search, monitoring, coordination or booking work has commenced.
            </p>
            <p className="mb-2">Appointment availability cannot be guaranteed.</p>
            <p>
              Failure to obtain a customer&apos;s preferred appointment date does not automatically create a refund entitlement where the agreed appointment-assistance service has already been performed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">5. Flight Tickets</h2>
            <p className="mb-2">
              Flight-ticket refunds, cancellations and changes are subject to the airline&apos;s fare rules. Depending on the fare purchased, a ticket may be:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Refundable / Partially refundable</li>
              <li>Non-refundable</li>
              <li>Changeable with a fee / Non-changeable</li>
            </ul>
            <p className="mt-3">
              Any applicable airline cancellation penalties, fare differences, supplier charges and Eshaare service charges will be deducted from an eligible refund.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">6. Hotel Reservations</h2>
            <p className="mb-2">
              Hotel cancellations are subject to the cancellation terms attached to the specific reservation. Depending on the rate booked, a reservation may be:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Free cancellation before a stated deadline</li>
              <li>Partially refundable</li>
              <li>Non-refundable</li>
            </ul>
            <p className="mt-3">Cancellation charges imposed by the hotel or booking supplier will apply.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">7. Tour Packages</h2>
            <p className="mb-2">
              Tour and holiday package cancellation conditions may depend on hotels, airlines, transport providers, attractions, destination management companies, tour operators, and other suppliers.
            </p>
            <p className="mb-2">
              The specific quotation, invoice or booking confirmation may contain additional cancellation conditions.
            </p>
            <p>Where supplier services have already been confirmed or paid, the corresponding amount may be non-refundable.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">8. Travel Insurance</h2>
            <p>
              Travel insurance premiums and cancellations are subject to the terms of the relevant insurer. Eshaare Tours cannot override an insurer&apos;s refund or cancellation conditions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">9. Customer-Initiated Cancellation</h2>
            <p className="mb-2">
              Customers who wish to cancel a service should contact Eshaare Tours as soon as possible through an official communication channel.
            </p>
            <p className="mb-2">
              Cancellation becomes effective once it has been received and acknowledged by Eshaare Tours.
            </p>
            <p className="text-sm italic">
              Simply failing to respond, failing to provide documents or failing to attend an appointment does not constitute a valid cancellation request.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">10. Services Already Performed</h2>
            <p className="mb-2">
              Amounts relating to services already completed or substantially commenced are generally non-refundable to the extent permitted by applicable law. This includes:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Consultations or document reviews completed</li>
              <li>Forms, applications, cover letters or itineraries prepared</li>
              <li>Appointment work commenced</li>
              <li>Supplier bookings processed / Administrative work completed</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">11. Duplicate or Incorrect Payments</h2>
            <p className="mb-2">
              If a customer believes that they have made a duplicate or incorrect payment, or a payment for the wrong invoice, they should contact Eshaare Tours promptly with the transaction details.
            </p>
            <p>Verified duplicate or erroneous payments will be reviewed and, where appropriate, corrected or refunded.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">12. Refund Processing</h2>
            <p className="mb-2">
              Where a refund is approved, it may be reduced by applicable supplier cancellation charges, airline/hotel penalties, government charges, payment-processing charges, and administrative or contractual charges.
            </p>
            <p>
              The refund will generally be made using an appropriate available payment method, subject to provider and banking procedures.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">13. Processing Time</h2>
            <p>
              Refund processing times can vary depending on the airline, hotel, travel supplier, payment provider, bank, and card network. Third-party processing times are outside Eshaare Tours&apos; direct control.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">14. Unused Services</h2>
            <p className="mb-2">
              A customer is not automatically entitled to a refund for voluntarily unused services after a trip or service has commenced. This includes situations where the customer chooses not to use a confirmed hotel, transfer, tour, attraction, flight sector, or other travel component.
            </p>
            <p>Any refund will depend on the supplier&apos;s applicable conditions.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">15. Force Majeure and Supplier Cancellations</h2>
            <p className="mb-2">
              Where a service is cancelled due to events outside the reasonable control of Eshaare Tours, any refund or credit will depend on amounts recoverable from the relevant suppliers and applicable law.
            </p>
            <p>
              Such circumstances may include natural disasters, war, government restrictions, border closures, strikes, severe weather, public-health emergencies, airline cancellations, embassy closures, or other extraordinary circumstances.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">16. Chargebacks</h2>
            <p>
              Customers should contact Eshaare Tours first if they believe there is an error with a transaction. Submitting an unjustified or fraudulent payment chargeback after services have been supplied may result in Eshaare Tours providing the relevant booking, communication, payment and service records to the payment provider or financial institution handling the dispute.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">17. Policy Acceptance</h2>
            <p>
              Payment to Eshaare Tours constitutes acknowledgement of the terms associated with the applicable service, including this Refund &amp; Cancellation Policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 mt-6 mb-3 font-serif">18. Contact Us</h2>
            <p className="mb-2">For cancellation or refund enquiries, please contact:</p>
            <p className="font-semibold text-zinc-950">
              Eshaare Tours FZE LLC<br />
              United Arab Emirates<br />
              Email: info@eshaareuae.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
