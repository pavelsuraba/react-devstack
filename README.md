# Infrastructure sandbox
For production apps I recommend using [next.js](https://github.com/zeit/next.js/)

# React devstack

### Version
1.3.0

### Description
Minimal [React](https://facebook.github.io/react/) devstack included:
* custom [Express](http://expressjs.com/) server
* [Styled components](https://styled-components.com/) for styling
* [Webpack 3](https://webpack.github.io/) a module bundler
* [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) (HMR) is a feature to inject updated modules into the active runtime
* [Pug](https://pugjs.org/api/getting-started.html) a HTML template engine

### Installation
```sh
$ git clone https://github.com/pavelsuraba/react-devstack.git
$ yarn
```

### Development
```sh
$ yarn run dev
```

### Production
```sh
$ yarn run build
```

### Mobile debugging
Mobile debugging through browser-sync tunnel. You need to have browser-sync installed globally.
Run simultaneously with development mode.
```sh
$ yarn run tunnel
```

### Troubleshooting
in case of img-loader bug:
```sh
Module build failed: Error: dyld: Library not loaded: /usr/local/opt/libpng/lib/libpng16.16.dylib
```

run:
```sh
$ brew update
$ brew install libpng
```