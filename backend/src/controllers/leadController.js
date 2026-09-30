exports.submitLead = async (req, res) => {
  try {
    const requestData = req.body || {};

    // 1. Separate Name (Full name, First name, Last name)
    const fullName = requestData.name || requestData.fullName || requestData.contactName || '';
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // 2. Map data to the new Google Ads Lead Capture Template
    const sheetPayload = {
      "Lead ID": "LEAD-" + Date.now(),
      "Conversion date/time": new Date().toISOString(),
      "Time zone": "Asia/Dubai",
      "Transaction ID": "",
      "Google Click ID (GCLID)": requestData.gclid || req.query?.gclid || "",
      "GBRAID": requestData.gbraid || "",
      "WBRAID": requestData.wbraid || "",
      "Conversion name": "Website Lead Submission",
      "Conversion value": "",
      "Currency": "AED",
      "Lead source": requestData.source || "eshaaretours.com",
      "Full name": fullName,
      "First name": firstName,
      "Last name": lastName,
      "Email": requestData.email || requestData.contactEmail || "",
      "Phone": requestData.phone || requestData.contactPhone || "",
      "Street address": requestData.address || "",
      "City": requestData.city || "",
      "Region/State": requestData.emirate || requestData.region || "",
      "Postal code": "",
      "Country code": "AE",
      "Ad user data consent": "",
      "Ad personalization consent": "",
      "User agent": req.headers['user-agent'] || "",
      "Session ID": "",
      "Landing page URL": requestData.page || req.headers.referer || "",
      "Form page URL": req.headers.referer || "",
      "Campaign": requestData.campaign || "",
      "Ad group": requestData.adgroup || "",
      "Keyword": requestData.keyword || "",
      "Service interested": requestData.service || requestData.visaType || requestData.subject || requestData.destination || "",
      "Lead status": "New",
      "Notes": requestData.message || requestData.notes || "",
      "Ready to upload?": "Yes",
      "Issues": ""
    };

    // 3. Post data to Google Apps Script Webhook
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL || "hhttps://script.google.com/macros/s/AKfycbye3wBfBhKH3R2JqK_auLlhdpI7cKUT1yaTkoNUYBMDSAWS4yCIkTp4aKRrrZ1tIMahHg/exec";
    
    await fetch(googleScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sheetPayload)
    });

    return res.status(200).json({
      success: true,
      message: "Lead submitted successfully to Google Sheet!"
    });

  } catch (error) {
    console.error("Error submitting lead:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error while submitting lead."
    });
  }
};
