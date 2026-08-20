import { useEffect, useRef } from "react";
import styles from "./ParticleBackground.module.css";

interface Particle {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  alphaSpeed: number;
  vx: number;
  vy: number;
  wobbleSpeed: number;
  wobbleAngle: number;
  wobbleRadius: number;
  color: string;
  glow: number;
}

const COLORS = [
  "rgba(6, 191, 131,",    // #06BF83 - theme green
  "rgba(52, 211, 153,",   // #34d399 - emerald green
  "rgba(110, 231, 183,",  // #6ee7b7 - light mint
  "rgba(16, 185, 129,"    // #10b981 - bright green
];

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Number of particles reduced by 1/3
    const particleCount = Math.max(25, Math.floor(Math.min(width, 1920) / 50));
    const particles: Particle[] = [];

    const createParticle = (initial = false): Particle => {
      const colorPrefix = COLORS[Math.floor(Math.random() * COLORS.length)];
      const size = Math.random() * 1.8 + 1.0; // 1.0px to 2.8px (smaller fairy dust)
      const baseAlpha = Math.random() * 0.45 + 0.35; // 0.35 to 0.8
      return {
        x: Math.random() * width,
        y: initial ? Math.random() * height : height + 15,
        size,
        baseAlpha,
        alpha: initial ? Math.random() * baseAlpha : 0,
        alphaSpeed: (Math.random() * 0.0035 + 0.0015) * (Math.random() > 0.5 ? 1 : -1), // slower pulsing
        vx: (Math.random() - 0.5) * 0.2, // slower horizontal drift
        vy: -(Math.random() * 0.22 + 0.12), // slower upward float
        wobbleSpeed: Math.random() * 0.01 + 0.005,
        wobbleAngle: Math.random() * Math.PI * 2,
        wobbleRadius: Math.random() * 1.2 + 0.4,
        color: colorPrefix,
        glow: size * 2.5 + 2.5,
      };
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(true));
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Update organic gentle wobble & position
        p.wobbleAngle += p.wobbleSpeed;
        const wobbleX = Math.cos(p.wobbleAngle) * p.wobbleRadius;
        p.x += p.vx + wobbleX * 0.1;
        p.y += p.vy;

        // Smooth pulse/fade in and out
        p.alpha += p.alphaSpeed;
        if (p.alpha >= p.baseAlpha) {
          p.alpha = p.baseAlpha;
          p.alphaSpeed = -Math.abs(p.alphaSpeed);
        } else if (p.alpha <= 0.03) {
          p.alpha = 0.03;
          p.alphaSpeed = Math.abs(p.alphaSpeed);
        }

        // Wrap or respawn when leaving screen
        if (p.y < -20) {
          p.y = height + 15;
          p.x = Math.random() * width;
          p.alpha = 0;
        }
        if (p.x < -20) p.x = width + 15;
        if (p.x > width + 20) p.x = -15;

        // Draw sprite with glowing halo
        ctx.save();

        // Outer fairy glow
        ctx.shadowBlur = p.glow;
        ctx.shadowColor = `${p.color} ${p.alpha * 0.85})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.fill();

        // Inner bright spark core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.95})`;
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}

export default ParticleBackground;
