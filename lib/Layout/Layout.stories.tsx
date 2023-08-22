import { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';
import { Sidebar, SidebarItem } from '../Sidebar';
import { Header } from '../Header';
import { Label } from '../Label';
import { Icon } from '../Icon';
import { Button } from '../Button';

export default {
  title: 'Components / Layout',
  component: Layout,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Layout>;

type Story = StoryObj<typeof Layout>;
export const Overview: Story = {
  render: () => (
    <Layout
      alignItems='flex-start'
      justifyContent='flex-start'
      sidebar={() => (
        <Sidebar
          topTitle={() => <Label variant='headline'>PeerDB</Label>}
          bottomRow={() => (
            <>
              <Button>Help and Support</Button>
              <Button>Log out</Button>
            </>
          )}
          bottomLabel={() => <Label variant='footnote'>App. v0.7.0</Label>}
        >
          <SidebarItem
            leadingIcon={(props) => <Icon {...props} name='widgets' />}
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            leadingIcon={(props) => <Icon {...props} name='cable' />}
          >
            Connectors
          </SidebarItem>
          <SidebarItem
            leadingIcon={(props) => <Icon {...props} name='compare_arrows' />}
          >
            Mirrors
          </SidebarItem>
          <SidebarItem
            leadingIcon={(props) => <Icon {...props} name='cloud' />}
          >
            Cloud
          </SidebarItem>
          <SidebarItem
            leadingIcon={(props) => <Icon {...props} name='settings' />}
          >
            Settings
          </SidebarItem>
        </Sidebar>
      )}
    >
      <Header variant='title2'>Dashboard</Header>
    </Layout>
  ),
};
