import { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

export default {
  title: 'Components / Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} as Meta<typeof Sidebar>;

type Story = StoryObj<typeof Sidebar>;
export const Default: Story = {};
