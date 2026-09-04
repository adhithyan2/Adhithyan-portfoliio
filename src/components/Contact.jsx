import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Send, MessageCircle, Check } from "lucide-react";
import { socials, profile, contactForm } from "../data/portfolioData";
import { useTheme } from "../hooks/useTheme";
import { useScrollReveal, fadeUp, staggerContainer } from "../hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  const { theme } = useTheme();
  const { ref, controls } = useScrollReveal();
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgTextY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Please tell me a little about your business";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch(contactForm.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          business: form.business,
          message: form.message,
          _subject: `New business lead: ${form.business || form.name}`,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", business: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <motion.div
        style={{ y: bgTextY }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap ${
          theme === "dark" ? "text-white/[0.03]" : "text-black/[0.03]"
        }`}
      >
        <span className="text-[25vw] font-black leading-none tracking-tighter" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
          CONTACT
        </span>
      </motion.div>

      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.span
            variants={fadeUp}
            className="text-primary text-sm font-semibold tracking-widest uppercase"
          >
            <SectionLabel index="09">Contact</SectionLabel>
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 tracking-tight"
          >
            Ready to Grow?<br />
            <span className="text-primary">Get a Free Consultation.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className={`text-base md:text-lg mb-12 leading-relaxed ${
              theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
            }`}
          >
            Tell me about your business and what you need — I'll reply with a clear, no-pressure plan and a fair price.
            The first consultation is always free.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-wrap gap-4 mb-12"
          >
            {socials.whatsapp && (
              <a
                href={`https://wa.me/${socials.whatsapp}?text=${encodeURIComponent("Hi Adhithiyan! I'd like a free consultation for my business website.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm bg-[#25D366] text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                <MessageCircle size={18} /> WhatsApp Me
              </a>
            )}
            <a
              href={`mailto:${socials.email}`}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] ${
                theme === "dark"
                  ? "bg-[#111113] border border-white/[0.06] text-white hover:border-primary/30"
                  : "bg-white border border-black/[0.06] text-[#0A0A0B] shadow-sm hover:border-primary/30"
              }`}
            >
              <Mail size={18} /> {socials.email}
            </a>
          </motion.div>

          <motion.form
            variants={fadeUp}
            custom={4}
            onSubmit={handleSubmit}
            className={`rounded-2xl p-8 ${
              theme === "dark"
                ? "bg-[#111113] border border-white/[0.06]"
                : "bg-white border border-black/[0.06] shadow-sm"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors ${
                    theme === "dark"
                      ? "bg-[#1A1A1D] border border-white/[0.08] text-white focus:border-primary/40"
                      : "bg-[#F8F9FA] border border-black/[0.08] text-[#0A0A0B] focus:border-primary/40"
                  } ${errors.name ? "border-red-500/60" : ""}`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors ${
                    theme === "dark"
                      ? "bg-[#1A1A1D] border border-white/[0.08] text-white focus:border-primary/40"
                      : "bg-[#F8F9FA] border border-black/[0.08] text-[#0A0A0B] focus:border-primary/40"
                  } ${errors.email ? "border-red-500/60" : ""}`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Business / Type</label>
                <input
                  type="text"
                  value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors ${
                    theme === "dark"
                      ? "bg-[#1A1A1D] border border-white/[0.08] text-white focus:border-primary/40"
                      : "bg-[#F8F9FA] border border-black/[0.08] text-[#0A0A0B] focus:border-primary/40"
                  }`}
                  placeholder="e.g. Salon, Clinic, Restaurant... (optional)"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className={`w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-colors ${
                  theme === "dark"
                    ? "bg-[#1A1A1D] border border-white/[0.08] text-white focus:border-primary/40"
                    : "bg-[#F8F9FA] border border-black/[0.08] text-[#0A0A0B] focus:border-primary/40"
                } ${errors.message ? "border-red-500/60" : ""}`}
                placeholder="Tell me about your business and what you need..."
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-[#0A0A0B] font-semibold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "Sent! I'll get back to you" : "Get My Free Quote"}
              {status === "sent" ? <Check size={16} /> : <Send size={16} />}
            </button>
            {status === "sent" && (
              <p className="text-green-400 text-sm mt-3">Thanks! Your enquiry is on its way — I'll reply within 24 hours.</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm mt-3">Something went wrong. Please email me directly at {socials.email} — sorry for the trouble.</p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
