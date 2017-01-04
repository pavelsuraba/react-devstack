const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'app/'),
  dist: path.join(__dirname, 'dist/')
};

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.src + 'index.pug',
  filename: 'index.html',
  inject: 'body',
  minify: {
    removeComments: true,
    collapseWhitespace: true
  }
});

module.exports = {
    entry: [
        PATHS.src + 'index.js' 
    ],
    output: {
        filename: "main.js",
        path: PATHS.dist,
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