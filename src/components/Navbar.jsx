import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { navLinks } from "../data/portfolioData";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const linkClass = (href) =>
    `eyebrow text-[11px] relative transition-colors duration-200 ${
      active === href
        ? "text-primary"
        : "text-[#666] dark:text-[#8A8A8E] hover:text-[#1a1a1a] dark:hover:text-white"
    }`;

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 dark:bg-[#0A0A0B]/85 backdrop-blur-xl border-b border-[#d2d2d2] dark:border-white/[0.08]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="eyebrow text-[13px] tracking-[0.2em] text-[#1a1a1a] dark:text-white">
            Adhithiyan<span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-primary origin-left"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[#d2d2d2] dark:border-white/15 transition-colors duration-200 hover:border-primary/60 hover:text-primary"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[#d2d2d2] dark:border-white/15"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-md"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-[100] backdrop-blur-xl ${
              theme === "dark" ? "bg-[#0A0A0B]/95" : "bg-white/95"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full relative">
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-5 right-6 p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setMobileOpen(false)}
                    className={`font-semibold text-2xl transition-colors duration-200 ${
                      active === link.href
                        ? "text-primary"
                        : "text-[#4e4e4e] dark:text-[#9a9a9a]"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}