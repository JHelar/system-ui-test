import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const interFont = Inter({
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const materialIconsFont = localFont({
  src: '../../node_modules/material-symbols/material-symbols-rounded.woff2',
  display: 'block',
  style: 'normal',
});
