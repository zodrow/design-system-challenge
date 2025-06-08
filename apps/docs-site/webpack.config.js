const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/', // Needed for React Router
    clean: true,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      // Optional: make design-system imports easier
      '@design-system': path.resolve(__dirname, '../packages/design-system/src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.md$/,
        use: 'raw-loader',
        type: 'javascript/auto',
      },
      {
        test: /\.css$/, // In case you import any styles
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  devServer: {
    historyApiFallback: true, // So React Router works with browser refresh
    port: 3000,
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
