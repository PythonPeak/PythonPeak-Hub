import { useEffect, useState, useCallback } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function useMouseParallax(sensitivity: number = 0.02) {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    requestAnimationFrame(() => {
      setPosition({
        x: (e.clientX - centerX) * sensitivity,
        y: (e.clientY - centerY) * sensitivity,
      });
    });
  }, [sensitivity]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return position;
}
