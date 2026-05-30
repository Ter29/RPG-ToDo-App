import { useEffect, useRef } from 'react';
import './GeometricParticles.css';

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
};

type MousePosition = {
  x: number;
  y: number;
  active: boolean;
};

const PARTICLE_COUNT = 95;
const LINK_DISTANCE = 145;
const MOUSE_RADIUS = 150;

function createParticle(width: number, height: number): Particle {
  const x = Math.random() * width;
  const y = Math.random() * height;

  return {
    x,
    y,
    baseX: x,
    baseY: y,
    vx: -0.18 + Math.random() * 0.36,
    vy: -0.18 + Math.random() * 0.36,
    radius: 1.4 + Math.random() * 1.9,
  };
}

function getDistance(first: Particle, second: Particle) {
  const dx = first.x - second.x;
  const dy = first.y - second.y;

  return Math.sqrt(dx * dx + dy * dy);
}

function drawParticle(ctx: CanvasRenderingContext2D, particle: Particle) {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(242, 242, 242, 0.82)';
  ctx.shadowColor = 'rgba(255, 255, 255, 0.55)';
  ctx.shadowBlur = 8;
  ctx.fill();
  ctx.shadowBlur = 0;
}

function drawLinks(ctx: CanvasRenderingContext2D, particles: Particle[]) {
  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const distance = getDistance(particles[i], particles[j]);

      if (distance > LINK_DISTANCE) {
        continue;
      }

      const opacity = 1 - distance / LINK_DISTANCE;

      ctx.beginPath();
      ctx.moveTo(particles[i].x, particles[i].y);
      ctx.lineTo(particles[j].x, particles[j].y);
      ctx.strokeStyle = `rgba(245, 245, 245, ${opacity * 0.2})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }
}

function repelFromMouse(particle: Particle, mouse: MousePosition) {
  if (!mouse.active) {
    return;
  }

  const dx = particle.x - mouse.x;
  const dy = particle.y - mouse.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance === 0 || distance > MOUSE_RADIUS) {
    return;
  }

  const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
  const directionX = dx / distance;
  const directionY = dy / distance;

  particle.x += directionX * force * 5;
  particle.y += directionY * force * 5;
}

export function GeometricParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) {
      return;
    }

    const drawingCanvas = canvas;
    const drawingContext = ctx;
    let animationId = 0;
    let particles: Particle[] = [];
    const mouse: MousePosition = {
      x: 0,
      y: 0,
      active: false,
    };

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      drawingCanvas.width = width * dpr;
      drawingCanvas.height = height * dpr;
      drawingCanvas.style.width = `${width}px`;
      drawingCanvas.style.height = `${height}px`;
      drawingContext.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(width, height)
      );
    }

    function handleMouseMove(event: MouseEvent) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    }

    function handleMouseLeave() {
      mouse.active = false;
    }

    function animate() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      drawingContext.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.baseX += particle.vx;
        particle.baseY += particle.vy;

        if (particle.x < -40) particle.x = width + 40;
        if (particle.x > width + 40) particle.x = -40;
        if (particle.y < -40) particle.y = height + 40;
        if (particle.y > height + 40) particle.y = -40;

        if (particle.baseX < -40) particle.baseX = width + 40;
        if (particle.baseX > width + 40) particle.baseX = -40;
        if (particle.baseY < -40) particle.baseY = height + 40;
        if (particle.baseY > height + 40) particle.baseY = -40;

        repelFromMouse(particle, mouse);

        particle.x += (particle.baseX - particle.x) * 0.025;
        particle.y += (particle.baseY - particle.y) * 0.025;
      });

      drawLinks(drawingContext, particles);
      particles.forEach((particle) => drawParticle(drawingContext, particle));

      animationId = window.requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas className="geometric-particles" ref={canvasRef} aria-hidden="true" />;
}
