import { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { Label } from '../Label';
import { SidebarItem } from './SidebarItem';
import { Icon } from '../Icon';
import { Separator } from '../Separator';
import { Color } from '../Color';

export default {
  title: 'Components / Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  args: {},
} as Meta<typeof Sidebar>;

type Story = StoryObj<typeof Sidebar>;
export const Default: Story = {
  render: (props) => (
    <Sidebar {...props}>
      <Color colorCategory='base' colorVariant='text' colorName='lowContrast'>
        <Label variant='subheadline'>Favourites</Label>
      </Color>
      <SidebarItem leadingIcon={() => <Icon name='history' />}>
        Recents
      </SidebarItem>
      <SidebarItem leadingIcon={() => <Icon name='computer' />} selected>
        Desktop
      </SidebarItem>
      <SidebarItem leadingIcon={() => <Icon name='draft' />}>
        Documents
      </SidebarItem>
      <SidebarItem leadingIcon={() => <Icon name='download' />}>
        Downloads
      </SidebarItem>
      <Separator variant='empty' height='thin' />
      <Color colorCategory='base' colorVariant='text' colorName='lowContrast'>
        <Label variant='subheadline'>Location</Label>
      </Color>
      <SidebarItem leadingIcon={() => <Icon name='hard_drive' />}>
        Macintosh HD
      </SidebarItem>
      <SidebarItem leadingIcon={() => <Icon name='public' />}>
        Network
      </SidebarItem>
    </Sidebar>
  ),
};
