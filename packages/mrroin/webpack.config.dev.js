const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require('./package.json').dependencies;

module.exports = {
  entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /bootstrap\.js$/,
        loader: "bundle-loader",
        options: {
          lazy: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        Base64UtilApp_Remote:
          "Base64UtilApp@http://localhost:9001/Base64UtilApp.js",
        JSONPrettyUtilApp_Remote:
          "JSONPrettyUtilApp@http://localhost:9002/JSONPrettyUtilApp.js",
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        "react-dom": { singleton: true, eager: true, requiredVersion: deps["react-dom"] }, 
       "@shared-context/shared-library/src": {
          import: "@shared-context/shared-library/src",
          requiredVersion: "0.0.1",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
