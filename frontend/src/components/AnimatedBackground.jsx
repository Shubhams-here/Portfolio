import React, { useRef, useEffect } from 'react';

class Particle {
  constructor(x, y, dx, dy, size, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = size;
    this.color = color;
    this.baseX = x;
    this.baseY = y;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update(ctx, width, height, mouse) {
    // Bounce off edges
    if (this.x > width || this.x < 0) this.dx = -this.dx;
    if (this.y > height || this.y < 0) this.dy = -this.dy;

    // Move particle
    this.x += this.dx;
    this.y += this.dy;

    // Mouse interactivity: parallax push effect
    if (mouse.x && mouse.y) {
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouse.radius) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (mouse.radius - distance) / mouse.radius;
        
        // Push particles away smoothly
        this.x -= forceDirectionX * force * 2;
        this.y -= forceDirectionY * force * 2;
      }
    }

    this.draw(ctx);
  }
}

const AnimatedBackground = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas dimensions
    const setDimensions = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    // Mouse interaction
    const mouse = {
      x: null,
      y: null,
      radius: 150
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', setDimensions);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Initialize particles based on screen size
    const initParticles = () => {
      particles = [];
      // Adjust count based on screen size for performance
      const numberOfParticles = (width * height) / 10000;
      
      const isDark = theme === 'dark';
      // Use CSS variable fallback colors for reliability
      const pColor = isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(37, 99, 235, 0.3)';
      
      for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 2) + 1;
        const x = Math.random() * width;
        const y = Math.random() * height;
        const dx = (Math.random() - 0.5) * 0.8;
        const dy = (Math.random() - 0.5) * 0.8;
        particles.push(new Particle(x, y, dx, dy, size, pColor));
      }
    };

    // Animation loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);
      
      const isDark = theme === 'dark';
      const lineColor = isDark ? 'rgba(96, 165, 250, ' : 'rgba(37, 99, 235, '; // The opacity will be appended dynamically
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(ctx, width, height, mouse);
        
        // Connect particles with lines
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `${lineColor}${1 - distance/120})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    setDimensions();
    animate();

    return () => {
      window.removeEventListener('resize', setDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); // Re-initialize when theme changes to adapt colors

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none', // Prevents canvas from blocking clicks on content
      }}
    />
  );
};

export default AnimatedBackground;
