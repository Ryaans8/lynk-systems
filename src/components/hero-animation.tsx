"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  color: string;
}

interface Connection {
  from: string;
  to: string;
}

const nodes: Node[] = [
  { id: "trigger", x: 50, y: 180, label: "Trigger", color: "#06b6d4" },
  { id: "ai", x: 200, y: 100, label: "AI Agent", color: "#8b5cf6" },
  { id: "data", x: 200, y: 260, label: "Data", color: "#06b6d4" },
  { id: "process", x: 350, y: 180, label: "Process", color: "#0891b2" },
  { id: "output", x: 500, y: 120, label: "Deploy", color: "#22d3ee" },
  { id: "notify", x: 500, y: 240, label: "Notify", color: "#8b5cf6" },
];

const connections: Connection[] = [
  { from: "trigger", to: "ai" },
  { from: "trigger", to: "data" },
  { from: "ai", to: "process" },
  { from: "data", to: "process" },
  { from: "process", to: "output" },
  { from: "process", to: "notify" },
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Floating particles background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <svg
        viewBox="0 0 560 360"
        className="relative z-10 w-full h-full"
        style={{ filter: "drop-shadow(0 0 40px rgba(6, 182, 212, 0.1))" }}
      >
        {/* Connections */}
        {connections.map((conn, i) => {
          const from = getNode(conn.from);
          const to = getNode(conn.to);
          return (
            <g key={`${conn.from}-${conn.to}`}>
              <motion.line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="rgba(6, 182, 212, 0.2)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeInOut" }}
              />
              {/* Animated data dot traveling along connection */}
              <motion.circle
                r="3"
                fill="#06b6d4"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [from.x, to.x],
                  cy: [from.y, to.y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: 1.5 + i * 0.4,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.12,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            {/* Glow ring */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="28"
              fill="none"
              stroke={node.color}
              strokeWidth="1"
              opacity="0.3"
              animate={{ r: [28, 36, 28], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
            {/* Node circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r="24"
              fill="white"
              stroke={node.color}
              strokeWidth="2"
              style={{ filter: `drop-shadow(0 0 12px ${node.color}40)` }}
            />
            {/* Label */}
            <text
              x={node.x}
              y={node.y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-[11px] font-semibold fill-navy"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
