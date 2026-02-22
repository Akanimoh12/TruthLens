"use client";

import { motion } from "framer-motion";
import {
  Server,
  ShieldCheck,
  Activity,
  Users,
  Timer,
  BarChart3,
} from "lucide-react";

const components = [
  {
    icon: Server,
    title: "Miner Network",
    description:
      "AI research agents that search, analyze, and generate verified fact-check reports with evidence chains.",
    tech: ["Python", "LangChain", "Bittensor SDK"],
  },
  {
    icon: ShieldCheck,
    title: "Validator Network",
    description:
      "Scoring engines that evaluate miner accuracy, source quality, reasoning, and response time.",
    tech: ["Python", "NumPy", "spaCy"],
  },
  {
    icon: Activity,
    title: "API Gateway",
    description:
      "FastAPI backend serving RESTful endpoints, WebSocket updates, and real-time claim tracking.",
    tech: ["FastAPI", "PostgreSQL", "Redis"],
  },
];

const stats = [
  { icon: Users, value: "256+", label: "Network Nodes" },
  { icon: Timer, value: "<60s", label: "Verification Time" },
  { icon: BarChart3, value: "5-Tier", label: "Source Scoring" },
  { icon: ShieldCheck, value: "94%+", label: "Consensus Rate" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="section-padding relative grid-bg">
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
            Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Built for scale &amp; trust
          </h2>
          <p className="max-w-lg mx-auto text-gray-500 text-base">
            Miners, validators, and API services — coordinated through the
            Bittensor blockchain.
          </p>
        </motion.div>

        {/* Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {components.map((comp, index) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group p-6 rounded-xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-50 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                <comp.icon className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1.5">
                {comp.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {comp.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {comp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-gray-50 border border-gray-100 rounded text-[11px] text-gray-500 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border border-green-100 bg-green-50/50 p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-4 h-4 text-green-600 mx-auto mb-2" />
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-0.5">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
