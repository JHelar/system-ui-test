import { Meta, StoryObj } from '@storybook/react';
import { SidebarItem } from './SidebarItem';

export default {
  title: 'Components / Sidebar / SidebarItem',
  component: SidebarItem,
  tags: ['autodocs'],
} as Meta<typeof SidebarItem>;

type Story = StoryObj<typeof SidebarItem>;
export const Default: Story = {};
