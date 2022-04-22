import { ForwardRefExoticComponent, FunctionComponent, CSSProperties, HTMLAttributes, RefAttributes } from 'react';

interface EpicProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  animationDuration?: number;
  color?: string;
}

declare type EpicComponentProps = ForwardRefExoticComponent<EpicProps & RefAttributes<HTMLDivElement>>;

export declare const AtomSpinner: EpicComponentProps;
export declare const BreedingRhombusSpinner: EpicComponentProps;
export declare const CirclesToRhombusesSpinner: EpicComponentProps;
export declare const FingerprintSpinner: EpicComponentProps;
export declare const FlowerSpinner: EpicComponentProps;
export declare const FulfillingBouncingCircleSpinner: EpicComponentProps;
export declare const FulfillingSquareSpinner: EpicComponentProps;
export declare const HalfCircleSpinner: EpicComponentProps;
export declare const HollowDotsSpinner: EpicComponentProps;
export declare const IntersectingCirclesSpinner: EpicComponentProps;
export declare const LoopingRhombusesSpinner: EpicComponentProps;
export declare const OrbitSpinner: EpicComponentProps;
export declare const PixelSpinner: EpicComponentProps;
export declare const RadarSpinner: EpicComponentProps;
export declare const ScalingSquaresSpinner: EpicComponentProps;
export declare const SelfBuildingSquareSpinner: EpicComponentProps;
export declare const SemipolarSpinner: EpicComponentProps;
export declare const SpringSpinner: EpicComponentProps;
export declare const SwappingSquaresSpinner: EpicComponentProps;
export declare const TrinityRingsSpinner: EpicComponentProps;
