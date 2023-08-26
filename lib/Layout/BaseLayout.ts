import type { LabelProps } from '../Label';
import type { RenderSlot } from '../types';

export type BaseLayoutProps = {
  label: RenderSlot;
  description?: RenderSlot;
  instruction?: RenderSlot;
  action?: RenderSlot;
  className?: string;
};
