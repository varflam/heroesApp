import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import {useHttp} from '../../hooks/http.hook';

const filtersAdapter = createEntityAdapter({
    selectId: filter => filter.name
});

const initialState = filtersAdapter.getInitialState({
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
})
// const initialState = {
//     filters: [],
//     filtersLoadingStatus: 'idle',
//     activeFilter: 'all'
// }

export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    () => {
        const {request} = useHttp();
        return request("http://localhost:3001/filters");
    }
)

const heroesFilterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filterSet: (state, action) => {
            state.activeFilter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilters.pending, state => {
                    state.filtersLoadingStatus = 'loading'
                })
               .addCase(fetchFilters.fulfilled, (state, action) => {
                    filtersAdapter.setAll(state, action.payload);
                    state.filtersLoadingStatus = 'idle';
                })
               .addCase(fetchFilters.rejected, state => {
                    state.filtersLoadingStatus = 'error';
                })
    }
});

export const {selectAll} = filtersAdapter.getSelectors(state => state.filters);

const {actions, reducer} = heroesFilterSlice;

export default reducer;

export const {
    filterFetching,
    filterFetched,
    filterFetchingError,
    filterSet
} = actions;