import { Meta, StoryObj } from '@storybook/react';
import { RowWithSwitch } from './Layout';
import { Label } from '../Label';
import { Switch } from '../Switch';

export default {
  title: 'Components / Layout / RowWithSwitch',
  component: RowWithSwitch,
  args: {
    label: () => <Label>Label</Label>,
    action: () => <Switch />,
    description: () => <Label>Description</Label>,
  },
} satisfies Meta<typeof RowWithSwitch>;

export const Default: StoryObj<typeof RowWithSwitch> = {};
