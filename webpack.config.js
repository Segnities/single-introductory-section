const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: { main: "./src/assets/js/index.js" },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./assets/js/index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        loader: "file-loader",
        options: {
          name: './assets/img/[name].[ext]'
        }
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
