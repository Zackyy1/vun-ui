import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from "rollup-plugin-dts";
import scss from 'rollup-plugin-scss'
// import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        // assetFileNames: '[name][extname]'
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        // assetFileNames: '[name][extname]'
      },
    ],
    plugins: [
      peerDepsExternal(),

      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      // postcss(),
      scss({
        outputStyle: 'compressed'
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.s?css$/]
  },
];