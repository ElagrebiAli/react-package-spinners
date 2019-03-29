import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { string } from 'rollup-plugin-string';

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: {
      index: 'src/index.js',
      dualRing: 'src/DualRing/index.js',
      grid: 'src/Grid/index.js',
      spinner: 'src/Spinner/index.js',
    },
    external: ['react'],
    output: [
      {
        dir: 'codeSplitting/esm',
        format: 'esm',
      },
      {
        dir: 'codeSplitting/cjs',
        format: 'cjs',
      },
    ],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**',
      }),
      production && terser(),
      string({
        include: '**/*.css',
      }),
    ],
  },
  {
    input: 'src/index.js',
    external: ['react'],
    output: [
      {
        file: 'dist/bundle.cjs.js',
        format: 'cjs',
      },
      {
        file: 'dist/bundle.esm.js',
        format: 'esm',
      },
      {
        name: 'ReactSpinners',
        file: 'dist/bundle.umd.js',
        globals: {
          react: 'React',
        },
        format: 'umd',
      },
    ],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**',
      }),
      production && terser(),
      string({
        include: '**/*.css',
      }),
    ],
  },
];
