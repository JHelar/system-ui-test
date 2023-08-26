import { Meta, StoryObj } from '@storybook/react';
import { RowWithSelect } from './Layout';
import { Label } from '../Label';
import { TextField } from '../TextField';
import { Select, SelectItem } from '../Select';

export default {
  title: 'Components / Layout / RowWithSelect',
  component: RowWithSelect,
  args: {
    label: () => (
      <Label as='label' htmlFor='storybook-select'>
        Label
      </Label>
    ),
    action: () => (
      <Select
        placeholder='Select'
        name='storybook-select'
        id='storybook-select'
      >
        <SelectItem value='apple'>Apple</SelectItem>
        <SelectItem value='banana'>Banana</SelectItem>
        <SelectItem value='blueberry'>Blueberry</SelectItem>
        <SelectItem value='grapes'>Grapes</SelectItem>
        <SelectItem value='pineapple'>Pineapple</SelectItem>
      </Select>
    ),
    description: () => <Label>Description</Label>,
  },
} satisfies Meta<typeof RowWithSelect>;

export const Default: StoryObj<typeof RowWithSelect> = {};
