import { PropsWithChildren } from 'react';
import { Label, LabelProps } from '../Label';
import { RenderSlot, PolymorphicComponentProps } from '../types';
import { isDefined } from '../utils/isDefined';
import { HeaderWrapper } from './Header.styles';

type HeaderProps = {
  slot?: RenderSlot;
} & LabelProps &
  PropsWithChildren;

export function Header<AsTarget extends React.ElementType>({
  slot,
  children,
  className,
  ...labelProps
}: PolymorphicComponentProps<AsTarget, HeaderProps>) {
  const Slot = isDefined(slot) && slot();

  return (
    <HeaderWrapper className={className}>
      <Label {...(labelProps as LabelProps)}>{children}</Label>
      {Slot}
    </HeaderWrapper>
  );
}
