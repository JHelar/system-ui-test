import { Meta, StoryObj } from '@storybook/react';
import { Slot } from './Slot';
import { Label } from '../Label';

export default {
  title: 'Components / Slot',
  component: Slot,
  tags: ['autodocs'],
  args: {
    children: <Label>Swap using Instance Swap Property</Label>,
  },
} as Meta<typeof Slot>;

type Story = StoryObj<typeof Slot>;
export const Default: Story = {};
