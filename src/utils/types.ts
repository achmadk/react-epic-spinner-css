import { HTMLAttributes, Ref } from "react";

export interface PropsWithInnerRef<RefElement = HTMLDivElement> {
  /**
   * @description
   * @author Achmad Kurnianto
   * @date 15th February 2023
   * @type {Ref<RefElement>}
   * @memberof PropsWithInnerRef
   */
  innerRef?: Ref<RefElement>
}

export interface EpicProps extends HTMLAttributes<HTMLDivElement>, PropsWithInnerRef {
  size?: number;
  animationDuration?: number;
  color?: string;
  /**
   * @default ''
   */
  className?: string;
}

export type StyledProps = Required<Pick<EpicProps, 'size' | 'animationDuration' | 'color'>>
