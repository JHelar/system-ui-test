import { Attributes, cloneElement, isValidElement } from 'react';
import { RenderSlot } from '../types';
import { isDefined } from './isDefined';

export const renderSlotWith = <TProps extends Partial<TProps> & Attributes>(
  renderSlot?: RenderSlot,
  injectedProps?: TProps
) => {
  if (!isDefined(renderSlot)) return null;

  const element = renderSlot();
  if (!isValidElement<TProps>(element)) return null;

  return cloneElement(element, injectedProps);
};
