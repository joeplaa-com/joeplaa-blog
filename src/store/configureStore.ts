import { applyMiddleware, createStore, Middleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './reducers'
import storage from './storage'

const bindMiddleware = (middleware: Middleware[]) => {
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware as Middleware[]);
};

const persistConfig = {
    key: 'nextjs',
    whitelist: ['application'], // only this/these reducer(s) will be persisted, add other reducers if needed
    storage, // if needed, use a safer storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
    const store = createStore(
        persistedReducer,
        bindMiddleware([])
    );

    const persistor = persistStore(store);

    return { store, persistor };
};

export default configureStore;
