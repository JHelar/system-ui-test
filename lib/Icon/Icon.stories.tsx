import { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

export default {
  title: 'Components / Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof Icon>;
export const Default: Story = {
  args: {
    name: 'add',
  },
  render: (props) => <Icon {...props} />,
};
