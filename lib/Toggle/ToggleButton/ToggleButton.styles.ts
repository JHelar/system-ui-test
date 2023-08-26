import { styled } from 'styled-components';
import * as RadixToggle from '@radix-ui/react-toggle';
import { baseButtonStyle } from '../styles';

export const BaseToggleRoot = styled(RadixToggle.Root)`
  ${baseButtonStyle}
`;
