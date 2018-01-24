const SentryCliPlugin = require("@sentry/webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: "./index.ts",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  target: "node",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
  },
  plugins: [
    new SentryCliPlugin({
      release: process.env.REL,
      include: "./dist",
      ignore: ["node_modules", "webpack.config.js"]
    })
  ]
};
