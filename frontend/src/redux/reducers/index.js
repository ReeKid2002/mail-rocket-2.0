import { combineReducers } from 'redux';
import createMailReducer from './createMailReducer';

const rootReducer = combineReducers({
    createMail: createMailReducer,
});

export default rootReducer;