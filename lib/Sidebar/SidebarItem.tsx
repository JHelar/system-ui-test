import { PropsWithChildren } from 'react';
import { PolymorphicComponentProps, RenderSlot } from '../types';
import { isDefined } from '../utils/isDefined';
import { BaseItem, StyledLabel, StyledSuffix } from './SidebarItem.styles';

type SidebarItemProps = PropsWithChildren<{
  selected?: boolean;
  disabled?: boolean;
  leadingIcon?: RenderSlot<{ className: string }>;
  suffix?: string;
  trailingIcon?: RenderSlot<{ className: string }>;
}>;

export function SidebarItem<AsTarget extends React.ElementType>({
  children,
  leadingIcon,
  suffix,
  trailingIcon,
  selected,
  disabled,
  ...baseItemProps
}: PolymorphicComponentProps<AsTarget, SidebarItemProps>) {
  const LeadingIcon =
    isDefined(leadingIcon) &&
    leadingIcon({ className: 'sidebar-item-icon--leading' });

  const TrailingIcon =
    isDefined(trailingIcon) &&
    trailingIcon({ className: 'sidebar-item-icon--trailing' });

  const Suffix = isDefined(suffix) && (
    <StyledSuffix variant='body'>{suffix}</StyledSuffix>
  );

  return (
    <BaseItem
      {...baseItemProps}
      data-selected={selected || undefined}
      data-disabled={disabled || undefined}
    >
      {LeadingIcon}
      <StyledLabel variant='body'>{children}</StyledLabel>
      {Suffix}
      {TrailingIcon}
    </BaseItem>
  );
}
