import { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { Icon } from '../Icon';

export default {
  title: 'Components / Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    variant: 'normal',
  },
} satisfies Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;
export const Default: Story = {
  args: {
    variant: 'normal',
    type: 'default',
  },
  render: (props) => (
    <Badge {...props}>
      <Icon name='square' />
      Label
    </Badge>
  ),
};

export const SingleDigit: Story = {
  args: {
    variant: 'normal',
    type: 'singleDigit',
  },
  render: (props) => <Badge {...props}>3</Badge>,
};
