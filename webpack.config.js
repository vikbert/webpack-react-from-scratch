var path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "./src"),
    watchContentBase: true,
    hot: true,
    host: "0.0.0.0",
    compress: true,
    port: 3001
  }
};
