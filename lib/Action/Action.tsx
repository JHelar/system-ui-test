import { ComponentProps } from 'react';
import { RenderSlot } from '../types';
import { BaseAction } from './Action.styles';
import { renderSlotWith } from '../utils/renderSlotWith';

type ActionProps = ComponentProps<'a'> & {
  icon?: RenderSlot;
  disabled?: boolean;
};

export function Action({
  icon,
  children,
  disabled,
  ...actionProps
}: ActionProps) {
  const Icon = renderSlotWith(icon, { className: 'p-5' });
  return (
    <BaseAction {...actionProps} data-disabled={disabled || undefined}>
      {Icon}
      {children}
    </BaseAction>
  );
}
