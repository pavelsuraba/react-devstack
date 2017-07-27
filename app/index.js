import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import _globalStyles from './_utils/global-styles';
import Main from './containers/Main/Main';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.querySelector('#app')
    );
};

render(Main);

if (module.hot) {
    module.hot.accept('./containers/Main/Main', () => render(Main));
}