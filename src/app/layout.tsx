import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import '@/styles/global.scss';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Shop Martins — Marketplace Esportivo Premium',
    template: '%s | Shop Martins',
  },
  description:
    'Marketplace esportivo premium. Encontre chuteiras, camisas, acessórios e tudo para o esporte com os melhores vendedores.',
  keywords: ['marketplace', 'esporte', 'chuteiras', 'camisas de time', 'loja esportiva'],
  authors: [{ name: 'Shop Martins' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Shop Martins',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
