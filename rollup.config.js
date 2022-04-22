import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';
import linaria from '@linaria/rollup';
import css from 'rollup-plugin-css-only';

const pkg = {
  name: 'react-epic-spinner-css'
}

const input = 'src/index.js';
const globalName = 'ReactEpicSpinnerCSS';

function external(id) {
  return !id.startsWith('.') && !id.startsWith('/') || id.includes('@babel/runtime');
}

const cjs = [
  {
    input,
    output: { file: `dist/${pkg.name}.cjs.js`, format: 'cjs' },
    external,
    plugins: [
      babel({
        exclude: /node_modules/,
        babelHelpers: 'bundled'
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development'), preventAssignment: true })
    ]
  },
  {
    input,
    output: { file: `dist/${pkg.name}.cjs.min.js`, format: 'cjs' },
    external,
    plugins: [
      linaria({ sourceMap: false }),
      css({ output: `${pkg.name}.css` }),
      babel({
        exclude: /node_modules/,
        babelHelpers: 'bundled',
        plugins: [
          ['babel-plugin-transform-react-remove-prop-types', {
            removeImport: true
          }]
        ]
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production'), preventAssignment: true }),
      terser()
    ]
  }
];

const esm = [
  {
    input,
    output: { file: `dist/${pkg.name}.esm.js`, format: 'esm' },
    external,
    plugins: [
      babel({
        exclude: /node_modules/,
        babelHelpers: 'bundled'
      }),
      sizeSnapshot()
    ]
  }
];

const globals = {
  react: 'React',
  'prop-types': 'PropTypes',
  '@linaria/react': 'LinariaReact',
  'react/jsx-runtime': 'jsxRuntime'
};

const umd = [
  {
    input,
    output: {
      file: `dist/${pkg.name}.umd.js`,
      format: 'umd',
      name: globalName,
      globals
    },
    external,
    plugins: [
      babel({
        exclude: /node_modules/,
        babelHelpers: 'bundled'
      }),
      resolve(),
      commonjs({
        include: /node_modules/
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development'), preventAssignment: true }),
      sizeSnapshot()
    ]
  },
  {
    input,
    output: {
      file: `dist/${pkg.name}.umd.min.js`,
      format: 'umd',
      name: globalName,
      globals
    },
    external,
    plugins: [
      babel({
        exclude: /node_modules/,
        babelHelpers: 'bundled',
        plugins: [
          ['babel-plugin-transform-react-remove-prop-types', {
            removeImport: true
          }]
        ]
      }),
      resolve(),
      commonjs({
        include: /node_modules/
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production'), preventAssignment: true }),
      sizeSnapshot(),
      terser()
    ]
  }
];

let config;
switch (process.env.BUILD_ENV) {
  case 'cjs':
    config = cjs;
    break;
  case 'esm':
    config = esm;
    break;
  case 'umd':
    config = umd;
    break;
  default:
    config = cjs.concat(esm).concat(umd);
}

export default config;
