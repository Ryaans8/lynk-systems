"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  MessageSquare,
  FileText,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const problems = [
  "Phone rings while you're on a job — you miss it",
  "Customer calls a competitor who picks up",
  "You lose £80–£300 every time that happens",
  "It happens multiple times every single day",
];

const howItWorks = [
  {
    icon: Phone,
    step: "01",
    title: "Missed call detected",
    desc: "A customer calls your number. You're on a job and can't answer. Lynk Systems detects the missed call instantly.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "AI takes over on WhatsApp",
    desc: "Within seconds the customer receives a WhatsApp message from your AI receptionist. It handles the full conversation — no human needed.",
  },
  {
    icon: FileText,
    step: "03",
    title: "You get a full summary",
    desc: "Once the conversation is complete you receive a structured summary on WhatsApp with everything you need to follow up or show up prepared.",
  },
];

const benefits = [
  {
    title: "Never miss another enquiry",
    desc: "Every missed call gets an instant response — day or night, weekend or bank holiday.",
  },
  {
    title: "Stop losing jobs to voicemail",
    desc: "Customers who get a fast reply almost always stay. Those who hit voicemail usually don't.",
  },
  {
    title: "Works around your schedule",
    desc: "Respond to enquiries 24/7 without being on your phone. Your AI handles it.",
  },
  {
    title: "No disruption to how you work",
    desc: "Plugs into your existing phone number and calendar. No new apps to learn.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan-dark text-sm font-semibold mb-6"
            >
              <Phone size={13} />
              Missed call? Booked job.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-navy"
            >
              Never miss another job
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-6 text-xl text-slate leading-relaxed max-w-xl"
            >
              Lynk Systems gives your business an AI receptionist that responds
              to missed calls instantly on WhatsApp — qualifying the job,
              collecting details, and sending you a summary. 24/7, no staff
              needed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link href="/contact" className="btn-primary group">
                Book a Free Demo
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/demo" className="btn-outline">
                See How It Works
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem — money framing */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div>
                <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-4">
                  The real cost of a missed call
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  Every unanswered call is money walking out the door
                </h2>
                <p className="mt-4 text-slate-light text-lg leading-relaxed">
                  If you miss just 3 calls a day at £80 a job, that&apos;s over
                  £7,200 in lost revenue every single month.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="space-y-4">
                {problems.map((problem, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <AlertCircle size={18} className="text-cyan shrink-0 mt-0.5" />
                    <span className="text-white/90">{problem}</span>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-xl mx-auto mb-16">
              <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                How it works
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy">
                From missed call to booked job — automatically
              </h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((item, i) => (
              <SectionReveal key={item.step} delay={i * 0.12}>
                <div className="relative card p-8 card-hover">
                  <span className="text-6xl font-black text-slate-100 select-none leading-none">
                    {item.step}
                  </span>
                  <div className="mt-3 w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
                    <item.icon size={20} className="text-cyan" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-slate text-sm leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator strip */}
      <section className="py-16 bg-cyan/5 border-y border-cyan/10">
        <div className="max-w-6xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center">
              <p className="text-sm font-semibold text-cyan-dark uppercase tracking-widest mb-4">
                Quick maths
              </p>
              <p className="text-2xl lg:text-3xl font-bold text-navy max-w-2xl mx-auto leading-snug">
                Businesses using Lynk Systems recover an average of{" "}
                <span className="text-cyan-dark border-b-2 border-cyan">
                  £2,000–£5,000
                </span>{" "}
                in missed work every month.
              </p>
              <p className="mt-3 text-slate">
                Our plans start from £199/month. The maths speaks for itself.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionReveal>
            <div className="mb-14">
              <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
                What you get
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy max-w-xl">
                Built for busy tradespeople and service businesses
              </h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <SectionReveal key={b.title} delay={i * 0.08}>
                <div className="card p-7 card-hover flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={20} className="text-cyan-dark" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-1">{b.title}</h3>
                    <p className="text-slate text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 section-alt border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-navy">
                Works for any trade or service business
              </h2>
            </div>
          </SectionReveal>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Plumbers", "Electricians", "Builders", "Roofers", "Landscapers",
              "HVAC Engineers", "Pest Control", "Cleaners", "Personal Trainers",
              "Accountants", "Solicitors", "Dentists",
            ].map((trade, i) => (
              <SectionReveal key={trade} delay={i * 0.04}>
                <span className="px-4 py-2 rounded-full bg-white border border-slate-200 text-navy font-medium text-sm">
                  {trade}
                </span>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto">
              <Clock size={32} className="text-cyan mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                How many calls did you miss today?
              </h2>
              <p className="text-slate-light text-lg mb-8">
                Book a free demo and we&apos;ll show you exactly how it works —
                live, with your actual phone number.
              </p>
              <Link href="/contact" className="btn-cyan">
                Book a Free Demo
                <ArrowRight size={17} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
