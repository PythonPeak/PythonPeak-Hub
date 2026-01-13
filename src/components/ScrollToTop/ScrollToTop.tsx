import { ArrowUp } from 'lucide-react';
import { useScrollShrink } from '../../hooks/useScrollShrink';
import styles from './ScrollToTop.module.css';

export function ScrollToTop() {
  const isVisible = useScrollShrink(300);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`${styles.button} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
