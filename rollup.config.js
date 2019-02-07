import progress from 'rollup-plugin-progress';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import visualizer from 'rollup-plugin-visualizer';
import filesize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'build/bundle.js',
      format: 'iife',
      sourcemap: 'inline', //TODO: remove this in production
    }
  ],
  external: [
    'react',
    'react-dom',
  ],
  globals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    progress(),
    json(),
    babel({
      plugins: [
        '@babel/transform-react-jsx',
      ],
    }),
    visualizer(),
    filesize(),
  ]
};
