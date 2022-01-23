import {configureStore} from '@reduxjs/toolkit';
import heroes from '../components/heroesList/heroesSlice';
import filters from '../components/heroesFilters/heroesFilterSlice';
import { heroesApiSlice } from '../api/apiSlice';

const stringMiddleware = () => (next) => (action) => {
    if(typeof action === 'string') {
        return next({
            type: action
        })
    } 
    return next(action)
}

const store = configureStore({
    reducer: {
        heroes, 
        filters,
        [heroesApiSlice.reducerPath]: heroesApiSlice.reducer
    },
    middlewares: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware, heroesApiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;