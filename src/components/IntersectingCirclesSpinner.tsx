import { styled } from '@linaria/react';

import {  EpicProps, StyledProps, addRefProps } from '../utils';
import { useCallback } from 'react';

type IntersectingCirclesProps = StyledProps & {
  circleSize: number
}

const IntersectingCircles = styled.div<IntersectingCirclesProps>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  * {
    box-sizing: border-box;
  }

  .spinnerBlock {
    animation: intersecting-circles-spinners-animation
      ${(props) => props.animationDuration}ms linear infinite;
    transform-origin: center;
    display: block;
    height: ${(props) => props.circleSize}px;
    width: ${(props) => props.circleSize}px;
  }
  .circle {
    display: block;
    border: 2px solid ${(props) => props.color};
    border-radius: 50%;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .circle:nth-child(1) {
    left: 0;
    top: 0;
  }
  .circle:nth-child(2) {
    left: ${(props) => props.circleSize * -0.36}px;
    top: ${(props) => props.circleSize * 0.2}px;
  }
  .circle:nth-child(3) {
    left: ${(props) => props.circleSize * -0.36}px;
    top: ${(props) => props.circleSize * -0.2}px;
  }
  .circle:nth-child(4) {
    left: 0;
    top: ${(props) => props.circleSize * -0.36}px;
  }
  .circle:nth-child(5) {
    left: ${(props) => props.circleSize * 0.36}px;
    top: ${(props) => props.circleSize * -0.2}px;
  }
  .circle:nth-child(6) {
    left: ${(props) => props.circleSize * 0.36}px;
    top: ${(props) => props.circleSize * 0.2}px;
  }
  .circle:nth-child(7) {
    left: 0;
    top: ${(props) => props.circleSize * 0.36}px;
  }
  @keyframes intersecting-circles-spinners-animation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const IntersectingCirclesSpinnerBase = <PropType extends EpicProps = EpicProps>({
  size = 70,
  color = '#fff',
  animationDuration = 1200,
  className = '',
  innerRef,
  ...props
}: PropType) => {
  const circleSize = size / 2;

  const generateCircles = useCallback((num: number) => {
    return Array.from({ length: num }).map((_, index) => (
      <span key={`circle-${index}`} className="circle" />
    ));
  }, [])


  return (
    <IntersectingCircles
      ref={innerRef}
      size={size}
      color={color}
      animationDuration={animationDuration}
      className={`intersecting-circles-spinner${
        className ? ` ${className}` : ''
      }`}
      circleSize={circleSize}
      {...props}
    >
      <div className="spinnerBlock">{generateCircles(7)}</div>
    </IntersectingCircles>
  );
};

export const IntersectingCirclesSpinner = addRefProps(IntersectingCirclesSpinnerBase);
