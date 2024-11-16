import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Umbrella } from './shared/components/Umbrella';
import { ReactQueryProvider } from './shared/components/ReactQueryProvider';
import { SideMenProvider } from './shared/context/SideMenuContext';
import { CartProvider } from './features/checkout/context/CartContext';
import { APP_ENV, BASE_URL, GOOGLE_SITE_VERIFICATION } from '../config/constants';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    template: '%s | DZ Store',
    default: 'DZ Store',
  },
  metadataBase: new URL(BASE_URL),
  verification: {
    google: APP_ENV === 'prod' ? GOOGLE_SITE_VERIFICATION : '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReactQueryProvider>
          <SideMenProvider>
            <CartProvider>
              <Umbrella>{children}</Umbrella>
            </CartProvider>
          </SideMenProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
