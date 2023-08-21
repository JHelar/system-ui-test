import { RenderSlot } from '../types';
import { isDefined } from '../utils/isDefined';
import { LabelProps } from '../Label';
import {
  StyledFlexRow,
  StyledFlexColumn,
  LayoutWrapper,
} from './Layout.styles';

type BaseRowProps = {
  className?: string;
  label: RenderSlot<LabelProps>;
  description?: RenderSlot<LabelProps>;
};

type RowWithButtonProps = {
  button: RenderSlot;
} & BaseRowProps;

export function RowWithButton({
  label,
  button,
  description,
  ...wrapperProps
}: RowWithButtonProps) {
  const Label = label({ variant: 'body', className: 'layout-label' });
  const Description =
    isDefined(description) &&
    description({ variant: 'subheadline', className: 'layout-description' });
  const Button = button();

  return (
    <LayoutWrapper direction='column' {...wrapperProps}>
      <StyledFlexRow>
        {Label}
        {Button}
      </StyledFlexRow>
      {Description}
    </LayoutWrapper>
  );
}

type RowWithRadioButtonProps = {
  radioButton: RenderSlot;
} & BaseRowProps;
export function RowWithRadiobutton({
  label,
  description,
  radioButton,
  ...wrapperProps
}: RowWithRadioButtonProps) {
  const Label = label({ variant: 'body', className: 'layout-label' });
  const Description =
    isDefined(description) &&
    description({ variant: 'subheadline', className: 'layout-description' });
  const RadioButton = radioButton();

  return (
    <LayoutWrapper direction='row' {...wrapperProps}>
      {RadioButton}
      <StyledFlexColumn>
        {Label}
        {Description}
      </StyledFlexColumn>
    </LayoutWrapper>
  );
}

type RowWithCheckboxProps = {
  checkbox: RenderSlot;
} & BaseRowProps;
export function RowWithCheckbox({
  label,
  description,
  checkbox,
  ...wrapperProps
}: RowWithCheckboxProps) {
  const Label = label({ variant: 'body', className: 'layout-label' });
  const Description =
    isDefined(description) &&
    description({ variant: 'subheadline', className: 'layout-description' });
  const Checkbox = checkbox();

  return (
    <LayoutWrapper direction='row' {...wrapperProps}>
      {Checkbox}
      <StyledFlexColumn>
        {Label}
        {Description}
      </StyledFlexColumn>
    </LayoutWrapper>
  );
}

type RowWithSwitchProps = {
  switch: RenderSlot;
} & BaseRowProps;

export function RowWithSwitch({
  label,
  switch: switchRenderFunc,
  description,
  ...wrapperProps
}: RowWithSwitchProps) {
  const Label = label({ variant: 'body', className: 'layout-label' });
  const Description =
    isDefined(description) &&
    description({ variant: 'subheadline', className: 'layout-description' });
  const Switch = switchRenderFunc();

  return (
    <LayoutWrapper direction='column' {...wrapperProps}>
      <StyledFlexRow>
        {Label}
        {Switch}
      </StyledFlexRow>
      {Description}
    </LayoutWrapper>
  );
}

type RowWithTextFieldProps = {
  textField: RenderSlot<{ className?: string }>;
  instruction?: RenderSlot<LabelProps>;
} & BaseRowProps;

export function RowWithTextField({
  label,
  textField,
  description,
  instruction,
  ...wrapperProps
}: RowWithTextFieldProps) {
  const Label = label({ variant: 'body', className: 'layout-label' });
  const Description =
    isDefined(description) &&
    description({ variant: 'subheadline', className: 'layout-description' });
  const Instruction =
    isDefined(instruction) &&
    instruction({ variant: 'subheadline', className: 'layout-instruction' });

  const TextField = textField({ className: 'layout-text-field' });

  return (
    <LayoutWrapper direction='column' {...wrapperProps}>
      <StyledFlexRow>
        {Label}
        {TextField}
      </StyledFlexRow>
      {Instruction}
      {Description}
    </LayoutWrapper>
  );
}

type RowWithProgressBarProps = {
  progressBar: RenderSlot<{ className: string }>;
  slot?: RenderSlot<{ className: string }>;
} & BaseRowProps;
export function RowWithProgressBar({
  label,
  description,
  progressBar,
  slot,
  ...wrapperProps
}: RowWithProgressBarProps) {
  const Label = label({ variant: 'body', className: 'layout-label' });
  const Description =
    isDefined(description) &&
    description({ variant: 'subheadline', className: 'layout-description' });

  const ProgressBar = progressBar({ className: 'layout-progress-bar' });
  const Slot = isDefined(slot) && slot({ className: 'layout-slot' });

  return (
    <LayoutWrapper direction='column' {...wrapperProps}>
      {Label}
      <StyledFlexRow>
        {ProgressBar}
        {Slot}
      </StyledFlexRow>
      {Description}
    </LayoutWrapper>
  );
}

type ColumnWithTextFieldProps = {
  textField: RenderSlot<{ className?: string }>;
  instruction?: RenderSlot<LabelProps>;
  suffix?: RenderSlot<LabelProps>;
} & BaseRowProps;
export function ColumnWithTextField({
  label,
  description,
  instruction,
  suffix,
  textField,
}: ColumnWithTextFieldProps) {
  const Label = label({ variant: 'body', className: 'layout-label' });

  const Description =
    isDefined(description) &&
    description({ variant: 'subheadline', className: 'layout-description' });

  const Suffix =
    isDefined(suffix) &&
    suffix({ variant: 'subheadline', className: 'layout-suffix' });

  const Instruction =
    isDefined(instruction) &&
    instruction({ variant: 'subheadline', className: 'layout-instruction' });

  const TextField = textField({ className: 'layout-text-field' });

  return (
    <LayoutWrapper direction='column'>
      <StyledFlexRow>
        {Label}
        {Suffix}
      </StyledFlexRow>
      {TextField}
      {Instruction}
      {Description}
    </LayoutWrapper>
  );
}
