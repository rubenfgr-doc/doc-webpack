const path = require("path");
const getOutputByName = require("./webpack.parts");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: getOutputByName("prod"),
};
