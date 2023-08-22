import { Meta, StoryObj } from '@storybook/react';
import { SidebarItem } from './SidebarItem';
import { Icon } from '../Icon';

export default {
  title: 'Components / Sidebar / SidebarItem',
  component: SidebarItem,
  tags: ['autodocs'],
  args: {
    selected: false,
    disabled: false,
    leadingIcon: (props) => <Icon {...props} name='draft' />,
    trailingIcon: (props) => <Icon {...props} name='star' />,
    suffix: 'Suffix',
  },
} as Meta<typeof SidebarItem>;

type Story = StoryObj<typeof SidebarItem>;
export const Default: Story = {
  render: (props) => <SidebarItem {...props}>Label</SidebarItem>,
};

export const Selected: Story = {
  args: {
    selected: true,
  },
  render: (props) => <SidebarItem {...props}>Label</SidebarItem>,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (props) => <SidebarItem {...props}>Label</SidebarItem>,
};
