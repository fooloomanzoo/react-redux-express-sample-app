import React, { FunctionComponent, useContext } from 'react';
import styled, { ThemeContext, keyframes } from 'styled-components';

const scaleIn = keyframes`
  0% {
    stroke-opacity: 0;
    fill-opacity: 0;
  }
  7.5% {
    stroke-opacity: 1;
    fill-opacity: 0.5;
  }
  15% {
    stroke-opacity: 1;
    fill-opacity: 1;
  }
  25% {
    fill-opacity: 0;
    stroke-opacity: 0;
  }
`;

const AnimatedCircle = styled.circle<{ delay: number }>`
  stroke-opacity: 0;
  fill-opacity: 0;
  animation-name ${scaleIn};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 7500ms;
  animation-delay: ${({ delay }) => delay}ms;
`;

const Blink: FunctionComponent = () => {
  const { utility: { accent, highlight } } = useContext(ThemeContext);

  return (
    <svg width={48} height={16} viewBox="-24 -8 48 16" >
      <g transform="translate(-16,0)">
        <circle r="4" fill={accent} stroke="none" />
        <AnimatedCircle r="3" fill={highlight} stroke={highlight} strokeWidth="2" delay={0} />
      </g>
      <g>
        <circle r="4" fill={accent} stroke="none" />
        <AnimatedCircle r="3" fill={highlight} stroke={highlight} strokeWidth="2" delay={2500} />
      </g>
      <g transform="translate(16,0)">
        <circle r="4" fill={accent} stroke="none" />
        <AnimatedCircle r="3" fill={highlight} stroke={highlight} strokeWidth="2" delay={5000} />
      </g>
    </svg>
  );
};

export default Blink;
