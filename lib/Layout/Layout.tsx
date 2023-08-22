import { RenderSlot } from '../types';
import { BaseLayoutProps } from './BaseLayout';
import { BaseLayoutRow } from './BaseLayoutRow';
import { BaseLayoutColumn, BaseLayoutColumnProps } from './BaseLayoutColumn';
import {
  ContentWrapper,
  ContentWrapperProps,
  LayoutWrapper,
} from './Layout.styles';
import { PropsWithChildren } from 'react';
import { isDefined } from '../utils/isDefined';

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

type LayoutProps = PropsWithChildren<{
  sidebar?: RenderSlot;
  alignItems: ContentWrapperProps['$alignItems'];
  justifyContent: ContentWrapperProps['$justifyContent'];
}>;
export function Layout({
  sidebar,
  alignItems,
  justifyContent,
  children,
}: LayoutProps) {
  const Sidebar = isDefined(sidebar) && sidebar();
  const fullWidth = !isDefined(sidebar);

  return (
    <LayoutWrapper>
      {Sidebar}
      <ContentWrapper
        $alignItems={alignItems}
        $justifyContent={justifyContent}
        $fullWidth={fullWidth}
      >
        {children}
      </ContentWrapper>
    </LayoutWrapper>
  );
}
