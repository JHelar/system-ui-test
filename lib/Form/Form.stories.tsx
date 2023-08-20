import { Meta, StoryObj } from '@storybook/react';
import {
  FormControl,
  FormField,
  FormLabel,
  FormLabelDescription,
  Form,
  FormFieldRow,
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
          <FormFieldRow>
            <FormLabel>Label</FormLabel>
            <FormLabelDescription>Description</FormLabelDescription>
          </FormFieldRow>
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
        <FormFieldRow>
          <FormLabel>Label</FormLabel>
          <FormLabelDescription>Description</FormLabelDescription>
        </FormFieldRow>
      </FormField>
    </Form>
  ),
};

export const RowWithSwitch: Story = {
  render: (props) => (
    <Form {...props}>
      <FormField name='storybook-switch'>
        <FormFieldRow>
          <FormLabel>Label</FormLabel>
          <FormLabelDescription>Description</FormLabelDescription>
        </FormFieldRow>
        <FormControl>
          <Switch value='radio-value1' />
        </FormControl>
      </FormField>
    </Form>
  ),
};
