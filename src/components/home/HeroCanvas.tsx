"use client";

import React, { useEffect, useRef, useState } from "react";

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [fps, setFps] = useState(24);
  const [timecode, setTimecode] = useState("01:24:08:14");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes for technical mesh
    const numPoints = 38;
    const points: { x: number; y: number; vx: number; vy: number; radius: number; alpha: number }[] = [];
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let frameCount = 0;
    let lastTime = performance.now();
    let frames = 0;

    const render = (time: number) => {
      frameCount++;
      frames++;
      if (time - lastTime >= 1000) {
        setFps(Math.round((frames * 1000) / (time - lastTime)));
        frames = 0;
        lastTime = time;

        // update simulated cinematic timecode
        const h = String(Math.floor((frameCount / (24 * 3600)) % 24)).padStart(2, "0");
        const m = String(Math.floor((frameCount / (24 * 60)) % 60)).padStart(2, "0");
        const s = String(Math.floor((frameCount / 24) % 60)).padStart(2, "0");
        const f = String(Math.floor(frameCount % 24)).padStart(2, "0");
        setTimecode(`${h}:${m}:${s}:${f}`);
      }

      ctx.clearRect(0, 0, width, height);

      // Background subtle gradient
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.4,
        50,
        width * 0.5,
        height * 0.4,
        width * 0.7
      );
      bgGrad.addColorStop(0, "rgba(0, 229, 255, 0.035)");
      bgGrad.addColorStop(0.5, "rgba(14, 16, 21, 0.4)");
      bgGrad.addColorStop(1, "rgba(6, 7, 9, 0.95)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Grid coordinate lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.025)";
      ctx.lineWidth = 1;
      const step = 60;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2.39:1 CinemaScope Frame Overlay Guides
      const scopeHeight = width / 2.39;
      if (scopeHeight < height) {
        const barHeight = (height - scopeHeight) / 2;
        ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
        ctx.fillRect(0, 0, width, barHeight);
        ctx.fillRect(0, height - barHeight, width, barHeight);

        ctx.strokeStyle = "rgba(0, 229, 255, 0.18)";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        ctx.moveTo(0, barHeight);
        ctx.lineTo(width, barHeight);
        ctx.moveTo(0, height - barHeight);
        ctx.lineTo(width, height - barHeight);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Render connected telemetry nodes
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${p.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.07 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Corner technical reticles
      const bracketSize = 16;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.lineWidth = 1.5;

      // Top-left
      ctx.beginPath();
      ctx.moveTo(32, 32 + bracketSize);
      ctx.lineTo(32, 32);
      ctx.lineTo(32 + bracketSize, 32);
      ctx.stroke();

      // Top-right
      ctx.beginPath();
      ctx.moveTo(width - 32 - bracketSize, 32);
      ctx.lineTo(width - 32, 32);
      ctx.lineTo(width - 32, 32 + bracketSize);
      ctx.stroke();

      // Bottom-left
      ctx.beginPath();
      ctx.moveTo(32, height - 32 - bracketSize);
      ctx.lineTo(32, height - 32);
      ctx.lineTo(32 + bracketSize, height - 32);
      ctx.stroke();

      // Bottom-right
      ctx.beginPath();
      ctx.moveTo(width - 32 - bracketSize, height - 32);
      ctx.lineTo(width - 32, height - 32);
      ctx.lineTo(width - 32, height - 32 - bracketSize);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Telemetry metadata overlay */}
      <div className="absolute top-4 left-6 flex items-center gap-3 font-mono text-[10px] text-zinc-500 tracking-wider">
        <span className="flex items-center gap-1.5 text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
          REC [2.39:1 SCOPE]
        </span>
        <span className="hidden sm:inline text-zinc-600">//</span>
        <span className="hidden sm:inline">TC: {timecode}</span>
        <span className="hidden sm:inline text-zinc-600">//</span>
        <span>RATE: {fps} FPS LOCK</span>
      </div>
      <div className="absolute top-4 right-6 font-mono text-[10px] text-zinc-500 tracking-wider hidden sm:block">
        OPTICAL AXIS: RECTILINEAR 35MM T1.5
      </div>
    </div>
  );
}
