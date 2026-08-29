import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause, Volume2, VolumeX } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const CHORDS = [
  [220.0, 261.63, 329.63], // Am
  [174.61, 220.0, 261.63], // F
  [196.0, 246.94, 293.66], // G
  [130.81, 196.0, 261.63], // C
];

class LoFiEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.delay = null;
    this.nodes = [];
    this.playing = false;
    this.chordIndex = 0;
    this.scheduleId = null;
  }

  start() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioCtx();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.0;
    this.master.gain.linearRampToValueAtTime(0.34, this.ctx.currentTime + 2);

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1400;
    filter.Q.value = 0.6;

    this.delay = this.ctx.createDelay(1.5);
    this.delay.delayTime.value = 0.38;
    const feedback = this.ctx.createGain();
    feedback.gain.value = 0.35;
    const wet = this.ctx.createGain();
    wet.gain.value = 0.25;
    this.delay.connect(wet);
    wet.connect(this.master);
    this.delay.connect(feedback);
    feedback.connect(this.delay);

    this.master.connect(this.ctx.destination);
    filter.connect(this.delay);
    filter.connect(this.master);

    this.playing = true;
    this.scheduleChord();
    this.scheduleId = setInterval(() => this.scheduleChord(), 6400);
  }

  scheduleChord() {
    if (!this.ctx || !this.playing) return;
    const t = this.ctx.currentTime + 0.05;
    const chord = CHORDS[this.chordIndex % CHORDS.length];
    this.chordIndex++;

    chord.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      osc.type = "triangle";
      osc2.type = "sine";
      osc.frequency.value = freq;
      osc2.frequency.value = freq;

      const gain = this.ctx.createGain();
      const baseVol = i === 0 ? 0.05 : 0.035;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(baseVol, t + 1.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 6.2);

      const panner = this.ctx.createStereoPanner();
      panner.pan.value = [-0.5, 0, 0.4, 0.5][i % 4];

      const lowpass = this.ctx.createBiquadFilter();
      lowpass.type = "lowpass";
      lowpass.frequency.value = 900;

      osc.connect(gain);
      osc2.connect(gain);
      gain.connect(lowpass);
      lowpass.connect(panner);
      panner.connect(this.master);
      panner.connect(this.delay);

      osc.start(t);
      osc.stop(t + 6.3);
      osc2.start(t);
      osc2.stop(t + 6.3);

      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.value = 0.15 + i * 0.07;
      lfoGain.gain.value = 0.008;
      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain);
      lfo.start(t);
      lfo.stop(t + 6.3);
    });
  }

  stop() {
    if (!this.ctx) return;
    this.playing = false;
    if (this.scheduleId) {
      clearInterval(this.scheduleId);
      this.scheduleId = null;
    }
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setValueAtTime(this.master.gain.value, t);
    this.master.gain.linearRampToValueAtTime(0.0, t + 1);
    setTimeout(() => {
      if (this.ctx) {
        this.ctx.close();
        this.ctx = null;
        this.master = null;
        this.delay = null;
      }
    }, 1200);
  }

  toggle() {
    if (!this.ctx) {
      this.start();
      return true;
    }
    this.stop();
    return false;
  }
}

export default function MusicPlayer() {
  const { theme } = useTheme();
  const engineRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const getEngine = () => {
    if (!engineRef.current) engineRef.current = new LoFiEngine();
    return engineRef.current;
  };

  const togglePlay = () => {
    const engine = getEngine();
    const started = engine.toggle();
    setPlaying(started);
    setMuted(false);
    if (started && engine.ctx) engine.ctx.resume?.();
  };

  const toggleMute = () => {
    const engine = getEngine();
    if (!engine.ctx) return;
    const next = !muted;
    const t = engine.ctx.currentTime;
    if (next) {
      engine.master.gain.linearRampToValueAtTime(0.0, t + 0.2);
    } else {
      engine.master.gain.linearRampToValueAtTime(0.34, t + 0.5);
    }
    setMuted(next);
  };

  useEffect(() => {
    return () => {
      engineRef.current?.stop();
    };
  }, []);

  return (
    <div className="fixed bottom-40 right-5 md:right-6 z-[85] flex flex-col items-end gap-3">
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className={`rounded-xl px-3 py-2.5 shadow-xl flex items-center gap-3 ${
              theme === "dark"
                ? "bg-[#111113] border border-white/15"
                : "bg-white border border-[#d2d2d2]"
            }`}
          >
            <div className="flex items-center gap-3">
              {playing ? (
                <span className="music-eq">
                  <span /><span /><span /><span />
                </span>
              ) : (
                <Music size={18} className="text-primary" />
              )}
              <span className={`text-xs font-semibold ${
                theme === "dark" ? "text-white" : "text-[#0A0A0B]"
              }`}>
                Lo-fi Focus
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={toggleMute}
                disabled={!playing}
                className={`p-2 rounded-lg transition-colors disabled:opacity-40 ${
                  theme === "dark" ? "hover:bg-white/10 text-[#8A8A8E]" : "hover:bg-black/5 text-[#6B6B70]"
                }`}
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>
              <button
                onClick={togglePlay}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  theme === "dark"
                    ? "bg-white/10 text-white hover:bg-white/15"
                    : "bg-black/5 text-[#0A0A0B] hover:bg-black/10"
                }`}
              >
                {playing ? "Stop" : "Play"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowPanel((v) => !v)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors ${
          playing
            ? theme === "dark"
              ? "bg-primary text-[#0A0A0B] shadow-[0_8px_30px_rgba(0,212,170,0.35)]"
              : "bg-primary text-[#0A0A0B] shadow-[0_8px_30px_rgba(11,122,92,0.25)]"
            : theme === "dark"
            ? "bg-[#111113] border border-white/15 text-[#9a9a9a] hover:text-white"
            : "bg-white border border-[#d2d2d2] text-[#666] hover:text-[#1a1a1a]"
        }`}
        aria-label="Toggle lo-fi music"
      >
        {playing ? <Pause size={22} /> : <Music size={22} />}
      </motion.button>
    </div>
  );
}