import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
}

const heroesFilterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filterFetching: state => {state.filtersLoadingStatus = 'loading'},
        filterFetched: (state, action) => {
            state.filters = action.payload;
            state.filtersLoadingStatus = 'idle';
        },
        filterFetchingError: state => {
            state.filtersLoadingStatus = 'error';
        },
        filterSet: (state, action) => {
            state.activeFilter = action.payload;
        }
    }
});

const {actions, reducer} = heroesFilterSlice;

export default reducer;

export const {
    filterFetching,
    filterFetched,
    filterFetchingError,
    filterSet
} = actions;