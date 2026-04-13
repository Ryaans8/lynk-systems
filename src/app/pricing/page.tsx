"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, Phone, Star } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

/* ─── Data ──────────────────────────────────────────────────────────────── */

const tiers = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 199,
    setupFee: 300,
    description: "Everything you need to stop missing jobs and start recovering lost revenue automatically.",
    popular: false,
    cta: "Get Started",
    ctaHref: "/contact",
    features: [
      "Missed call → instant WhatsApp response",
      "AI conversation and job qualification",
      "Urgency detection",
      "Summary sent to you at end of each conversation",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 299,
    setupFee: 500,
    description: "Everything in Starter, plus calendar booking and memory — your AI remembers each customer.",
    popular: true,
    cta: "Get Started",
    ctaHref: "/contact",
    features: [
      "Everything in Starter",
      "Direct calendar booking via Cal.com",
      "Conversation memory per customer",
      "Priority setup",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 399,
    setupFee: 750,
    description: "Full control and dedicated support — ideal for busier businesses or multiple lines.",
    popular: false,
    cta: "Get Started",
    ctaHref: "/contact",
    features: [
      "Everything in Growth",
      "Custom conversation flows",
      "Multiple phone numbers",
      "Priority support",
      "Monthly performance review",
    ],
  },
];

const faqs = [
  {
    question: "How does this actually make me more money?",
    answer:
      "Most businesses miss calls or reply too late. If you miss just a few calls a day, that can easily be thousands in lost jobs each month. Our AI responds instantly, handles the enquiry, and books the job — so you recover that lost revenue automatically.",
  },
  {
    question: "What happens when I miss a call?",
    answer:
      "Instead of going to voicemail, the customer gets an instant text response. The AI continues the conversation, answers questions, and books them in — without you needing to do anything.",
  },
  {
    question: "Do I need to change my phone number?",
    answer:
      "No. It works with your existing number. No new apps, no disruption.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No long-term contracts. You can cancel anytime. We believe the results speak for themselves.",
  },
];

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
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
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium mb-6"
          >
            <Phone size={14} />
            No contracts. Cancel anytime.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-navy"
          >
            Simple, Transparent Pricing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg text-slate max-w-xl mx-auto leading-relaxed"
          >
            Pick the plan that fits your business. Every plan comes with a one-off
            setup fee and then a simple monthly price — no surprises.
          </motion.p>
        </div>
      </section>

      {/* ── Pricing Cards ────────────────────────────────────────────────── */}
      <section className="pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {tiers.map((tier, i) => {
              const isPopular = tier.popular;

              return (
                <SectionReveal key={tier.id} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: isPopular ? -4 : -6 }}
                    transition={{ duration: 0.25 }}
                    className={`relative rounded-2xl flex flex-col gap-6 card p-8 card-hover ${
                      isPopular
                        ? "bg-navy border-navy shadow-2xl -mt-4"
                        : "bg-white"
                    }`}
                  >
                    {/* Popular badge */}
                    {isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan text-navy text-xs font-bold shadow-lg whitespace-nowrap">
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
                    <div>
                      <div className="flex items-end gap-2">
                        <span
                          className={`text-5xl font-bold tracking-tight ${
                            isPopular ? "text-white" : "text-navy"
                          }`}
                        >
                          £{tier.monthlyPrice}
                        </span>
                        <span
                          className={`text-sm pb-1 font-medium ${
                            isPopular ? "text-white/50" : "text-slate"
                          }`}
                        >
                          /month
                        </span>
                      </div>
                      <p
                        className={`mt-1 text-xs font-medium ${
                          isPopular ? "text-white/50" : "text-slate"
                        }`}
                      >
                        + £{tier.setupFee} one-off setup fee
                      </p>
                    </div>

                    {/* CTA */}
                    <Link
                      href={tier.ctaHref}
                      className={`inline-flex items-center justify-center gap-2 group ${
                        isPopular ? "btn-cyan" : "btn-primary"
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
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <Check
                            size={16}
                            className="text-cyan shrink-0 mt-0.5"
                          />
                          <span
                            className={
                              isPopular ? "text-white/90" : "text-navy/80"
                            }
                          >
                            {feature}
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

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy">
                Common Questions
              </h2>
              <p className="mt-3 text-slate">
                Straight answers — no fluff.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="card p-8">
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
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionReveal>
            <div className="rounded-2xl bg-navy p-12 lg:p-16 text-center">
              <p className="text-cyan font-semibold text-sm uppercase tracking-widest mb-4">
                Free Demo
              </p>

              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Not sure which plan?
              </h2>
              <p className="text-lg text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
                Book a free demo and we&apos;ll walk you through it. No pressure,
                no jargon — just a clear picture of what&apos;s possible for your business.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-cyan inline-flex items-center gap-2 group"
                >
                  Book a Free Demo
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="btn-outline inline-flex items-center gap-2 border-white/20 text-white hover:bg-white/10"
                >
                  <Phone size={16} />
                  Talk to Us
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-cyan" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-cyan" />
                  No long-term contracts
                </span>
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-cyan" />
                  Works with your existing number
                </span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
