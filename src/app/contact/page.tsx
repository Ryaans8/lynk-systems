"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

// ─── FAQ Data ────────────────────────────────────────────────────────────────

const faqs = [
  {
    id: 1,
    question: "What happens on the demo?",
    answer:
      "We'll walk you through the system live, show you how the missed call → text response works, and answer any questions. No hard sell.",
  },
  {
    id: 2,
    question: "How long does setup take?",
    answer:
      "Most businesses are set up and running within 48 hours of signing up.",
  },
  {
    id: 3,
    question: "Do I need to change anything about how I work?",
    answer:
      "Nothing changes on your end. It plugs into your existing phone number and calendar.",
  },
  {
    id: 4,
    question: "What if I'm not happy?",
    answer:
      "No long-term contracts. Cancel anytime, no questions asked.",
  },
  {
    id: 5,
    question: "Do you work with [my type of business]?",
    answer:
      "If you receive calls from customers and sometimes miss them, we can help. Book a demo and we'll confirm in 5 minutes.",
  },
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FaqItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="card p-7 overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left group"
        aria-expanded={open}
      >
        <span className="font-semibold text-navy text-base leading-snug">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex-shrink-0 text-slate-400"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-slate pt-4 mt-4 text-sm leading-relaxed border-t border-slate-100">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Field components ─────────────────────────────────────────────────────────

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

function FormInput({ label, id, ...props }: InputProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy mb-1.5">
        {label}
      </label>
      <input
        id={id}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-4 py-3 rounded-xl border bg-white text-navy placeholder-slate-400 text-sm outline-none transition-all duration-200"
        style={{
          borderColor: focused ? "#06b6d4" : "#e2e8f0",
          boxShadow: focused
            ? "0 0 0 3px rgba(6,182,212,0.12), 0 1px 3px rgba(0,0,0,0.06)"
            : "0 1px 3px rgba(0,0,0,0.04)",
        }}
        {...props}
      />
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

function FormTextarea({ label, id, ...props }: TextareaProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy mb-1.5">
        {label}
      </label>
      <textarea
        id={id}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={4}
        className="w-full px-4 py-3 rounded-xl border bg-white text-navy placeholder-slate-400 text-sm outline-none transition-all duration-200 resize-none"
        style={{
          borderColor: focused ? "#06b6d4" : "#e2e8f0",
          boxShadow: focused
            ? "0 0 0 3px rgba(6,182,212,0.12), 0 1px 3px rgba(0,0,0,0.06)"
            : "0 1px 3px rgba(0,0,0,0.04)",
        }}
        {...props}
      />
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
}

function FormSelect({ label, id, children, ...props }: SelectProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy mb-1.5">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full px-4 py-3 rounded-xl border bg-white text-navy text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
          style={{
            borderColor: focused ? "#06b6d4" : "#e2e8f0",
            boxShadow: focused
              ? "0 0 0 3px rgba(6,182,212,0.12), 0 1px 3px rgba(0,0,0,0.06)"
              : "0 1px 3px rgba(0,0,0,0.04)",
          }}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />
      </div>
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    businessType: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="card p-7">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center text-center py-14 gap-5"
          >
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 18 }}
              className="w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center"
            >
              <CheckCircle2 size={36} className="text-cyan-500" />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">You&apos;re booked in!</h3>
              <p className="text-slate text-sm leading-relaxed max-w-xs mx-auto">
                We&apos;ll be in touch within 2 hours to confirm your free demo.
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", phone: "", businessType: "", message: "" });
              }}
              className="text-sm text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-150 underline underline-offset-2"
            >
              Submit another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div>
              <h2 className="text-2xl font-bold text-navy mb-1">Book your free demo</h2>
              <p className="text-slate text-sm">
                Takes 2 minutes. We&apos;ll confirm within 2 hours.
              </p>
            </div>

            <FormInput
              label="Your name *"
              id="name"
              name="name"
              type="text"
              placeholder="John Smith"
              value={form.name}
              onChange={handleChange}
              required
            />

            <FormInput
              label="Phone number *"
              id="phone"
              name="phone"
              type="tel"
              placeholder="+44 7700 900 123"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <FormSelect
              label="Business type *"
              id="businessType"
              name="businessType"
              value={form.businessType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select your trade or business</option>
              <option value="plumber">Plumber</option>
              <option value="electrician">Electrician</option>
              <option value="builder">Builder</option>
              <option value="roofer">Roofer</option>
              <option value="landscaper">Landscaper</option>
              <option value="other-trades">Other trades</option>
              <option value="service-business">Service business</option>
              <option value="other">Other</option>
            </FormSelect>

            <FormTextarea
              label="Anything else? (optional)"
              id="message"
              name="message"
              placeholder="How many calls do you typically miss in a week? Any questions before the demo?"
              value={form.message}
              onChange={handleChange}
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="btn-primary flex items-center justify-center gap-2 w-full py-3.5 disabled:opacity-75"
            >
              {loading ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                  />
                  <span>Sending…</span>
                </>
              ) : (
                <span>Book My Free Demo</span>
              )}
            </motion.button>

            <p className="text-center text-xs text-slate-400">
              No commitment. No contracts. Just a quick demo.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-700 bg-cyan-50 border border-cyan-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              Free demo — no commitment
            </span>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-tight tracking-tight mb-5">
              Don&apos;t miss another job —<br className="hidden sm:block" /> even when you miss the call
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="text-slate text-lg max-w-2xl mx-auto leading-relaxed">
              Book a free demo and we&apos;ll show you exactly how missed calls turn into booked jobs, live with your actual phone number.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
          {/* Left — Contact Form */}
          <SectionReveal direction="left">
            <ContactForm />
          </SectionReveal>

          {/* Right — Info Cards */}
          <div className="flex flex-col gap-5">
            {/* Email card */}
            <SectionReveal direction="right" delay={0.05}>
              <div className="card p-7">
                <h3 className="font-bold text-navy text-sm uppercase tracking-wide mb-4">
                  Contact details
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 w-9 h-9 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                      <Mail size={17} className="text-cyan-600" />
                    </span>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">Email us</p>
                      <a
                        href="mailto:hello@lynksystems.uk"
                        className="text-sm font-semibold text-navy hover:text-cyan-600 transition-colors duration-150"
                      >
                        hello@lynksystems.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 w-9 h-9 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                      <MapPin size={17} className="text-cyan-600" />
                    </span>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">Location</p>
                      <p className="text-sm font-semibold text-navy">United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Response time badge */}
            <SectionReveal direction="right" delay={0.1}>
              <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-cyan-200 bg-cyan-50">
                <Phone size={16} className="text-cyan-600 flex-shrink-0" />
                <p className="text-sm text-cyan-900 font-medium">
                  We reply within{" "}
                  <span className="font-bold">2 hours</span>{" "}
                  — usually much faster.
                </p>
              </div>
            </SectionReveal>

            {/* ROI callout — navy bg */}
            <SectionReveal direction="right" delay={0.15}>
              <div className="rounded-2xl bg-navy p-7">
                <p className="text-white text-sm leading-relaxed mb-5">
                  If you miss just 3 calls a day at £80 a job, that&apos;s over{" "}
                  <span className="font-bold text-cyan-400">£7,200 in lost revenue</span>{" "}
                  every month. Our plans start from £199/month.
                </p>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-400 transition-colors duration-150"
                >
                  See pricing
                  <ArrowRight size={15} />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 pb-28 max-w-3xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
              Common questions
            </h2>
            <p className="text-slate text-base max-w-xl mx-auto">
              Everything you need to know before booking.{" "}
              <a
                href="mailto:hello@lynksystems.uk"
                className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-150"
              >
                Still unsure? Just ask.
              </a>
            </p>
          </div>
        </SectionReveal>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <SectionReveal key={faq.id} delay={i * 0.07}>
              <FaqItem faq={faq} />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-slate text-sm mb-4">
              Ready to stop losing jobs to missed calls?
            </p>
            <a href="#top" className="btn-cyan inline-flex items-center gap-2">
              Book my free demo
              <ArrowRight size={15} />
            </a>
          </div>
        </SectionReveal>
      </section>
    </main>
  );
}
