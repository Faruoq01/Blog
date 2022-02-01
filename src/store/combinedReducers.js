import { combineReducers } from 'redux';
import authReducer from './reducers/auth';
import setupReducer from './reducers/setup';

export default combineReducers({
    authReducer,
    setupReducer,
})