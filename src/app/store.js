import { configureStore ,combineReducers } from '@reduxjs/toolkit';

import appReducer from '../reducers/appSlice';
import { rickAndMortyApi } from '../services/rickAndMortyApi';


const rootReducer = combineReducers({
    app: appReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer
  });
  
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rickAndMortyApi.middleware)
});
/*
export const store = configureStore({
    reducer: {
        app: appReducer,
        [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware)
});*/