import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { homeReducer } from '../pages/Home/reducer';

export default combineReducers({
  home: homeReducer,
  router: routerReducer
});