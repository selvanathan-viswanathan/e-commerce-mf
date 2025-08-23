const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: { port: 3000 },
  output: {
    publicPath: "auto",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      exposes: {
        "./Host": "./src/Host",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
};
