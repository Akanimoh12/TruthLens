"use client";

import { Search, Github, Twitter, ExternalLink } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Architecture", href: "#architecture" },
    { label: "Roadmap", href: "#roadmap" },
  ],
  Developers: [
    { label: "Documentation", href: "https://github.com/Akanimoh12/TruthLens/blob/main/README.md" },
    { label: "API Reference", href: "https://github.com/Akanimoh12/TruthLens" },
    { label: "Miner Guide", href: "https://github.com/Akanimoh12/TruthLens" },
    { label: "Validator Guide", href: "https://github.com/Akanimoh12/TruthLens" },
  ],
  Community: [
    { label: "Twitter", href: "https://x.com/akanimoh__/status/2013163906164772944?s=20" },
    { label: "GitHub", href: "https://github.com/Akanimoh12/TruthLens" },
    { label: "Bittensor", href: "https://docs.bittensor.com" },
  ],
  Resources: [
    { label: "Bittensor Docs", href: "https://docs.bittensor.com" },
    { label: "Whitepaper", href: "https://github.com/Akanimoh12/TruthLens" },
    { label: "Brand Kit", href: "https://github.com/Akanimoh12/TruthLens" },
  ],
};

const socials = [
  { icon: Github, href: "https://github.com/Akanimoh12/TruthLens", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/akanimoh__/status/2013163906164772944?s=20", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-green-600 flex items-center justify-center">
                <Search className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-base font-bold text-gray-900">
                Truth<span className="text-green-600">Lens</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Decentralized fact-checking powered by Bittensor.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-200 transition-all"
                >
                  <s.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-gray-700 transition-colors inline-flex items-center gap-1"
                        {...(isExternal
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                        {isExternal && (
                          <ExternalLink className="w-2.5 h-2.5" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} TruthLens. Built on Bittensor.
          </p>
          <div className="flex items-center gap-1.5 text-gray-400 text-xs">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
            </span>
            Subnet Proposal — Bittensor Ideathon
          </div>
        </div>
      </div>
    </footer>
  );
}
