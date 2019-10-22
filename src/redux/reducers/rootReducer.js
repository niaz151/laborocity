import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import userReducer from './UserReducer';

export default combineReducers({
  form: formReducer,
  user:  userReducer
})