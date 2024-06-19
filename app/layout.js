import { Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/theme-provider';
import 'react-alice-carousel/lib/alice-carousel.css';
import CryptoContext from './components/context';
import Header from './components/Header';
import Footer from './components/Footer';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Cryptify',
  description:
    'A website for cryptocurrencys prices overview, charts and a lot more.',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={dark}>
      <html lang="en" className="select-none w-screen">
        <body className={montserrat.className}>
          <CryptoContext>
            <ThemeProvider>
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </CryptoContext>
        </body>
      </html>
    </ClerkProvider>
  );
}
