import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import OpenSource from "./components/OpenSource";
import GitHubSection from "./components/GitHubSection";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import ChatWidget from "./components/ChatWidget";
import MusicPlayer from "./components/MusicPlayer";
import BackToTop from "./components/BackToTop";
import NotFound from "./components/NotFound";

const SECTION_VIEWS = {
  about: About,
  skills: Skills,
  projects: Projects,
  services: Services,
  opensource: OpenSource,
  contact: Contact,
};

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const isRoot = path === "/" || path === "/index.html";

  const [view, setView] = useState("home");

  const navigate = useCallback((next) => {
    setView(next);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, []);

  if (!isRoot) {
    return <NotFound />;
  }

  const CurrentSection = SECTION_VIEWS[view];

  return (
    <div className="min-h-screen">
      <Cursor />
      <div className="grain" aria-hidden="true" />
      <ScrollProgress />
      <Navbar currentView={view} onNavigate={navigate} />
      <main className="relative">
        <AnimatePresence mode="wait">
          {view === "home" ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Timeline />
              <Services />
              <OpenSource />
              <GitHubSection />
              <Achievements />
              <Contact />
            </motion.div>
          ) : (
            <motion.div
              key={view}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              <div className="pt-24 md:pt-28">
                <div className="max-w-[1320px] mx-auto px-6">
                  <button
                    onClick={() => navigate("home")}
                    className="inline-flex items-center gap-2 text-sm font-medium mb-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <span aria-hidden="true">&larr;</span> Back to Home
                  </button>
                </div>
                <CurrentSection />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <ChatWidget />
      <MusicPlayer />
      <BackToTop />
    </div>
  );
}
