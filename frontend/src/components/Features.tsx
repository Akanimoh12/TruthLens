"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Eye,
  Scale,
  Database,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Bias-Resistant",
    description:
      "Multiple independent miners verify each claim. No single entity controls the verdict, eliminating single-point bias.",
  },
  {
    icon: Zap,
    title: "Real-Time",
    description:
      "Sub-minute fact-checking powered by distributed AI agents competing to deliver the fastest, most accurate results.",
  },
  {
    icon: Eye,
    title: "Transparent Reasoning",
    description:
      "Every verdict includes traceable evidence, source citations, and step-by-step logical reasoning chains.",
  },
  {
    icon: Scale,
    title: "Economic Incentives",
    description:
      "TAO rewards ensure miners produce high-quality, accurate verifications consistently through aligned incentives.",
  },
  {
    icon: Database,
    title: "Source Scoring",
    description:
      "Automated 5-tier source ranking from peer-reviewed journals to unverified claims, building a trust database.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "256+ distributed nodes worldwide handle millions of claims through diverse perspectives and parallel processing.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding relative grid-bg">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-100 rounded-md mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Verification you can trust
          </h2>
          <p className="max-w-lg mx-auto text-gray-500 text-base">
            Built on Bittensor&apos;s decentralized network for unprecedented
            transparency and accuracy.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group p-6 rounded-xl border border-gray-100 bg-white hover:border-green-200 hover:shadow-lg hover:shadow-green-50 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                <feature.icon className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1.5">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
