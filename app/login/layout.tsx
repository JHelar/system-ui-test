'use client';

import { PropsWithChildren } from 'react';
import { Layout, LayoutMain } from '@/lib/Layout';

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <Layout>
      <LayoutMain alignSelf='center' justifySelf='center' width='large'>
        {children}
      </LayoutMain>
    </Layout>
  );
}
