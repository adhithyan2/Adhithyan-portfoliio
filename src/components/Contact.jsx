import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { socials } from "../data/portfolioData";
import { useScrollReveal, fadeUp, staggerContainer } from "../hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";

export default function Contact() {
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

  const inputClass = (hasError) =>
    `w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors border bg-transparent placeholder:text-[#9a9a9a] ${
      hasError
        ? "border-red-500/60 text-red-400"
        : "border-[#d2d2d2] dark:border-white/[0.12] text-[#1a1a1a] dark:text-white focus:border-primary/50"
    }`;

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FAFAFA] dark:bg-[#0C0C0E]">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.span variants={fadeUp}>
            <SectionLabel index="09">Contact</SectionLabel>
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-6"
          >
            Have an idea?<br />
            Let's build it<span className="text-primary">.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-base md:text-lg mb-12 leading-relaxed text-[#4e4e4e] dark:text-[#9a9a9a]"
          >
            Whether it's a website, web application, AI-powered product, or a new software idea — I'm interested in turning practical ideas into working digital products.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 mb-12">
            <a
              href={`mailto:${socials.email}`}
              className="pill pill-solid px-6 py-3"
            >
              <Mail size={16} /> {socials.email}
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-outline px-6 py-3"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-outline px-6 py-3"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </motion.div>

          <motion.form
            variants={fadeUp}
            custom={4}
            onSubmit={handleSubmit}
            className="card-line p-6 md:p-8 bg-white dark:bg-[#111113]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="eyebrow block text-[10px] mb-2 text-[#666] dark:text-[#9a9a9a]">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass(errors.name)}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="eyebrow block text-[10px] mb-2 text-[#666] dark:text-[#9a9a9a]">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass(errors.email)}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>
            <div className="mb-6">
              <label className="eyebrow block text-[10px] mb-2 text-[#666] dark:text-[#9a9a9a]">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className={`${inputClass(errors.message)} resize-none`}
                placeholder="Tell me about your project or idea..."
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1a1a1a] dark:bg-white text-white dark:text-[#1a1a1a] font-semibold text-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              {submitted ? "Sent!" : "Send Message"}
              <Send size={16} />
            </button>
          </motion.form>

          <motion.div
            variants={fadeUp}
            custom={5}
            className="mt-8 card-line p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#1a1a1a] dark:bg-[#111113] text-white"
          >
            <div>
              <div className="eyebrow text-[10px] text-[#9a9a9a] mb-1">Prefer email?</div>
              <p className="font-semibold">{socials.email}</p>
            </div>
            <a
              href={`mailto:${socials.email}`}
              className="pill pill-solid px-6 py-3 bg-white text-[#1a1a1a] hover:bg-white/90"
            >
              Get in touch <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}