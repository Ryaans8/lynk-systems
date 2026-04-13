"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Brain,
  Workflow,
  Bot,
  MessageSquare,
  BarChart3,
  Shield,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { HeroAnimation } from "@/components/hero-animation";
import { SectionReveal } from "@/components/section-reveal";
import { AnimatedCounter } from "@/components/animated-counter";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Agents",
    description:
      "Custom AI agents that learn your processes and execute tasks autonomously, 24/7.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Connect your entire tech stack with intelligent workflows that adapt and self-optimize.",
  },
  {
    icon: Bot,
    title: "Smart Chatbots",
    description:
      "Conversational AI that handles customer inquiries, support tickets, and lead qualification.",
  },
  {
    icon: Zap,
    title: "Instant Integrations",
    description:
      "Pre-built connectors for 500+ tools. Connect your CRM, email, databases, and more.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Real-time dashboards tracking automation performance, ROI, and operational metrics.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant infrastructure with end-to-end encryption and role-based access.",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Automations Built" },
  { value: 98, suffix: "%", label: "Uptime" },
  { value: 10, suffix: "x", label: "Faster Operations" },
  { value: 150, suffix: "+", label: "Happy Clients" },
];

const testimonials = [
  {
    quote:
      "Lynk Systems transformed our operations. What used to take our team hours now happens automatically in seconds.",
    author: "Sarah Chen",
    role: "COO, TechFlow Inc",
  },
  {
    quote:
      "The AI agents they built for us handle 80% of our customer inquiries. Our response time went from hours to instant.",
    author: "Marcus Webb",
    role: "Head of Support, DataPulse",
  },
  {
    quote:
      "We saved over 200 hours per month after implementing their automation workflows. The ROI was immediate.",
    author: "Emily Torres",
    role: "Operations Lead, ScaleUp",
  },
];

const logos = ["Vercel", "Stripe", "Notion", "Slack", "HubSpot", "Shopify"];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden grid-bg">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Copy */}
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/5 border border-cyan/20 text-cyan text-sm font-medium mb-6"
              >
                <Zap size={14} />
                AI-Powered Automation
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-navy"
              >
                Automate your
                <br />
                <span className="gradient-text">business with AI</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg text-slate leading-relaxed"
              >
                We build intelligent automation systems that connect your tools,
                streamline workflows, and scale your operations — so you can
                focus on what matters.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-all duration-200 hover:shadow-xl hover:shadow-navy/20 active:scale-[0.97] cursor-pointer group"
                >
                  See it in action
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-navy font-semibold rounded-xl border-2 border-border hover:border-cyan/30 hover:bg-cyan/5 transition-all duration-200 active:scale-[0.97] cursor-pointer"
                >
                  Book a Call
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 flex items-center gap-6 text-sm text-slate"
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-cyan" />
                  No-code setup
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-cyan" />
                  14-day free trial
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={16} className="text-cyan" />
                  24/7 support
                </span>
              </motion.div>
            </div>

            {/* Right — Animated Workflow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="glass rounded-2xl p-6 glow-cyan">
                <HeroAnimation />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 border-y border-border bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <p className="text-center text-sm font-medium text-slate-light uppercase tracking-wider mb-8">
              Trusted by innovative companies
            </p>
          </SectionReveal>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {logos.map((logo, i) => (
              <SectionReveal key={logo} delay={i * 0.08}>
                <span className="text-xl font-bold text-slate/30 hover:text-slate/60 transition-colors duration-300 cursor-default">
                  {logo}
                </span>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-navy">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="mt-2 text-sm text-slate font-medium">
                    {stat.label}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-muted/30 grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy">
                Everything you need to{" "}
                <span className="gradient-text">automate at scale</span>
              </h2>
              <p className="mt-4 text-lg text-slate">
                From simple task automation to complex AI-powered workflows, we
                provide the full toolkit.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <SectionReveal key={feature.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="glass rounded-2xl p-6 hover:shadow-lg hover:shadow-cyan/5 transition-shadow duration-300 cursor-default group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-4 group-hover:bg-cyan/20 transition-colors duration-300">
                    <feature.icon size={24} className="text-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy">
                How it works
              </h2>
              <p className="mt-4 text-lg text-slate">
                From discovery to deployment in three simple steps.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We audit your current workflows, identify bottlenecks, and map out automation opportunities.",
              },
              {
                step: "02",
                title: "Build & Integrate",
                desc: "Our team designs and builds custom automation flows, AI agents, and integrations tailored to you.",
              },
              {
                step: "03",
                title: "Launch & Scale",
                desc: "We deploy, monitor, and continuously optimize your automations as your business grows.",
              },
            ].map((item, i) => (
              <SectionReveal key={item.step} delay={i * 0.15}>
                <div className="relative">
                  <span className="text-7xl font-bold text-cyan/10">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">
                What our clients say
              </h2>
              <p className="mt-4 text-lg text-slate-light">
                Real results from real businesses.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <SectionReveal key={t.author} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="glass-dark rounded-2xl p-8 cursor-default"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        className="w-4 h-4 text-cyan"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/90 leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-white">{t.author}</p>
                    <p className="text-sm text-slate-light">{t.role}</p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="relative rounded-3xl bg-navy p-12 lg:p-16 text-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan/20 rounded-full blur-[120px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Ready to automate your business?
                </h2>
                <p className="text-lg text-slate-light max-w-xl mx-auto mb-8">
                  Book a free discovery call and we&apos;ll show you exactly how
                  AI automation can save you time and money.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-navy font-bold rounded-xl hover:bg-cyan-light transition-all duration-200 hover:shadow-xl hover:shadow-cyan/30 active:scale-[0.97] cursor-pointer group"
                  >
                    Book a Free Call
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 active:scale-[0.97] cursor-pointer"
                  >
                    View Demo
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
