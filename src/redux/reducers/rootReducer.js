import {combineReducers} from 'redux';
import userReducer from './userReducer';
import { reducer as formReducer } from 'redux-form';
import CategoryFormReducer from './CategoryFormReducer';

export default combineReducers({
  user: userReducer,
  form: formReducer,
  categoryForm: CategoryFormReducer
})