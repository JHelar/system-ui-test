import { RenderSlot } from '../types';
import { isDefined } from '../utils/isDefined';
import { LabelProps } from '../Label';
import { StyledFlexRow, LayoutWrapper } from './BaseLayout.styles';
import { BaseLayoutProps } from './BaseLayout';
import { BaseLayoutRow } from './BaseLayoutRow';
import { BaseLayoutColumn, BaseLayoutColumnProps } from './BaseLayoutColumn';

type RowWithButtonProps = BaseLayoutProps;
export function RowWithButton({ ...baseRowProps }: RowWithButtonProps) {
  return <BaseLayoutRow {...baseRowProps} actionPosition='right' />;
}

type RowWithRadioButtonProps = BaseLayoutProps;
export function RowWithRadiobutton({
  ...baseRowProps
}: RowWithRadioButtonProps) {
  return <BaseLayoutRow {...baseRowProps} actionPosition='left' />;
}

type RowWithCheckboxProps = BaseLayoutProps;
export function RowWithCheckbox({ ...baseRowProps }: RowWithCheckboxProps) {
  return <BaseLayoutRow {...baseRowProps} actionPosition='left' />;
}

type RowWithSwitchProps = BaseLayoutProps;
export function RowWithSwitch({ ...baseRowProps }: RowWithSwitchProps) {
  return <BaseLayoutRow {...baseRowProps} actionPosition='right' />;
}

type RowWithTextFieldProps = BaseLayoutProps;
export function RowWithTextField({ ...baseRowProps }: RowWithTextFieldProps) {
  return <BaseLayoutRow {...baseRowProps} actionPosition='right' actionFlex />;
}

type RowWithProgressBarProps = BaseLayoutColumnProps;
export function RowWithProgressBar({
  ...baseColumnProps
}: RowWithProgressBarProps) {
  return <BaseLayoutColumn {...baseColumnProps} />;
}

type ColumnWithTextFieldProps = BaseLayoutColumnProps;
export function ColumnWithTextField({
  ...baseColumnProps
}: ColumnWithTextFieldProps) {
  return <BaseLayoutColumn {...baseColumnProps} />;
}

type RowWithSelectProps = BaseLayoutProps;
export function RowWithSelect({ ...baseRowProps }: RowWithSelectProps) {
  return <BaseLayoutRow {...baseRowProps} actionPosition='right' actionFlex />;
}
