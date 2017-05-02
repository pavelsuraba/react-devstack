import { DIST, PORT } from './constants';
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from './webpack.config';
import open from 'open';

const app = express();
const compiler = webpack(config);

if(process.env.NODE_ENV !== 'production') {

    app.use(require('webpack-dev-middleware')(compiler, {
        contentBase: DIST,
        hot: true,
        inline: true,
        compress: true,
        noInfo: false,
        stats: { colors: true }
    }));
    app.use(require('webpack-hot-middleware')(compiler));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../app/index.pug'));
    });

    app.listen(PORT, 'localhost', function(err) {
        if (err) {
            console.log(err);
            return;
        }
        open(`http://localhost:${PORT}/`);
        console.log(`Listening at http://localhost:${PORT}`);
    });
}