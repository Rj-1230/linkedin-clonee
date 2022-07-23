// import { applyMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit'
// import { ThunkMiddleware } from 'redux-thunk';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
// import { myCustomApiService } from './api'

const store = configureStore({
  reducer: rootReducer,
middleware:[thunk],
// middleware me array me pass krna ha always
})
export default store;