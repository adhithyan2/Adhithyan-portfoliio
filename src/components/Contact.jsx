import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { socials, profile } from "../data/portfolioData";
import { useTheme } from "../hooks/useTheme";
import { useScrollReveal, fadeUp, staggerContainer } from "../hooks/useScrollReveal";

export default function Contact() {
  const { theme } = useTheme();
  const { ref, controls } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    const mailtoLink = `mailto:${socials.email}?subject=Portfolio Inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.name + " (" + form.email + ")")}`;
    window.location.href = mailtoLink;
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
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
            Contact
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 tracking-tight"
          >
            Have an Idea?<br />
            <span className="text-primary">Let's Build It.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className={`text-base md:text-lg mb-12 leading-relaxed ${
              theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
            }`}
          >
            Whether it's a website, web application, AI-powered product, or a new software idea — I'm interested in turning practical ideas into working digital products.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-wrap gap-4 mb-12"
          >
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
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] ${
                theme === "dark"
                  ? "bg-[#111113] border border-white/[0.06] text-white hover:border-primary/30"
                  : "bg-white border border-black/[0.06] text-[#0A0A0B] shadow-sm hover:border-primary/30"
              }`}
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] ${
                theme === "dark"
                  ? "bg-[#111113] border border-white/[0.06] text-white hover:border-primary/30"
                  : "bg-white border border-black/[0.06] text-[#0A0A0B] shadow-sm hover:border-primary/30"
              }`}
            >
              <Linkedin size={18} /> LinkedIn
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
                placeholder="Tell me about your project or idea..."
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-[#0A0A0B] font-semibold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              {submitted ? "Sent!" : "Send Message"}
              <Send size={16} />
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
