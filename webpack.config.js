module.exports = {
  entry: {
    // pageOne: '../bid-buy/client/index.jsx',
    pageTwo: '../images-modal/client/src/index.jsx',
    pageThree: '../Napoleon-Service/client/src/index.jsx',
    pageFour:'../PeopleAlsoViewed/client/src/index.jsx',
  } ,
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/public/'
  }
};
