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

  const { email, source } = req.body || {};

  if (!email || typeof email !== "string" || !email.trim()) {
    return res.status(400).json({ status: false, data: "Email is required" });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({ status: false, data: "Invalid email format" });
  }

  try {
    const db = getFirestore();
    const emailLower = email.trim().toLowerCase();

    // Check if user is already subscribed
    const existing = await db
      .collection("subscribers")
      .where("email", "==", emailLower)
      .limit(1)
      .get();

    if (!existing.empty) {
      return res.status(200).json({
        status: true,
        data: {
          message: "You're already subscribed!",
        },
      });
    }

    const subscriberData = {
      email: emailLower,
      source: typeof source === "string" ? source.trim() : "unknown",
      subscribedAt: new Date().toISOString(),
    };

    const docRef = await db.collection("subscribers").add(subscriberData);

    return res.status(200).json({
      status: true,
      data: {
        id: docRef.id,
        message: "Successfully subscribed to the newsletter!",
      },
    });
  } catch (error) {
    console.error("Firestore newsletter subscription error:", error);
    return res.status(500).json({
      status: false,
      data: error.message || "Failed to subscribe",
    });
  }
}
