import { LabelProps } from '../Label';
import { RenderSlot } from '../types';
import { isDefined } from '../utils/isDefined';
import type { BaseLayoutProps } from './BaseLayout';
import { LayoutWrapper, StyledFlexRow } from './BaseLayout.styles';

export type BaseLayoutColumnProps = BaseLayoutProps & {
  actionSlot?: RenderSlot<{ className: string }>;
  suffix?: RenderSlot<LabelProps>;
};

export function BaseLayoutColumn({
  label,
  action,
  description,
  instruction,
  actionSlot,
  suffix,
  ...wrapperProps
}: BaseLayoutColumnProps) {
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

  const Action =
    isDefined(action) &&
    action({
      className: 'layout-action layout-action--flex-auto',
    });

  const ActionSlot =
    isDefined(actionSlot) &&
    actionSlot({
      className: 'layout-action-slot',
    });

  return (
    <LayoutWrapper direction='column' {...wrapperProps}>
      <StyledFlexRow>
        {Label}
        {Suffix}
      </StyledFlexRow>
      <StyledFlexRow>
        {Action}
        {ActionSlot}
      </StyledFlexRow>
      {Instruction}
      {Description}
    </LayoutWrapper>
  );
}
