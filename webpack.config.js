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