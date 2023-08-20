import { RenderSlot } from '../types';
import { isDefined } from '../utils/isDefined';
import { LabelProps } from '../Label';
import { StyledFlexRow, StyledFlexColumn, RowWrapper } from './Row.styles';

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
  const Label = label({ variant: 'body', className: 'row-label' });
  const Description =
    isDefined(description) &&
    description({ variant: 'subheadline', className: 'row-description' });
  const Button = button();

  return (
    <RowWrapper direction='column' {...wrapperProps}>
      <StyledFlexRow>
        {Label}
        {Button}
      </StyledFlexRow>
      {Description}
    </RowWrapper>
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
  const Label = label({ variant: 'body', className: 'row-label' });
  const Description =
    isDefined(description) &&
    description({ variant: 'subheadline', className: 'row-description' });
  const RadioButton = radioButton();

  return (
    <RowWrapper direction='row' {...wrapperProps}>
      {RadioButton}
      <StyledFlexColumn>
        {Label}
        {Description}
      </StyledFlexColumn>
    </RowWrapper>
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
  const Label = label({ variant: 'body', className: 'row-label' });
  const Description =
    isDefined(description) &&
    description({ variant: 'subheadline', className: 'row-description' });
  const Checkbox = checkbox();

  return (
    <RowWrapper direction='row' {...wrapperProps}>
      {Checkbox}
      <StyledFlexColumn>
        {Label}
        {Description}
      </StyledFlexColumn>
    </RowWrapper>
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
  const Label = label({ variant: 'body', className: 'row-label' });
  const Description =
    isDefined(description) &&
    description({ variant: 'subheadline', className: 'row-description' });
  const Switch = switchRenderFunc();

  return (
    <RowWrapper direction='column' {...wrapperProps}>
      <StyledFlexRow>
        {Label}
        {Switch}
      </StyledFlexRow>
      {Description}
    </RowWrapper>
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
  const Label = label({ variant: 'body', className: 'row-label' });
  const Description =
    isDefined(description) &&
    description({ variant: 'subheadline', className: 'row-description' });
  const Instruction =
    isDefined(instruction) &&
    instruction({ variant: 'subheadline', className: 'row-instruction' });

  const TextField = textField({ className: 'row-text-field' });

  return (
    <RowWrapper direction='column' {...wrapperProps}>
      <StyledFlexRow>
        {Label}
        {TextField}
      </StyledFlexRow>
      {Instruction}
      {Description}
    </RowWrapper>
  );
}
