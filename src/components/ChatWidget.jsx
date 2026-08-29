import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";
import { lyzr, getSessionId } from "../config/lyzr";
import { useTheme } from "../hooks/useTheme";

const WELCOME = {
  role: "assistant",
  content: "Hi! I'm Adhithiyan's AI assistant. Ask me about his projects, skills, or anything about his work!",
};

const QUICK_REPLIES = [
  "What projects have you built?",
  "What are your technical skills?",
  "Tell me about your background",
  "How can I contact you?",
];

export default function ChatWidget() {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const userMsg = { role: "user", content: text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(lyzr.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          session_id: getSessionId(),
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`API error ${res.status}: ${errText.slice(0, 200)}`);
      }

      const data = await res.json();
      const reply = data?.response || data?.message || data?.content || JSON.stringify(data);
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: `Sorry, I couldn't reach the agent: ${err.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className={`fixed bottom-24 right-5 md:right-6 z-[90] w-[calc(100vw-2.5rem)] max-w-[380px] rounded-2xl overflow-hidden shadow-2xl ${
              theme === "dark"
                ? "bg-[#111113] border border-white/[0.1]"
                : "bg-white border border-black/[0.1] shadow-black/20"
            }`}
          >
            <div className={`flex items-center justify-between px-4 py-3 border-b ${
              theme === "dark" ? "bg-[#1A1A1D] border-white/[0.06]" : "bg-[#F0F0F2] border-black/[0.06]"
            }`}>
              <div>
                <p className="text-sm font-bold">Portfolio AI</p>
                <p className={`text-xs ${theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"}`}>
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mr-1 animate-pulse" />
                  Ask me anything
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            <div className={`h-[380px] overflow-y-auto p-4 space-y-3 ${
              theme === "dark" ? "bg-[#111113]" : "bg-[#F8F9FA]"
            }`}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-primary text-[#0A0A0B] rounded-br-md font-medium"
                        : theme === "dark"
                        ? "bg-white/[0.08] text-white rounded-bl-md"
                        : "bg-white text-[#0A0A0B] shadow-sm rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {messages.length === 1 && !loading && (
                <div className="flex flex-wrap gap-2 pb-1">
                  {QUICK_REPLIES.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => sendMessage(q)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                        theme === "dark"
                          ? "bg-white/[0.04] border-white/[0.1] text-[#8A8A8E] hover:border-primary/50 hover:text-primary"
                          : "bg-white border-black/[0.1] text-[#6B6B70] hover:border-primary/60 hover:text-primary"
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              {loading && (
                <div className="flex justify-start">
                  <div className={`px-3 py-2 rounded-2xl rounded-bl-md text-sm flex items-center gap-2 ${
                    theme === "dark" ? "bg-white/[0.08] text-[#8A8A8E]" : "bg-white text-[#6B6B70] shadow-sm"
                  }`}>
                    <Loader2 size={14} className="animate-spin" /> Thinking...
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (input.trim()) sendMessage(input.trim());
              }}
              className={`p-3 border-t flex items-center gap-2 ${
                theme === "dark" ? "bg-[#111113] border-white/[0.06]" : "bg-white border-black/[0.06]"
              }`}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, skills..."
                className={`flex-1 px-3 py-2.5 rounded-xl text-sm outline-none ${
                  theme === "dark"
                    ? "bg-[#1A1A1D] border border-white/[0.08] text-white focus:border-primary/40"
                    : "bg-[#F8F9FA] border border-black/[0.08] text-[#0A0A0B] focus:border-primary/40"
                }`}
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="p-2.5 rounded-xl bg-primary text-[#0A0A0B] transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((o) => !o)}
        className={`fixed bottom-6 right-5 md:right-6 z-[90] w-14 h-14 rounded-2xl bg-primary text-[#0A0A0B] flex items-center justify-center ${
          theme === "dark"
            ? "shadow-[0_8px_30px_rgba(0,212,170,0.35)]"
            : "shadow-[0_8px_30px_rgba(11,122,92,0.25)]"
        }`}
        aria-label="Open AI chat"
      >
        {open ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </>
  );
}