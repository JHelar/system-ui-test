import type { Metadata } from 'next';
import { Menu } from '../components/Menu';

export const metadata: Metadata = {
  title: 'Peerdb Cloud Template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <header>
          <Menu />
        </header>
        {children}
      </body>
    </html>
  );
}
