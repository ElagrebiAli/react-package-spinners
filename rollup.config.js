import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;
console.log(production);
console.log(process.env.ROLLUP_WATCH);
export default {
  input: 'src/index.jsx',
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
  ],
};
