"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useAnimation, animate } from "framer-motion";
import {
  Mail,
  Brain,
  GitBranch,
  ClipboardList,
  MessageSquare,
  BarChart3,
  Play,
  CheckCircle2,
  Clock,
  ArrowRight,
  Zap,
  RefreshCw,
  Users,
  FileText,
  ShoppingCart,
  Calendar,
  Database,
  ChevronRight,
  AlertCircle,
  User,
  Timer,
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

// ─── Workflow Node Data ───────────────────────────────────────────────────────

const NODES = [
  {
    id: 0,
    label: "Email Received",
    icon: Mail,
    color: "#06b6d4",
    description: "Incoming message triggers the automation pipeline",
  },
  {
    id: 1,
    label: "AI Classifier",
    icon: Brain,
    color: "#8b5cf6",
    description: "GPT-4 reads, classifies, and extracts intent & entities",
  },
  {
    id: 2,
    label: "Route to Team",
    icon: GitBranch,
    color: "#06b6d4",
    description: "Smart routing based on priority, topic, and team capacity",
  },
  {
    id: 3,
    label: "Create Task",
    icon: ClipboardList,
    color: "#8b5cf6",
    description: "Auto-creates ticket in Linear / Jira with full context",
  },
  {
    id: 4,
    label: "Send Response",
    icon: MessageSquare,
    color: "#06b6d4",
    description: "Personalised AI-drafted reply sent within seconds",
  },
  {
    id: 5,
    label: "Log Analytics",
    icon: BarChart3,
    color: "#8b5cf6",
    description: "Every event logged to your real-time analytics dashboard",
  },
];

// SVG layout — two rows of 3, with connector lines drawn between them
// Row 1: nodes 0,1,2  (y=80)   Row 2: nodes 3,4,5  (y=220)
// Within-row connections: 0→1, 1→2, 3→4, 4→5
// Between-row connection: 2→3  (right-angle elbow)
const NODE_POSITIONS = [
  { x: 80,  y: 80  },   // 0
  { x: 280, y: 80  },   // 1
  { x: 480, y: 80  },   // 2
  { x: 480, y: 220 },   // 3
  { x: 280, y: 220 },   // 4
  { x: 80,  y: 220 },   // 5
];

const CONNECTIONS = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 4, to: 5 },
];

// ─── Animated Counter ────────────────────────────────────────────────────────

function Counter({
  target,
  suffix = "",
  duration = 1.8,
  trigger,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [trigger, target, duration]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

// ─── Flowing Dot ─────────────────────────────────────────────────────────────

function FlowingDot({
  fromX,
  fromY,
  toX,
  toY,
  color,
}: {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  delay: number;
  color: string;
}) {
  return (
    <motion.circle
      r={4}
      fill={color}
      filter="url(#glow)"
      initial={{ cx: fromX, cy: fromY, opacity: 0 }}
      animate={{
        cx: [fromX, toX],
        cy: [fromY, toY],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 1.1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1.5,
        times: [0, 0.1, 0.9, 1],
      }}
    />
  );
}

// ─── Workflow Node ────────────────────────────────────────────────────────────

function WorkflowNode({
  node,
  position,
  active,
  completed,
  onClick,
}: {
  node: (typeof NODES)[0];
  position: { x: number; y: number };
  active: boolean;
  completed: boolean;
  onClick: () => void;
}) {
  const Icon = node.icon;
  const cx = position.x + 48; // node center x (node width=96)
  const cy = position.y + 36; // node center y (node height=72)

  return (
    <motion.g
      style={{ cursor: "pointer" }}
      onClick={onClick}
      whileHover={{ scale: 1.06 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {/* Pulse ring on active */}
      {active && (
        <motion.circle
          cx={cx}
          cy={cy}
          r={36}
          fill="none"
          stroke={node.color}
          strokeWidth={2}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}

      {/* Node background rect */}
      <motion.rect
        x={position.x}
        y={position.y}
        width={96}
        height={72}
        rx={12}
        fill={completed ? node.color : active ? "rgba(15,23,42,0.95)" : "rgba(15,23,42,0.85)"}
        stroke={active || completed ? node.color : "rgba(100,116,139,0.4)"}
        strokeWidth={active ? 2 : 1}
        animate={{
          filter: active
            ? `drop-shadow(0 0 12px ${node.color})`
            : completed
            ? `drop-shadow(0 0 6px ${node.color}80)`
            : "none",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon */}
      <foreignObject x={position.x + 28} y={position.y + 10} width={40} height={28}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: completed ? "#ffffff" : active ? node.color : "#94a3b8",
          }}
        >
          <Icon size={20} />
        </div>
      </foreignObject>

      {/* Label */}
      <foreignObject x={position.x} y={position.y + 40} width={96} height={26}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: "9px",
            fontWeight: 600,
            color: completed ? "#ffffff" : active ? "#e2e8f0" : "#64748b",
            textAlign: "center",
            lineHeight: 1.2,
            padding: "0 4px",
          }}
        >
          {node.label}
        </div>
      </foreignObject>

      {/* Completed checkmark */}
      {completed && (
        <motion.circle
          cx={position.x + 84}
          cy={position.y + 8}
          r={8}
          fill="#10b981"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500 }}
        />
      )}
    </motion.g>
  );
}

// ─── Before/After Steps ───────────────────────────────────────────────────────

const manualSteps = [
  "Employee reads email manually",
  "Decides urgency / category",
  "Forwards to correct department",
  "Manually creates a support ticket",
  "Writes and sends reply from scratch",
  "Updates spreadsheet for reporting",
  "Manager reviews weekly summary",
];

const automatedSteps = [
  "Email auto-detected & parsed",
  "AI classifies in < 1 second",
  "Instant smart routing",
  "Ticket auto-created with context",
  "Personalised reply sent instantly",
  "Analytics updated in real-time",
];

// ─── Automation Examples ──────────────────────────────────────────────────────

const automationExamples = [
  {
    icon: Users,
    title: "Lead Qualification",
    description:
      "New form submission → AI scores lead → CRM updated → Sales rep notified → Follow-up email sent",
    time: "< 3 seconds",
    savings: "8 hrs / week",
    color: "#06b6d4",
  },
  {
    icon: ShoppingCart,
    title: "Order Processing",
    description:
      "Order placed → Inventory checked → Warehouse notified → Shipping label created → Customer updated",
    time: "< 5 seconds",
    savings: "15 hrs / week",
    color: "#8b5cf6",
  },
  {
    icon: FileText,
    title: "Invoice Approval",
    description:
      "Invoice received → Data extracted → GL codes assigned → Approval routed → Payment scheduled",
    time: "< 10 seconds",
    savings: "12 hrs / week",
    color: "#06b6d4",
  },
  {
    icon: Calendar,
    title: "Meeting Scheduling",
    description:
      "Request received → Calendars checked → Slot proposed → Invites sent → Agenda auto-generated",
    time: "< 2 seconds",
    savings: "5 hrs / week",
    color: "#8b5cf6",
  },
  {
    icon: Database,
    title: "Data Sync & Enrichment",
    description:
      "Record created → External APIs queried → Data enriched → Duplicates removed → Teams notified",
    time: "< 4 seconds",
    savings: "10 hrs / week",
    color: "#06b6d4",
  },
  {
    icon: MessageSquare,
    title: "Customer Support Triage",
    description:
      "Ticket received → Sentiment analysed → Priority set → Agent assigned → SLA timer started",
    time: "< 1 second",
    savings: "20 hrs / week",
    color: "#8b5cf6",
  },
];

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function DemoPage() {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [completedNodes, setCompletedNodes] = useState<Set<number>>(new Set());
  const [isRunning, setIsRunning] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Click any node or press Run Automation");
  const [countersVisible, setCountersVisible] = useState(false);
  const [selectedNode, setSelectedNode] = useState<number | null>(null);
  const [flowingEdges, setFlowingEdges] = useState<number[]>([]);
  const runRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const counterRef = useRef<HTMLDivElement | null>(null);

  // Observe when Before/After section enters viewport
  useEffect(() => {
    if (!counterRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCountersVisible(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(counterRef.current);
    return () => obs.disconnect();
  }, []);

  // Clean up on unmount
  useEffect(() => () => { if (runRef.current) clearTimeout(runRef.current); }, []);

  const resetDemo = () => {
    if (runRef.current) clearTimeout(runRef.current);
    setActiveNode(null);
    setCompletedNodes(new Set());
    setIsRunning(false);
    setStatusMessage("Click any node or press Run Automation");
    setSelectedNode(null);
    setFlowingEdges([]);
  };

  const runAutomation = () => {
    if (isRunning) return;
    resetDemo();

    // small delay so reset settles
    setTimeout(() => {
      setIsRunning(true);
      setStatusMessage("🚀 Running automation pipeline…");

      const sequence = NODES.map((_, idx) => idx);

      sequence.forEach((nodeIdx, step) => {
        const delay = step * 900;

        runRef.current = setTimeout(() => {
          setActiveNode(nodeIdx);
          setSelectedNode(nodeIdx);
          setStatusMessage(`Processing: ${NODES[nodeIdx].label}…`);

          // activate the flowing edge leaving this node
          const edgeIdx = CONNECTIONS.findIndex((c) => c.from === nodeIdx);
          if (edgeIdx !== -1) {
            setFlowingEdges((prev) => [...prev, edgeIdx]);
          }

          // mark complete after 700ms
          runRef.current = setTimeout(() => {
            setCompletedNodes((prev) => new Set([...prev, nodeIdx]));
            setActiveNode(null);

            if (nodeIdx === sequence[sequence.length - 1]) {
              setIsRunning(false);
              setStatusMessage("✅ Automation complete — 0.8 seconds vs 45 minutes manually!");
            }
          }, 700);
        }, delay);
      });
    }, 100);
  };

  const handleNodeClick = (nodeId: number) => {
    setSelectedNode(nodeId === selectedNode ? null : nodeId);
    if (!isRunning) {
      setActiveNode(nodeId);
      setTimeout(() => setActiveNode(null), 1200);
      setCompletedNodes((prev) => {
        const next = new Set(prev);
        next.add(nodeId);
        return next;
      });
      setStatusMessage(`Activated: ${NODES[nodeId].label}`);
    }
  };

  // SVG viewBox dimensions
  const svgW = 620;
  const svgH = 320;

  // Build path between two nodes (center-to-center)
  const getPath = (from: number, to: number) => {
    const f = NODE_POSITIONS[from];
    const t = NODE_POSITIONS[to];
    const fx = f.x + 48;
    const fy = f.y + 36;
    const tx = t.x + 48;
    const ty = t.y + 36;
    // elbow path for same-column connector (2→3)
    if (Math.abs(fx - tx) < 1) {
      return `M ${fx} ${fy} L ${tx} ${ty}`;
    }
    // straight line for same-row
    return `M ${fx} ${fy} L ${tx} ${ty}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grid-bg pt-28 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-transparent to-cyan/5" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <SectionReveal>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan/20 text-sm font-medium text-slate mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Zap size={14} className="text-cyan-500" />
              Interactive Live Demo
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-navy mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              See Automation{" "}
              <span className="gradient-text">in Action</span>
            </motion.h1>

            <motion.p
              className="text-xl text-slate max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Watch a real AI workflow run end-to-end in under a second. Click any node to
              inspect it, or hit <strong className="text-navy">Run Automation</strong> to see
              the full pipeline fire.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-accent text-white font-semibold shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all"
              >
                Build My Automation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-slate/20 text-navy font-semibold hover:border-cyan/40 transition-all"
              >
                View All Services
              </Link>
            </motion.div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Interactive Workflow Builder ──────────────────────────────── */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Email Triage Automation
              </h2>
              <p className="text-slate-light max-w-xl mx-auto">
                A 6-node pipeline that handles every inbound email — classification, routing,
                task creation, reply, and logging — with zero human touch.
              </p>
            </div>
          </SectionReveal>

          {/* Status Bar */}
          <motion.div
            className="glass-dark rounded-xl px-5 py-3 mb-6 text-center text-sm font-medium"
            animate={{
              borderColor: isRunning
                ? "rgba(6,182,212,0.6)"
                : completedNodes.size === NODES.length
                ? "rgba(16,185,129,0.6)"
                : "rgba(100,116,139,0.2)",
            }}
            style={{ border: "1px solid" }}
          >
            <motion.span
              key={statusMessage}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className={
                completedNodes.size === NODES.length && !isRunning
                  ? "text-emerald-400"
                  : isRunning
                  ? "text-cyan-400"
                  : "text-slate-300"
              }
            >
              {statusMessage}
            </motion.span>
          </motion.div>

          {/* SVG Workflow Canvas */}
          <div className="glass-dark rounded-2xl p-4 md:p-8 glow-cyan mb-6 overflow-x-auto">
            <svg
              viewBox={`0 0 ${svgW} ${svgH}`}
              className="w-full"
              style={{ minWidth: 320, maxWidth: "100%" }}
            >
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <marker
                  id="arrowCyan"
                  markerWidth="8"
                  markerHeight="8"
                  refX="6"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L0,6 L8,3 z" fill="#06b6d4" />
                </marker>
                <marker
                  id="arrowSlate"
                  markerWidth="8"
                  markerHeight="8"
                  refX="6"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L0,6 L8,3 z" fill="#334155" />
                </marker>
              </defs>

              {/* Connection lines */}
              {CONNECTIONS.map((conn, idx) => {
                const f = NODE_POSITIONS[conn.from];
                const t = NODE_POSITIONS[conn.to];
                const fx = f.x + 48;
                const fy = f.y + 36;
                const tx = t.x + 48;
                const ty = t.y + 36;
                const isActive = flowingEdges.includes(idx);
                return (
                  <g key={idx}>
                    {/* Base line */}
                    <motion.line
                      x1={fx}
                      y1={fy}
                      x2={tx}
                      y2={ty}
                      stroke={isActive ? "#06b6d4" : "#1e293b"}
                      strokeWidth={isActive ? 2 : 1.5}
                      strokeDasharray={isActive ? "6 3" : "none"}
                      markerEnd={isActive ? "url(#arrowCyan)" : "url(#arrowSlate)"}
                      animate={{
                        stroke: isActive ? "#06b6d4" : "#1e293b",
                        strokeDashoffset: isActive ? [0, -18] : 0,
                      }}
                      transition={
                        isActive
                          ? { strokeDashoffset: { repeat: Infinity, duration: 0.6, ease: "linear" } }
                          : {}
                      }
                    />
                  </g>
                );
              })}

              {/* Flowing dots on active edges */}
              {flowingEdges.map((edgeIdx) => {
                const conn = CONNECTIONS[edgeIdx];
                const f = NODE_POSITIONS[conn.from];
                const t = NODE_POSITIONS[conn.to];
                return (
                  <FlowingDot
                    key={`dot-${edgeIdx}`}
                    fromX={f.x + 48}
                    fromY={f.y + 36}
                    toX={t.x + 48}
                    toY={t.y + 36}
                    delay={0}
                    color="#06b6d4"
                  />
                );
              })}

              {/* Nodes */}
              {NODES.map((node, idx) => (
                <WorkflowNode
                  key={node.id}
                  node={node}
                  position={NODE_POSITIONS[idx]}
                  active={activeNode === idx}
                  completed={completedNodes.has(idx)}
                  onClick={() => handleNodeClick(idx)}
                />
              ))}
            </svg>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <motion.button
              onClick={runAutomation}
              disabled={isRunning}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
              }}
              whileHover={{ scale: isRunning ? 1 : 1.05 }}
              whileTap={{ scale: isRunning ? 1 : 0.97 }}
            >
              {isRunning ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  >
                    <RefreshCw size={16} />
                  </motion.div>
                  Running…
                </>
              ) : (
                <>
                  <Play size={16} />
                  Run Automation
                </>
              )}
            </motion.button>

            <button
              onClick={resetDemo}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-dark border border-slate/30 text-slate-300 hover:text-white hover:border-cyan/40 transition-all font-medium"
            >
              <RefreshCw size={16} />
              Reset
            </button>
          </div>

          {/* Node Info Card */}
          <AnimatePresence mode="wait">
            {selectedNode !== null && (
              <motion.div
                key={selectedNode}
                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.97 }}
                className="glass-dark rounded-2xl p-6 border border-cyan/20 max-w-xl mx-auto"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${NODES[selectedNode].color}22` }}
                  >
                    {(() => {
                      const Icon = NODES[selectedNode].icon;
                      return <Icon size={20} style={{ color: NODES[selectedNode].color }} />;
                    })()}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{NODES[selectedNode].label}</p>
                    <p className="text-xs text-slate-400">Step {selectedNode + 1} of {NODES.length}</p>
                  </div>
                  {completedNodes.has(selectedNode) && (
                    <CheckCircle2 size={18} className="text-emerald-400 ml-auto" />
                  )}
                </div>
                <p className="text-slate-300 text-sm">{NODES[selectedNode].description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Before vs After ──────────────────────────────────────────── */}
      <section className="py-20 bg-white" ref={counterRef}>
        <div className="max-w-5xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Before <span className="text-slate">&amp;</span>{" "}
                <span className="gradient-text">After</span> Automation
              </h2>
              <p className="text-slate max-w-xl mx-auto">
                The same email triage process — one handled by a human, one handled by Lynk.
              </p>
            </div>
          </SectionReveal>

          {/* Animated Stats */}
          <SectionReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
              {[
                { label: "Time saved per email", value: 44, suffix: " min", color: "text-cyan-600" },
                { label: "Faster response", value: 98, suffix: "%", color: "text-accent" },
                { label: "Hours saved / week", value: 40, suffix: "+", color: "text-cyan-600" },
                { label: "Error reduction", value: 99, suffix: "%", color: "text-accent" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-5 text-center border border-slate/10"
                >
                  <div className={`text-4xl font-bold ${stat.color} mb-1`}>
                    <Counter
                      target={stat.value}
                      suffix={stat.suffix}
                      trigger={countersVisible}
                    />
                  </div>
                  <div className="text-xs text-slate font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Two-column comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Manual — left */}
            <SectionReveal direction="left">
              <div className="rounded-2xl border border-red-200 bg-red-50/60 p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                    <User size={20} className="text-red-500" />
                  </div>
                  <div>
                    <p className="font-bold text-navy">Manual Process</p>
                    <p className="text-xs text-red-500 font-medium">~45 minutes per email</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1 text-xs font-semibold text-red-500 bg-red-100 px-2 py-1 rounded-lg">
                    <Timer size={12} /> Slow
                  </div>
                </div>

                <div className="space-y-3">
                  {manualSteps.map((step, idx) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.07 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-red-200 text-red-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-sm text-slate">{step}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-red-200 flex items-center gap-2 text-red-500 text-sm font-medium">
                  <AlertCircle size={16} />
                  Prone to errors, delays &amp; burnout
                </div>
              </div>
            </SectionReveal>

            {/* Automated — right */}
            <SectionReveal direction="right" delay={0.1}>
              <div className="rounded-2xl border border-cyan-200 bg-cyan-50/40 p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                    <Zap size={20} className="text-cyan-600" />
                  </div>
                  <div>
                    <p className="font-bold text-navy">Lynk Automation</p>
                    <p className="text-xs text-cyan-600 font-medium">~0.8 seconds per email</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1 text-xs font-semibold text-cyan-600 bg-cyan-100 px-2 py-1 rounded-lg">
                    <Zap size={12} /> Instant
                  </div>
                </div>

                <div className="space-y-3">
                  {automatedSteps.map((step, idx) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.07 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={20}
                        className="text-cyan-500 shrink-0 mt-0.5"
                      />
                      <p className="text-sm text-slate">{step}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-cyan-200 flex items-center gap-2 text-cyan-600 text-sm font-medium">
                  <CheckCircle2 size={16} />
                  Consistent, scalable &amp; error-free
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── What You Can Automate ─────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 grid-bg">
        <div className="max-w-5xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                What You Can{" "}
                <span className="gradient-text">Automate</span>
              </h2>
              <p className="text-slate max-w-xl mx-auto">
                These aren't hypotheticals — these are live workflows running for businesses
                like yours right now.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationExamples.map((example, idx) => {
              const Icon = example.icon;
              return (
                <SectionReveal key={example.title} delay={idx * 0.08}>
                  <motion.div
                    className="glass rounded-2xl p-6 border border-slate/10 h-full group hover:border-cyan/30 transition-colors"
                    whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(6,182,212,0.08)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ background: `${example.color}18` }}
                      >
                        <Icon size={22} style={{ color: example.color }} />
                      </div>
                      <div className="text-right">
                        <div
                          className="text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{
                            color: example.color,
                            background: `${example.color}15`,
                          }}
                        >
                          {example.time}
                        </div>
                      </div>
                    </div>

                    <h3 className="font-bold text-navy mb-2">{example.title}</h3>
                    <p className="text-sm text-slate mb-4 leading-relaxed">{example.description}</p>

                    <div className="flex items-center gap-2 mt-auto pt-3 border-t border-slate/10">
                      <Clock size={14} className="text-cyan-500 shrink-0" />
                      <span className="text-xs font-semibold text-cyan-600">
                        Saves {example.savings}
                      </span>
                    </div>
                  </motion.div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-accent/5" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <SectionReveal>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-cyan/20 text-sm font-medium text-cyan-400 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Zap size={14} />
              Ready to automate?
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your workflow could be{" "}
              <span className="gradient-text">next</span>
            </h2>

            <p className="text-slate-light text-lg mb-10 max-w-xl mx-auto">
              Book a free discovery call and we'll map out exactly which processes in your
              business are costing you the most time — and build the automation to fix them.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg shadow-xl hover:scale-105 transition-transform"
                style={{ background: "linear-gradient(135deg, #06b6d4, #8b5cf6)" }}
              >
                Book Free Discovery Call
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-dark border border-white/10 text-white font-semibold hover:border-cyan/40 transition-all"
              >
                Explore Services
                <ChevronRight size={18} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
