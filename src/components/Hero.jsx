import { motion } from "framer-motion";
import { ArrowDown, Github, MessageCircle } from "lucide-react";
import { profile, socials } from "../data/portfolioData";
import { useTheme } from "../hooks/useTheme";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 w-full pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-12 lg:gap-0">
          <div className="w-full lg:w-[55%] text-center lg:text-left lg:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <span
                className={`inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase mb-6 ${
                  theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                {profile.availability}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight mb-6"
            >
              {profile.headlineA}<br />
              {profile.headlineB}<br />
              <span className="gradient-text">{profile.headlineAccent}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className={`text-base md:text-lg max-w-xl mb-10 ${
                theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
              }`}
            >
              {profile.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-[#0A0A0B] font-semibold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                See How I Can Help
                <ArrowDown size={16} />
              </a>
              <a
                href={`mailto:${socials.email}?subject=${encodeURIComponent("Website enquiry")}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm rounded-xl bg-[#25D366] text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                <MessageCircle size={18} />
                Send a Message
              </a>
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm rounded-xl border transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] ${
                  theme === "dark"
                    ? "border-white/15 text-white hover:bg-white/5"
                    : "border-black/15 text-[#0A0A0B] hover:bg-black/5"
                }`}
              >
                Get a Free Quote
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border transition-all duration-200 hover:scale-[1.05] active:scale-[0.98] ${
                  theme === "dark"
                    ? "border-white/15 text-white hover:bg-white/5"
                    : "border-black/15 text-[#0A0A0B] hover:bg-black/5"
                }`}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={`mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wide ${
                theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
              }`}
            >
              <span>✓ Fast mobile-friendly sites</span>
              <span>✓ Booking systems</span>
              <span>✓ Free consultation</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative w-full lg:w-[45%] flex justify-center lg:justify-end lg:pb-0"
          >
            <div className="relative h-[320px] sm:h-[400px] md:h-[480px] lg:h-[600px] w-full flex justify-center lg:justify-end items-end">
              {theme === "dark" && (
                <>
                  <div
                    className="aurora-blob"
                    style={{
                      width: 420,
                      height: 360,
                      top: "2%",
                      left: "-12%",
                      background: "radial-gradient(circle, rgba(255,42,42,0.22) 0%, transparent 70%)",
                    }}
                  />
                  <div
                    className="aurora-blob"
                    style={{
                      width: 380,
                      height: 340,
                      bottom: "6%",
                      right: "-8%",
                      background: "radial-gradient(circle, rgba(200,30,30,0.16) 0%, transparent 70%)",
                    }}
                  />
                </>
              )}
              <div
                className={`absolute bottom-0 right-0 w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px] rounded-full ${
                  theme === "dark" ? "opacity-30" : "opacity-20"
                } blur-[80px]`}
                style={{
                  background:
                    theme === "dark"
                      ? "radial-gradient(circle at center 60%, rgba(255,42,42,0.2) 0%, rgba(255,42,42,0.04) 50%, transparent 75%)"
                      : "radial-gradient(circle at center 60%, rgba(180,30,30,0.16) 0%, rgba(180,30,30,0.04) 50%, transparent 75%)",
                }}
              />
              <picture>
                <source srcSet="/assets/hero-portrait.webp" type="image/webp" />
                <img
                  src="/assets/hero-portrait.png"
                  alt={profile.name}
                  width="800"
                  height="533"
                  loading="eager"
                  fetchPriority="high"
                  className={`relative h-full w-auto max-w-[90%] lg:max-w-none object-contain object-bottom ${
                    theme === "dark"
                      ? "drop-shadow-[0_0_60px_rgba(0,0,0,0.6)]"
                      : "drop-shadow-[0_4px_40px_rgba(0,0,0,0.22)]"
                  }`}
                  draggable={false}
                />
              </picture>

              <div className="absolute top-[12%] -left-2 md:left-6 float-icon">
                <span className={`px-3 py-1.5 text-xs font-semibold rounded-lg shadow-lg glass-card ${
                  theme === "dark" ? "text-white" : "text-[#0A0A0B]"
                }`}>
                  Fast Websites
                </span>
              </div>
              <div className="absolute top-[30%] -right-1 md:right-4 float-icon">
                <span className={`px-3 py-1.5 text-xs font-semibold rounded-lg shadow-lg glass-card ${
                  theme === "dark" ? "text-white" : "text-[#0A0A0B]"
                }`}>
                  Online Booking
                </span>
              </div>
              <div className="absolute top-[55%] -left-4 md:left-0 float-icon">
                <span className={`px-3 py-1.5 text-xs font-semibold rounded-lg shadow-lg glass-card ${
                  theme === "dark" ? "text-white" : "text-[#0A0A0B]"
                }`}>
                  Found on Google
                </span>
              </div>
              <div className="absolute top-[70%] right-0 md:right-6 float-icon">
                <span className={`px-3 py-1.5 text-xs font-semibold rounded-lg shadow-lg glass-card ${
                  theme === "dark" ? "text-white" : "text-[#0A0A0B]"
                }`}>
                  WhatsApp Leads
                </span>
              </div>
              <div className="absolute top-[8%] right-[15%] md:right-[20%] float-icon">
                <span className={`px-3 py-1.5 text-xs font-semibold rounded-lg shadow-lg glass-card ${
                  theme === "dark" ? "text-white" : "text-[#0A0A0B]"
                }`}>
                  Mobile-friendly
                </span>
              </div>
              <div className="absolute top-[45%] -left-6 md:left-10 float-icon">
                <span className={`px-3 py-1.5 text-xs font-semibold rounded-lg shadow-lg glass-card ${
                  theme === "dark" ? "text-white" : "text-[#0A0A0B]"
                }`}>
                  Get Booked More
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className={theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"} />
        </motion.div>
      </motion.div>
    </section>
  );
}