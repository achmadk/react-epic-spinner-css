import { styled } from '@linaria/react';
import { useCallback } from 'react';

import {  EpicProps, StyledProps, addRefProps } from '../utils';

const ScalingSquares = styled.div<StyledProps>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  animation: scaling-squares-animation ${(props) => props.animationDuration}ms;
  animation-iteration-count: infinite;
  transform: rotate(0deg);

  * {
    box-sizing: border-box;
  }

  .square {
    height: calc(${(props) => props.size}px * 0.25 / 1.3);
    width: calc(${(props) => props.size}px * 0.25 / 1.3);
    margin-right: auto;
    margin-left: auto;
    border: calc(${(props) => props.size}px * 0.04 / 1.3) solid
      ${(props) => props.color};
    position: absolute;
    animation-duration: ${(props) => props.animationDuration}ms;
    animation-iteration-count: infinite;
  }
  .square:nth-child(1) {
    animation-name: scaling-squares-spinner-animation-child-1;
  }
  .square:nth-child(2) {
    animation-name: scaling-squares-spinner-animation-child-2;
  }
  .square:nth-child(3) {
    animation-name: scaling-squares-spinner-animation-child-3;
  }
  .square:nth-child(4) {
    animation-name: scaling-squares-spinner-animation-child-4;
  }
  @keyframes scaling-squares-animation {
    50% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  @keyframes scaling-squares-spinner-animation-child-1 {
    50% {
      transform: translate(150%, 150%) scale(2, 2);
    }
  }
  @keyframes scaling-squares-spinner-animation-child-2 {
    50% {
      transform: translate(-150%, 150%) scale(2, 2);
    }
  }
  @keyframes scaling-squares-spinner-animation-child-3 {
    50% {
      transform: translate(-150%, -150%) scale(2, 2);
    }
  }
  @keyframes scaling-squares-spinner-animation-child-4 {
    50% {
      transform: translate(150%, -150%) scale(2, 2);
    }
  }
`;

const ScalingSquaresSpinnerBase = <PropType extends EpicProps = EpicProps>({
  size = 65,
  color = '#fff',
  animationDuration = 1250,
  className = '',
  innerRef,
  ...props
}: PropType) => {
  const generateSpinners = useCallback((num: number) => {
    return Array.from({ length: num }).map((_, index) => (
      <div key={`square-${index}`} className="square" />
    ));
  }, [])

  return (
    <ScalingSquares
      ref={innerRef}
      size={size}
      color={color}
      animationDuration={animationDuration}
      className={`scaling-squares-spinner${className ? ` ${className}` : ''}`}
      {...props}
    >
      {generateSpinners(4)}
    </ScalingSquares>
  );
};

export const ScalingSquaresSpinner = addRefProps(ScalingSquaresSpinnerBase);
