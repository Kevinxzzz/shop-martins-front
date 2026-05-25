'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Package, ArrowLeft } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { getVendorById, getProducts } from '@/mock/api';
import { getWhatsAppLink } from '@/utils';
import type { User, Product } from '@/types';
import styles from './page.module.scss';

export default function VendorStorePage() {
  const params = useParams();
  const [vendor, setVendor] = useState<User | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = params.id as string;
    Promise.all([
      getVendorById(id),
      getProducts({ sellerId: id, limit: 100 }),
    ]).then(([v, p]) => {
      setVendor(v);
      setProducts(p.products);
      setLoading(false);
    });
  }, [params.id]);

  if (loading) {
    return <div className={styles.container}><div className={styles.loading}>Carregando...</div></div>;
  }

  if (!vendor) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>
          <h2>Vendedor não encontrado</h2>
          <Link href="/vendedores" className={styles.backBtn}><ArrowLeft size={16} /> Voltar</Link>
        </div>
      </div>
    );
  }

  const whatsappLink = getWhatsAppLink(vendor.whatsappPhone, `Olá ${vendor.name}! Vi sua loja no Shop Martins e gostaria de conversar.`);

  return (
    <div className={styles.container}>
      {/* Banner */}
      <div className={styles.banner}>
        <div className={styles.bannerBg} />
        <div className={styles.bannerContent}>
          <Image
            src={vendor.profilePicture}
            alt={vendor.name}
            width={96}
            height={96}
            className={styles.avatar}
            unoptimized
          />
          <div className={styles.bannerInfo}>
            <h1 className={styles.vendorName}>{vendor.name}</h1>
            <span className={styles.vendorMeta}>
              <Package size={16} /> {products.length} produtos
            </span>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Products */}
      <section className={styles.products}>
        <h2 className={styles.sectionTitle}>
          Produtos de <span>{vendor.name.split(' ')[0]}</span>
        </h2>
        <div className={styles.grid}>
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
