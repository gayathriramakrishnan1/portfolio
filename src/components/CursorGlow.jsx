import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorGlow = () => {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Configure smooth damping and stiffness for spring effect
  const springConfig = { damping: 40, stiffness: 300, mass: 0.4 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset by half of width/height (200px) to center it on cursor
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-10 opacity-40 blur-[120px] pointer-events-none hidden md:block"
      style={{
        x: glowX,
        y: glowY,
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.15) 40%, rgba(6, 182, 212, 0.05) 70%, rgba(0,0,0,0) 100%)',
      }}
    />
  );
};

export default CursorGlow;
