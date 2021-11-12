import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rocketsReducer } from './rockets/rockets';
import missionsReducer from './missions/missions';
import { dragonsReducer } from './dragons/dragons';

const reducer = combineReducers({
  rocketsReducer,
  missionsReducer,
  dragonsReducer,
});
const middleware = [logger, thunk];

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

export default store;
