import { createStore, applyMiddleware } from 'redux';
import counterReducer from 'containers/Counter/counterReducer/counterReducer';
import createLogger from 'redux-logger';

const logger = createLogger();
const myMiddleware = [logger];

const store = createStore(
    counterReducer,
    applyMiddleware(...myMiddleware)
);

export default store;