"use client";

import React, { useState, useRef, useEffect } from "react";

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  date?: string;
  travellers?: string;
}

interface LeadFormProps {
  variant?: "default" | "compact";
  title?: string;
  subtitle?: string;
  idPrefix?: string;
}

export default function LeadForm({
  variant = "default",
  title,
  subtitle,
  idPrefix,
}: LeadFormProps) {
  const isCompact = variant === "compact";
  const prefix = idPrefix || (isCompact ? "hero_" : "");

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Controlled form values for instant sanitization & validation
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [travellers, setTravellers] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const formRef = useRef<HTMLFormElement>(null);

  // Today's date in YYYY-MM-DD format to prevent selecting past dates in picker
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  // Validation functions
  const validateName = (val: string): string | undefined => {
    if (!val.trim()) return "Full Name is required.";
    if (/[0-9]/.test(val)) return "Name cannot contain numbers.";
    if (/[<>{}$%^*+=@!#_~?\/\\;:]/.test(val)) return "Name contains invalid special characters.";
    if (val.trim().length < 2) return "Name must be at least 2 characters.";
    return undefined;
  };

  const validatePhone = (val: string): string | undefined => {
    if (!val.trim()) return "Phone / WhatsApp number is required.";
    if (/[a-zA-Z]/.test(val)) return "Phone number cannot contain letters.";
    const digitsOnly = val.replace(/\D/g, "");
    if (digitsOnly.length < 7) return "Please enter a valid phone number with at least 7 digits.";
    return undefined;
  };

  const validateEmail = (val: string): string | undefined => {
    if (!val.trim()) return undefined; // Email is optional
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val.trim())) return "Please enter a valid email address (e.g. name@example.com).";
    return undefined;
  };

  const validateDate = (val: string): string | undefined => {
    if (!val) return undefined;
    if (minDate && val < minDate) return "Travel date cannot be in the past.";
    return undefined;
  };

  const validateTravellers = (val: string): string | undefined => {
    if (!val) return undefined;
    const num = Number(val);
    if (isNaN(num) || num < 1 || num > 100) return "Number of travellers must be between 1 and 100.";
    return undefined;
  };

  // Sanitization on input change
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Strip digits & unallowed characters immediately as user types
    const sanitized = e.target.value.replace(/[0-9<>{}$%^*+=@!#_~?\/\\;:]/g, "");
    setName(sanitized);
    if (touched.name) {
      setErrors((prev) => ({ ...prev, name: validateName(sanitized) }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Strip letters and unallowed symbols (only allow +, -, (), spaces, numbers)
    const sanitized = e.target.value.replace(/[^0-9+\-\s()]/g, "");
    setPhone(sanitized);
    if (touched.phone) {
      setErrors((prev) => ({ ...prev, phone: validatePhone(sanitized) }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (touched.email) {
      setErrors((prev) => ({ ...prev, email: validateEmail(val) }));
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setDate(val);
    if (touched.date) {
      setErrors((prev) => ({ ...prev, date: validateDate(val) }));
    }
  };

  const handleTravellersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow digits only
    const sanitized = e.target.value.replace(/\D/g, "");
    setTravellers(sanitized);
    if (touched.travellers) {
      setErrors((prev) => ({ ...prev, travellers: validateTravellers(sanitized) }));
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Sanitize script/HTML tags
    const sanitized = e.target.value.replace(/<[^>]*>?/gm, "");
    setMessage(sanitized);
  };

  const submissionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    let err: string | undefined;
    if (field === "name") err = validateName(name);
    if (field === "phone") err = validatePhone(phone);
    if (field === "email") err = validateEmail(email);
    if (field === "date") err = validateDate(date);
    if (field === "travellers") err = validateTravellers(travellers);

    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true, date: true, travellers: true });

    const nameErr = validateName(name);
    const phoneErr = validatePhone(phone);
    const emailErr = validateEmail(email);
    const dateErr = validateDate(date);
    const travellersErr = validateTravellers(travellers);

    if (nameErr || phoneErr || emailErr || dateErr || travellersErr) {
      setErrors({
        name: nameErr,
        phone: phoneErr,
        email: emailErr,
        date: dateErr,
        travellers: travellersErr,
      });

      // Auto-scroll to first invalid input field for immediate user feedback
      const firstErrKey = nameErr ? "name" : phoneErr ? "phone" : emailErr ? "email" : dateErr ? "date" : "travellers";
      const fieldId = `${prefix}entry_${
        firstErrKey === "name"
          ? "443478634"
          : firstErrKey === "phone"
          ? "206130252"
          : firstErrKey === "email"
          ? "2131562242"
          : firstErrKey === "date"
          ? "1813414917"
          : "396078980"
      }`;
      const inputEl = document.getElementById(fieldId);
      if (inputEl) {
        inputEl.focus();
        inputEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setSubmitting(true);

    try {
      // Extract URL tracking parameters (GCLID, GBRAID, WBRAID, UTMs)
      const urlParams = new URLSearchParams(window.location.search);
      const gclid = urlParams.get("gclid") || "";
      const gbraid = urlParams.get("gbraid") || "";
      const wbraid = urlParams.get("wbraid") || "";
      const campaign = urlParams.get("utm_campaign") || urlParams.get("campaign") || "";
      const adgroup = urlParams.get("utm_content") || urlParams.get("adgroup") || "";
      const keyword = urlParams.get("utm_term") || urlParams.get("keyword") || "";

      const payload = {
        name,
        phone,
        email,
        service,
        date,
        travellers,
        message,
        source: "eshaaretours.com",
        page: typeof window !== "undefined" ? window.location.href : "",
        gclid,
        gbraid,
        wbraid,
        campaign,
        adgroup,
        keyword,
      };

      // Send to Next.js API route (/api/lead)
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        console.error("Failed to submit lead to /api/lead");
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Error submitting lead:", err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmitting(false);
    setName("");
    setPhone("");
    setEmail("");
    setService("");
    setDate("");
    setTravellers("");
    setMessage("");
    setErrors({});
    setTouched({});
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  // Helper to build a pre-filled WhatsApp link with the user's form input
  const getWhatsAppLink = () => {
    const textParts = ["Hi Eshaare Tours, I would like to enquire:"];
    if (name) textParts.push(`• Name: ${name}`);
    if (phone) textParts.push(`• Phone: ${phone}`);
    if (service) textParts.push(`• Service: ${service}`);
    if (date) textParts.push(`• Travel Date: ${date}`);
    if (travellers) textParts.push(`• Travellers: ${travellers}`);
    if (message) textParts.push(`• Message: ${message}`);

    const messageText = textParts.join("\n");
    return `https://wa.me/971557338429?text=${encodeURIComponent(messageText)}`;
  };

  const headerTitle = title || (isCompact ? "Plan Your Trip" : "Send Us a Message");
  const headerSubtitle =
    subtitle ||
    (isCompact
      ? "Get a fast custom quote & expert guidance."
      : "Fill in your details below and our travel specialists will reach out with personalized guidance.");

  return (
    <div className={`lead-form-container ${isCompact ? "compact" : ""}`}>
      {submitted ? (
        <div className="lead-form-success">
          <div className="success-icon-wrap">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3>Enquiry Received!</h3>
          <p>
            Thank you for reaching out to <strong>Eshaare Tours</strong>. Our team has received your details and will get back to you shortly via WhatsApp or Email.
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "16px" }}>
            <a
              href="https://wa.me/971557338429?text=Hi%20Eshaare%20Tours,%20I%20just%20submitted%20an%20enquiry%20on%20your%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="pill whatsapp-btn small"
            >
              💬 Chat on WhatsApp Now
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="lead-form-reset-btn"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`lead-form ${isCompact ? "compact" : ""}`}
          noValidate
        >

          <div className="lead-form-header">
            <h3>{headerTitle}</h3>
            <p>{headerSubtitle}</p>
          </div>

          <div className="lead-form-grid">
            {/* Full Name */}
            <div className="lead-form-group">
              <label htmlFor={`${prefix}entry_443478634`}>
                Full Name <span className="req">*</span>
              </label>
              <div className="input-with-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  type="text"
                  id={`${prefix}entry_443478634`}
                  name="entry.443478634"
                  value={name}
                  onChange={handleNameChange}
                  onBlur={() => handleBlur("name")}
                  placeholder="e.g. Sarah Ahmed"
                  className={errors.name ? "has-error" : ""}
                  required
                />
              </div>
              {errors.name && (
                <span className="field-error-msg">
                  ⚠️ {errors.name}
                </span>
              )}
            </div>

            {/* Phone / WhatsApp */}
            <div className="lead-form-group">
              <label htmlFor={`${prefix}entry_206130252`}>
                WhatsApp / Phone <span className="req">*</span>
              </label>
              <div className="input-with-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 5.93 5.93l.88-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.27 16.92z" />
                </svg>
                <input
                  type="tel"
                  id={`${prefix}entry_206130252`}
                  name="entry.206130252"
                  value={phone}
                  onChange={handlePhoneChange}
                  onBlur={() => handleBlur("phone")}
                  placeholder="e.g. +971 55 123 4567"
                  className={errors.phone ? "has-error" : ""}
                  required
                />
              </div>
              {errors.phone && (
                <span className="field-error-msg">
                  ⚠️ {errors.phone}
                </span>
              )}
            </div>

            {/* Email Address */}
            <div className="lead-form-group">
              <label htmlFor={`${prefix}entry_2131562242`}>Email Address</label>
              <div className="input-with-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                <input
                  type="email"
                  id={`${prefix}entry_2131562242`}
                  name="entry.2131562242"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={() => handleBlur("email")}
                  placeholder="e.g. sarah@example.com"
                  className={errors.email ? "has-error" : ""}
                />
              </div>
              {errors.email && (
                <span className="field-error-msg">
                  ⚠️ {errors.email}
                </span>
              )}
            </div>

            {/* Service / Destination Interested In */}
            <div className="lead-form-group">
              <label htmlFor={`${prefix}entry_255498024`}>Service Interested In</label>
              <div className="input-with-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <select
                  id={`${prefix}entry_255498024`}
                  name="entry.255498024"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="" disabled>Select an option</option>
                  <option value="Desert Safaris & Dunes">Desert Safaris &amp; Dunes</option>
                  <option value="Modern City Explorations">Modern City Explorations</option>
                  <option value="Historic Dubai & Creek Tours">Historic Dubai &amp; Creek Tours</option>
                  <option value="Tailored Private Journeys">Tailored Private Journeys</option>
                  <option value="Visa Assistance">Visa Assistance</option>
                  <option value="General Enquiry">General Enquiry / Other</option>
                </select>
              </div>
            </div>

            {/* Preferred Travel Date */}
            <div className="lead-form-group">
              <label htmlFor={`${prefix}entry_1813414917`}>Travel Date</label>
              <div className="input-with-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <input
                  type="date"
                  id={`${prefix}entry_1813414917`}
                  name="entry.1813414917"
                  min={minDate}
                  value={date}
                  onChange={handleDateChange}
                  onBlur={() => handleBlur("date")}
                  className={errors.date ? "has-error" : ""}
                />
              </div>
              {errors.date && (
                <span className="field-error-msg">
                  ⚠️ {errors.date}
                </span>
              )}
            </div>

            {/* Number of Travellers */}
            <div className="lead-form-group">
              <label htmlFor={`${prefix}entry_396078980`}>Travellers</label>
              <div className="input-with-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-3-3.87" /><path d="M9 21v-2a4 4 0 0 1 3-3.87" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 1 0 7.75" />
                </svg>
                <input
                  type="number"
                  id={`${prefix}entry_396078980`}
                  name="entry.396078980"
                  min="1"
                  max="100"
                  value={travellers}
                  onChange={handleTravellersChange}
                  onBlur={() => handleBlur("travellers")}
                  placeholder="e.g. 2"
                  className={errors.travellers ? "has-error" : ""}
                />
              </div>
              {errors.travellers && (
                <span className="field-error-msg">
                  ⚠️ {errors.travellers}
                </span>
              )}
            </div>

            {/* Additional Message / Requirements */}
            <div className="lead-form-group full-width">
              <label htmlFor={`${prefix}entry_170967574`}>Requirements / Message</label>
              <textarea
                id={`${prefix}entry_170967574`}
                name="entry.170967574"
                rows={isCompact ? 2 : 4}
                value={message}
                onChange={handleMessageChange}
                placeholder="Tell us about special requests or questions..."
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
            <button
              type="submit"
              className={`lead-form-submit-btn ${submitting ? "is-submitting" : ""}`}
              style={{ pointerEvents: submitting ? "none" : "auto" }}
            >
              {submitting ? (
                <span className="submit-btn-content">
                  <span className="spinner" /> Sending Enquiry...
                </span>
              ) : (
                <span className="submit-btn-content">
                  <span>Submit Enquiry</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              )}
            </button>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="pill whatsapp-btn"
              style={{ width: "100%", justifyContent: "center", textDecoration: "none", fontSize: "14px" }}
              aria-label="Enquire directly via WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Or Enquire via WhatsApp Direct</span>
            </a>
          </div>

          <p className="lead-form-footer-note">
            🔒 We respect your privacy. Your information will only be used to respond to your travel enquiry.
          </p>
        </form>
      )}
    </div>
  );
}
