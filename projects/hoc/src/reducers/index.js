import { combineReducers } from 'redux';
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
  state: authenticationReducer
});

export default rootReducer;
