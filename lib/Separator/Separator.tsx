import {
  BaseSeparator,
  SeparatorHeight,
  SeparatorVariant,
} from './Separator.styles';

type SeparatorProps = {
  height?: SeparatorHeight;
  variant?: SeparatorVariant;
};

export function Separator({
  height = 'tall',
  variant = 'centered',
}: SeparatorProps) {
  return <BaseSeparator $height={height} $variant={variant} />;
}
