export const config = {
  maxDuration: 10,
};

const LYZR_API_KEY = process.env.LYZR_API_KEY;
const LYZR_ENDPOINT = process.env.LYZR_ENDPOINT || "https://agent-prod.studio.lyzr.ai/v3/inference/chat/";
const LYZR_USER_ID = process.env.LYZR_USER_ID;
const LYZR_AGENT_ID = process.env.LYZR_AGENT_ID;

const PORTFOLIO_CONTEXT = `About: Adhithiyan Prabaharan — Full-Stack Developer, B.Tech Computer Science and Business Systems (CSBS) student at Jansons Institute of Technology, India. Tagline: "Building Digital Products That Solve Real Problems." Contact: email adhithiyanprabaharan@gmail.com, GitHub https://github.com/adhithyan2, LinkedIn https://www.linkedin.com/in/adhithyan-prabaharan-bb9632318.

Projects:
- QueueBook (featured, Full-Stack Web Application): Appointment and queue management platform with live queue status, estimated waiting time, customer and business dashboards, QR-based queue info. Stack: React.js, Vite, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase/JWT, Socket.IO.
- Namma Uzhavan (Smart Agriculture): Agriculture-focused digital platform providing technology-driven solutions and agricultural information for farmers.
- FAC — Facial Attendance Checker (AI/Computer Vision): Facial recognition based attendance system using computer vision. Stack: Python, OpenCV, Face Recognition.
- AI Meeting Buddy (Artificial Intelligence): AI-powered assistant that captures, organizes, and processes meeting information. Stack: Python, AI/ML, APIs.
- TemplateMind AI (AI/Document Technology): AI-powered PDF editing that preserves fonts, alignment, colors, tables, headers, footers, and layout. Stack: React, Tailwind, Python, FastAPI, PyMuPDF, pdfplumber, ReportLab.
- Smart Traffic Management System (Smart City/AI): Intelligent systems to improve traffic flow and urban transportation.

Skills: Programming Python, Java, C++, JavaScript. Frontend React.js, Vite, Tailwind CSS, HTML, CSS, React Router, Framer Motion. Backend Node.js, Express.js, REST APIs. Database MongoDB, MySQL. Tools Git, GitHub, Firebase, VS Code. Interests Full-Stack Development, AI, ML, UI/UX, Automation, Open Source.

Journey: Programming fundamentals -> Python/Java/C++ -> Databases and web development -> Real-world applications -> Full-stack projects -> AI, automation, and open source.

Mission: Building useful software and an open-source freelancer ecosystem so developers can turn ideas into real digital products.`;

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

  const missing = ["LYZR_API_KEY", "LYZR_USER_ID", "LYZR_AGENT_ID"].filter(
    (k) => !process.env[k]
  );

  if (missing.length > 0) {
    res.status(500).json({
      error: `Server not configured. Missing env vars on Vercel: ${missing.join(", ")}. Add them in Vercel → Settings → Environment Variables, then redeploy.`,
    });
    return;
  }

  try {
    const enrichedMessage = `You are "Adhi", the AI assistant for Adhithiyan Prabaharan's portfolio website.\n\nUse the following portfolio information to answer questions accurately. If something is not in this context, say you don't know rather than inventing facts.\n\n---PORTFOLIO CONTEXT START---\n${PORTFOLIO_CONTEXT}\n---PORTFOLIO CONTEXT END---\n\nUser question: ${message}`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);

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

    let data;
    try {
      data = await upstream.json();
    } catch {
      const raw = await upstream.text();
      console.error("Non-JSON Lyzr response", raw.slice(0, 500));
      data = { response: raw };
    }
    res.status(200).json(data);
  } catch (err) {
    console.error("chat proxy error", err);
    res.status(500).json({
      error:
        err.code === "ABORT_ERR"
          ? "The agent took too long to respond. Please try again."
          : err.message,
    });
  }
}