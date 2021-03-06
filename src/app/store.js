/*import { combineReducers,createStore } from "redux";
import userReducer from "../features/userSlice"


const reducer = combineReducers({
    user: userReducer
  });
  
export const store = createStore(reducer);*/
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});