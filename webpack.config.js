const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, 'app/'),
  dist: path.join(__dirname, 'dist/')
};

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.src + 'index.pug',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        PATHS.src + 'index.js' 
    ],
    output: {
        filename: "main.js",
        path: PATHS.dist
    },    
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader']
            },
            {
                test:   /\.sss/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
                    'postcss-loader?parser=sugarss'                    
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug?pretty=true'
            },                  
            { test: /\.json$/, loader: 'json' }
        ]
    },
    devServer: {
      contentBase: PATHS.dist,
      hot: true,
      inline: true,
      progress: true,
    },
    plugins: [
        HTMLWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    postcss: function(webpack) {
        return [
            require('postcss-cssnext')({ browsers: ['last 2 versions', 'iOS 7', 'ie 10-11', 'Safari 8'] }),
            require('precss')()
        ]
    }
}