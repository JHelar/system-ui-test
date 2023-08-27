'use client';

import { PropsWithChildren } from 'react';
import { Layout } from '@/lib/Layout';
import styled from 'styled-components';

const StyledWrapper = styled.main`
  width: ${({ theme }) => theme.size.large};
`;

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <Layout alignItems='center' justifyContent='center'>
      <StyledWrapper>{children}</StyledWrapper>
    </Layout>
  );
}
