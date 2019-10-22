import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import skillsReducer from './skillsReducer';

export default combineReducers({
  form: formReducer,
  skills: skillsReducer
})