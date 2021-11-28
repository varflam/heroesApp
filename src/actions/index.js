export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const filterFetching = () => {
    return {
        type: 'FILTERS_FETCHING'
    }
}

export const filterFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const filterFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR'
    }
}

export const filterSet = (filter) => {
    return {
        type: 'FILTER_SET',
        payload: filter
    }
}

export const filterHeroes = () => {
    return {
        type: 'FILTER_HEROES'
    }
}

export const heroesDelete = (id) => {
    return {
        type: 'HEROES_DELETE',
        payload: id
    }
}

export const heroNameChange = (value) => {
    return {
        type: 'HERO_NAME_CHANGE',
        payload: value
    }
}

export const heroeAbilityChange = (value) => {
    return {
        type: 'HERO_ABILITY_CHANGE',
        payload: value
    }
}

export const heroElementChange = (value) => {
    return {
        type: 'HERO_ELEMENT_CHANGE',
        payload: value
    }
}

export const heroCreateNew = (hero) => {
    return {
        type: 'HERO_CREATE_NEW',
        payload: hero
    }
}