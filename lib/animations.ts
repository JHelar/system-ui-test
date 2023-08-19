import { css, keyframes } from 'styled-components';

const spin = keyframes`
    from {
        rotate: 0deg;
    }
    to {
        rotate: 360deg;
    }
`;

export const spinAnimation = css`
  animation-name: ${spin};
  animation-duration: 1s;
  animation-direction: normal;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
