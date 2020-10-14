import { applyMiddleware, createStore, Middleware } from 'redux'
import rootReducer from './reducers'

const bindMiddleware = (middleware: Middleware[]) => {
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware as Middleware[]);
};

const configureStore = () => {
    const store = createStore(
        rootReducer,
        bindMiddleware([])
    );

    return store
};

export default configureStore;
