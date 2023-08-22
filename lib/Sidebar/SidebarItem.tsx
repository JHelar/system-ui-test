import { PropsWithChildren } from 'react';
import { Label, LabelProps } from '../Label';
import { PolymorphicComponentProps, RenderSlot } from '../types';
import { isDefined } from '../utils/isDefined';
import { BaseItem } from './SidebarItem.styles';

type SidebarItemProps = PropsWithChildren<{
  leadingIcon?: RenderSlot<{ className: string }>;
  suffix?: RenderSlot<LabelProps>;
  trailingIcon?: RenderSlot<{ className: string }>;
}>;

export function SidebarItem<AsTarget extends React.ElementType>({
  children,
  leadingIcon,
  suffix,
  trailingIcon,
  ...baseItemProps
}: PolymorphicComponentProps<AsTarget, SidebarItemProps>) {
  const LeadingIcon =
    isDefined(leadingIcon) &&
    leadingIcon({ className: 'sidebar-item-icon--leading' });

  const TrailingIcon =
    isDefined(trailingIcon) &&
    trailingIcon({ className: 'sidebar-item-icon--trailing' });

  const Suffix =
    isDefined(suffix) &&
    suffix({ variant: 'body', className: 'sidebar-item-suffix' });

  return (
    <BaseItem {...baseItemProps}>
      {LeadingIcon}
      <Label>{children}</Label>
      {Suffix}
      {TrailingIcon}
    </BaseItem>
  );
}
