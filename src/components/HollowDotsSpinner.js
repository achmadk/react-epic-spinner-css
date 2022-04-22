import { styled } from '@linaria/react';

import {  addRefProps } from '../utils/index';

const HollowSpinner = styled.div`
  height: ${(props) => props.size}px;
  width: ${(props) => 2 * props.size * props.dotsNum}px;

  * {
    box-sizing: border-box;
  }

  .dot {
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    margin: 0 calc(${(props) => props.size}px / 2);
    border: calc(${(props) => props.size}px / 5) solid ${(props) => props.color};
    border-radius: 50%;
    float: left;
    transform: scale(0);
    animation: hollow-dots-spinner-animation
      ${(props) => props.animationDuration}ms ease infinite 0ms;
  }
  .dot:nth-child(1) {
    animation-delay: calc(${(props) => props.animationDelay}ms * 1);
  }
  .dot:nth-child(2) {
    animation-delay: calc(${(props) => props.animationDelay}ms * 2);
  }
  .dot:nth-child(3) {
    animation-delay: calc(${(props) => props.animationDelay}ms * 3);
  }
  @keyframes hollow-dots-spinner-animation {
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

function generateDots(num) {
  return Array.from({ length: num }).map((val, index) => (
    <div key={index} className="dot" />
  ));
}

const HollowDotsSpinnerBase = ({
  size = 15,
  color = '#fff',
  animationDuration = 1000,
  className = '',
  innerRef,
  ...props
}) => {
  const dotsNum = 3;
  const animationDelay = animationDuration * 0.3;

  return (
    <HollowSpinner
      ref={innerRef}
      size={size}
      color={color}
      animationDuration={animationDuration}
      className={`hollow-dots-spinner${className ? ' ' + className : ''}`}
      dotsNum={dotsNum}
      animationDelay={animationDelay}
      {...props}
    >
      {generateDots(dotsNum)}
    </HollowSpinner>
  );
};

export const HollowDotsSpinner = addRefProps(HollowDotsSpinnerBase);
