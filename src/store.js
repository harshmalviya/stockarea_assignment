import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  warehouseDetailsReducer,
  warehouseReducer
} from './reducers/warehouseReducers';
const reducer = combineReducers({
  warehouseList: warehouseReducer,
  warehouseDetails: warehouseDetailsReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
