'use client';

import type { MaterialSymbol } from 'material-symbols';
import { styled } from 'styled-components';
import { primitives } from '../AppTheme/appTheme';
import { ComponentProps, SVGProps } from 'react';
import { DeterminateProgressCircle } from './DeterminateProgressCircle';
import { IntermediateProgressCircle } from './IntermediateProgressCircle';

const BaseIcon = styled.i`
  font-family: ${primitives.typography.iconFont};
  font-weight: normal;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: 'liga';
`;

export type IconProps = {
  /**
   * The name of the icon: https://fonts.google.com/icons
   */
  name:
    | MaterialSymbol
    | 'determinate_progress_circle'
    | 'intermediate_progress_circle';
  className?: string;
};

export function Icon({ name, ...iconProps }: IconProps) {
  if (name === 'determinate_progress_circle') {
    return (
      <DeterminateProgressCircle {...(iconProps as SVGProps<SVGSVGElement>)} />
    );
  }
  if (name === 'intermediate_progress_circle') {
    return (
      <IntermediateProgressCircle {...(iconProps as SVGProps<SVGSVGElement>)} />
    );
  }
  return (
    <BaseIcon {...(iconProps as ComponentProps<typeof BaseIcon>)}>
      {name}
    </BaseIcon>
  );
}
