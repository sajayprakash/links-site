/** @type {import("prettier").Config } */

const config = {
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  printWidth: 100,
  tabWidth: 2,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
};

export default config;
