"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, Zap, Star } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

/* ─── Data ──────────────────────────────────────────────────────────────── */

const tiers = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 497,
    description: "Perfect for small businesses ready to automate their first workflows.",
    popular: false,
    cta: "Get Started",
    ctaHref: "/contact",
    features: [
      { text: "3 custom automations", included: true },
      { text: "Email support", included: true },
      { text: "Basic integrations (up to 5 tools)", included: true },
      { text: "Monthly reporting", included: true },
      { text: "AI agents", included: false },
      { text: "Advanced integrations", included: false },
      { text: "Custom dashboards", included: false },
      { text: "Dedicated account manager", included: false },
      { text: "SLA guarantee", included: false },
      { text: "24/7 support", included: false },
    ],
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 997,
    description: "For scaling teams that need powerful AI and deeper integrations.",
    popular: true,
    cta: "Start Growing",
    ctaHref: "/contact",
    features: [
      { text: "10 custom automations", included: true },
      { text: "Priority support", included: true },
      { text: "Advanced integrations (unlimited tools)", included: true },
      { text: "Weekly reporting", included: true },
      { text: "AI agents", included: true },
      { text: "Custom dashboards", included: true },
      { text: "Dedicated account manager", included: false },
      { text: "SLA guarantee", included: false },
      { text: "24/7 support", included: false },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: null,
    description: "Unlimited automation power with white-glove service for large organisations.",
    popular: false,
    cta: "Contact Sales",
    ctaHref: "/contact",
    features: [
      { text: "Unlimited automations", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Advanced integrations (unlimited tools)", included: true },
      { text: "Real-time reporting", included: true },
      { text: "Custom AI development", included: true },
      { text: "Custom dashboards", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "SLA guarantee", included: true },
      { text: "24/7 support", included: true },
    ],
  },
];

const comparisonRows = [
  { feature: "Custom automations", starter: "3", growth: "10", enterprise: "Unlimited" },
  { feature: "Integrations", starter: "Up to 5", growth: "Unlimited", enterprise: "Unlimited" },
  { feature: "AI agents", starter: false, growth: true, enterprise: true },
  { feature: "Reporting cadence", starter: "Monthly", growth: "Weekly", enterprise: "Real-time" },
  { feature: "Custom dashboards", starter: false, growth: true, enterprise: true },
  { feature: "Support", starter: "Email", growth: "Priority", enterprise: "24/7 Dedicated" },
  { feature: "Account manager", starter: false, growth: false, enterprise: true },
  { feature: "SLA guarantee", starter: false, growth: false, enterprise: true },
  { feature: "Custom AI development", starter: false, growth: false, enterprise: true },
];

const faqs = [
  {
    question: "Can I change plans at any time?",
    answer:
      "Yes — you can upgrade or downgrade at any time. Upgrades take effect immediately and we pro-rate the difference. Downgrades apply at the next billing cycle.",
  },
  {
    question: "What does 'custom automation' mean exactly?",
    answer:
      "A custom automation is a distinct workflow we build for you — for example, automatically routing leads from your website into your CRM, sending follow-up emails, and logging the activity in Notion. Complex multi-step workflows count as one automation.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No lock-in on monthly billing. Annual plans are paid up-front and save you 20%, but we're happy to start month-to-month so you can see results before committing.",
  },
  {
    question: "What if I need more automations than my plan includes?",
    answer:
      "You can add extra automations as bolt-on packages at any time, or simply upgrade to the next tier. Enterprise clients get unlimited automations by default.",
  },
];

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function BillingToggle({
  annual,
  onChange,
}: {
  annual: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => onChange(false)}
        className={`text-sm font-semibold transition-colors duration-200 ${
          !annual ? "text-navy" : "text-slate"
        }`}
      >
        Monthly
      </button>

      <button
        onClick={() => onChange(!annual)}
        aria-label="Toggle annual billing"
        className="relative w-12 h-6 rounded-full bg-navy/10 border border-border transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          className="absolute top-1 w-4 h-4 rounded-full bg-cyan shadow-sm"
          style={{ left: annual ? "calc(100% - 20px)" : "4px" }}
        />
      </button>

      <button
        onClick={() => onChange(true)}
        className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-200 ${
          annual ? "text-navy" : "text-slate"
        }`}
      >
        Annual
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan/10 text-cyan text-xs font-bold border border-cyan/20">
          <Zap size={10} />
          Save 20%
        </span>
      </button>
    </div>
  );
}

function FeatureItem({ text, included }: { text: string; included: boolean }) {
  return (
    <li className="flex items-start gap-3 text-sm">
      {included ? (
        <Check size={16} className="text-cyan shrink-0 mt-0.5" />
      ) : (
        <X size={16} className="text-slate/40 shrink-0 mt-0.5" />
      )}
      <span className={included ? "text-navy/80" : "text-slate/50"}>{text}</span>
    </li>
  );
}

function ComparisonCell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <td className="py-3.5 px-4 text-center">
        <Check size={18} className="text-cyan mx-auto" />
      </td>
    ) : (
      <td className="py-3.5 px-4 text-center">
        <X size={16} className="text-slate/30 mx-auto" />
      </td>
    );
  }
  return (
    <td className="py-3.5 px-4 text-center text-sm font-medium text-navy/80">
      {value}
    </td>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="font-semibold text-navy group-hover:text-cyan transition-colors duration-200">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-6 h-6 rounded-full bg-navy/5 flex items-center justify-center text-navy"
        >
          <ArrowRight size={14} className="rotate-[-45deg]" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate leading-relaxed text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  function displayPrice(tier: (typeof tiers)[number]) {
    if (tier.monthlyPrice === null) return null;
    const price = annual
      ? Math.round(tier.monthlyPrice * 0.8)
      : tier.monthlyPrice;
    return price;
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
        {/* Gradient orbs */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[400px] bg-cyan/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/5 border border-cyan/20 text-cyan text-sm font-medium mb-6"
          >
            <Zap size={14} />
            No hidden fees. Cancel anytime.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-navy"
          >
            Simple,{" "}
            <span className="gradient-text">Transparent Pricing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg text-slate max-w-xl mx-auto leading-relaxed"
          >
            Choose the plan that fits your stage. Every tier includes a free
            onboarding session — we don&apos;t start billing until your first
            automation is live.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex justify-center"
          >
            <BillingToggle annual={annual} onChange={setAnnual} />
          </motion.div>
        </div>
      </section>

      {/* ── Pricing Cards ────────────────────────────────────────────────── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {tiers.map((tier, i) => {
              const price = displayPrice(tier);
              const isPopular = tier.popular;

              return (
                <SectionReveal key={tier.id} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className={`relative rounded-2xl p-8 flex flex-col gap-6 border transition-shadow duration-300 ${
                      isPopular
                        ? "bg-navy text-white border-cyan/30 glow-cyan shadow-2xl -mt-4"
                        : "glass border-border/60 hover:shadow-lg hover:shadow-cyan/5"
                    }`}
                  >
                    {/* Popular badge */}
                    {isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan text-navy text-xs font-bold shadow-lg shadow-cyan/30 whitespace-nowrap">
                          <Star size={12} fill="currentColor" />
                          Most Popular
                        </span>
                      </div>
                    )}

                    {/* Header */}
                    <div>
                      <h3
                        className={`text-xl font-bold mb-1 ${
                          isPopular ? "text-white" : "text-navy"
                        }`}
                      >
                        {tier.name}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed ${
                          isPopular ? "text-white/70" : "text-slate"
                        }`}
                      >
                        {tier.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="flex items-end gap-2">
                      {price !== null ? (
                        <>
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={`${tier.id}-${annual}`}
                              initial={{ opacity: 0, y: -12 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 12 }}
                              transition={{ duration: 0.25 }}
                              className={`text-5xl font-bold tracking-tight ${
                                isPopular ? "text-white" : "text-navy"
                              }`}
                            >
                              £{price.toLocaleString()}
                            </motion.span>
                          </AnimatePresence>
                          <span
                            className={`text-sm pb-1 font-medium ${
                              isPopular ? "text-white/50" : "text-slate"
                            }`}
                          >
                            /month
                          </span>
                        </>
                      ) : (
                        <span
                          className={`text-4xl font-bold ${
                            isPopular ? "text-white" : "text-navy"
                          }`}
                        >
                          Custom
                        </span>
                      )}
                    </div>

                    {annual && price !== null && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`-mt-4 text-xs font-medium ${
                          isPopular ? "text-cyan" : "text-cyan"
                        }`}
                      >
                        Billed annually — save £
                        {(tier.monthlyPrice! * 0.2 * 12).toLocaleString()}/yr
                      </motion.p>
                    )}

                    {/* CTA */}
                    <Link
                      href={tier.ctaHref}
                      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.97] group ${
                        isPopular
                          ? "bg-cyan text-navy hover:bg-cyan-light hover:shadow-lg hover:shadow-cyan/30"
                          : "bg-navy text-white hover:bg-navy-light hover:shadow-lg hover:shadow-navy/20"
                      }`}
                    >
                      {tier.cta}
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>

                    {/* Divider */}
                    <div
                      className={`h-px ${
                        isPopular ? "bg-white/10" : "bg-border"
                      }`}
                    />

                    {/* Features */}
                    <ul className="flex flex-col gap-3">
                      {tier.features.map((f) => (
                        <li key={f.text} className="flex items-start gap-3 text-sm">
                          {f.included ? (
                            <Check
                              size={16}
                              className={`shrink-0 mt-0.5 ${
                                isPopular ? "text-cyan" : "text-cyan"
                              }`}
                            />
                          ) : (
                            <X
                              size={16}
                              className={`shrink-0 mt-0.5 ${
                                isPopular ? "text-white/20" : "text-slate/30"
                              }`}
                            />
                          )}
                          <span
                            className={
                              f.included
                                ? isPopular
                                  ? "text-white/90"
                                  : "text-navy/80"
                                : isPopular
                                ? "text-white/30"
                                : "text-slate/40"
                            }
                          >
                            {f.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Feature Comparison Table ──────────────────────────────────────── */}
      <section className="py-24 bg-muted/30 grid-bg">
        <div className="max-w-5xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy">
                Compare <span className="gradient-text">all features</span>
              </h2>
              <p className="mt-3 text-slate">
                A full breakdown of what&apos;s included in each plan.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="glass rounded-2xl overflow-hidden border border-border/60">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="py-4 px-4 text-sm font-semibold text-navy w-2/5">
                      Feature
                    </th>
                    <th className="py-4 px-4 text-sm font-semibold text-center text-slate">
                      Starter
                    </th>
                    <th className="py-4 px-4 text-sm font-semibold text-center text-cyan">
                      Growth
                    </th>
                    <th className="py-4 px-4 text-sm font-semibold text-center text-slate">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-border/50 last:border-0 transition-colors duration-150 hover:bg-cyan/3 ${
                        i % 2 === 0 ? "bg-white/50" : "bg-transparent"
                      }`}
                    >
                      <td className="py-3.5 px-4 text-sm text-navy/80 font-medium">
                        {row.feature}
                      </td>
                      <ComparisonCell value={row.starter} />
                      <ComparisonCell value={row.growth} />
                      <ComparisonCell value={row.enterprise} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy">
                Pricing <span className="gradient-text">FAQs</span>
              </h2>
              <p className="mt-3 text-slate">
                Everything you need to know before you sign up.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="glass rounded-2xl px-6 divide-y divide-border">
              {faqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="relative rounded-3xl bg-navy p-12 lg:p-16 text-center overflow-hidden">
              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan/20 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-accent/15 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium mb-6">
                  <Zap size={14} />
                  Free, no-obligation
                </span>

                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Not sure which plan is right for you?
                </h2>
                <p className="text-lg text-slate-light max-w-xl mx-auto mb-8">
                  Book a free 30-minute consultation and we&apos;ll map out
                  exactly what you need — no sales pressure, just honest advice.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-navy font-bold rounded-xl hover:bg-cyan-light transition-all duration-200 hover:shadow-xl hover:shadow-cyan/30 active:scale-[0.97] group"
                  >
                    Book a Free Consultation
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 active:scale-[0.97]"
                  >
                    View Services
                  </Link>
                </div>

                {/* Trust chips */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-light">
                  <span className="flex items-center gap-2">
                    <Check size={15} className="text-cyan" />
                    No credit card required
                  </span>
                  <span className="flex items-center gap-2">
                    <Check size={15} className="text-cyan" />
                    Cancel anytime
                  </span>
                  <span className="flex items-center gap-2">
                    <Check size={15} className="text-cyan" />
                    Results within 30 days
                  </span>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
