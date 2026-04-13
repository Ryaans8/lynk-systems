import Link from "next/link";

const footerLinks = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/pricing", label: "Pricing" },
  ],
  Services: [
    { href: "/services", label: "AI Automation" },
    { href: "/services", label: "Workflow Design" },
    { href: "/services", label: "Custom AI Agents" },
  ],
  Resources: [
    { href: "/demo", label: "Live Demo" },
    { href: "/contact", label: "Book a Call" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <path
                    d="M8 14 L16 8 L24 14 L24 24 L16 30 L8 24 Z"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M16 14 L24 8 L32 14 L32 24 L24 30 L16 24 Z"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight">
                LYNK <span className="font-medium text-slate-light">SYSTEMS</span>
              </span>
            </div>
            <p className="text-slate-light text-sm leading-relaxed max-w-xs">
              Intelligent automation systems that connect your tools, streamline
              workflows, and scale your operations with AI.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-light mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-light hover:text-cyan transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-light">
            &copy; {new Date().getFullYear()} Lynk Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-sm text-slate-light hover:text-cyan transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-sm text-slate-light hover:text-cyan transition-colors cursor-pointer">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
