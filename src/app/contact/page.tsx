"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Calendar,
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

// ─── FAQ Data ────────────────────────────────────────────────────────────────

const faqs = [
  {
    id: 1,
    question: "How quickly can you implement an automation solution?",
    answer:
      "Most projects are scoped and delivered within 2–6 weeks depending on complexity. Simple workflow automations can be live in as little as 3–5 business days. We'll give you a precise timeline during your discovery call.",
  },
  {
    id: 2,
    question: "Do I need technical knowledge to work with you?",
    answer:
      "Not at all. We handle all the technical heavy lifting — from architecture to deployment. You focus on your business goals; we translate them into working automations. We explain everything in plain English throughout the process.",
  },
  {
    id: 3,
    question: "What tools and platforms do you integrate with?",
    answer:
      "We integrate with virtually any platform that has an API — including CRMs (HubSpot, Salesforce), project tools (Notion, Asana, Linear), communication platforms (Slack, Teams), e-commerce (Shopify, WooCommerce), and hundreds more via Zapier, Make, or custom code.",
  },
  {
    id: 4,
    question: "What does the ongoing support look like?",
    answer:
      "All projects include a 30-day post-launch support window at no extra cost. After that, we offer flexible retainer plans so your automations stay maintained, monitored, and improved as your business evolves.",
  },
  {
    id: 5,
    question: "How is pricing structured?",
    answer:
      "We work on a fixed-project basis so you always know what you're paying upfront — no surprise invoices. Pricing scales with scope. Book a free call and we'll give you a transparent quote within 24 hours.",
  },
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FaqItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="glass rounded-2xl border border-slate-200/60 overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-semibold text-navy text-base leading-snug group-hover:text-cyan-600 transition-colors duration-200">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex-shrink-0 text-slate-400 group-hover:text-cyan-500 transition-colors duration-200"
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
            <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Animated Input ───────────────────────────────────────────────────────────

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

function AnimatedInput({ label, id, ...props }: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-slate-700 mb-1.5"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full px-4 py-3 rounded-xl border bg-white text-navy placeholder-slate-400 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-cyan-300/40"
          style={{
            borderColor: focused ? "#06b6d4" : "#e2e8f0",
            boxShadow: focused
              ? "0 0 0 3px rgba(6,182,212,0.12), 0 1px 3px rgba(0,0,0,0.06)"
              : "0 1px 3px rgba(0,0,0,0.04)",
          }}
          {...props}
        />
        <motion.span
          animate={{ scaleX: focused ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500 rounded-b-xl origin-left"
        />
      </div>
    </div>
  );
}

// ─── Animated Textarea ────────────────────────────────────────────────────────

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

function AnimatedTextarea({ label, id, ...props }: TextareaProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-slate-700 mb-1.5"
      >
        {label}
      </label>
      <div className="relative">
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
        <motion.span
          animate={{ scaleX: focused ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500 rounded-b-xl origin-left"
        />
      </div>
    </div>
  );
}

// ─── Animated Select ──────────────────────────────────────────────────────────

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
}

function AnimatedSelect({ label, id, children, ...props }: SelectProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-slate-700 mb-1.5"
      >
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
        <motion.span
          animate={{ scaleX: focused ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500 rounded-b-xl origin-left"
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
    email: "",
    company: "",
    message: "",
    budget: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="glass rounded-2xl glow-cyan p-8 border border-slate-200/60">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center text-center py-12 gap-5"
          >
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.1,
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              className="w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center"
            >
              <CheckCircle2 size={36} className="text-cyan-500" />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Message sent!
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                Thanks for reaching out. We typically reply within 2 hours
                during business hours. Check your inbox soon.
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({
                  name: "",
                  email: "",
                  company: "",
                  message: "",
                  budget: "",
                });
              }}
              className="text-sm text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-150 underline underline-offset-2"
            >
              Send another message
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
              <h2 className="text-2xl font-bold text-navy mb-1">
                Send us a message
              </h2>
              <p className="text-slate-500 text-sm">
                Tell us about your project and we&apos;ll be in touch fast.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AnimatedInput
                label="Your name"
                id="name"
                name="name"
                type="text"
                placeholder="Jane Smith"
                value={form.name}
                onChange={handleChange}
                required
              />
              <AnimatedInput
                label="Work email"
                id="email"
                name="email"
                type="email"
                placeholder="jane@company.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <AnimatedInput
              label="Company (optional)"
              id="company"
              name="company"
              type="text"
              placeholder="Acme Inc."
              value={form.company}
              onChange={handleChange}
            />

            <AnimatedTextarea
              label="Tell us about your project"
              id="message"
              name="message"
              placeholder="We're looking to automate our lead qualification process and connect HubSpot to our internal tools..."
              value={form.message}
              onChange={handleChange}
              required
            />

            <AnimatedSelect
              label="Estimated budget"
              id="budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a budget range
              </option>
              <option value="under-1k">Under £1,000</option>
              <option value="1k-5k">£1,000 – £5,000</option>
              <option value="5k-15k">£5,000 – £15,000</option>
              <option value="15k-plus">£15,000+</option>
              <option value="unsure">Not sure yet</option>
            </AnimatedSelect>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="relative flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden disabled:opacity-80 transition-opacity duration-200"
              style={{
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
              }}
            >
              {loading ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.8,
                      ease: "linear",
                    }}
                    className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                  />
                  <span>Sending…</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>

            <p className="text-center text-xs text-slate-400">
              No spam, ever. We respect your privacy.
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
      <section className="relative grid-bg pt-32 pb-20 px-6">
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-700 bg-cyan-50 border border-cyan-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              Get in touch
            </span>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-tight tracking-tight mb-5">
              Let&apos;s Build{" "}
              <span className="gradient-text">Something Amazing</span>
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to eliminate repetitive work and unlock real business
              growth? Drop us a message — we reply fast.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
          {/* Left — Contact Form */}
          <SectionReveal direction="left">
            <ContactForm />
          </SectionReveal>

          {/* Right — Info Cards */}
          <div className="flex flex-col gap-5">
            {/* Contact info */}
            <SectionReveal direction="right" delay={0.05}>
              <div className="glass rounded-2xl border border-slate-200/60 p-6 flex flex-col gap-4">
                <h3 className="font-bold text-navy text-base">
                  Contact details
                </h3>

                {[
                  {
                    icon: <Mail size={18} className="text-cyan-500" />,
                    label: "Email us",
                    value: "hello@lynksystems.uk",
                    href: "mailto:hello@lynksystems.uk",
                  },
                  {
                    icon: <Phone size={18} className="text-cyan-500" />,
                    label: "Call us",
                    value: "+44 (0) 7700 900 123",
                    href: "tel:+447700900123",
                  },
                  {
                    icon: <MapPin size={18} className="text-cyan-500" />,
                    label: "Location",
                    value: "United Kingdom",
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 w-8 h-8 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-semibold text-navy hover:text-cyan-600 transition-colors duration-150"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-navy">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>

            {/* Response time badge */}
            <SectionReveal direction="right" delay={0.1}>
              <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-cyan-200 bg-cyan-50">
                <Clock size={16} className="text-cyan-600 flex-shrink-0" />
                <p className="text-sm text-cyan-800 font-medium">
                  Typical response time:{" "}
                  <span className="font-bold">under 2 hours</span>
                </p>
              </div>
            </SectionReveal>

            {/* Book a call CTA */}
            <SectionReveal direction="right" delay={0.15}>
              <div className="rounded-2xl overflow-hidden glow-cyan border border-cyan-200/60">
                <div
                  className="p-6 text-white"
                  style={{
                    background: "linear-gradient(135deg, #0f172a, #1e293b)",
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center mb-4">
                    <Calendar size={18} className="text-cyan-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-1.5">Book a free call</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    30 minutes. No sales pitch. Just an honest look at how
                    automation could transform your workflow.
                  </p>
                  <Link
                    href="https://cal.com/lynksystems"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-navy transition-all duration-200 cursor-pointer"
                      style={{ background: "#06b6d4" }}
                    >
                      Schedule a call
                      <ArrowRight size={15} />
                    </motion.span>
                  </Link>
                </div>
              </div>
            </SectionReveal>

            {/* Decorative map placeholder */}
            <SectionReveal direction="right" delay={0.2}>
              <div className="rounded-2xl overflow-hidden border border-slate-200/60 h-[160px] relative">
                {/* Stylised map-like grid */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "#f8fafc",
                    backgroundImage: `
                      linear-gradient(rgba(6,182,212,0.06) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(6,182,212,0.06) 1px, transparent 1px)
                    `,
                    backgroundSize: "24px 24px",
                  }}
                />
                {/* "Roads" */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-30"
                  viewBox="0 0 380 160"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path
                    d="M0 80 Q95 50 190 80 T380 80"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="6 4"
                  />
                  <path
                    d="M190 0 Q210 80 190 160"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="6 4"
                  />
                </svg>
                {/* Pin */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.5,
                      ease: "easeInOut",
                    }}
                    className="flex flex-col items-center gap-1"
                  >
                    <div className="w-9 h-9 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/40">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold text-navy bg-white/80 px-2 py-0.5 rounded-full shadow-sm border border-slate-200">
                      United Kingdom
                    </span>
                  </motion.div>
                </div>
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
              Frequently asked{" "}
              <span className="gradient-text">questions</span>
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Everything you need to know before getting started. Can&apos;t
              find your answer?{" "}
              <a
                href="mailto:hello@lynksystems.uk"
                className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-150"
              >
                Just ask us.
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
      </section>
    </main>
  );
}
