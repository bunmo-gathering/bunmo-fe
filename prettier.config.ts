/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.ts",
  tailwindFunctions: ["tv", "clsx"],
};
