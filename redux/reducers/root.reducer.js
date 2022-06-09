import {combineReducers} from 'redux';
import authReducer from './auth.reducer';
import missionReducer from './mission.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  missions: missionReducer,
});

export default rootReducer;
