import {heroesFetching, heroesFetched, heroesFetchingError} from '../components/heroesList/heroesSlice';
import {filterFetching, filterFetched, filterFetchingError} from '../components/heroesFilters/heroesFilterSlice'

export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

export const fetchFilters = (request) => (dispatch) => {
    dispatch(filterFetching());
    request("http://localhost:3001/filters")
        .then(data => dispatch(filterFetched(data)))
        .catch(() => dispatch(filterFetchingError()))
}

// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING'
//     }
// }

// export const heroesFetched = (heroes) => {
//     return {
//         type: 'HEROES_FETCHED',
//         payload: heroes
//     }
// }

// export const heroesFetchingError = () => {
//     return {
//         type: 'HEROES_FETCHING_ERROR'
//     }
// }

// export const filterFetching = () => {
//     return {
//         type: 'FILTERS_FETCHING'
//     }
// }

// export const filterFetched = (filters) => {
//     return {
//         type: 'FILTERS_FETCHED',
//         payload: filters
//     }
// }

// export const filterFetchingError = () => {
//     return {
//         type: 'FILTERS_FETCHING_ERROR'
//     }
// }

// export const filterSet = (filter) => {
//     return {
//         type: 'FILTER_SET',
//         payload: filter
//     }
// }

// export const heroesDelete = (id) => {
//     return {
//         type: 'HEROES_DELETE',
//         payload: id
//     }
// }

// export const heroCreateNew = (hero) => {
//     return {
//         type: 'HERO_CREATE_NEW',
//         payload: hero
//     }
// }