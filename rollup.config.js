import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import ejs from "rollup-plugin-ejs";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/cli.ts",
  output: {
    file: "bin/src/cli.js",
    format: "cjs"
  },
  include: ["src"],
  exclude: ["node_modules"],
  plugins: [
    typescript(),
    json(),
    ejs(),
    resolve(),
  ]
}