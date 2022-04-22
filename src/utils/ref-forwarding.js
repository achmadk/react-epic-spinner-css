import { forwardRef } from 'react'

export function addRefProps(Component) {
  return forwardRef((props, ref) => (
    <Component innerRef={ref} {...props} />
  ))
}
