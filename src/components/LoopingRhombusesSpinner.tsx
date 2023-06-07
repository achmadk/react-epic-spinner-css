import { styled } from '@linaria/react';

import {  EpicProps, StyledProps, addRefProps } from '../utils';

const LoadingRhombus = styled.div<StyledProps>`
  width: ${(props) => props.size * 4}px;
  height: ${(props) => props.size}px;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .rhombus {
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    background-color: ${(props) => props.color};
    left: ${(props) => props.size * 4}px;
    position: absolute;
    margin: 0 auto;
    border-radius: 2px;
    transform: translateY(0) rotate(45deg) scale(0);
    animation: looping-rhombuses-spinner-animation
      ${(props) => props.animationDuration}ms linear infinite;
  }
  .rhombus:nth-child(1) {
    animation-delay: calc(${(props) => props.animationDuration}ms * 1 / -1.5);
  }
  .rhombus:nth-child(2) {
    animation-delay: calc(${(props) => props.animationDuration}ms * 2 / -1.5);
  }
  .rhombus:nth-child(3) {
    animation-delay: calc(${(props) => props.animationDuration}ms * 3 / -1.5);
  }
  @keyframes looping-rhombuses-spinner-animation {
    0% {
      transform: translateX(0) rotate(45deg) scale(0);
    }
    50% {
      transform: translateX(-233%) rotate(45deg) scale(1);
    }
    100% {
      transform: translateX(-466%) rotate(45deg) scale(0);
    }
  }
`;

const generateSpinners = (num: number) => {
  return Array.from({ length: num }).map((_, index) => (
    <div key={`spinner-${index}`} className="rhombus" />
  ));
}

const LoopingRhombusesSpinnerBase = <PropType extends EpicProps = EpicProps>({
  size = 15,
  color = '#fff',
  animationDuration = 2500,
  className = '',
  innerRef,
  ...props
}: PropType) => {
  const num = 3;

  return (
    <LoadingRhombus
      ref={innerRef}
      size={size}
      color={color}
      animationDuration={animationDuration}
      className={`looping-rhombuses-spinner${className ? ` ${className}` : ''}`}
      {...props}
    >
      {generateSpinners(num)}
    </LoadingRhombus>
  );
};

export const LoopingRhombusesSpinner = addRefProps(LoopingRhombusesSpinnerBase);
