const constants = require('./constants');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const { DIST, PORT } = constants;

const app = express();
const compiler = webpack(config);

if(process.env.NODE_ENV === 'development') {
    app.use(require('webpack-dev-middleware')(compiler, {
        contentBase: DIST,
        hot: true,
        inline: true,
        compress: true,
        noInfo: false,
        stats: { colors: true }
    }));
    app.use(require('webpack-hot-middleware')(compiler));
}

app.use(express.static('dist'));

app.get('*', (req, res) => {
    res.sendFile(DIST + '/index.html');
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Listening at http://localhost:${PORT}`);
});