'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import type { Midia } from '@/types';
import styles from './ProductCarousel.module.scss';

interface ProductCarouselProps {
  midias: Midia[];
  title: string;
}

export default function ProductCarousel({ midias, title }: ProductCarouselProps) {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const goTo = (index: number) => {
    setCurrent(index);
    if (videoRef.current) videoRef.current.pause();
  };

  const prev = () => goTo(current > 0 ? current - 1 : midias.length - 1);
  const next = () => goTo(current < midias.length - 1 ? current + 1 : 0);

  const currentMedia = midias[current];

  return (
    <div className={styles.carousel} role="region" aria-label={`Galeria de ${title}`}>
      <div className={styles.main}>
        {currentMedia?.tipo === 'video' ? (
          <video
            ref={videoRef}
            src={currentMedia.url_arquivo}
            className={styles.video}
            controls
            playsInline
            aria-label={`Vídeo de ${title}`}
          />
        ) : (
          <Image
            src={currentMedia?.url_arquivo || ''}
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
          {current + 1} / {midias.length}
        </div>
      </div>

      <div className={styles.thumbs} role="tablist" aria-label="Miniaturas">
        {midias.map((m, i) => (
          <button
            key={m.id}
            className={`${styles.thumb} ${i === current ? styles.active : ''}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`${m.tipo === 'video' ? 'Vídeo' : 'Imagem'} ${i + 1}`}
          >
            {m.tipo === 'video' ? (
              <div className={styles.thumbVideo}>
                <Play size={16} />
              </div>
            ) : (
              <Image
                src={m.url_arquivo}
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
