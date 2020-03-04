import React, { FunctionComponent, useContext } from 'react';
import styled, { ThemeContext, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const faded = keyframes`
  0% {
    stroke-opacity: 0.5;
  }
  50% {
    stroke-opacity: 0.125;
  }
`;

const RotatingPath = styled.path<{ isReverted?: boolean }>`
  transform-origin: top left;
  animation-name: ${rotate};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: ${({ isReverted }) => isReverted ? 'reverse' : 'normal'};
  animation-duration: 5s;
  animation-fill-mode: both;
`

const FadingMarker = styled.line`
  animation-name: ${faded};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 5s;
  animation-fill-mode: both;
`

const Spinner: FunctionComponent = () => {
  const { utility: { accent, highlight }, background: { secondary } } = useContext(ThemeContext);
  return (
    <svg height={112} width={112} viewBox="-56 -56 112 112" >
      <g id="markers">
        <FadingMarker y1="-56" y2="-52" transform="rotate(0)" stroke={accent} strokeWidth="2" strokeOpacity="0.5" />
        <FadingMarker y1="-56" y2="-52" transform="rotate(72)" stroke={accent} strokeWidth="2" strokeOpacity="0.5" />
        <FadingMarker y1="-56" y2="-52" transform="rotate(144)" stroke={accent} strokeWidth="2" strokeOpacity="0.5" />
        <FadingMarker y1="-56" y2="-52" transform="rotate(216)" stroke={accent} strokeWidth="2" strokeOpacity="0.5" />
        <FadingMarker y1="-56" y2="-52" transform="rotate(288)" stroke={accent} strokeWidth="2" strokeOpacity="0.5" />
      </g>
      <g id="spinners">
        <circle className="inner full circle" cx="0" cy="0" r="38" stroke={secondary} strokeWidth="4" fill="none" />
        <RotatingPath className="inner partial circle" d="M 0 38 A 38 38 0 0 0 0 -38 " stroke={highlight} strokeWidth="4" fill="none" />
        <circle className="outer full circle" cx="0" cy="0" r="48" stroke={secondary} strokeWidth="4" fill="none" />
        <RotatingPath className="outer partial circle" d="M 48 0 A 48 48 0 1 0 0 48" stroke={accent} strokeWidth="4" fill="none" isReverted />
      </g>
    </svg>
  );
};

export default Spinner;