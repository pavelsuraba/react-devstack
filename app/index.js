import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from 'containers/Main/Main';

if (module.hot) {
    module.hot.accept();
}

render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('app')
);