import { Meta, StoryObj } from '@storybook/react';
import {
  FormControl,
  FormField,
  FormLabel,
  FormLabelDescription,
  Form,
} from './Form';
import { RadioButton, RadioButtonGroup } from '../RadioButtonGroup';
import { Checkbox } from '../Checkbox';
import { Switch } from '../Switch';

export default {
  title: 'Components / Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'Submit' },
  },
} satisfies Meta<typeof Form>;

type Story = StoryObj<typeof Form>;
export const RowWithRadioButton: Story = {
  render: (props) => (
    <Form {...props}>
      <RadioButtonGroup name='storybook-radio'>
        <FormField name='storybook-radio'>
          <FormControl>
            <RadioButton value='radio-value1' />
          </FormControl>
          <FormLabel>
            Label
            <FormLabelDescription>Description</FormLabelDescription>
          </FormLabel>
        </FormField>
      </RadioButtonGroup>
    </Form>
  ),
};

export const RowWithCheckbox: Story = {
  render: (props) => (
    <Form {...props}>
      <FormField name='storybook-check'>
        <FormControl>
          <Checkbox value='radio-value1' />
        </FormControl>
        <FormLabel>
          Label
          <FormLabelDescription>Description</FormLabelDescription>
        </FormLabel>
      </FormField>
    </Form>
  ),
};

export const RowWithSwitch: Story = {
  render: (props) => (
    <Form {...props}>
      <FormField name='storybook-switch'>
        <FormLabel>
          Label
          <FormLabelDescription>Description</FormLabelDescription>
        </FormLabel>
        <FormControl>
          <Switch value='radio-value1' />
        </FormControl>
      </FormField>
    </Form>
  ),
};
