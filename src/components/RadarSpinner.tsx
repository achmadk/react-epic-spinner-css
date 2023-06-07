import { styled } from '@linaria/react';
import { useCallback } from 'react';

import { EpicProps, StyledProps, addRefProps } from '../utils';

type RadarProps = StyledProps & { borderWidth: number }

const Radar = styled.div<RadarProps>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .circle {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    animation: radar-spinner-animation ${(props) => props.animationDuration}ms
      infinite;
  }
  .circle:nth-child(1) {
    padding: ${(props) => props.borderWidth * 2 * 0}px;
    animation-delay: ${(props) => props.animationDuration * 0.15}ms;
  }
  .circle:nth-child(2) {
    padding: ${(props) => props.borderWidth * 2 * 1}px;
    animation-delay: ${(props) => props.animationDuration * 0.15}ms;
  }
  .circle:nth-child(3) {
    padding: ${(props) => props.borderWidth * 2 * 2}px;
    animation-delay: ${(props) => props.animationDuration * 0.15}ms;
  }
  .circle:nth-child(4) {
    padding: ${(props) => props.borderWidth * 2 * 3}px;
    animation-delay: 0ms;
  }
  .circle-inner,
  .circle-inner-container {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: ${(props) => props.borderWidth}px solid transparent;
  }
  .circle-inner {
    border-left-color: ${(props) => props.color};
    border-right-color: ${(props) => props.color};
  }
  @keyframes radar-spinner-animation {
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const RadarSpinnerBase = <PropType extends EpicProps = EpicProps>({
  size = 110,
  color = '#fff',
  animationDuration = 2000,
  className = '',
  innerRef,
  ...props
}: PropType) => {
  const borderWidth = (size * 5) / 110;

  const generateSpinners = useCallback((num: number) => {
    return Array.from({ length: num }).map((_, index) => (
      <div key={`spinner-${index}`} className="circle">
        <div className="circle-inner-container">
          <div className="circle-inner" />
        </div>
      </div>
    ));
  }, [])

  return (
    <Radar
      ref={innerRef}
      size={size}
      color={color}
      animationDuration={animationDuration}
      className={`radar-spinner${className ? ` ${className}` : ''}`}
      borderWidth={borderWidth}
      {...props}
    >
      {generateSpinners(4)}
    </Radar>
  );
};

export const RadarSpinner = addRefProps(RadarSpinnerBase);
