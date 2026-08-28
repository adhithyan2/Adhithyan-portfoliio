import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

const commandLines = [
  "$ whoami",
  { text: "Adhithiyan Prabaharan — Full-Stack Developer", type: "output" },
  "$ echo $skills",
  { text: "Python | Java | C++ | JavaScript | React | Node.js", type: "output" },
  "$ echo $focus",
  { text: "AI-powered apps • real-world problem solving • open source", type: "output" },
  "$ cat mission.txt",
  { text: "Ship products that matter. Build as an open-source freelancer ecosystem.", type: "output" },
  "$ npm run future",
  { text: "> Building the next big thing...", type: "output" },
];

function useTypewriter(lines, startDelay = 0) {
  const [visible, setVisible] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    const current = lines[lineIndex];
    if (!current) return;

    const target = current.text || current;

    if (charIndex < target.length) {
      const t = setTimeout(
        () => setCharIndex((c) => c + 1),
        current.type === "output" ? 8 : 35
      );
      return () => clearTimeout(t);
    }

    setVisible((prev) => prev + (prev ? "\n" : "") + target);
    setCharIndex(0);
    setLineIndex((l) => l + 1);
  }, [charIndex, lineIndex, started, lines]);

  return { visible, done: lineIndex >= lines.length };
}

function ColoredLine({ line, theme }) {
  if (line.startsWith("$")) {
    const parts = line.split(" ");
    const cmd = parts[0];
    const args = parts.slice(1).join(" ");
    return (
      <div>
        <span className="text-primary font-bold">{cmd}</span>{" "}
        <span className={theme === "dark" ? "text-white" : "text-[#0A0A0B]"}>{args}</span>
      </div>
    );
  }
  return (
    <div className={theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"}>
      {line}
    </div>
  );
}

export default function TerminalCard() {
  const { theme } = useTheme();
  const { visible, done, currentLine } = useTypewriter(commandLines, 500);
  const lines = visible.split("\n").filter(Boolean);
  const typingTarget = currentLine ? currentLine.text || currentLine : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`mt-10 rounded-2xl overflow-hidden shadow-2xl ${
        theme === "dark"
          ? "bg-[#111113] border border-white/[0.06] shadow-black/40"
          : "bg-white border border-black/[0.06] shadow-black/10"
      }`}
    >
      <div className={`flex items-center gap-2 px-4 py-3 ${
        theme === "dark" ? "bg-[#1A1A1D] border-b border-white/[0.06]" : "bg-[#F0F0F2] border-b border-black/[0.06]"
      }`}>
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className={`ml-3 text-xs font-medium ${theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"}`}>
          adhithiyan@portfolio: ~
        </span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed whitespace-pre-wrap">
        {lines.map((line, i) => (
          <ColoredLine key={i} line={line} theme={theme} />
        ))}
        {!done && (
          <span className={theme === "dark" ? "text-white" : "text-[#0A0A0B]"}>
            {typingTarget}
            <span className="terminal-cursor" />
          </span>
        )}
      </div>
    </motion.div>
  );
}