import { combineReducers } from 'redux';
import { applicationReducer } from './application';
import { filterReducer } from './filter';

const rootReducer = combineReducers({
    application: applicationReducer,
    filter: filterReducer
});

export default rootReducer;
