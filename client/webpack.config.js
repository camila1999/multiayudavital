const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js')
  },
  devServer: {
  contentBase: './public',
  inline: true
  },
  module:{

    rules: [
  // rules for modules (configure loaders, parser options, etc.)

  {
    test: /\.js?$/,
    include: [
      path.resolve(__dirname, "src")
    ],

    // flags to apply these rules, even if they are overridden (advanced option)

    loader: "babel-loader",
    // the loader which should be applied, it'll be resolved relative to the context
    // -loader suffix is no longer optional in webpack2 for clarity reasons
    // see webpack 1 upgrade guide

    options: {
      presets: ["react","es2015"]
    },
    // options for the loader
  },    {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }
  ]
  }
};
