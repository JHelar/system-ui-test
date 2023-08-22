import { PropsWithChildren } from 'react';
import { PolymorphicComponentProps, RenderSlot } from '../types';
import { isDefined } from '../utils/isDefined';
import { StyledItemWrapper, StyledWrapper } from './Sidebar.styles';
import { Separator } from '../Separator';

type SidebarProps = PropsWithChildren<{
  topTitle?: RenderSlot;
  avatar?: RenderSlot;
  bottomRow?: RenderSlot;
  bottomLabel?: RenderSlot;
  className?: string;
}>;

export function Sidebar({
  avatar,
  bottomRow,
  bottomLabel,
  children,
  topTitle,
  ...wrapperProps
}: PolymorphicComponentProps<'div', SidebarProps>) {
  const TopTitle = isDefined(topTitle) && (
    <>
      {topTitle()}
      <Separator variant='empty' height='thin' />
    </>
  );

  const Avatar = isDefined(avatar) && (
    <>
      {avatar()}
      <Separator variant='empty' height='thin' />
    </>
  );

  const BottomRow = isDefined(bottomRow) && bottomRow();

  const BottomLabel = isDefined(bottomLabel) && (
    <>
      {bottomLabel()}
      <Separator variant='empty' height='thin' />
    </>
  );

  return (
    <StyledWrapper {...wrapperProps}>
      {TopTitle}
      {Avatar}
      <StyledItemWrapper>{children}</StyledItemWrapper>
      {BottomRow}
      {BottomLabel}
    </StyledWrapper>
  );
}
