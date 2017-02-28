import { combineReducers } from 'redux';
import WeathReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeathReducer
});

export default rootReducer;
