const path = require("path");

module.exports = {
  getOutputByName: (name) => {
    return {
      path: path.resolve(__dirname, "dist"),
      filename: `${name}.js`,
    };
  },
};
