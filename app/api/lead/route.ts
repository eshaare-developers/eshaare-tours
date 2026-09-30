import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const requestData = await req.json();

    // 1. Separate Name (Full name, First name, Last name)
    const fullName = requestData.name || requestData.fullName || requestData.contactName || "";
    const nameParts = fullName.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    // 2. Map data to the new Google Ads Lead Capture Template
    const sheetPayload = {
      "Lead ID": "LEAD-" + Date.now(),
      "Conversion date/time": new Date().toISOString(),
      "Time zone": "Asia/Dubai",
      "Transaction ID": "",
      "Google Click ID (GCLID)": requestData.gclid || "",
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
      "User agent": req.headers.get("user-agent") || "",
      "Session ID": "",
      "Landing page URL": requestData.page || req.headers.get("referer") || "",
      "Form page URL": req.headers.get("referer") || "",
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
    const googleScriptUrl =
      process.env.GOOGLE_SCRIPT_URL ||
      "https://script.google.com/macros/s/AKfycbye3wBfBhKH3R2JqK_auLlhdpI7cKUT1yaTkoNUYBMDSAWS4yCIkTp4aKRrrZ1tIMahHg/exec";

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sheetPayload),
    });

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully to Google Sheet!",
    });
  } catch (error) {
    console.error("Error submitting lead:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error while submitting lead.",
      },
      { status: 500 }
    );
  }
}
