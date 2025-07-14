import { useRef, useEffect } from 'react';

export default function FallingLeavesCanvas() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const leafEmojis = ['🍂', '🍁', '🌿', '🍃'];
    const leaves = [];

    const createLeaf = () => ({
      x: Math.random() * canvas.width,
      y: -20,
      size: 24 + Math.random() * 10,
      speedY: 0.5 + Math.random(),
      drift: Math.random() * 1.5 - 0.75,
      emoji: leafEmojis[Math.floor(Math.random() * leafEmojis.length)],
      angle: Math.random() * 360,
      rotationSpeed: Math.random() * 1.5,
    });

    for (let i = 0; i < 15; i++) leaves.push(createLeaf());

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      leaves.forEach((leaf) => {
        ctx.font = `${leaf.size}px serif`;
        ctx.save();
        ctx.translate(leaf.x, leaf.y);
        ctx.rotate((leaf.angle * Math.PI) / 180);
        ctx.fillText(leaf.emoji, 0, 0);
        ctx.restore();

        leaf.y += leaf.speedY;
        leaf.x += leaf.drift;
        leaf.angle += leaf.rotationSpeed;

        if (leaf.y > canvas.height + 20) {
          Object.assign(leaf, createLeaf());
          leaf.y = -20;
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"
    />
  );
}
