# React Epic Spinner CSS

This library is the React implementation of Vue [epic-spinners](http://epic-spinners.epicmax.co/) by [EpicMax](https://github.com/epicmaxco/epic-spinners)

Comparing to `react-epic-spinners`, this library has some advantages:
1. No need `styled-components` dependency, which may break your web app because has multiple versions of `styled-components`.
1. Has smaller size because each components style written in CSS-in-JS paradigm has been generated into separate CSS file. Moreover, you can get optimized CSS file only use spinner component with the help of `postcss` and `purgecss`.
1. Ref forwarding if you want to get DOM of our components.

## Installation

Using NPM

```bash
npm install @achmadk/react-epic-spinner-css
```

Or Yarn

```bash
yarn add @achmadk/react-epic-spinner-css
```

## Demo

An online demo is available [here](https://bondz.github.io/react-epic-spinners/)

## Usage

import `react-epic-spinner-css.css` first

```ts
import '@achmadk/react-epic-spinner-css/dist/react-epic-spinner-css.css'
```

Basically, all components accept all props from `<div>` element, like `style`, `className`, `onClick`, etc. There are optional props provided to customize ones:

* `size` `[number]`: Specifies how large the spinner should be rendered
* `color` `[string]`: defaults to `#fff`. Specifies the color of the spinner.
* `animationDelay` `[number]`: Specifies the timing of the spinner animation. Lower numbers mean the animations restart faster.

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

* [AtomSpinner](/src/components/AtomSpinner.js)
* [BreedingRhombusSpinner](/src/components/BreedingRhombusSpinner.js)
* [CirclesToRhombusesSpinner](/src/components/CirclesToRhombusesSpinner.js)
* [FingerprintSpinner](/src/components/FingerprintSpinner.js)
* [FlowerSpinner](/src/components/FlowerSpinner.js)
* [FulfillingBouncingCircleSpinner](/src/components/FulfillingBouncingCircleSpinner.js)
* [FulfillingSquareSpinner](/src/components/FulfillingSquareSpinner.js)
* [HalfCircleSpinner](/src/components/HalfCircleSpinner.js)
* [HollowDotsSpinner](/src/components/HollowDotsSpinner.js)
* [IntersectingCirclesSpinner](/src/components/IntersectingCirclesSpinner.js)
* [LoopingRhombusesSpinner](/src/components/LoopingRhombusesSpinner.js)
* [OrbitSpinner](/src/components/OrbitSpinner.js)
* [PixelSpinner](/src/components/PixelSpinner.js)
* [RadarSpinner](/src/components/RadarSpinner.js)
* [ScalingSquaresSpinner](/src/components/ScalingSquaresSpinner.js)
* [SelfBuildingSquareSpinner](/src/components/SelfBuildingSquareSpinner.js)
* [SemipolarSpinner](/src/components/SemipolarSpinner.js)
* [SpringSpinner](/src/components/SpringSpinner.js)
* [SwappingSquaresSpinner](/src/components/SwappingSquaresSpinner.js)
* [TrinityRingsSpinner](/src/components/TrinityRingsSpinner.js)

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
