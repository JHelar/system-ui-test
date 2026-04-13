import { Meta, StoryObj } from '@storybook/react';
import { Action } from './Action';
import { Icon } from '../Icon';

export default {
  title: 'Components / Action',
  component: Action,
  tags: ['autodocs'],
  args: {
    disabled: false,
    children: 'Label',
    icon: () => <Icon name='link' className='m-5' />,
    href: '/',
  },
} as Meta<typeof Action>;

type Story = StoryObj<typeof Action>;
export const Default: Story = {};
