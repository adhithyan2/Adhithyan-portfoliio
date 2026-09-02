import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { services, socials } from "../data/portfolioData";
import { useTheme } from "../hooks/useTheme";
import { useScrollReveal, fadeUp, staggerContainer, scaleIn } from "../hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";

const iconMap = {
  Globe: "🌐",
  Calendar: "📅",
  Layers: "📝",
  Rocket: "🚀",
  LayoutDashboard: "📊",
  Cog: "⚙️",
};

export default function Services() {
  const { theme } = useTheme();
  const { ref, controls } = useScrollReveal();

  const visibleServices = services.filter((s) => s.shown);

  const ctaLink = socials.whatsapp
    ? `https://wa.me/${socials.whatsapp}?text=${encodeURIComponent(
        "Hi Adhithiyan! I'd like to talk about getting help for my business. Can we discuss?"
      )}`
    : `mailto:${socials.email}?subject=${encodeURIComponent("Website / Business enquiry")}`;

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeUp}
            className="text-primary text-sm font-semibold tracking-widest uppercase"
          >
            <SectionLabel index="05">What I Do For Businesses</SectionLabel>
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 tracking-tight"
          >
            Help Your Business Grow Online.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className={`text-base md:text-lg mb-16 max-w-2xl ${
              theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
            }`}
          >
            Simple, affordable solutions for shops, clinics, salons, restaurants and service businesses — built to get you
            more customers without any tech hassle.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleServices.map((service, i) => (
              <motion.div
                key={service.title}
                variants={scaleIn}
                custom={i * 0.5}
                className={`group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                  theme === "dark"
                    ? "bg-[#111113] border border-white/[0.06] hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(0,212,170,0.06)]"
                    : "bg-white border border-black/[0.06] hover:border-primary/30 shadow-sm hover:shadow-md"
                }`}
              >
                <div className="text-3xl mb-4">{iconMap[service.icon] || "🌐"}</div>
                <h3 className="text-base font-bold mb-2 tracking-tight">{service.title}</h3>
                <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"}`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA banner - no scary prices, just an easy conversation start */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className={`mt-16 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden ${
              theme === "dark"
                ? "bg-[#111113] border border-white/[0.08]"
                : "bg-white border border-black/[0.08]"
            }`}
          >
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-[80px]"
              style={{
                background:
                  theme === "dark"
                    ? "radial-gradient(circle, rgba(0,212,170,0.15) 0%, transparent 70%)"
                    : "radial-gradient(circle, rgba(11,122,92,0.1) 0%, transparent 70%)",
              }}
            />
            <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
              Not Sure What You Need?
            </h3>
            <p className={`max-w-xl mx-auto mb-8 ${theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"}`}>
              Tell me about your business. I'll give you a clear, no-pressure plan and a fair quote — always free, always in
              simple language.
            </p>
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-[#0A0A0B] font-semibold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <MessageCircle size={18} />
              Get a Free Quote — No Pressure
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}