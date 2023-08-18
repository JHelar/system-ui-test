'use client';

import type { MaterialIcon } from '@material-design-icons/font';
import { styled } from 'styled-components';
import { primitives } from '../AppTheme/appTheme';
import { ComponentProps } from 'react';

const BaseIcon = styled.i`
  font-family: ${primitives.typography.iconFont};
  font-weight: normal;
  font-style: normal;
  font-size: 1em;
  line-height: 1;
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

type IconProps = ComponentProps<typeof BaseIcon> & {
  /**
   * The name of the icon: https://fonts.google.com/icons
   */
  name: MaterialIcon;
};

export function Icon({ name, ...iconProps }: IconProps) {
  return <BaseIcon {...iconProps}>{name}</BaseIcon>;
}
