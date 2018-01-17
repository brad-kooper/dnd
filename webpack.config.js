//examples to check out:
//https://webpack.js.org/guides/asset-management/#loading-css
//https://github.com/KleoPetroff/react-webpack-boilerplate/blob/master/webpack.config.js
// https://github.com/Technologeek/react-webpack-3-boilerplate/blob/master/webpack.config.js
// https://github.com/thekeogh/webpack-react-redux

const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  
  entry: './src/index.js',
  
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    // publicPath : ''
  },

  module: {
    rules: [
    { 
        test: /\.js$/, 
        use:  ['babel-loader'],
        exclude: /node_modules/
    },
    { 
        test: /\.jsx$/, 
        use:  ['babel-loader'],
        exclude: /node_modules/
    },
    {
        test: /\.css$/,
        use : ['style-loader', 'css-loader']
    },
    {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            //resolve-url-loader may be chained before sass-loader if necessary
            use: ['css-loader', 'sass-loader']
        })
    },
    { 
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)/,
        use : ['file-loader']},
    {
        test: /\.(jpe?g|png|gif|svg)$/,
        use : ['file-loader']
    },
    {
        test: /\.(json)$/,
        use : ['file-loader']

    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        inject : 'body'
    }),
    new ExtractTextPlugin({ 
        filename: 'style.css', 
        allChunks: false, 
        disable: false })
    ]
};

module.exports = config;