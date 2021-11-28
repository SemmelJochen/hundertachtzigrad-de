const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const webpack = require("webpack");
const WebpackBundleAnalyzer =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const manifestOptions = {
  short_name: "Hundertachtzigrad",
  name: "Hundertachtzigrad Webseite",
  icons: [
    {
      src: "hundertachtzigrad_de.ico",
      sizes: "64x64 32x32 24x24 16x16",
      type: "image/x-icon",
    },
  ],
  start_url: ".",
  display: "standalone",
  theme_color: "#000000",
  background_color: "#ffffff",
};

module.exports = ({ mode } = { mode: "production" }) => {
  return {
    mode,
    entry: path.join(__dirname, "src", "index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jp(e*)g|JP(e*)G|svg|gif|mp4|otf)$/,
          use: ["file-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
        favicon: path.join(__dirname, "public", "hundertachtzigrad_de.ico"),
        meta: {
          viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
      }),
      new InterpolateHtmlPlugin({
        PUBLIC_URL: "static", // can modify `static` to another name or get it from `process`
      }),
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
      new WebpackBundleAnalyzer(),
    ],
  };
};
