import {SRC,DIST,PORT} from './constants';
import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: SRC + 'index.pug',
  filename: 'index.html',
  inject: 'body',
  minify: {
    removeComments: true,
    collapseWhitespace: true
  }
});

module.exports = {
    entry: [
        SRC + 'index.js' 
    ],
    output: {
        filename: "js/main.js",
        path: DIST,
        publicPath: "/"
    },    
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test:   /\.css/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: ['file?hash=sha512&digest=hex&name=images/[hash].[ext]', 'img?progressive=true']
            },            
            {
                test: /\.pug$/,
                loader: 'pug?pretty=true'
            },                  
            { test: /\.json$/, loader: 'json' }
        ]
    },
    resolve: {
        modulesDirectories: ['app', 'node_modules']
    },
    plugins: [
        HTMLWebpackPluginConfig,
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),        
    ],
    postcss: function(webpack) {
        return [
            require('postcss-cssnext')({ browsers: ['last 2 versions', 'iOS 7', 'ie 10-11', 'Safari 8'] }),
            require('precss')()
        ]
    }
}