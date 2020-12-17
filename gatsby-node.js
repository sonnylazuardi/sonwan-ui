/* eslint-disable no-undef */
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
};
