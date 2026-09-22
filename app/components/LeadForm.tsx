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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setTouched({ name: true, phone: true, email: true, date: true, travellers: true });

    const nameErr = validateName(name);
    const phoneErr = validatePhone(phone);
    const emailErr = validateEmail(email);
    const dateErr = validateDate(date);
    const travellersErr = validateTravellers(travellers);

    if (nameErr || phoneErr || emailErr || dateErr || travellersErr) {
      e.preventDefault();
      setErrors({
        name: nameErr,
        phone: phoneErr,
        email: emailErr,
        date: dateErr,
        travellers: travellersErr,
      });
      return;
    }

    setSubmitting(true);
  };

  const handleIframeLoad = () => {
    if (submitting) {
      setSubmitting(false);
      setSubmitted(true);
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

  const iframeName = `${prefix}hidden_google_form_iframe`;
  const headerTitle = title || (isCompact ? "Plan Your Trip" : "Send Us a Message");
  const headerSubtitle =
    subtitle ||
    (isCompact
      ? "Get a fast custom quote & expert guidance."
      : "Fill in your details below and our travel specialists will reach out with personalized guidance.");

  return (
    <div className={`lead-form-container ${isCompact ? "compact" : ""}`}>
      {/* Hidden iframe to capture Google Form submission without redirecting */}
      <iframe
        name={iframeName}
        id={iframeName}
        style={{ display: "none" }}
        onLoad={handleIframeLoad}
      />

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
          <button
            type="button"
            onClick={handleReset}
            className="lead-form-reset-btn"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form
          ref={formRef}
          action="https://docs.google.com/forms/d/e/1FAIpQLSc0EcaYqBnvPZ24iw-d6E736syWGROtOAUbJEPrslLQ5ezHWg/formResponse"
          method="POST"
          target={iframeName}
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

          <button type="submit" className="lead-form-submit-btn" disabled={submitting}>
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

          <p className="lead-form-footer-note">
            🔒 We respect your privacy. Your information will only be used to respond to your travel enquiry.
          </p>
        </form>
      )}
    </div>
  );
}
