module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
  },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: {
          loader: 'json-loader',
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'react',
              [
                'env',
                {
                  targets: {
                    browsers: ['last 2 versions', 'safari >= 7'],
                  },
                },
              ],
              'stage-2',
            ],
          },
        },
      },
    ],
  },
};
