"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  Clock,
  BookOpen,
  Users,
  Plug,
  CheckCircle2,
  ArrowRight,
  Zap,
  FileText,
  Bell,
  ThumbsUp,
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const services = [
  {
    icon: Phone,
    title: "Never Miss Another Enquiry",
    bullets: [
      "Instant text response to every missed call",
      "24/7 enquiry handling — nights, weekends, bank holidays",
      "Handles the conversation so you don't have to",
      "Works with your existing phone number",
    ],
  },
  {
    icon: Calendar,
    title: "Turn Missed Calls Into Booked Jobs",
    bullets: [
      "Qualifies the lead and books directly into your calendar",
      "Sends you a job summary after each conversation",
      "Urgency detection — flags hot leads immediately",
      "No back-and-forth needed",
    ],
  },
  {
    icon: Clock,
    title: "Save Hours of Admin Every Week",
    bullets: [
      "Handles repetitive customer questions automatically",
      "Reminds customers of upcoming appointments",
      "Reduces interruptions while you're on a job",
      "Frees up your time for higher-value work",
    ],
  },
  {
    icon: BookOpen,
    title: "Direct Calendar Booking",
    bullets: [
      "Customers book themselves into your schedule",
      "Integrates with your existing calendar",
      "You approve or adjust — complete control",
      "No more phone tag",
    ],
  },
  {
    icon: Users,
    title: "Keeps Track of Every Customer",
    bullets: [
      "Remembers past conversations per customer",
      "Personalised follow-ups as standard",
      "Knows returning customers vs new leads",
      "Never asks a customer the same question twice",
    ],
  },
  {
    icon: Plug,
    title: "Connects With Your Existing Tools",
    bullets: [
      "Works with your phone system",
      "Syncs with your existing calendar",
      "Fits around how you already work",
      "No new apps to learn — set up in under 48 hours",
    ],
  },
];

const whyUs = [
  {
    icon: Zap,
    title: "Fast Setup",
    description:
      "Up and running within 48 hours. No lengthy onboarding, no waiting around.",
  },
  {
    icon: FileText,
    title: "No Long Contracts",
    description:
      "Month-to-month, no tie-ins. Stay because it works, not because you're locked in.",
  },
  {
    icon: Bell,
    title: "You Stay in Control",
    description:
      "Nothing happens without you being notified. You're always in the loop.",
  },
  {
    icon: ThumbsUp,
    title: "Built for the UK Market",
    description:
      "Designed around how UK tradespeople and service businesses actually operate.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium mb-6"
            >
              <Phone size={14} />
              Built for Tradespeople
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-navy"
            >
              Stop Losing Jobs to <span className="text-cyan">Missed Calls</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-slate leading-relaxed max-w-xl mx-auto"
            >
              Lynk Systems handles your enquiries, books your jobs, and keeps
              customers updated — so you can focus on the work, not the phone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Link href="/contact" className="btn-primary group">
                Book a Free Demo
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link href="#services" className="btn-outline">
                See What We Do
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-alt py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy">
                Everything You Need to Win More Work
              </h2>
              <p className="mt-4 text-lg text-slate">
                Six ways Lynk Systems puts more money in your pocket and more
                hours back in your day.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <SectionReveal key={service.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="card p-7 card-hover h-full flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                      <service.icon size={24} className="text-cyan" />
                    </div>
                    <h3 className="text-xl font-bold text-navy leading-snug pt-1.5">
                      {service.title}
                    </h3>
                  </div>

                  <ul className="space-y-3 mt-auto">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm text-slate"
                      >
                        <CheckCircle2
                          size={16}
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy">
                Why Lynk Systems
              </h2>
              <p className="mt-4 text-lg text-slate">
                No fuss, no jargon. Just a system that works from day one.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="card p-7 card-hover text-center h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-cyan/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={26} className="text-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">
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

      {/* CTA */}
      <section className="section-alt py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="rounded-3xl bg-navy p-12 lg:p-16 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl lg:text-4xl font-bold text-white mb-4"
              >
                See It Working on Your Business
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-slate max-w-xl mx-auto mb-8 opacity-80"
              >
                Book a free 30-minute demo. We'll show you exactly how Lynk
                Systems fits around your work — no hard sell, no obligation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
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
              </motion.div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
