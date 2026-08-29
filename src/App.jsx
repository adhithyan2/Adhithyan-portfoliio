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
import ChatWidget from "./components/ChatWidget";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
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
      </main>
      <Footer />
      <ChatWidget />
      <MusicPlayer />
    </div>
  );
}
