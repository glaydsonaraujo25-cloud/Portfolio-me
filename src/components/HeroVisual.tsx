import React, { useEffect, useRef } from 'react';
import { Shield, Brain, Terminal, Cpu, Lock, Network } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Node grid for neural-cyber mesh
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulse: number;
      pulseSpeed: number;
      type: 'ai' | 'security' | 'core';
    }

    const nodeCount = Math.min(28, Math.floor((width * height) / 8000));
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        type: i % 3 === 0 ? 'security' : i % 3 === 1 ? 'ai' : 'core'
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let mouseHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      mouseHovering = true;
    };

    const handleMouseLeave = () => {
      mouseHovering = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid lines
      ctx.strokeStyle = '#121A2F';
      ctx.lineWidth = 1;
      const gridSize = 40;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;

        if (node.x < 10 || node.x > width - 10) node.vx *= -1;
        if (node.y < 10 || node.y > height - 10) node.vy *= -1;

        // Mouse subtle attraction
        if (mouseHovering) {
          const dx = mouseX - node.x;
          const dy = mouseY - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            node.x += dx * 0.01;
            node.y += dy * 0.01;
          }
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.35;
            ctx.strokeStyle = node.type === 'ai' ? `rgba(34, 211, 238, ${alpha})` : `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Draw node body & pulse
        const pulseFactor = (Math.sin(node.pulse) + 1) * 0.5;
        const color = node.type === 'ai' ? '#22D3EE' : node.type === 'security' ? '#3B82F6' : '#60A5FA';

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Subtle aura
        ctx.fillStyle = node.type === 'ai' ? `rgba(34, 211, 238, ${0.15 * pulseFactor})` : `rgba(59, 130, 246, ${0.15 * pulseFactor})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 4 * pulseFactor, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[420px] lg:h-[460px] rounded-2xl bg-[#121A2F] border border-[#1E293B] overflow-hidden flex flex-col items-center justify-center p-6 shadow-2xl">
      {/* Background Interactive Mesh Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-crosshair opacity-80" />

      {/* Central Abstract Hologram Structure */}
      <div className="relative z-10 flex flex-col items-center max-w-sm text-center">
        {/* Core Shield & AI Orbit */}
        <div className="relative w-28 h-28 mb-5 flex items-center justify-center">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[#22D3EE]/40 animate-[spin_20s_linear_infinite]"></div>
          {/* Inner pulsating ring */}
          <div className="absolute inset-2 rounded-full border border-[#3B82F6]/30 animate-pulse"></div>

          {/* Central Shield / Tech Core */}
          <div className="w-16 h-16 rounded-xl bg-[#0B1020] border border-[#3B82F6] shadow-lg shadow-blue-500/20 flex items-center justify-center text-[#22D3EE]">
            <Shield className="w-8 h-8 text-[#3B82F6]" />
          </div>

          {/* Orbiting Tech Badges */}
          <div className="absolute -top-2 -right-1 p-1.5 rounded-lg bg-[#0B1020] border border-[#22D3EE]/40 text-[#22D3EE]">
            <Brain className="w-3.5 h-3.5" />
          </div>
          <div className="absolute -bottom-2 -left-1 p-1.5 rounded-lg bg-[#0B1020] border border-[#3B82F6]/40 text-[#3B82F6]">
            <Terminal className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Abstract Terminal Diagnostics Box */}
        <div className="w-full bg-[#0B1020]/90 border border-[#1E293B] rounded-xl p-3.5 font-mono text-[11px] text-left backdrop-blur-sm shadow-xl">
          <div className="flex items-center justify-between pb-2 border-b border-[#1E293B] mb-2 text-[#A7B0C0]">
            <span className="flex items-center gap-1.5 text-xs text-[#22D3EE]">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              CORE_ARCHITECTURE
            </span>
            <span className="text-[10px]">STATUS: OK</span>
          </div>

          <div className="space-y-1 text-[#A7B0C0]">
            <div className="flex justify-between">
              <span className="text-[#F5F7FA]">DOMAIN_1:</span>
              <span className="text-[#22D3EE]">Cyber Security Defensivo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#F5F7FA]">DOMAIN_2:</span>
              <span className="text-[#3B82F6]">IA Generativa & LLMs</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#F5F7FA]">STACK:</span>
              <span className="text-emerald-400">Python • Prompt Eng • RAG</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4 text-xs text-[#A7B0C0] font-mono">
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-[#3B82F6]" /> Defesa
          </span>
          <span className="text-[#1E293B]">•</span>
          <span className="flex items-center gap-1">
            <Cpu className="w-3 h-3 text-[#22D3EE]" /> Raciocínio
          </span>
          <span className="text-[#1E293B]">•</span>
          <span className="flex items-center gap-1">
            <Network className="w-3 h-3 text-emerald-400" /> Automação
          </span>
        </div>
      </div>
    </div>
  );
};
