const path = require('path');

const ABSOLUTE_BASE = path.normalize(path.join(__dirname, '..'));

const constants = Object.freeze({
    ABSOLUTE_BASE,
    DIST: path.join(ABSOLUTE_BASE, 'dist/'),
    SRC: path.join(ABSOLUTE_BASE, 'src/'),
    PORT: 8080
});

module.exports = {
    DIST: constants.DIST,
    SRC: constants.SRC,
    PORT: constants.PORT
};