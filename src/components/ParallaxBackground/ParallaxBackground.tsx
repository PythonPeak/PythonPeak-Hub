import { useParallax } from '../../hooks/useParallax';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import styles from './ParallaxBackground.module.css';

export function ParallaxBackground() {
  const offset1 = useParallax(0.15);
  const offset2 = useParallax(0.25);
  const offset3 = useParallax(0.1);
  
  const mouse1 = useMouseParallax(0.03);
  const mouse2 = useMouseParallax(0.05);
  const mouse3 = useMouseParallax(0.02);

  return (
    <div className={styles.parallaxContainer} aria-hidden="true">
      {/* Large gradient orbs */}
      <div 
        className={`${styles.orb} ${styles.orb1}`}
        style={{ transform: `translate(${mouse1.x}px, ${offset1 + mouse1.y}px)` }}
      />
      <div 
        className={`${styles.orb} ${styles.orb2}`}
        style={{ transform: `translate(${-mouse2.x}px, ${-offset2 + mouse2.y}px)` }}
      />
      <div 
        className={`${styles.orb} ${styles.orb3}`}
        style={{ transform: `translate(${mouse3.x * 0.5}px, ${offset3 + mouse3.y}px)` }}
      />

      {/* Floating shapes */}
      <div 
        className={`${styles.shape} ${styles.shape1}`}
        style={{ transform: `translate(${mouse2.x * 1.5}px, ${offset2 * 0.8 + mouse2.y * 1.5}px) rotate(${offset1 * 0.1 + mouse1.x * 0.02}deg)` }}
      />
      <div 
        className={`${styles.shape} ${styles.shape2}`}
        style={{ transform: `translate(${-mouse1.x}px, ${-offset1 * 0.6 + mouse1.y}px) rotate(${-offset2 * 0.08}deg)` }}
      />
      <div 
        className={`${styles.shape} ${styles.shape3}`}
        style={{ transform: `translate(${mouse3.x * 0.8}px, ${offset3 * 1.2 + mouse3.y * 0.8}px) rotate(${offset1 * 0.05 + mouse2.x * 0.01}deg)` }}
      />

      {/* Subtle grid overlay */}
      <div className={styles.gridOverlay} />
    </div>
  );
}
