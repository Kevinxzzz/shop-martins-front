'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, MessageCircle, Eye, ArrowLeft } from 'lucide-react';
import ProductCarousel from '@/components/ProductCarousel';
import ProductCard from '@/components/ProductCard';
import { getProductById, getRelatedProducts } from '@/mock/api';
import { formatPrice, formatViews, getWhatsAppLink } from '@/utils';
import type { Produto } from '@/types';
import styles from './page.module.scss';

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Produto | null>(null);
  const [related, setRelated] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = params.id as string;
    setLoading(true);
    getProductById(id).then(p => {
      setProduct(p);
      setLoading(false);
      if (p) {
        getRelatedProducts(p.categoria_id, p.id).then(setRelated);
      }
    });
  }, [params.id]);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.skeleton}>Carregando...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>
          <h2>Produto não encontrado</h2>
          <Link href="/" className={styles.backBtn}>
            <ArrowLeft size={16} /> Voltar
          </Link>
        </div>
      </div>
    );
  }

  const whatsappMessage = `Olá! Vi o produto "${product.titulo}" por ${formatPrice(product.preco)} no Shop Martins e gostaria de mais informações.`;
  const whatsappLink = getWhatsAppLink(product.vendedor?.telefone_whatsapp || '', whatsappMessage);

  return (
    <div className={styles.container}>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs} aria-label="Navegação">
        <Link href="/">Início</Link>
        <ChevronRight size={14} aria-hidden="true" />
        {product.categoria && (
          <>
            <Link href={`/?categoria=${product.categoria_id}`}>{product.categoria.nome}</Link>
            <ChevronRight size={14} aria-hidden="true" />
          </>
        )}
        <span>{product.titulo}</span>
      </nav>

      <div className={styles.layout}>
        {/* Carousel */}
        <div className={styles.gallery}>
          <ProductCarousel midias={product.midias} title={product.titulo} />
        </div>

        {/* Details */}
        <div className={styles.details}>
          {product.categoria && (
            <span className={styles.categoryBadge}>{product.categoria.nome}</span>
          )}

          <h1 className={styles.title}>{product.titulo}</h1>

          <div className={styles.viewCount}>
            <Eye size={16} aria-hidden="true" />
            {formatViews(product.countViews)} visualizações
          </div>

          <div className={styles.priceBlock}>
            <span className={styles.price}>{formatPrice(product.preco)}</span>
            <span className={styles.priceNote}>à vista via WhatsApp</span>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
            aria-label="Chamar vendedor no WhatsApp"
          >
            <MessageCircle size={22} />
            Chamar no WhatsApp
          </a>

          <div className={styles.description}>
            <h3>Descrição</h3>
            <p>{product.descricao}</p>
          </div>

          {/* Vendor */}
          {product.vendedor && (
            <div className={styles.vendorBlock}>
              <h4 className={styles.vendorTitle}>Vendedor</h4>
              <Link href={`/vendedor/${product.vendedor.id}`} className={styles.vendorInfo}>
                <Image
                  src={product.vendedor.foto_perfil}
                  alt={product.vendedor.nome}
                  width={48}
                  height={48}
                  className={styles.vendorAvatar}
                  unoptimized
                />
                <div>
                  <span className={styles.vendorName}>{product.vendedor.nome}</span>
                  <span className={styles.vendorSub}>Ver todos os produtos</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className={styles.related}>
          <h2 className={styles.relatedTitle}>
            Produtos <span>relacionados</span>
          </h2>
          <div className={styles.relatedGrid}>
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
