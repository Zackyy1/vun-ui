import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from "rollup-plugin-dts";
import scss from 'rollup-plugin-scss'
import replace from '@rollup/plugin-replace'
import babel from 'rollup-plugin-babel';

// import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import styles from 'rollup-plugin-styles'
import includePaths from 'rollup-plugin-includepaths';

import packageJson from "./package.json" assert { type: "json" };

let includePathOptions = {
  include: {},
  paths: ['src/styles', 'src/components'],
  external: [],
  extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss']
};

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: false,
        // assetFileNames: '[name][extname]'
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: false,
        // assetFileNames: '[name][extname]'
      },
    ],
    plugins: [
      // replace({
      //   "process.env.NODE_ENV": JSON.stringify("development"),
      //   preventAssignment: true,
      // }),
      // peerDepsExternal(),
      // includePaths(includePathOptions),
      // resolve(),
      // babel({
      //   exclude: "node_modules/**",
      //   presets: ["@babel/preset-react"],
      //   babelHelpers: "bundled",
      // }),
      commonjs(
        // {
        // include: /node_modules/,
        // requireReturnsDefault: 'auto', // <---- this solves default issue
        // namedExports: {
        //   'react-js': ['isValidElementType'],
        // },
      // }
      ),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extract: true,
        // minimize: true,
        // sourceMap: true,
        // plugins: [autoprefixer()],
      }),
      // styles(),
      // scss({

      //   include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
      //   output: "css/style.css",
      // }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.s?css$/]
  },
];