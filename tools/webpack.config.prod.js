const constants = require('./constants');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { SRC, DIST } = constants;

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
    plugins: [
        HTMLWebpackPluginConfig,
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js',
            minChunks(module) {
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: 'report.html'
        })
    ]
};