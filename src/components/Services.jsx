import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { services, servicePricing, socials } from "../data/portfolioData";
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

          {/* Pricing */}
          <motion.div variants={fadeUp} custom={4} className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight text-center">
              Simple, Fair Pricing
            </h3>
            <p className={`text-center max-w-xl mx-auto mb-12 ${theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"}`}>
              Transparent pricing, no hidden fees. Every package starts with a free, no-obligation consultation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {servicePricing.map((plan) => (
                <motion.div
                  key={plan.plan}
                  variants={scaleIn}
                  custom={5}
                  className={`rounded-2xl p-7 flex flex-col relative ${
                    plan.popular
                      ? theme === "dark"
                        ? "bg-[#111113] border-2 border-primary/60 shadow-[0_8px_40px_rgba(0,212,170,0.1)]"
                        : "bg-white border-2 border-primary shadow-xl"
                      : theme === "dark"
                      ? "bg-[#111113] border border-white/[0.08]"
                      : "bg-white border border-black/[0.08]"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full bg-primary text-[#0A0A0B]">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-bold mb-1">{plan.plan}</h3>
                  <p className={`text-xs mb-3 ${theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"}`}>
                    {plan.audience}
                  </p>
                  <div className="text-2xl font-bold text-primary mb-5">{plan.price}</div>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check size={16} className="text-primary mt-0.5 shrink-0" />
                        <span className={theme === "dark" ? "text-[#c9c9cc]" : "text-[#3d3d3d]"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={socials.whatsapp ? `https://wa.me/${socials.whatsapp}?text=${encodeURIComponent("Hi! I'm interested in the " + plan.plan + " package.")}` : `mailto:${socials.email}?subject=${encodeURIComponent("Enquiry: " + plan.plan)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] ${
                      plan.popular
                        ? "bg-primary text-[#0A0A0B]"
                        : theme === "dark"
                        ? "border border-white/15 text-white hover:bg-white/5"
                        : "border border-black/15 text-[#0A0A0B] hover:bg-black/5"
                    }`}
                  >
                    Get This Package
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}