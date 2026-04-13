"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Lightbulb,
  ShieldCheck,
  Eye,
  TrendingUp,
  ArrowRight,
  Zap,
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { AnimatedCounter } from "@/components/animated-counter";

// ─── Data ────────────────────────────────────────────────────────────────────

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of the AI curve so you don't have to. Every solution we build leverages the latest models and orchestration patterns.",
    color: "from-cyan-400 to-cyan-600",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "Automation that breaks is worse than no automation. We engineer for uptime, graceful fallbacks, and observability from day one.",
    color: "from-violet-400 to-violet-600",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No black boxes. We explain every workflow we build, document every integration, and keep you in control of your own systems.",
    color: "from-sky-400 to-sky-600",
    bg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    description:
      "ROI is not a buzzword — it's a deliverable. We measure success by time saved, costs reduced, and revenue enabled.",
    color: "from-emerald-400 to-emerald-600",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

const team = [
  {
    initials: "AK",
    name: "Alex Kim",
    role: "Founder & CEO",
    bio: "Former ML engineer at two Fortune 500s. Built Lynk to make enterprise-grade AI accessible to every business.",
    color: "bg-cyan-500",
  },
  {
    initials: "MR",
    name: "Maya Rivera",
    role: "Head of Automation",
    bio: "10+ years in workflow engineering. Has architected over 300 production automations across finance, healthcare, and e-commerce.",
    color: "bg-violet-500",
  },
  {
    initials: "JS",
    name: "James Sullivan",
    role: "Lead AI Engineer",
    bio: "Specialises in LLM fine-tuning, RAG pipelines, and multi-agent orchestration. Turns bleeding-edge research into shipping products.",
    color: "bg-sky-500",
  },
  {
    initials: "PL",
    name: "Priya Lal",
    role: "Client Success Lead",
    bio: "Ensures every deployment exceeds expectations. Priya owns the relationship from kickoff to post-launch optimisation.",
    color: "bg-emerald-500",
  },
];

const stats = [
  { label: "Years in Business", target: 5, suffix: "+" },
  { label: "Clients Served", target: 150, suffix: "+" },
  { label: "Automations Deployed", target: 500, suffix: "+" },
  { label: "Hours Saved", target: 50000, suffix: "+" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grid-bg py-28 md:py-36">
        {/* Soft radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <SectionReveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-sm font-medium text-cyan-700">
              <Zap size={14} className="fill-cyan-500 text-cyan-500" />
              Our Story
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h1 className="text-4xl font-bold tracking-tight text-[#0f172a] sm:text-5xl md:text-6xl">
              About{" "}
              <span className="gradient-text">Lynk Systems</span>
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#64748b] sm:text-xl">
              We believe every business deserves the power of AI automation —
              not just the enterprises with hundred-person engineering teams.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <SectionReveal direction="right">
            <div className="glass rounded-2xl p-8 shadow-sm">
              <div className="mb-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
              <h2 className="mb-4 text-3xl font-bold text-[#0f172a] md:text-4xl">
                Why we built{" "}
                <span className="gradient-text">Lynk</span>
              </h2>
              <p className="mb-4 text-[#64748b] leading-relaxed">
                In 2020 we watched promising AI tools stall at the proof-of-concept
                stage — not because the technology wasn't ready, but because
                bridging complex AI capabilities to practical, day-to-day
                business operations required expertise most teams simply didn't
                have.
              </p>
              <p className="text-[#64748b] leading-relaxed">
                Lynk Systems was founded to close that gap. We combine deep AI
                engineering with a relentless focus on business outcomes, so our
                clients skip the experimentation phase and go straight to
                measurable results.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal direction="left" delay={0.15}>
            <div className="space-y-5">
              {[
                {
                  year: "2020",
                  text: "Founded with a mission to democratise AI for SMBs.",
                },
                {
                  year: "2022",
                  text: "Crossed 50 clients; launched our flagship workflow automation suite.",
                },
                {
                  year: "2023",
                  text: "Expanded into multi-agent orchestration and LLM fine-tuning.",
                },
                {
                  year: "2025",
                  text: "150+ clients, 500+ automations in production, and counting.",
                },
              ].map(({ year, text }) => (
                <div key={year} className="flex gap-4">
                  <div className="flex h-10 w-16 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-sm font-bold text-cyan-600">
                    {year}
                  </div>
                  <p className="text-[#64748b] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <section className="bg-[#0f172a] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map(({ label, target, suffix }, i) => (
              <SectionReveal key={label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white md:text-5xl">
                    <AnimatedCounter target={target} suffix={suffix} duration={2.2} />
                  </div>
                  <div className="mt-2 text-sm font-medium text-[#64748b]">
                    {label}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionReveal>
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
              What we stand for
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#64748b]">
              Four principles that guide every engagement, every line of code,
              and every conversation with a client.
            </p>
          </div>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(
            ({ icon: Icon, title, description, bg, iconColor }, i) => (
              <SectionReveal key={title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass flex h-full flex-col rounded-2xl p-7 shadow-sm"
                >
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${bg}`}
                  >
                    <Icon size={22} className={iconColor} />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-[#0f172a]">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#64748b]">
                    {description}
                  </p>
                </motion.div>
              </SectionReveal>
            )
          )}
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────────── */}
      <section className="grid-bg py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold text-[#0f172a] md:text-4xl">
                The team behind the technology
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[#64748b]">
                Builders, engineers, and strategists obsessed with making AI
                work in the real world.
              </p>
            </div>
          </SectionReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(({ initials, name, role, bio, color }, i) => (
              <SectionReveal key={name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass flex flex-col items-center rounded-2xl p-8 text-center shadow-sm"
                >
                  {/* Avatar */}
                  <div
                    className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full ${color} text-xl font-bold text-white shadow-md`}
                  >
                    {initials}
                  </div>
                  <h3 className="text-base font-semibold text-[#0f172a]">
                    {name}
                  </h3>
                  <span className="mb-3 mt-1 text-xs font-medium text-cyan-600">
                    {role}
                  </span>
                  <p className="text-sm leading-relaxed text-[#64748b]">
                    {bio}
                  </p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionReveal>
            <div className="glass rounded-2xl px-8 py-14 shadow-sm">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-lg">
                <Zap size={24} className="text-white" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-[#0f172a] md:text-4xl">
                Ready to automate{" "}
                <span className="gradient-text">smarter</span>?
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-[#64748b]">
                Let's talk about where AI automation can make the biggest impact
                in your business. No jargon, no pressure — just a genuine
                conversation about your goals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 px-7 py-3.5 text-base font-semibold text-white shadow-md transition hover:from-cyan-600 hover:to-cyan-700 hover:shadow-cyan-200/60 hover:shadow-lg"
              >
                Get in touch
                <ArrowRight size={18} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
