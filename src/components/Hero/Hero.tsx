import { Play, Sparkles, ExternalLink } from 'lucide-react';
import { config } from '../../config';
import { useApp } from '../../contexts/AppContext';
import styles from './Hero.module.css';

export function Hero() {
  const { items } = useApp();
  
  const scrollToVideos = () => {
    const feedGrid = document.querySelector('[data-feed-grid]');
    if (feedGrid) {
      feedGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className={styles.hero}>
      {/* Floating particles */}
      <div className={styles.particles}>
        <div className={styles.particle} />
        <div className={styles.particle} />
        <div className={styles.particle} />
        <div className={styles.particle} />
        <div className={styles.particle} />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.badge}>
          <Sparkles size={16} className={styles.badgeIcon} />
          <span>Creative Python Programming</span>
        </div>

        <h1 className={styles.title}>
          Master Python Through<br />Visual Magic
        </h1>

        <p className={styles.subtitle}>
          Discover stunning turtle graphics, algorithmic art, and coding techniques 
          that make programming both beautiful and educational.
        </p>

        <div className={styles.actions}>
          <button className={styles.primaryBtn} onClick={scrollToVideos}>
            <Play size={20} />
            Start Watching
          </button>
          <a
            href={config.youtube.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            <ExternalLink size={18} />
            Subscribe on YouTube
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{items.length}+</span>
            <span className={styles.statLabel}>Videos</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Free Content</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>∞</span>
            <span className={styles.statLabel}>Creativity</span>
          </div>
        </div>
      </div>
    </section>
  );
}
