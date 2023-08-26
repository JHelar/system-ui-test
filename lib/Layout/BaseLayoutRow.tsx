import { renderSlotWith } from '../utils/renderSlotWith';
import type { BaseLayoutProps } from './BaseLayout';
import {
  LayoutWrapper,
  StyledFlexColumn,
  StyledFlexRow,
} from './BaseLayout.styles';

type BaseLayoutRowProps = BaseLayoutProps & {
  actionPosition: 'left' | 'right';
  actionFlex?: boolean;
};

export function BaseLayoutRow({
  label,
  action,
  description,
  instruction,
  actionPosition,
  actionFlex = false,
  ...wrapperProps
}: BaseLayoutRowProps) {
  const Label = renderSlotWith(label, {
    variant: 'body',
    className: 'layout-label',
  });

  const Description = renderSlotWith(description, {
    variant: 'subheadline',
    className: 'layout-description',
  });

  const Instruction = renderSlotWith(instruction, {
    variant: 'subheadline',
    className: 'layout-instruction',
  });

  const Action = renderSlotWith(action, {
    className: `layout-action${actionFlex ? ' layout-action--flex' : ''}`,
  });

  if (actionPosition === 'left') {
    return (
      <LayoutWrapper direction='row' {...wrapperProps}>
        {Action}
        <StyledFlexColumn>
          {Label}
          {Instruction}
          {Description}
        </StyledFlexColumn>
      </LayoutWrapper>
    );
  }

  return (
    <LayoutWrapper direction='column' {...wrapperProps}>
      <StyledFlexRow>
        {Label}
        {Action}
      </StyledFlexRow>
      {Instruction}
      {Description}
    </LayoutWrapper>
  );
}
