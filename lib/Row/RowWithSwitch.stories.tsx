import { Meta, StoryObj } from '@storybook/react';
import { RowWithSwitch } from './Row';
import { Label } from '../Label';
import { Switch } from '../Switch';

export default {
  title: 'Components / Row / RowWithSwitch',
  component: RowWithSwitch,
  args: {
    label: (props) => <Label {...props}>Label</Label>,
    switch: () => <Switch />,
    description: (props) => <Label {...props}>Description</Label>,
  },
} satisfies Meta<typeof RowWithSwitch>;

export const Default: StoryObj<typeof RowWithSwitch> = {};
