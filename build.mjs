import { build } from "esbuild";

await build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  outfile: "dist/index.js",
  format: "iife",
  globalName: "$",
  banner: { js: "(()=>{" },
  footer: { js: "return $;})();" },
  jsx: "automatic",
  external: ["react", "react/jsx-runtime", "react-native"],
  external: ["react", "react/jsx-runtime", "react-native", "react-native-svg"],
  loader: { ".json": "json" },
  plugins: [
    {
      // Rewrites @vendetta/* imports into runtime globals,
      // e.g. `import { after } from "@vendetta/patcher"`
      // becomes `module.exports = vendetta.patcher` at build time.
      // This matches the actual `globalThis.vendetta` object
      // confirmed live in the running app.
      name: "vendetta-externals",
      setup(b) {
        b.onResolve({ filter: /^@vendetta\// }, ({ path }) => ({
          path,
          namespace: "vendetta",
        }));
        b.onLoad({ filter: /.*/, namespace: "vendetta" }, ({ path }) => ({
          contents: `module.exports = ${path.slice(1).replace(/\//g, ".")}`,
          loader: "js",
        }));
      },
    },
  ],
});

console.log("Built dist/index.js");
