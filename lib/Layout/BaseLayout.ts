import type { LabelProps } from '../Label';
import type { RenderSlot } from '../types';

export type BaseLayoutProps = {
  label: RenderSlot<LabelProps>;
  description?: RenderSlot<LabelProps>;
  instruction?: RenderSlot<LabelProps>;
  action?: RenderSlot<{ className: string }>;
  className?: string;
};
