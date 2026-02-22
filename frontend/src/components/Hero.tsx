"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Shield, Zap, Globe, CheckCircle } from "lucide-react";

/* ── typing animation lines ── */
const terminalLines = [
  { text: '$ truthlens verify "Is climate change caused by humans?"', color: "command" },
  { text: "⟳ Distributing to miner network...", color: "dim" },
  { text: "⟳ Researching across 12 miners, 5 source tiers...", color: "dim" },
  { text: "⟳ Cross-referencing verified databases...", color: "dim" },
  { text: "✓ Consensus reached (97.1% agreement)", color: "green" },
  { text: "---", color: "sep" },
  { text: "✓ VERDICT: TRUE", color: "verdict" },
  { text: "Confidence: 98.4% · Sources: 7 Tier-1 · Time: 8.2s", color: "meta" },
];

function useTypewriter(lines: typeof terminalLines) {
  const [displayed, setDisplayed] = useState<{ text: string; color: string }[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (done) {
      // restart after a pause
      timeoutRef.current = setTimeout(() => {
        setDisplayed([]);
        setCurrentLine(0);
        setCurrentChar(0);
        setDone(false);
      }, 4000);
      return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }

    if (currentLine >= lines.length) {
      setDone(true);
      return;
    }

    const line = lines[currentLine];

    if (line.color === "sep") {
      // separators appear instantly
      timeoutRef.current = setTimeout(() => {
        setDisplayed((prev) => [...prev, { text: "", color: "sep" }]);
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 200);
      return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }

    if (currentChar < line.text.length) {
      const speed = line.color === "command" ? 22 : 12;
      timeoutRef.current = setTimeout(() => {
        setCurrentChar((c) => c + 1);
      }, speed);
      return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }

    // line finished — move to next after a pause
    timeoutRef.current = setTimeout(() => {
      setDisplayed((prev) => [...prev, { text: line.text, color: line.color }]);
      setCurrentLine((l) => l + 1);
      setCurrentChar(0);
    }, line.color === "dim" ? 400 : 300);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [currentLine, currentChar, done, lines]);

  // the partial line currently being typed
  const partial =
    !done && currentLine < lines.length
      ? { text: lines[currentLine].text.slice(0, currentChar), color: lines[currentLine].color }
      : null;

  return { displayed, partial };
}

/* ── color helper ── */
function lineClass(color: string) {
  switch (color) {
    case "command":
      return "text-gray-100";
    case "dim":
      return "text-gray-500";
    case "green":
      return "text-green-400";
    case "verdict":
      return "text-green-400 font-bold";
    case "meta":
      return "text-gray-500";
    default:
      return "";
  }
}

export default function Hero() {
  const { displayed, partial } = useTypewriter(terminalLines);

  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Subtle green radial */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-green-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 pb-16 relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Copy ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 text-green-700 text-xs font-semibold tracking-wide uppercase mb-6"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-600" />
              </span>
              Bittensor Subnet
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-gray-900 mb-5"
            >
              Decentralized{" "}
              <span className="gradient-text">Fact-Checking</span> for&nbsp;the
              AI&nbsp;Era
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8 max-w-md"
            >
              TruthLens leverages Bittensor&apos;s distributed intelligence to
              verify claims in real-time. No bias. No censorship. Just
              verifiable truth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <a
                href="#get-started"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors shadow-sm"
              >
                Start Verifying
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="https://github.com/Akanimoh12/TruthLens/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                Read the Docs
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex flex-wrap gap-5"
            >
              {[
                { icon: Shield, label: "Bias Resistant" },
                { icon: Zap, label: "Sub-Minute Verification" },
                { icon: Globe, label: "Globally Distributed" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-1.5 text-gray-400 text-sm"
                >
                  <item.icon className="w-3.5 h-3.5 text-green-500" />
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Terminal ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-xl border border-gray-200 bg-gray-950 shadow-2xl shadow-gray-200/50 overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="ml-2 text-[11px] text-gray-500 font-mono">
                  TruthLens Verification Engine
                </span>
              </div>

              {/* Terminal content — typed */}
              <div className="p-5 font-mono text-[13px] text-left space-y-1 leading-relaxed min-h-[260px]">
                {displayed.map((line, i) =>
                  line.color === "sep" ? (
                    <div key={i} className="border-t border-gray-800 my-2" />
                  ) : line.color === "verdict" ? (
                    <p key={i} className="text-green-400">
                      <span className="font-semibold">✓ VERDICT:</span>{" "}
                      <span className="text-white font-bold">TRUE</span>
                    </p>
                  ) : (
                    <p key={i} className={lineClass(line.color)}>
                      {line.text}
                    </p>
                  )
                )}

                {/* partial line being typed */}
                {partial && partial.color !== "sep" && (
                  <p className={lineClass(partial.color)}>
                    {partial.text}
                    <span className="inline-block w-[7px] h-[15px] bg-green-400 ml-0.5 animate-pulse align-middle" />
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
