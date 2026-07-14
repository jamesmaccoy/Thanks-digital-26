const { getFirestore } = require("../_lib/firebase");

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ status: false, data: "Method not allowed" });
  }

  const { name, email, company, service, budget, message } = req.body || {};

  // Simple validation
  if (!name || typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ status: false, data: "Name is required" });
  }
  if (!email || typeof email !== "string" || !email.trim()) {
    return res.status(400).json({ status: false, data: "Email is required" });
  }
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({ status: false, data: "Invalid email format" });
  }
  if (!service || typeof service !== "string" || !service.trim()) {
    return res.status(400).json({ status: false, data: "Service type is required" });
  }
  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ status: false, data: "Project details are required" });
  }

  try {
    const db = getFirestore();
    
    const inquiryData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: typeof company === "string" ? company.trim() : "",
      service: service.trim(),
      budget: typeof budget === "string" ? budget.trim() : "",
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    const docRef = await db.collection("inquiries").add(inquiryData);

    return res.status(200).json({
      status: true,
      data: {
        id: docRef.id,
        message: "Inquiry successfully submitted",
      },
    });
  } catch (error) {
    console.error("Firestore contact form error:", error);
    return res.status(500).json({
      status: false,
      data: error.message || "Failed to save inquiry",
    });
  }
}
