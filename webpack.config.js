const { getOutputByName } = require("./webpack.parts");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = (env) => {
  return {
    mode: "development",
    entry: "./src/index.js",
    output: getOutputByName(env.outputFilename),
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
          // use[1] = 'css-loader'
          // use[0] = 'style-loader'
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
          // use[1] = 'css-loader'
          // use[0] = 'style-loader'
        },
        {
          test: /\.less$/,
          use: ["style-loader", "css-loader", "less-loader"],
          // use[1] = 'css-loader'
          // use[0] = 'style-loader'
        },
        {
          test: /\.png$|\.jpg$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 25000,
                name: "[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: "./src/*.html",
            to: "[name][ext]",
          },
        ],
      }),
    ],
  };
};
