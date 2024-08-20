const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/",
  output: {
	path: path.resolve(__dirname, "docs"),
	filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
  new MiniCssExtractPlugin({ filename: 'app.css' }),
  new MiniCssExtractPlugin(),
	new HtmlWebPackPlugin({
	  template: './src/index.html'
	})
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],  
  },
};