import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components / Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Action',
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;
export const Normal: Story = {
  args: {
    variant: 'normal',
  },
  render: (props) => <Button {...props} />,
};
