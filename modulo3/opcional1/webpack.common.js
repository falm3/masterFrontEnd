import HtmlWebpackPlugin from "html-webpack-plugin";

import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  context: path.resolve(__dirname, "./src"),

  resolve: {
    extensions: [
      ".js", 
      ".jsx",
      ".ts",
      ".tsx",
    ]
  },

  entry: {
    app: "./index.tsx",
  },

  output: {
    filename: "[name].[chunkhash].js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },

  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin(
      {
        filename: "index.html", //Name of file in ./dist/
        template: "index.html", //Name of template in ./src
        scriptLoading:"blocking", // Just use the blocking approach (no modern defer or module)
      }
    ),
  ],

};