import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { string } from 'rollup-plugin-string';

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: {
      bundle: 'src/index.js',
      'bundle.Circle': 'src/Circle/index.js',
      'bundle.grid': 'src/Grid/index.js',
      'bundle.spinner': 'src/Spinner/index.js',
    },
    external: ['react'],
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
      },
      {
        dir: 'dist/cjs',
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
        name: 'ReactSpinners',
        file: 'dist/umd/bundle.umd.js',
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
