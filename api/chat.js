import { buildPortfolioContext } from "../src/data/portfolioContext.js";

export const config = {
  maxDuration: 60,
};

const LYZR_API_KEY = process.env.LYZR_API_KEY;
const LYZR_ENDPOINT = process.env.LYZR_ENDPOINT || "https://agent-prod.studio.lyzr.ai/v3/inference/chat/";
const LYZR_USER_ID = process.env.LYZR_USER_ID;
const LYZR_AGENT_ID = process.env.LYZR_AGENT_ID;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { message, session_id } = req.body;

  if (!message) {
    res.status(400).json({ error: "Missing message in request body" });
    return;
  }

  const missing = [
    "LYZR_API_KEY",
    "LYZR_USER_ID",
    "LYZR_AGENT_ID",
  ].filter((k) => !process.env[k]);

  if (missing.length > 0) {
    res.status(500).json({
      error: `Server not configured. Missing env vars on Vercel: ${missing.join(", ")}. Add them in Vercel → Settings → Environment Variables, then redeploy.`,
    });
    return;
  }

  try {
    const context = buildPortfolioContext();
    const enrichedMessage = `You are "Adhi", the AI assistant for Adhithiyan Prabaharan's portfolio website.\n\nUse the following portfolio information to answer the user's questions accurately. If you are asked something not in this context, answer honestly that you don't know rather than inventing facts.\n\n---PORTFOLIO CONTEXT START---\n${context}\n---PORTFOLIO CONTEXT END---\n\nUser question: ${message}`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 55000);

    let upstream;
    try {
      upstream = await fetch(LYZR_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": LYZR_API_KEY,
        },
        body: JSON.stringify({
          user_id: LYZR_USER_ID,
          agent_id: LYZR_AGENT_ID,
          session_id: session_id || `${LYZR_AGENT_ID}-${Date.now()}`,
          message: enrichedMessage,
        }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }

    if (!upstream.ok) {
      const errText = await upstream.text();
      console.error("Lyzr upstream error", upstream.status, errText);
      res.status(upstream.status).json({
        error: `Lyzr upstream error (${upstream.status})`,
        detail: errText.slice(0, 500),
      });
      return;
    }

    const data = await upstream.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("chat proxy error", err);
    res.status(500).json({
      error: err.code === "ABORT_ERR" ? "The agent took too long to respond. Please try again." : err.message,
    });
  }
}