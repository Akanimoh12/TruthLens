"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Server,
  Code2,
  MonitorSmartphone,
  Rocket,
  Globe,
  Check,
} from "lucide-react";

const phases = [
  {
    icon: Layers,
    phase: "Phase 1",
    title: "Foundation",
    timeline: "Weeks 1–2",
    active: true,
    items: [
      "Initialize monorepo structure",
      "Docker Compose for local dev",
      "Next.js app with routing",
      "FastAPI with core endpoints",
      "PostgreSQL + Redis setup",
      "CI/CD pipeline",
    ],
  },
  {
    icon: Server,
    phase: "Phase 2",
    title: "Core Backend",
    timeline: "Weeks 3–4",
    active: false,
    items: [
      "Claim submission API",
      "Database models & migrations",
      "Celery task queue",
      "WebSocket real-time updates",
      "JWT authentication",
      "Source credibility service",
    ],
  },
  {
    icon: Code2,
    phase: "Phase 3",
    title: "Miner Development",
    timeline: "Weeks 5–6",
    active: false,
    items: [
      "Bittensor miner template",
      "Search engine integration",
      "LLM reasoning pipeline",
      "Source validator",
      "Verdict generator",
      "Local subtensor testing",
    ],
  },
  {
    icon: Code2,
    phase: "Phase 4",
    title: "Validator Development",
    timeline: "Weeks 7–8",
    active: false,
    items: [
      "Bittensor validator template",
      "Multi-dimensional scoring",
      "Honeypot system",
      "Consensus calculator",
      "Weight setting",
      "Local subtensor testing",
    ],
  },
  {
    icon: MonitorSmartphone,
    phase: "Phase 5",
    title: "Frontend & Dashboard",
    timeline: "Weeks 9–10",
    active: false,
    items: [
      "Dashboard UI",
      "Claim submission form",
      "Verdict display",
      "Analytics charts",
      "Responsive design",
      "UI polish & animations",
    ],
  },
  {
    icon: Rocket,
    phase: "Phase 6",
    title: "Integration & Launch",
    timeline: "Weeks 11–12",
    active: false,
    items: [
      "End-to-end testing",
      "Testnet deployment",
      "Performance optimization",
      "Security audit",
      "Documentation",
      "Mainnet launch prep",
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-padding relative bg-gray-50/50 grid-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-100 rounded-md mb-4">
            Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Development roadmap
          </h2>
          <p className="max-w-lg mx-auto text-gray-500 text-base">
            12 weeks from foundation to mainnet — building each layer of the
            TruthLens ecosystem.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`p-5 rounded-xl bg-white border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-50 ${
                phase.active
                  ? "border-green-300 shadow-sm shadow-green-100"
                  : "border-gray-100 hover:border-green-200"
              }`}
            >
              {/* Phase Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      phase.active
                        ? "bg-green-100 border border-green-200"
                        : "bg-gray-50 border border-gray-100"
                    }`}
                  >
                    <phase.icon
                      className={`w-4 h-4 ${
                        phase.active ? "text-green-600" : "text-gray-400"
                      }`}
                    />
                  </div>
                  <div>
                    <div
                      className={`text-[10px] font-bold uppercase tracking-widest ${
                        phase.active ? "text-green-600" : "text-gray-400"
                      }`}
                    >
                      {phase.phase}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                      {phase.title}
                    </h3>
                  </div>
                </div>
                <span
                  className={`px-2 py-0.5 text-[10px] font-semibold rounded border ${
                    phase.active
                      ? "bg-green-50 border-green-200 text-green-700"
                      : "bg-gray-50 border-gray-100 text-gray-400"
                  }`}
                >
                  {phase.timeline}
                </span>
              </div>

              {/* Items */}
              <ul className="space-y-1.5">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px]">
                    <Check
                      className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                        phase.active ? "text-green-500" : "text-gray-300"
                      }`}
                    />
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Post-launch note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white border border-gray-100 rounded-lg text-sm">
            <Globe className="w-4 h-4 text-green-600" />
            <span className="text-gray-500">
              <span className="text-gray-900 font-medium">Post-Launch:</span>{" "}
              API monetization · Platform partnerships · Data products
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
