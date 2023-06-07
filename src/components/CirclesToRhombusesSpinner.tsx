import { styled } from '@linaria/react';

import { EpicProps, StyledProps, addRefProps } from '../utils';

type CircleRhombusProps = StyledProps & {
  circleMarginLeft: number
  circleNum: number
  delay: number
}

const CircleRhombus = styled.div<CircleRhombusProps>`
  height: ${(props) => props.size}px;
  width: ${(props) =>
    (props.size + props.circleMarginLeft) * props.circleNum}px;
  display: flex;
  align-items: center;
  justify-content: center;

  * {
    box-sizing: border-box;
  }

  .circle {
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    margin-left: ${(props) => props.circleMarginLeft}px;
    transform: rotate(45deg);
    border-radius: 10%;
    border: 3px solid ${(props) => props.color};
    overflow: hidden;
    background: transparent;
    animation: circles-to-rhombuses-animation
      ${(props) => props.animationDuration}ms linear infinite;
  }
  .circle:nth-child(1) {
    animation-delay: calc(${(props) => props.delay}ms * 1);
    margin-left: 0;
  }
  .circle:nth-child(2) {
    animation-delay: calc(${(props) => props.delay}ms * 2);
  }
  .circle:nth-child(3) {
    animation-delay: calc(${(props) => props.delay}ms * 3);
  }
  @keyframes circles-to-rhombuses-animation {
    0% {
      border-radius: 10%;
    }
    17.5% {
      border-radius: 10%;
    }
    50% {
      border-radius: 100%;
    }
    93.5% {
      border-radius: 10%;
    }
    100% {
      border-radius: 10%;
    }
  }
`;

const generateRhombusChildren = (num: number) => {
  return Array.from({ length: num }).map((_, index) => (
    <div key={`child-${index}`} className="circle" />
  ));
}

const CirclesToRhombusesSpinnerBase = <PropType extends EpicProps = EpicProps>({
  size = 15,
  color = '#fff',
  animationDuration = 1200,
  className = '',
  innerRef,
  ...props
}: PropType) => {
  const circleMarginLeft = size * 1.125;
  const circleNum = 3;
  const delay = 150;

  return (
    <CircleRhombus
      ref={innerRef}
      size={size}
      color={color}
      animationDuration={animationDuration}
      className={`circles-to-rhombuses-spinner${
        className ? ` ${className}` : ''
      }`}
      circleMarginLeft={circleMarginLeft}
      delay={delay}
      circleNum={circleNum}
      {...props}
    >
      {generateRhombusChildren(circleNum)}
    </CircleRhombus>
  );
};

export const CirclesToRhombusesSpinner = addRefProps(CirclesToRhombusesSpinnerBase);
