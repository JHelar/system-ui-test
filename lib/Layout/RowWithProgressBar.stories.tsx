import { Meta, StoryObj } from '@storybook/react';
import { RowWithProgressBar } from './Layout';
import { Label } from '../Label';
import { ProgressBar } from '../ProgressBar';
import { Icon } from '../Icon';
import { Button } from '../Button';

export default {
  title: 'Components / Layout / RowWithProgressBar',
  component: RowWithProgressBar,
  args: {
    label: () => <Label>Label</Label>,
    action: () => <ProgressBar progress={50} />,
    description: () => <Label>Description</Label>,
  },
} satisfies Meta<typeof RowWithProgressBar>;

type Story = StoryObj<typeof RowWithProgressBar>;
export const Default: Story = {};

export const WithSlot: Story = {
  args: {
    actionSlot: () => (
      <Button variant='normalBorderless'>
        <Icon name='cancel' />
      </Button>
    ),
  },
};
