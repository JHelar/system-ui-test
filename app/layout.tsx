import type { Metadata } from 'next';
import { Menu } from '../components/Menu';
import { AppTheme, StyledComponentsRegistry } from '../lib/AppTheme';

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
        <StyledComponentsRegistry>
          <AppTheme>
            <header>
              <Menu />
            </header>
            {children}
          </AppTheme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
