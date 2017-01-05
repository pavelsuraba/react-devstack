import {SRC,DIST,PORT} from './constants';
import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: SRC + 'index.pug',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        SRC + 'index.js' 
    ],
    output: {
        filename: "main.js",
        path: DIST,
        publicPath: "/"
    },    
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader']
            },
            {
                test:   /\.css/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: ['file?name=images/[name].[ext]', 'img?progressive=true']
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