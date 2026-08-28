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

  if (!message || !LYZR_API_KEY) {
    res.status(400).json({ error: "Missing message or server config" });
    return;
  }

  try {
    const upstream = await fetch(LYZR_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": LYZR_API_KEY,
      },
      body: JSON.stringify({
        user_id: LYZR_USER_ID,
        agent_id: LYZR_AGENT_ID,
        session_id: session_id || `${LYZR_AGENT_ID}-${Date.now()}`,
        message,
      }),
    });

    const data = await upstream.json();
    res.status(upstream.status).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}