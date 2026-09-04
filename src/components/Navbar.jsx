import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { navLinks } from "../data/portfolioData";

export default function Navbar({ currentView = "home", onNavigate }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = currentView === "home" ? "#home" : `#${currentView}`;

  const go = (view) => {
    if (onNavigate) {
      onNavigate(view);
      setMobileOpen(false);
      return;
    }
    // Fallback: default anchor scroll behavior.
    const el = document.getElementById(view);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? theme === "dark"
              ? "bg-[#0A0A0B]/80 backdrop-blur-xl border-b border-white/[0.06]"
              : "bg-white/80 backdrop-blur-xl border-b border-black/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => go("home")}
            className="text-lg font-bold tracking-tight text-primary cursor-pointer"
          >
            AP
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const view = link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => go(view)}
                  className={`text-sm font-medium transition-colors duration-200 relative cursor-pointer ${
                    active === link.href
                      ? "text-primary"
                      : theme === "dark"
                      ? "text-[#8A8A8E] hover:text-white"
                      : "text-[#6B6B70] hover:text-[#0A0A0B]"
                  }`}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors duration-200 hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-lg transition-colors duration-200"
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
            className={`fixed inset-0 z-[100] ${
              theme === "dark" ? "bg-[#0A0A0B]/95 backdrop-blur-xl" : "bg-white/95 backdrop-blur-xl"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full relative">
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-5 right-6 p-2 rounded-lg transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => {
                  const view = link.href.replace("#", "");
                  return (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      onClick={() => go(view)}
                      className={`text-2xl font-semibold transition-colors duration-200 cursor-pointer ${
                        active === link.href
                          ? "text-primary"
                          : theme === "dark"
                          ? "text-[#8A8A8E] hover:text-white"
                          : "text-[#6B6B70] hover:text-[#0A0A0B]"
                      }`}
                    >
                      {link.label}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
