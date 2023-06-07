import { styled } from '@linaria/react';
import { useCallback } from 'react';

import {  EpicProps, StyledProps, addRefProps } from '../utils';

const Semipolar = styled.div<StyledProps>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .ring {
    border-radius: 50%;
    position: absolute;
    border: calc(${(props) => props.size}px * 0.05) solid transparent;
    border-top-color: ${(props) => props.color};
    border-left-color: ${(props) => props.color};
    animation: semipolar-spinner-animation
      ${(props) => props.animationDuration}ms infinite;
  }
  .ring:nth-child(1) {
    height: calc(
      ${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 0
    );
    width: calc(
      ${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 0
    );
    top: calc(${(props) => props.size}px * 0.1 * 0);
    left: calc(${(props) => props.size}px * 0.1 * 0);
    animation-delay: calc(${(props) => props.animationDuration}ms * 0.1 * 4);
    z-index: 5;
  }
  .ring:nth-child(2) {
    height: calc(
      ${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 1
    );
    width: calc(
      ${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 1
    );
    top: calc(${(props) => props.size}px * 0.1 * 1);
    left: calc(${(props) => props.size}px * 0.1 * 1);
    animation-delay: calc(${(props) => props.animationDuration}ms * 0.1 * 3);
    z-index: 4;
  }
  .ring:nth-child(3) {
    height: calc(
      ${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 2
    );
    width: calc(
      ${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 2
    );
    top: calc(${(props) => props.size}px * 0.1 * 2);
    left: calc(${(props) => props.size}px * 0.1 * 2);
    animation-delay: calc(${(props) => props.animationDuration}ms * 0.1 * 2);
    z-index: 3;
  }
  .ring:nth-child(4) {
    height: calc(
      ${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 3
    );
    width: calc(
      ${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 3
    );
    top: calc(${(props) => props.size}px * 0.1 * 3);
    left: calc(${(props) => props.size}px * 0.1 * 3);
    animation-delay: calc(${(props) => props.animationDuration}ms * 0.1 * 1);
    z-index: 2;
  }
  .ring:nth-child(5) {
    height: calc(
      ${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 4
    );
    width: calc(
      ${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 4
    );
    top: calc(${(props) => props.size}px * 0.1 * 4);
    left: calc(${(props) => props.size}px * 0.1 * 4);
    animation-delay: calc(${(props) => props.animationDuration}ms * 0.1 * 0);
    z-index: 1;
  }
  @keyframes semipolar-spinner-animation {
    50% {
      transform: rotate(360deg) scale(0.7);
    }
  }
`;

const SemipolarSpinnerBase = <PropType extends EpicProps = EpicProps>({
  size = 65,
  color = '#fff',
  animationDuration = 2000,
  className = '',
  innerRef,
  ...props
}: PropType) => {
  const generateSpinners = useCallback((num: number) => {
    return Array.from({ length: num }).map((_, index) => (
      <div key={`ring-${index}`} className="ring" />
    ));
  }, [])

  return (
    <Semipolar
      ref={innerRef}
      size={size}
      color={color}
      animationDuration={animationDuration}
      className={`semipolar-spinner${className ? ` ${className}` : ''}`}
      {...props}
    >
      {generateSpinners(5)}
    </Semipolar>
  )
};

export const SemipolarSpinner = addRefProps(SemipolarSpinnerBase);
