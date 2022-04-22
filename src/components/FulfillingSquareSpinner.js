import { styled } from '@linaria/react';
import {  addRefProps } from '../utils/index';

const SquareSpinner = styled.div`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  position: relative;
  border: 4px solid ${(props) => props.color};
  animation: fulfilling-square-spinner-animation
    ${(props) => props.animationDuration}ms infinite ease;

  * {
    box-sizing: border-box;
  }

  .spinner-inner {
    vertical-align: top;
    display: inline-block;
    background-color: ${(props) => props.color};
    width: 100%;
    opacity: 1;
    animation: fulfilling-square-spinner-inner-animation
      ${(props) => props.animationDuration}ms infinite ease-in;
  }

  @keyframes fulfilling-square-spinner-animation {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fulfilling-square-spinner-inner-animation {
    0% {
      height: 0%;
    }
    25% {
      height: 0%;
    }
    50% {
      height: 100%;
    }
    75% {
      height: 100%;
    }
    100% {
      height: 0%;
    }
  }
`;

const FulfillingSquareSpinnerBase = ({
  size = 50,
  color = '#fff',
  animationDuration = 4000,
  className = '',
  innerRef,
  ...props
}) => (
  <SquareSpinner
    ref={innerRef}
    size={size}
    color={color}
    animationDuration={animationDuration}
    className={`fulfilling-square-spinner${className ? ' ' + className : ''}`}
    {...props}
  >
    <div className="spinner-inner" />
  </SquareSpinner>
);

export const FulfillingSquareSpinner = addRefProps(FulfillingSquareSpinnerBase)
