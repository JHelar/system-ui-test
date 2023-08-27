'use client';

import { PropsWithChildren } from 'react';
import { Layout, Row } from '@/lib/Layout';
import { Sidebar, SidebarItem } from '@/lib/Sidebar';
import { Label } from '@/lib/Label';
import { Avatar } from '@/lib/Avatar';
import { Select } from '@/lib/Select';
import { Icon } from '@/lib/Icon';
import { Button } from '@/lib/Button';
import { styled } from 'styled-components';

const StyledWrapper = styled.main`
  width: ${({ theme }) => theme.size.xxLarge};
`;

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <Layout
      alignItems='flex-start'
      justifyContent='center'
      sidebar={() => (
        <Sidebar
          topTitle={() => <Label variant='headline'>PeedDB</Label>}
          selectButton={() => <Select placeholder='Deployment name' />}
          avatar={() => (
            <Row
              thumbnail={() => <Avatar variant='text' text='JD' size='small' />}
              title={() => 'John Doe'}
            />
          )}
          bottomRow={() => (
            <>
              <Button className='w-full'>Help and Support</Button>
              <Button className='w-full'>Log out</Button>
            </>
          )}
          bottomLabel={() => <Label variant='footnote'>App. v0.7.0</Label>}
        >
          <SidebarItem
            selected
            leadingIcon={() => <Icon name='widgets' fill />}
          >
            Dashboard
          </SidebarItem>
          <SidebarItem leadingIcon={() => <Icon name='cable' />}>
            Connectors
          </SidebarItem>
          <SidebarItem leadingIcon={() => <Icon name='compare_arrows' />}>
            Mirrors
          </SidebarItem>
          <SidebarItem leadingIcon={() => <Icon name='cloud' />}>
            Cloud
          </SidebarItem>
          <SidebarItem leadingIcon={() => <Icon name='settings' />}>
            Settings
          </SidebarItem>
        </Sidebar>
      )}
    >
      <StyledWrapper>{children}</StyledWrapper>
    </Layout>
  );
}
