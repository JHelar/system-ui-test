'use client';

import { PropsWithChildren } from 'react';
import { Layout, Row } from '@/lib/Layout';
import { Sidebar, SidebarItem } from '@/lib/Sidebar';
import { Label } from '@/lib/Label';
import { Select } from '@/lib/Select';
import { Avatar } from '@/lib/Avatar';
import { Button } from '@/lib/Button';
import { Icon } from '@/lib/Icon';

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <Layout
      sidebar={() => (
        <Sidebar
          topTitle={() => <Label variant='headline'>PeerDB</Label>}
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
          <SidebarItem leadingIcon={() => <Icon name='widgets' />}>
            Dashboard
          </SidebarItem>
          <SidebarItem selected leadingIcon={() => <Icon name='cable' fill />}>
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
      {children}
    </Layout>
  );
}
