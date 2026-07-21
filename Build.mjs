import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/index.js"], // Point to your actual source entry
  bundle: true,
  outfile: "index.js", // Outputs directly to root directory
  format: "iife",      // Required for Revenge runtime execution
  platform: "neutral",
  external: [
    "react",
    "react-native",
    "@vendetta/*"      // Prevents bundling runtime-provided modules
  ],
  loader: {
    ".js": "jsx",
  },
  minify: false, // Set to true once working for smaller bundle size
});

console.log("Build complete!");

