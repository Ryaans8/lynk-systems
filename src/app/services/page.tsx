"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Workflow,
  Brain,
  MessageSquare,
  Database,
  TrendingUp,
  Plug,
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  Users,
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Eliminate repetitive manual tasks by connecting your entire tool stack into seamless, intelligent workflows that run around the clock.",
    bullets: [
      "n8n, Make, and Zapier integrations",
      "Multi-step conditional logic flows",
      "Event-driven triggers & webhooks",
      "Cross-platform data synchronization",
      "Error handling & retry mechanisms",
    ],
  },
  {
    icon: Brain,
    title: "Custom AI Agents",
    description:
      "Autonomous AI agents that understand your business context, process complex data, and make intelligent decisions without human intervention.",
    bullets: [
      "LLM-powered decision-making agents",
      "Automated data extraction & enrichment",
      "Customer service & ticket routing",
      "Document analysis & summarization",
      "Continuous learning from your data",
    ],
  },
  {
    icon: MessageSquare,
    title: "Chatbot Development",
    description:
      "Conversational AI built for your brand — trained on your knowledge base to handle sales inquiries, support tickets, and user onboarding at scale.",
    bullets: [
      "Sales & lead qualification bots",
      "Customer support automation",
      "Onboarding & product tours",
      "Multi-channel deployment (web, Slack, WhatsApp)",
      "CRM integration & handoff to humans",
    ],
  },
  {
    icon: Database,
    title: "Data Pipeline Automation",
    description:
      "Reliable ETL pipelines that move, transform, and sync your data in real time — keeping every system in your stack up to date and accurate.",
    bullets: [
      "Extract, transform, load (ETL) pipelines",
      "Real-time and batch data processing",
      "Database-to-database migrations",
      "Data validation & deduplication",
      "Automated reporting & dashboards",
    ],
  },
  {
    icon: TrendingUp,
    title: "Process Optimization",
    description:
      "We audit your existing operations, map every workflow, and redesign processes for maximum efficiency — uncovering automation opportunities you never knew existed.",
    bullets: [
      "End-to-end workflow audit",
      "Bottleneck identification & removal",
      "Process documentation & mapping",
      "ROI analysis & automation roadmap",
      "Change management support",
    ],
  },
  {
    icon: Plug,
    title: "Integration Services",
    description:
      "Custom API development and purpose-built connectors that bridge the gap between legacy systems, SaaS tools, and internal platforms.",
    bullets: [
      "REST & GraphQL API development",
      "Custom connectors for legacy systems",
      "OAuth & authentication handling",
      "Third-party SaaS integrations",
      "Real-time event streaming",
    ],
  },
];

const whyUs = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Most automation projects go live within 2–4 weeks. We move quickly so you see ROI fast.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "All automations are built with SOC 2 standards in mind — encrypted, audited, and access-controlled.",
  },
  {
    icon: Clock,
    title: "Always-On Support",
    description:
      "24/7 monitoring and dedicated support means your automations never go down unnoticed.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description:
      "We don't disappear after launch. We iterate, optimize, and grow your automations alongside your business.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden grid-bg">
        <div className="absolute top-10 left-1/3 w-[500px] h-[400px] bg-cyan/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/5 border border-cyan/20 text-cyan text-sm font-medium mb-6"
            >
              <Zap size={14} />
              What We Build
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-navy"
            >
              Our{" "}
              <span className="gradient-text">Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-slate leading-relaxed max-w-xl mx-auto"
            >
              From one-off integrations to full-scale AI transformation — we
              design and deploy automation that compounds in value over time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-all duration-200 hover:shadow-xl hover:shadow-navy/20 active:scale-[0.97] cursor-pointer group"
              >
                Start a Project
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-navy font-semibold rounded-xl border-2 border-border hover:border-cyan/30 hover:bg-cyan/5 transition-all duration-200 active:scale-[0.97] cursor-pointer"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy">
                End-to-end automation,{" "}
                <span className="gradient-text">built for you</span>
              </h2>
              <p className="mt-4 text-lg text-slate">
                Every service is custom-scoped to your stack, your goals, and
                your timeline — no cookie-cutter templates.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <SectionReveal key={service.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="glass rounded-2xl p-8 hover:shadow-lg hover:shadow-cyan/5 transition-shadow duration-300 group h-full flex flex-col"
                >
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0 group-hover:bg-cyan/20 transition-colors duration-300">
                      <service.icon size={24} className="text-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mt-auto">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-slate"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-cyan shrink-0 mt-0.5"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lynk Systems */}
      <section className="py-24 bg-muted/30 grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy">
                Why{" "}
                <span className="gradient-text">Lynk Systems</span>
              </h2>
              <p className="mt-4 text-lg text-slate">
                We&apos;re not just implementers — we&apos;re automation
                partners invested in your long-term success.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="glass rounded-2xl p-6 hover:shadow-lg hover:shadow-cyan/5 transition-shadow duration-300 group text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-cyan/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan/20 transition-colors duration-300">
                    <item.icon size={26} className="text-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process strip */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-xl mx-auto mb-14">
              <h2 className="text-3xl font-bold text-navy">
                Our delivery process
              </h2>
              <p className="mt-3 text-slate">
                Structured, transparent, and built to ship fast.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We map your workflows, goals, and tech stack to uncover the highest-value automation opportunities.",
              },
              {
                step: "02",
                title: "Design",
                desc: "Our team architects the solution — diagrams, data flows, and a full spec before a single line is written.",
              },
              {
                step: "03",
                title: "Build & Test",
                desc: "Rapid development with staged testing environments and your team in the loop throughout.",
              },
              {
                step: "04",
                title: "Launch & Iterate",
                desc: "We deploy, monitor, and keep optimizing — automations evolve as your business does.",
              },
            ].map((item, i) => (
              <SectionReveal key={item.step} delay={i * 0.12}>
                <div className="relative">
                  <span className="text-7xl font-bold text-cyan/10 leading-none">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
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
              <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium mb-6">
                    <Zap size={14} />
                    Let&apos;s talk automation
                  </p>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl lg:text-4xl font-bold text-white mb-4"
                >
                  Ready to see what&apos;s possible?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-slate-light max-w-xl mx-auto mb-8"
                >
                  Book a free 30-minute strategy call. We&apos;ll analyse your
                  workflows and show you exactly where automation can save you
                  time and money — no obligation.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center justify-center gap-4"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-navy font-bold rounded-xl hover:bg-cyan-light transition-all duration-200 hover:shadow-xl hover:shadow-cyan/30 active:scale-[0.97] cursor-pointer group"
                  >
                    Book a Free Strategy Call
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 active:scale-[0.97] cursor-pointer"
                  >
                    View Live Demo
                  </Link>
                </motion.div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
