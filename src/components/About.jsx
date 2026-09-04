import { motion } from "framer-motion";
import { profile } from "../data/portfolioData";
import { useTheme } from "../hooks/useTheme";
import SectionLabel from "./SectionLabel";

export default function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-semibold tracking-widest uppercase"
          >
            <SectionLabel index="01">About</SectionLabel>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-8 tracking-tight"
          >
            I Build Websites That
            <br />
            <span className="text-primary">Grow Local Businesses.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`space-y-5 text-base md:text-lg leading-relaxed ${
              theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
            }`}
          >
            <p>
              I'm <strong className={theme === "dark" ? "text-white" : "text-[#0A0A0B]"}>{profile.name}</strong>, a
              full-stack developer with a simple belief:{" "}
              <strong className={theme === "dark" ? "text-white" : "text-[#0A0A0B]"}>
                your business should be found online and take bookings while you sleep.
              </strong>
            </p>
            <p>
              Whether you run a <strong className={theme === "dark" ? "text-white" : "text-[#0A0A0B]"}>salon, clinic, restaurant, shop or coaching class</strong>,
              I build mobile-friendly websites, online booking systems and smart tools that turn visitors into
              customers — in plain language, without confusing tech talk.
            </p>
            <p>
              I've built booking and queue systems, appointment platforms, AI tools and dashboards. Everything is
              designed to <strong className={theme === "dark" ? "text-white" : "text-[#0A0A0B]"}>be fast, work on any phone, and be simple for you to manage</strong>.
            </p>
            <p>
              I work with local businesses across India, respond quickly on WhatsApp, and deliver in days — not months.
              And the <strong className={theme === "dark" ? "text-white" : "text-[#0A0A0B]"}>first consultation is always free</strong>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}