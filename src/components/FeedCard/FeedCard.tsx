import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FeedItem } from '../../types';
import { useClassification } from '../../hooks/useClassification';
import { useApp } from '../../contexts/AppContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { config } from '../../config';
import styles from './FeedCard.module.css';

interface FeedCardProps {
  item: FeedItem;
  index?: number;
}

export function FeedCard({ item, index = 0 }: FeedCardProps) {
  const navigate = useNavigate();
  const { classifyItem } = useClassification();
  const { setSelectedKeyword } = useApp();
  const hasClassified = useRef(false);
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  useEffect(() => {
    if (item.type === 'unknown' && !hasClassified.current) {
      hasClassified.current = true;
      classifyItem(item);
    }
  }, [item, classifyItem]);

  const handleClick = () => {
    navigate(`/watch/${item.videoId}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  const handleKeywordClick = (keyword: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedKeyword(keyword);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getBadgeLabel = () => {
    switch (item.type) {
      case 'short':
        return 'Short';
      case 'video':
        return 'Video';
      default:
        return '';
    }
  };

  const animationDelay = Math.min(index * 0.05, 0.3);

  return (
    <article
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.visible : styles.hidden}`}
      style={{ animationDelay: `${animationDelay}s` }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Watch ${item.title}`}
    >
      <div className={`${styles.thumbnailWrapper} ${item.type === 'short' ? styles.short : ''}`}>
        <img
          src={item.thumbnailUrl}
          alt=""
          className={styles.thumbnail}
          loading="lazy"
        />
        <div className={styles.glowOverlay} />
        <div className={styles.ripple} />
        <div className={styles.ripple} />
        <div className={styles.playButton} />
        {item.keywords && item.keywords.length > 0 && (
          <div className={styles.videoBadges}>
            {item.keywords.slice(0, config.ui.grid.maxKeywordsPerCard).map((keyword, idx) => (
              <button
                key={idx}
                className={styles.videoBadge}
                onClick={(e) => handleKeywordClick(keyword, e)}
                aria-label={`Filter by ${keyword}`}
              >
                {keyword}
              </button>
            ))}
          </div>
        )}
        <div className={styles.videoInfo}>
          <h3 className={styles.title}>{item.title}</h3>
          <time className={styles.date} dateTime={item.publishedAt}>
            {formatDate(item.publishedAt)}
          </time>
        </div>
      </div>
    </article>
  );
}

export function FeedCardSkeleton() {
  return (
    <div className={`${styles.card} ${styles.skeleton}`} aria-hidden="true">
      <div className={styles.thumbnailWrapper}>
        <div className={styles.skeletonBadges}>
          <div className={styles.skeletonBadge} />
          <div className={styles.skeletonBadge} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonMeta} />
      </div>
    </div>
  );
}
