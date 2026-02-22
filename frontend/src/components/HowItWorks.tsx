"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Network,
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Submit a Claim",
    description:
      "Users or platforms submit claims via our API or web interface. Claims are parsed, deduplicated, and categorized.",
    detail: "Factual · Statistical · Quotes · Scientific · Current Events",
  },
  {
    step: "02",
    icon: Network,
    title: "Distributed Research",
    description:
      "Miners across the network independently research the claim using web search, academic databases, and AI reasoning.",
    detail: "12+ miners verify each claim from diverse perspectives",
  },
  {
    step: "03",
    icon: BrainCircuit,
    title: "AI-Powered Analysis",
    description:
      "Each miner generates a verdict with evidence, confidence scores, and reasoning chains using advanced LLM engines.",
    detail: "Scoring: accuracy · sources · speed · reasoning quality",
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Consensus & Verdict",
    description:
      "Validators score responses, reach consensus, and deliver a transparent, verifiable verdict with evidence trails.",
    detail: "Proof of Verification ensures genuine research effort",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative bg-gray-50/50 grid-bg">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-100 rounded-md mb-4">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            How TruthLens works
          </h2>
          <p className="max-w-lg mx-auto text-gray-500 text-base">
            From claim submission to verified verdict in seconds, powered by
            distributed intelligence.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-green-100 hidden sm:block" />

          <div className="space-y-5">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative flex gap-5"
              >
                {/* Step indicator */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-[48px] h-[48px] rounded-xl bg-white border border-green-200 flex items-center justify-center shadow-sm">
                    <item.icon className="w-5 h-5 text-green-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="p-5 rounded-xl bg-white border border-gray-100 hover:border-green-200 transition-colors">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="text-[11px] font-bold text-green-600 uppercase tracking-widest">
                        Step {item.step}
                      </span>
                      <span className="text-base font-semibold text-gray-900">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <span className="inline-block px-2.5 py-1 bg-green-50 border border-green-100 text-green-700 rounded-md text-xs font-medium">
                      {item.detail}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
