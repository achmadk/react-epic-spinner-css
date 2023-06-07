import { ComponentType, ForwardedRef, PropsWithChildren, forwardRef } from "react"

import { PropsWithInnerRef } from "./types"

export function addRefProps<
  RefElement = HTMLDivElement,
  ComponentProps extends PropsWithInnerRef<RefElement> = PropsWithInnerRef<RefElement>
>(Component: ComponentType<ComponentProps>) {
  const forwardRefCallback = (props: PropsWithChildren<ComponentProps>, ref: ForwardedRef<RefElement>) => (
    <Component innerRef={ref} {...props} />
  )
  return forwardRef<RefElement, ComponentProps>(forwardRefCallback)
}
