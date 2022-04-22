import { styled } from '@linaria/react';
import {  addRefProps } from '../utils/index';

const Pixels = styled.div`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  * {
    box-sizing: border-box;
  }

  .pixel-spinner-inner {
    width: ${(props) => props.pixelSize}px;
    height: ${(props) => props.pixelSize}px;
    background-color: ${(props) => props.color};
    color: ${(props) => props.color};

    box-shadow: ${(props) => props.pixelSize * 1.5}px
        ${(props) => props.pixelSize * 1.5}px 0 0,
      ${(props) => props.pixelSize * -1.5}px
        ${(props) => props.pixelSize * -1.5}px 0 0,
      ${(props) => props.pixelSize * 1.5}px
        ${(props) => props.pixelSize * -1.5}px 0 0,
      ${(props) => props.pixelSize * -1.5}px
        ${(props) => props.pixelSize * 1.5}px 0 0,
      0 ${(props) => props.pixelSize * 1.5}px 0 0,
      ${(props) => props.pixelSize * 1.5}px 0 0 0,
      ${(props) => props.pixelSize * -1.5}px 0 0 0,
      0 ${(props) => props.pixelSize * -1.5}px 0 0;
    animation: pixel-spinner-animation ${(props) => props.animationDuration}ms
      linear infinite;
  }

  @keyframes pixel-spinner-animation {
    50% {
      box-shadow: ${(props) => props.pixelSize * 2}px
          ${(props) => props.pixelSize * 2}px 0 0,
        ${(props) => props.pixelSize * -2}px
          ${(props) => props.pixelSize * -2}px 0 0,
        ${(props) => props.pixelSize * 2}px ${(props) => props.pixelSize * -2}px
          0 0,
        ${(props) => props.pixelSize * -2}px ${(props) => props.pixelSize * 2}px
          0 0,
        0 ${(props) => props.pixelSize}px 0 0,
        ${(props) => props.pixelSize}px 0 0 0,
        ${(props) => props.pixelSize * -1}px 0 0 0,
        0 ${(props) => props.pixelSize * -1}px 0 0;
    }
    75% {
      box-shadow: ${(props) => props.pixelSize * 2}px
          ${(props) => props.pixelSize * 2}px 0 0,
        ${(props) => props.pixelSize * -2}px
          ${(props) => props.pixelSize * -2}px 0 0,
        ${(props) => props.pixelSize * 2}px ${(props) => props.pixelSize * -2}px
          0 0,
        ${(props) => props.pixelSize * -2}px ${(props) => props.pixelSize * 2}px
          0 0,
        0 ${(props) => props.pixelSize}px 0 0,
        ${(props) => props.pixelSize}px 0 0 0,
        ${(props) => props.pixelSize * -1}px 0 0 0,
        0 ${(props) => props.pixelSize * -1}px 0 0;
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const PixelSpinnerBase = ({
  size = 70,
  color = '#fff',
  animationDuration = 1500,
  className = '',
  innerRef,
  ...props
}) => {
  const pixelSize = size / 7;

  return (
    <Pixels
      ref={innerRef}
      size={size}
      color={color}
      animationDuration={animationDuration}
      className={`pixel-spinner${className ? ' ' + className : ''}`}
      pixelSize={pixelSize}
      {...props}
    >
      <div className="pixel-spinner-inner" />
    </Pixels>
  );
};

export const PixelSpinner = addRefProps(PixelSpinnerBase);

