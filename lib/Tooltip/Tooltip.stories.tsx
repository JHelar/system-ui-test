import { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Label } from '../Label';

export default {
  title: 'Components / Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;
export const Default: Story = {
  render: () => (
    <Tooltip content='This is a tooltip'>
      <Label>Hover for Tooltip</Label>
    </Tooltip>
  ),
};
