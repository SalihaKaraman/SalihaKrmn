import './globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata = {
  title: 'Saliha Karaman | Portfolio',
  description: 'Matematik öğretmeni ve bilgisayar bilimleri öğrencisi portföyü.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="bg-stone-50 text-zinc-900 antialiased transition-colors duration-200 dark:bg-zinc-950 dark:text-zinc-50">
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen">
              <Navigation />
              <main className="pt-20">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
