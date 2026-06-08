import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { QueryProvider } from '@/lib/react-query/QueryProvider';
import { AuthProvider } from '@/contexts/AuthProvider';
import { ToastProvider } from '@/contexts/ToastContext';
import '@/styles/global.scss';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'BlueFoot',
    template: '%s | BlueFoot',
  },
  description:
    'Ecomerce esportivo premium. Encontre contas de efootball com os melhores vendedores.',
  keywords: ['marketplace', 'esporte', 'ecomerce'],
  authors: [{ name: 'BlueFoot' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'BlueFoot',
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
          <QueryProvider>
            <AuthProvider>
              <ToastProvider>
                {children}
              </ToastProvider>
            </AuthProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
