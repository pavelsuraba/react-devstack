const constants = require('./constants');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SRC, DIST } = constants;

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: SRC + 'index.pug',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        'babel-polyfill',
        SRC + 'index.js'
    ],
    output: {
        filename: 'main.js',
        path: DIST,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: ['file-loader?name=images/[name].[ext]', 'img-loader?progressive=true']
            },
            {
                test: /\.pug$/,
                use: 'pug-loader?pretty=true'
            }
        ]
    },
    resolve: {
        modules: ['app', 'node_modules']
    },
    performance: {
        hints: false
    },
    plugins: [
        HTMLWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js',
            minChunks(module) {
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },
        })
    ]
};
