import 'react-app-polyfill/ie11';

import React, { useRef, ComponentType, forwardRef, ForwardRefRenderFunction, HTMLAttributes, ReactNode, Ref, StrictMode } from 'react';
import { render } from 'react-dom';

import { SpringSpinner } from '../.';

import '../dist/react-epic-spinners.css';

export interface PropsWithInnerRef<Element = HTMLDivElement> {
  innerRef: Ref<Element>
}

export interface PropsWithChildren {
  children: ReactNode
}

export interface TestProps extends PropsWithInnerRef,
  PropsWithChildren, Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
}

const TestBase = ({ innerRef, children, ...otherProps }: TestProps) => {
  return <div ref={innerRef} {...otherProps}>{children}</div>
}

export function addRefProps<RefType = HTMLDivElement, ComponentProps extends PropsWithInnerRef<RefType> = PropsWithInnerRef<RefType>>(
  Component: ComponentType<ComponentProps>
) {
  const forwardRefCallback: ForwardRefRenderFunction<RefType, ComponentProps> = (props, ref) => (
    // @ts-ignore
    <Component innerRef={ref} {...props} />
  )
  return forwardRef<RefType, ComponentProps>(forwardRefCallback)
}

const Test = addRefProps(TestBase)

const App = () => {
  const spinnerRef = useRef<HTMLDivElement>(null)
  return (
    <StrictMode>
      <div style={{ width: '100%', margin: 'auto', display: 'flex', justifyContent: 'center' }}>
        <SpringSpinner ref={spinnerRef} size={800} color='#dddddd' onClick={() => console.log(spinnerRef.current)} />
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));
