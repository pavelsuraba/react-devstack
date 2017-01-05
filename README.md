# React devstack

### Version
1.0.0

### Description
Minimal [React](https://facebook.github.io/react/) devstack included:
* custom [Express](http://expressjs.com/) server
* [Styled components](https://styled-components.com/) for styling
* [Webpack](https://webpack.github.io/) a module bundler
* [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) (HMR) is a feature to inject updated modules into the active runtime
* [Pug](https://pugjs.org/api/getting-started.html) a HTML template engine

### Installation
```sh
$ git clone https://github.com/pavelsuraba/react-devstack.git
$ yarn
```

### Development
```sh
$ yarn run start
```

### Production
```sh
$ yarn run build
```

### Mobile debugging
Mobile debugging through browser-sync tunnel. You need to have browser-sync installed globally
```sh
$ browser-sync start --proxy localhost:8080 --no-ghost-mode --tunnel devstack
```