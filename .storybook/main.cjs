const path =  require("path");
const tsconfigPaths = require("vite-tsconfig-paths").default;

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-dark-mode"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  viteFinal: async (config) => {
    config.plugins.push(
        /** @see https://github.com/aleclarson/vite-tsconfig-paths */
        tsconfigPaths({
          /** @see https://github.com/storybookjs/builder-vite/issues/85#issuecomment-1119483129 */
          projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")],
        })
    );

    return config;
  },
}
