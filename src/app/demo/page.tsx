"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageSquare,
  Calendar,
  Bell,
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  ArrowRight,
  PhoneMissed,
  Zap,
  ClipboardList,
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

// ─── SMS Conversation Data ────────────────────────────────────────────────────

type MessageRole = "ai" | "customer";

interface Message {
  id: number;
  role: MessageRole;
  text: string;
  delay: number; // ms after previous message finishes
}

const MESSAGES: Message[] = [
  {
    id: 0,
    role: "ai",
    text: "Hi, I just tried to call Capital Plumbing but couldn't get through. I can help — what's the job you need done?",
    delay: 600,
  },
  {
    id: 1,
    role: "customer",
    text: "Hi yes I need a boiler service",
    delay: 1400,
  },
  {
    id: 2,
    role: "ai",
    text: "Great, I can get that sorted for you. Are you looking for a one-off service or do you need a full boiler inspection too?",
    delay: 1200,
  },
  {
    id: 3,
    role: "customer",
    text: "Just a service please, when's the earliest available?",
    delay: 1600,
  },
  {
    id: 4,
    role: "ai",
    text: "We have Thursday 17th at 10am or Friday 18th at 2pm. Which works best for you?",
    delay: 1200,
  },
  {
    id: 5,
    role: "customer",
    text: "Thursday please",
    delay: 1400,
  },
  {
    id: 6,
    role: "ai",
    text: "Perfect, you're booked in for Thursday 17th at 10am. You'll get a confirmation text shortly. Is there anything else you need?",
    delay: 1200,
  },
  {
    id: 7,
    role: "customer",
    text: "No that's great thanks",
    delay: 1400,
  },
];

// ─── Automate Cards ───────────────────────────────────────────────────────────

const automations = [
  {
    icon: PhoneMissed,
    title: "Missed Call Response",
    desc: "Instant text back to every missed call, any time of day",
  },
  {
    icon: MessageSquare,
    title: "Lead Qualification",
    desc: "AI asks the right questions to understand the job before you call back",
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    desc: "Customer books themselves into your calendar without you being involved",
  },
  {
    icon: Bell,
    title: "Customer Follow-Up",
    desc: "Automatic reminders sent to customers before their appointment",
  },
];

// ─── Before / After Data ─────────────────────────────────────────────────────

const before = [
  "Call goes to voicemail",
  "Customer moves on",
  "You call back hours later",
  '"Ah sorry I\'ve gone with someone else"',
  "Job lost",
];

const after = [
  "Instant text response sent",
  "AI qualifies the lead",
  "Job booked into calendar",
  "You receive a summary",
  "Job won",
];

// ─── SMS Demo Component ───────────────────────────────────────────────────────

function SmsDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  function clearAllTimeouts() {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }

  function scrollToBottom() {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }

  function startDemo() {
    clearAllTimeouts();
    setVisibleCount(0);
    setIsTyping(false);
    setIsDone(false);
    setIsRunning(true);

    let elapsed = 400;

    MESSAGES.forEach((msg, index) => {
      const typingDelay = elapsed + msg.delay;
      const showDelay = typingDelay + (msg.role === "ai" ? 900 : 500);

      // Show typing indicator before AI messages
      if (msg.role === "ai") {
        const t1 = setTimeout(() => {
          setIsTyping(true);
          scrollToBottom();
        }, typingDelay);
        timeoutsRef.current.push(t1);
      }

      const t2 = setTimeout(() => {
        setIsTyping(false);
        setVisibleCount(index + 1);
        scrollToBottom();
        if (index === MESSAGES.length - 1) {
          setIsRunning(false);
          setIsDone(true);
        }
      }, showDelay);
      timeoutsRef.current.push(t2);

      elapsed = showDelay + 200;
    });
  }

  // Scroll as new messages appear
  useEffect(() => {
    scrollToBottom();
  }, [visibleCount, isTyping]);

  // Cleanup on unmount
  useEffect(() => () => clearAllTimeouts(), []);

  const visibleMessages = MESSAGES.slice(0, visibleCount);

  return (
    <div className="flex flex-col items-center">
      {/* Phone frame */}
      <div className="w-full max-w-sm mx-auto">
        {/* Phone shell */}
        <div
          className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-navy"
          style={{ background: "#0f172a" }}
        >
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-4 pb-2 text-white/70 text-xs font-medium">
            <span>9:41</span>
            <div className="w-24 h-5 bg-navy rounded-full" />
            <div className="flex gap-1 items-center">
              <span>●●●</span>
            </div>
          </div>

          {/* Chat header */}
          <div className="flex items-center gap-3 px-4 pb-3 border-b border-white/10">
            <div className="w-9 h-9 rounded-full bg-cyan flex items-center justify-center flex-shrink-0">
              <Zap size={16} className="text-navy" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold leading-tight">
                Capital Plumbing
              </p>
              <p className="text-white/50 text-xs">AI Assistant</p>
            </div>
          </div>

          {/* Messages area */}
          <div
            ref={scrollRef}
            className="h-96 overflow-y-auto px-3 py-4 flex flex-col gap-2"
            style={{ background: "#f0f2f5" }}
          >
            {/* Missed call notice */}
            <div className="flex flex-col items-center gap-1 mb-2">
              <div className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-3 py-1.5">
                <PhoneMissed size={12} className="text-red-400" />
                <span className="text-red-500 text-xs font-medium">
                  Missed call
                </span>
              </div>
              <span className="text-slate-400 text-xs">Just now</span>
            </div>

            <AnimatePresence>
              {visibleMessages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={`flex ${
                    msg.role === "customer" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "customer"
                        ? "bg-blue-500 text-white rounded-br-md"
                        : "bg-white text-navy shadow-sm rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex justify-start"
                >
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-slate-400"
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: i * 0.15,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Done badge */}
            <AnimatePresence>
              {isDone && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-1 mt-2"
                >
                  <div className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-3 py-1.5">
                    <CheckCircle2 size={12} className="text-green-500" />
                    <span className="text-green-600 text-xs font-semibold">
                      Job booked — no phone call needed
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input bar (decorative) */}
          <div
            className="flex items-center gap-2 px-3 py-3 border-t border-white/10"
            style={{ background: "#f0f2f5" }}
          >
            <div className="flex-1 bg-white rounded-full px-4 py-2 text-slate-300 text-sm">
              Message…
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <ArrowRight size={14} className="text-white" />
            </div>
          </div>
        </div>

        {/* Play / Replay button below phone */}
        <div className="mt-6 flex justify-center">
          {!isRunning && !isDone && (
            <button onClick={startDemo} className="btn-cyan">
              <Play size={16} />
              Play Demo
            </button>
          )}
          {isRunning && (
            <div className="flex items-center gap-2 text-slate text-sm font-medium">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              >
                <RotateCcw size={15} className="text-cyan" />
              </motion.div>
              Playing…
            </div>
          )}
          {isDone && (
            <button onClick={startDemo} className="btn-outline">
              <RotateCcw size={15} />
              Replay
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DemoPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-28 pb-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <SectionReveal className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan-dark text-sm font-semibold mb-5">
              <PhoneMissed size={13} />
              Live demo
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight mb-4">
              See exactly how it works
            </h1>
            <p className="text-lg text-slate leading-relaxed">
              Watch how a missed call turns into a booked job — in real time.
            </p>
          </SectionReveal>

          {/* SMS Demo */}
          <SectionReveal delay={0.15}>
            <SmsDemo />
          </SectionReveal>
        </div>
      </section>

      {/* ── Before / After ── */}
      <section className="py-20 section-alt">
        <div className="max-w-6xl mx-auto px-6">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-3">
              The difference is instant
            </h2>
            <p className="text-slate text-lg max-w-xl mx-auto">
              One small change replaces every lost job and wasted hour.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Old way */}
            <SectionReveal delay={0.1} direction="left">
              <div className="card p-6 card-hover border-red-200 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
                    <XCircle size={16} className="text-red-400" />
                  </div>
                  <span className="font-bold text-navy text-base">
                    The old way
                  </span>
                </div>
                <ul className="flex flex-col gap-3">
                  {before.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-red-100 flex-shrink-0 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      </div>
                      <span className="text-slate text-sm leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            {/* New way */}
            <SectionReveal delay={0.2} direction="right">
              <div
                className="card p-6 card-hover h-full"
                style={{ borderColor: "rgba(6,182,212,0.35)" }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-cyan-dark" />
                  </div>
                  <span className="font-bold text-navy text-base">
                    With Lynk
                  </span>
                </div>
                <ul className="flex flex-col gap-3">
                  {after.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-cyan/15 flex-shrink-0 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-dark" />
                      </div>
                      <span className="text-slate text-sm leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── What you can automate ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-3">
              What you can automate
            </h2>
            <p className="text-slate text-lg max-w-xl mx-auto">
              Four things that run on their own — so you don't have to.
            </p>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {automations.map(({ icon: Icon, title, desc }, i) => (
              <SectionReveal key={title} delay={i * 0.08}>
                <div className="card p-6 card-hover h-full flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-cyan-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-base mb-1.5">
                      {title}
                    </h3>
                    <p className="text-slate text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 section-alt border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <SectionReveal className="max-w-xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan-dark text-sm font-semibold mb-5">
              <Zap size={13} />
              Free setup call
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-4">
              Ready to see this working with your number?
            </h2>
            <p className="text-slate text-lg mb-8 leading-relaxed">
              We'll set it up live on the call. No tech skills needed — if you
              have a phone number, you're good to go.
            </p>
            <Link href="/contact" className="btn-cyan">
              Book a Free Demo
              <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
