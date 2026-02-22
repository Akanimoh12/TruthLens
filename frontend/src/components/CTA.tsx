"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

export default function CTA() {
  return (
    <section id="get-started" className="section-padding relative grid-bg">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-green-200 bg-green-50/60 p-10 sm:p-14 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to fight misinformation?
          </h2>

          <p className="max-w-md mx-auto text-gray-500 text-base leading-relaxed mb-8">
            Whether you&apos;re a developer, researcher, or organization —
            TruthLens gives you the tools to verify information at scale with
            transparent, decentralized AI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href="https://github.com/Akanimoh12/TruthLens"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              Run a Miner
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="https://github.com/Akanimoh12/TruthLens"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>

          {/* Use Cases */}
          <div className="pt-6 border-t border-green-200/60">
            <p className="text-gray-400 text-[11px] mb-3 uppercase tracking-widest font-semibold">
              Use Cases
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                "Crypto Scam Detection",
                "News Verification",
                "Quote Attribution",
                "Scientific Claims",
                "Due Diligence",
              ].map((useCase) => (
                <span
                  key={useCase}
                  className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-600 text-xs font-medium"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
