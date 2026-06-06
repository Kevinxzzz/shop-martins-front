'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import type { Media } from '@/types';
import styles from './ProductCarousel.module.scss';

interface ProductCarouselProps {
  media: Media[];
  title: string;
}

export default function ProductCarousel({ media, title }: ProductCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const goTo = (index: number) => {
    setCurrent(index);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const prev = () => goTo(current > 0 ? current - 1 : media.length - 1);
  const next = () => goTo(current < media.length - 1 ? current + 1 : 0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }
  };

  const currentMedia = media[current];

  return (
    <div className={styles.carousel} role="region" aria-label={`Galeria de ${title}`}>
      <div
        className={styles.main}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {currentMedia?.type === 'video' ? (
          <div className={styles.videoContainer} onClick={togglePlay}>
            <video
              ref={videoRef}
              src={currentMedia.fileUrl}
              className={styles.video}
              playsInline
              onEnded={() => setIsPlaying(false)}
              aria-label={`Vídeo de ${title}`}
            />
            <div className={`${styles.videoControlsOverlay} ${isPlaying ? styles.playing : ''}`}>
              <button
                type="button"
                className={styles.playPauseBtn}
                aria-label={isPlaying ? "Pausar vídeo" : "Iniciar vídeo"}
              >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
              </button>
            </div>
          </div>
        ) : (
          <Image
            src={currentMedia?.fileUrl || '/placeholder-product.svg'}
            alt={`${title} - imagem ${current + 1}`}
            width={600}
            height={600}
            className={styles.image}
            priority
            unoptimized
          />
        )}

        <button
          className={`${styles.navButton} ${styles.prev}`}
          onClick={prev}
          aria-label="Imagem anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className={`${styles.navButton} ${styles.next}`}
          onClick={next}
          aria-label="Próxima imagem"
        >
          <ChevronRight size={20} />
        </button>

        <div className={styles.counter}>
          {current + 1} / {media.length}
        </div>
      </div>

      <div className={styles.thumbs} role="tablist" aria-label="Miniaturas">
        {media.map((m, i) => (
          <button
            key={m.id}
            className={`${styles.thumb} ${i === current ? styles.active : ''}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`${m.type === 'video' ? 'Vídeo' : 'Imagem'} ${i + 1}`}
          >
            {m.type === 'video' ? (
              <div className={styles.thumbVideo}>
                <video src={m.fileUrl} muted />
                <div className={styles.playOverlay}>
                  <Play size={16} />
                </div>
              </div>
            ) : (
              <Image
                src={m.fileUrl}
                alt={`Miniatura ${i + 1}`}
                width={80}
                height={80}
                unoptimized
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
