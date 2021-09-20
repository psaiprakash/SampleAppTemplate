import {combineReducers} from 'redux';
import dashboardReducer from './dashboardReducer';

const combinedReducer = combineReducers({
  dashboard: dashboardReducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
