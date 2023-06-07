# React Epic Spinner CSS

This library represents the React adaptation of [EpicMax's](https://github.com/epicmaxco/epic-spinners) Vue [epic-spinners](http://epic-spinners.epicmax.co/)

Compared to `react-epic-spinners`, this library offers several advantages for professional use:
1. Eliminates the need for the `styled-components` dependency, which can potentially cause issues in your web application due to multiple versions of `styled-components`.
1. Features a smaller size, as each component's style, originally written in the CSS-in-JS paradigm, has been generated into a separate CSS file. Additionally, you can obtain an optimized CSS file for exclusive use with the spinner component by utilizing `postcss` and `purgecss`.
1. Supports ref forwarding, allowing you to access the DOM of our components if required.

## Installation

Using NPM

```bash
npm install @achmadk/react-epic-spinner-css
```

Or Yarn

```bash
yarn add @achmadk/react-epic-spinner-css
```

## The transition from version `0.0.3` to `1.0.0`
1. Update `react` to version 17.0.0, which incorporates support for hooks and allows importing from `react/jsx-runtime`
2. Adjust the CSS file import method accordingly

```diff
- import from '@achmadk/react-epic-spinner-css/dist/react-epic-spinner-css.css'
+ import from '@achmadk/react-epic-spinner-css/dist/style.css'
```

## Demo

An online demo is available [here](https://bondz.github.io/react-epic-spinners/)

## Usage

import `react-epic-spinner-css.css` first

```ts
import '@achmadk/react-epic-spinner-css/dist/style.css'
```

All components inherit properties from the `<div>` element, such as `style`, `className`, `onClick`, and so on. There are optional props provided to customize ones:

* `size` `[number]`: Determines the rendering size of the spinner.
* `color` `[string]`: defaults to `#fff`. Defines the spinner's color.
* `animationDelay` `[number]`: Indicates the spinner animation's duration. Lower values result in quicker animation restarts.

### Examples

```jsx
import { AtomSpinner } from '@achmadk/react-epic-spinner-css'

// In your render function or SFC return
<AtomSpinner color="red">
```

## Components

> All components are named exports of the package.

```jsx
import { ... } from '@achmadk/react-epic-spinner-css'
```

* [AtomSpinner](/src/components/AtomSpinner.tsx)
* [BreedingRhombusSpinner](/src/components/BreedingRhombusSpinner.tsx)
* [CirclesToRhombusesSpinner](/src/components/CirclesToRhombusesSpinner.tsx)
* [FingerprintSpinner](/src/components/FingerprintSpinner.tsx)
* [FlowerSpinner](/src/components/FlowerSpinner.tsx)
* [FulfillingBouncingCircleSpinner](/src/components/FulfillingBouncingCircleSpinner.tsx)
* [FulfillingSquareSpinner](/src/components/FulfillingSquareSpinner.tsx)
* [HalfCircleSpinner](/src/components/HalfCircleSpinner.tsx)
* [HollowDotsSpinner](/src/components/HollowDotsSpinner.tsx)
* [IntersectingCirclesSpinner](/src/components/IntersectingCirclesSpinner.tsx)
* [LoopingRhombusesSpinner](/src/components/LoopingRhombusesSpinner.tsx)
* [OrbitSpinner](/src/components/OrbitSpinner.tsx)
* [PixelSpinner](/src/components/PixelSpinner.tsx)
* [RadarSpinner](/src/components/RadarSpinner.tsx)
* [ScalingSquaresSpinner](/src/components/ScalingSquaresSpinner.tsx)
* [SelfBuildingSquareSpinner](/src/components/SelfBuildingSquareSpinner.tsx)
* [SemipolarSpinner](/src/components/SemipolarSpinner.tsx)
* [SpringSpinner](/src/components/SpringSpinner.tsx)
* [SwappingSquaresSpinner](/src/components/SwappingSquaresSpinner.tsx)
* [TrinityRingsSpinner](/src/components/TrinityRingsSpinner.tsx)

### CSS Optimization

1. install `@fullhuman/postcss-purgecss` and `postcss`

  ```sh
  yarn add -D @fullhuman/postcss-purgecss postcss
  ```

2. add `postcss.config.js` into your app root project

```js
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    // only optimize CSS when process.env.NODE_ENV is production
    ...(process.env.NODE_ENV === 'production' ? [purgecss({
      content: [
        './**/*.js',
        './**/*.jsx',
        // if you are using TypeScript, please add this.
        './**/*.ts',
        './**/*.tsx'
      ],
      // include `@achmadk/react-epic-spinner-css` css file to be processed.
      css: ['./node_modules/@achmadk/react-epic-spinner-css/dist/*.css'],
      // remove unused CSS keyframe definitions
      keyframes: true,
      safelist: {
        greedy: [
          // if you are using AtomSpinner, you can add /^atom-spinner/ .
          // in this case, i am using SpringSpinner component
          /^spring-spinner/
        ]
      }
    })] : [])
  ]
}

```

### Known Issues

Because of some bugs with `flexbox` on Firefox, the following components may not render properly

* ScalingSquaresSpinner
* SwappingSquaresSpinner
* TrinityRingsSpinner

If you know a fix for it, please send a PR :)

### To-do List Improvements
[x] Storybook (WIP)
[ ] unit testing with `jest` and `@testing-library/*`

## License

[MIT](LICENSE).
