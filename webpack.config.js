const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: { main: "./src/assets/js/index.js" },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./assets/js/index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        type: "asset/resource",
        /* loader: "url-loader",
        options: {
          name: "./assets/img/[name].[ext]",
        }, */
      },
    ],
  },
  devServer: {
    port: 3030,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new CleanWebpackPlugin(),
  ],
};
