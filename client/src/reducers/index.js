import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dbReducer from './dbReducer';

//what we pass here is passed into state keys
export default combineReducers({
    auth: authReducer,
    db: dbReducer
});