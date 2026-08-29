const SESSION_KEY = "adhi_chat_session_id";

export function getSessionId() {
  if (typeof window === "undefined") return "";
  try {
    let id = window.localStorage.getItem(SESSION_KEY);
    if (!id) {
      id =
        window.crypto?.randomUUID?.() ||
        `visitor-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
      window.localStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return `visitor-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  }
}

export const lyzr = {
  endpoint: "/api/chat",
  userId: "",
  agentId: "",
};