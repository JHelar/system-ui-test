import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components / Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;
export const Test: Story = {
  args: {
    children: 'Test button',
  },
  render: (props) => <Button {...props} />,
};
