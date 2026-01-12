import { useParallax } from '../../hooks/useParallax';
import styles from './ParallaxBackground.module.css';

export function ParallaxBackground() {
  const offset1 = useParallax(0.15);
  const offset2 = useParallax(0.25);
  const offset3 = useParallax(0.1);

  return (
    <div className={styles.parallaxContainer} aria-hidden="true">
      {/* Large gradient orbs */}
      <div 
        className={`${styles.orb} ${styles.orb1}`}
        style={{ transform: `translateY(${offset1}px)` }}
      />
      <div 
        className={`${styles.orb} ${styles.orb2}`}
        style={{ transform: `translateY(${-offset2}px)` }}
      />
      <div 
        className={`${styles.orb} ${styles.orb3}`}
        style={{ transform: `translateY(${offset3}px)` }}
      />

      {/* Floating shapes */}
      <div 
        className={`${styles.shape} ${styles.shape1}`}
        style={{ transform: `translateY(${offset2 * 0.8}px) rotate(${offset1 * 0.1}deg)` }}
      />
      <div 
        className={`${styles.shape} ${styles.shape2}`}
        style={{ transform: `translateY(${-offset1 * 0.6}px) rotate(${-offset2 * 0.08}deg)` }}
      />
      <div 
        className={`${styles.shape} ${styles.shape3}`}
        style={{ transform: `translateY(${offset3 * 1.2}px) rotate(${offset1 * 0.05}deg)` }}
      />

      {/* Subtle grid overlay */}
      <div className={styles.gridOverlay} />
    </div>
  );
}
