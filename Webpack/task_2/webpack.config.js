const path = require("path");

module.exports = {
  mode: "production",
  entry: "./js/dashboard_main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    clean: true, // nettoie public à chaque build
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: { progressive: true },
              optipng: { enabled: true },
              pngquant: { quality: [0.65, 0.9], speed: 4 },
              gifsicle: { interlaced: false },
            },
          },
        ],
      },
    ],
  },
};
