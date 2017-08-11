const constants = require('./constants');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const { DIST, PORT } = constants;

const app = express();
const compiler = webpack(config);

if(process.env.NODE_ENV === 'development') {
    app.use(devMiddleware(compiler, {
        contentBase: DIST,
        hot: true,
        inline: true,
        compress: true,
        noInfo: false,
        stats: { colors: true }
    }));
    app.use(hotMiddleware(compiler));
}

app.use(express.static('dist'));

app.get('*', (req, res) => {
    res.sendFile(DIST + '/index.html');
});

app.listen(PORT, (err) => {
    err
        ? console.log(err)
        : console.log(`Listening at http://localhost:${PORT}`);
});