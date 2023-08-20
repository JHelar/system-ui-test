import { Meta, StoryObj } from '@storybook/react';
import { RowWithCheckbox } from './Row';
import { Label } from '../Label';
import { Checkbox } from '../Checkbox';

export default {
  title: 'Components / Row / RowWithCheckbox',
  component: RowWithCheckbox,
  args: {
    label: (props) => <Label {...props}>Label</Label>,
    checkbox: () => <Checkbox />,
    description: (props) => <Label {...props}>Description</Label>,
  },
} satisfies Meta<typeof RowWithCheckbox>;

export const Default: StoryObj<typeof RowWithCheckbox> = {};
