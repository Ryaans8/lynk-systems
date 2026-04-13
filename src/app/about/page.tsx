"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageSquare,
  Brain,
  UserCheck,
  Layers,
  Globe,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

// ─── Data ────────────────────────────────────────────────────────────────────

const whatWeDo = [
  {
    icon: MessageSquare,
    title: "Instant Response",
    description:
      "Every missed call triggers an automatic text message within seconds — before the customer has time to call a competitor.",
  },
  {
    icon: Brain,
    title: "Smart Conversation",
    description:
      "AI handles the full enquiry: answering questions, qualifying the lead, and booking jobs directly into your calendar.",
  },
  {
    icon: UserCheck,
    title: "You Stay in Control",
    description:
      "Every conversation summary is sent straight to you. You see everything, decide everything — the AI just handles the legwork.",
  },
];

const values = [
  {
    icon: Layers,
    title: "Simple by design",
    description:
      "No jargon. No complexity. It just works.",
  },
  {
    icon: Globe,
    title: "Built for the UK",
    description:
      "Designed around how UK businesses and customers communicate.",
  },
  {
    icon: TrendingUp,
    title: "Results first",
    description:
      "If it doesn't recover lost revenue, it's not doing its job.",
  },
  {
    icon: ShieldCheck,
    title: "Honest and transparent",
    description:
      "No hidden fees, no long contracts, no surprises.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionReveal>
            <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl md:text-6xl">
              We built Lynk Systems because we saw good businesses losing money for no reason
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate sm:text-xl">
              Missed calls. Slow replies. Lost jobs. It doesn't have to be this way.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ── Founding Story ───────────────────────────────────────────────── */}
      <section className="section-alt py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">

            {/* Left: story copy */}
            <SectionReveal direction="right">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-navy md:text-4xl">
                  Our founding story
                </h2>
                <p className="mb-4 leading-relaxed text-slate">
                  Most businesses don't realise how many customers they lose from missed calls
                  and delayed responses. We saw this happening every day — and experienced it
                  ourselves. Enquiries going unanswered, voicemails ignored, potential jobs
                  disappearing.
                </p>
                <p className="mb-4 leading-relaxed text-slate">
                  Lynk Systems was built to solve a simple but expensive problem. With instant
                  AI responses, businesses don't need to lose money anymore because they were
                  too busy to pick up the phone.
                </p>
                <p className="leading-relaxed text-slate">
                  We handle the conversation — respond instantly to missed calls, answer
                  customer questions, and book jobs directly into your calendar — so you never
                  miss an opportunity again.
                </p>
              </div>
            </SectionReveal>

            {/* Right: highlighted quote */}
            <SectionReveal direction="left" delay={0.15}>
              <div className="card p-7 card-hover bg-navy rounded-2xl">
                <p className="text-2xl font-semibold leading-snug text-white md:text-3xl">
                  "The best time to respond to a customer is immediately. The second best time
                  is right now."
                </p>
              </div>
            </SectionReveal>

          </div>
        </div>
      </section>

      {/* ── What We Do ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold text-navy md:text-4xl">
                What we do
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate">
                Three things, done properly.
              </p>
            </div>
          </SectionReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {whatWeDo.map(({ icon: Icon, title, description }, i) => (
              <SectionReveal key={title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="card p-7 card-hover h-full flex flex-col"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                    <Icon size={22} className="text-cyan-600" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-navy">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate">
                    {description}
                  </p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────────── */}
      <section className="section-alt py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold text-navy md:text-4xl">
                What we stand for
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate">
                The principles behind every decision we make.
              </p>
            </div>
          </SectionReveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, description }, i) => (
              <SectionReveal key={title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="card p-7 card-hover flex gap-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                    <Icon size={22} className="text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-navy">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate">
                      {description}
                    </p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionReveal>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to stop missing out?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-lg text-white/70">
              See how Lynk Systems works for your business — no pressure, no jargon.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Book a Free Demo
              <ArrowRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>

    </main>
  );
}
