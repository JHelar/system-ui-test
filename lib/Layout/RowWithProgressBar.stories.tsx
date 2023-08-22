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
    label: (props) => <Label {...props}>Label</Label>,
    action: (props) => <ProgressBar progress={50} {...props} />,
    description: (props) => <Label {...props}>Description</Label>,
  },
} satisfies Meta<typeof RowWithProgressBar>;

type Story = StoryObj<typeof RowWithProgressBar>;
export const Default: Story = {};

export const WithSlot: Story = {
  args: {
    actionSlot: (props) => (
      <Button {...props} variant='normalBorderless'>
        <Icon name='cancel' />
      </Button>
    ),
  },
};
