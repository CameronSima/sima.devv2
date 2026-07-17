"use client";

import { useEffect, useRef } from "react";

/**
 * Animated homage to Warbirds.io: blocky planes dogfighting over a brick sea.
 * Canvas 2D + requestAnimationFrame, DPR-aware, pauses when offscreen or the
 * tab is hidden, and renders a single static frame under prefers-reduced-motion.
 */

interface Plane {
  x: number;
  y: number;
  speed: number;
  dir: 1 | -1;
  unit: number;
  color: string;
  accent: string;
  bobPhase: number;
  bobAmp: number;
  fireCooldown: number;
  trail: { x: number; y: number; age: number }[];
}

interface Tracer {
  x: number;
  y: number;
  vx: number;
  life: number;
}

interface Cloud {
  x: number;
  y: number;
  speed: number;
  blocks: { dx: number; dy: number; w: number; h: number }[];
}

const AMBER = "#fbbf24";
const SKY = "#7dd3fc";

function makePlane(w: number, h: number, rand: () => number): Plane {
  const dir = rand() > 0.5 ? 1 : -1;
  const amberTeam = rand() > 0.5;
  const unit = 3 + rand() * 3.5;
  return {
    x: rand() * w,
    y: h * 0.08 + rand() * h * 0.55,
    speed: (0.6 + rand() * 0.9) * (unit / 4),
    dir,
    unit,
    color: amberTeam ? AMBER : SKY,
    accent: amberTeam ? "#92400e" : "#0c4a6e",
    bobPhase: rand() * Math.PI * 2,
    bobAmp: 4 + rand() * 8,
    fireCooldown: 120 + rand() * 400,
    trail: [],
  };
}

function makeCloud(w: number, h: number, rand: () => number): Cloud {
  const blocks = [];
  const n = 3 + Math.floor(rand() * 4);
  for (let i = 0; i < n; i++) {
    blocks.push({
      dx: i * (30 + rand() * 30) - 40,
      dy: (rand() - 0.5) * 24,
      w: 40 + rand() * 70,
      h: 12 + rand() * 16,
    });
  }
  return {
    x: rand() * w,
    y: h * 0.05 + rand() * h * 0.5,
    speed: 0.08 + rand() * 0.15,
    blocks,
  };
}

function drawPlane(ctx: CanvasRenderingContext2D, p: Plane, t: number) {
  const u = p.unit;
  const bob = Math.sin(t * 0.002 + p.bobPhase) * p.bobAmp;
  const px = Math.round(p.x);
  const py = Math.round(p.y + bob);

  ctx.save();
  ctx.translate(px, py);
  if (p.dir === -1) ctx.scale(-1, 1);

  const r = (x: number, y: number, w: number, h: number, color: string) => {
    ctx.fillStyle = color;
    ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
  };

  // tail fin + tail wing
  r(-6 * u, -3.6 * u, 1.4 * u, 2.8 * u, p.color);
  r(-6 * u, -1.4 * u, 2.6 * u, u, p.accent);
  // fuselage
  r(-6 * u, -u, 11 * u, 2 * u, p.color);
  // nose / engine block
  r(5 * u, -0.7 * u, 1.6 * u, 1.4 * u, p.accent);
  // spinning propeller (thin vertical block, flickers)
  if (Math.floor(t / 60) % 2 === 0) {
    r(6.6 * u, -2.2 * u, 0.5 * u, 4.4 * u, "rgba(226,232,240,0.55)");
  }
  // cockpit
  r(0.5 * u, -1.9 * u, 2 * u, u, "#e0f2fe");
  // wings (biplane silhouette)
  r(-1.5 * u, -2.4 * u, 3.4 * u, 0.9 * u, p.accent);
  r(-1.5 * u, 1.4 * u, 3.4 * u, 0.9 * u, p.accent);
  // roundel
  r(-4 * u, -0.4 * u, 0.9 * u, 0.9 * u, "#0a0f1e");

  ctx.restore();
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Deterministic-ish PRNG so the scene composition is stable per mount
    let seed = 1337;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let planes: Plane[] = [];
    let clouds: Cloud[] = [];
    let tracers: Tracer[] = [];
    let stars: { x: number; y: number; size: number; phase: number }[] = [];
    let raf = 0;
    let running = false;
    let visible = true;

    const setup = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      seed = 1337;
      const planeCount = w < 640 ? 4 : 7;
      const cloudCount = w < 640 ? 3 : 6;
      planes = Array.from({ length: planeCount }, () => makePlane(w, h, rand));
      clouds = Array.from({ length: cloudCount }, () => makeCloud(w, h, rand));
      stars = Array.from({ length: Math.round(w / 9) }, () => ({
        x: rand() * w,
        y: rand() * h * 0.85,
        size: rand() > 0.85 ? 2 : 1,
        phase: rand() * Math.PI * 2,
      }));
      tracers = [];
    };

    const drawSea = (t: number) => {
      const seaTop = h * 0.86;
      const block = 14;
      ctx.fillStyle = "#071120";
      ctx.fillRect(0, seaTop, w, h - seaTop);
      for (let y = seaTop, row = 0; y < h; y += block, row++) {
        for (
          let x = (row % 2) * (block / 2) - block;
          x < w;
          x += block * 2
        ) {
          const shimmer =
            Math.sin(t * 0.001 + x * 0.05 + row * 1.7) > 0.75 ? 0.16 : 0.07;
          ctx.fillStyle = `rgba(56, 189, 248, ${shimmer})`;
          ctx.fillRect(x, y + 2, block, block - 4);
        }
      }
    };

    const frame = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      // stars
      for (const s of stars) {
        const tw = 0.35 + 0.65 * Math.abs(Math.sin(t * 0.0009 + s.phase));
        ctx.fillStyle = `rgba(226, 232, 240, ${0.5 * tw})`;
        ctx.fillRect(s.x, s.y, s.size, s.size);
      }

      // clouds
      for (const c of clouds) {
        c.x -= c.speed;
        const span = 220;
        if (c.x < -span) c.x = w + span;
        ctx.fillStyle = "rgba(148, 163, 184, 0.07)";
        for (const b of c.blocks) {
          ctx.fillRect(
            Math.round(c.x + b.dx),
            Math.round(c.y + b.dy),
            b.w,
            b.h
          );
        }
      }

      drawSea(t);

      // planes + contrails
      for (const p of planes) {
        p.x += p.speed * p.dir;
        const margin = 14 * p.unit;
        if (p.dir === 1 && p.x > w + margin) p.x = -margin;
        if (p.dir === -1 && p.x < -margin) p.x = w + margin;

        const bob = Math.sin(t * 0.002 + p.bobPhase) * p.bobAmp;
        p.trail.unshift({ x: p.x - p.dir * 7 * p.unit, y: p.y + bob, age: 0 });
        if (p.trail.length > 26) p.trail.pop();
        for (const seg of p.trail) {
          seg.age++;
          const alpha = Math.max(0, 0.28 - seg.age * 0.011);
          if (alpha <= 0) continue;
          const size = Math.max(1, p.unit * 0.8 - seg.age * 0.05);
          ctx.fillStyle = `rgba(226, 232, 240, ${alpha})`;
          ctx.fillRect(
            Math.round(seg.x - seg.age * p.dir * 1.2),
            Math.round(seg.y),
            size,
            size
          );
        }

        // occasional tracer fire
        p.fireCooldown--;
        if (p.fireCooldown <= 0) {
          p.fireCooldown = 240 + rand() * 500;
          for (let i = 0; i < 3; i++) {
            tracers.push({
              x: p.x + p.dir * (7 * p.unit + i * 10),
              y: p.y + bob,
              vx: p.dir * (7 + p.unit),
              life: 40,
            });
          }
        }

        drawPlane(ctx, p, t);
      }

      // tracers
      tracers = tracers.filter((tr) => tr.life > 0);
      for (const tr of tracers) {
        tr.x += tr.vx;
        tr.life--;
        ctx.fillStyle = `rgba(251, 191, 36, ${Math.min(1, tr.life / 24)})`;
        ctx.fillRect(Math.round(tr.x), Math.round(tr.y), 7, 2);
      }
    };

    const loop = (t: number) => {
      if (!running) return;
      frame(t);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reducedMotion || !visible || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    setup();
    if (reducedMotion) {
      frame(4000); // single static frame
    } else {
      start();
    }

    const ro = new ResizeObserver(() => {
      stop();
      setup();
      if (reducedMotion) frame(4000);
      else start();
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0.02 }
    );
    io.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
