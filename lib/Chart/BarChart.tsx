import {
  BarChart as TremorBarChart,
  BarChartProps as TremorBarChartProps,
} from '@tremor/react';
import { RenderSlot } from '../types';
import { renderSlotWith } from '../utils/renderSlotWith';
import { StyledWrapper } from './BarChart.styles';

type BarChartProps = {
  top?: RenderSlot;
} & TremorBarChartProps;

/**
 * Bar chart component
 *
 * Thin wrapper around the [Tremor BarChart component](https://www.tremor.so/docs/components/bar-chart)
 */
export function BarChart({ top, ...barChartProps }: BarChartProps) {
  const TopWrapper = renderSlotWith(top);
  return (
    <StyledWrapper>
      {TopWrapper}
      <TremorBarChart {...barChartProps} className='' />
    </StyledWrapper>
  );
}
