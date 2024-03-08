import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubix = Rubik({
  weight: ['300', '400', '500', '600', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lasles VPN',
  description:
    'Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={rubix.className}>{children}</body>
    </html>
  );
}
