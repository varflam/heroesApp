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
        type: 'FILTER_FETCHING'
    }
}

export const filterFetched = (filters) => {
    return {
        type: 'FILTER_FETCHED',
        payload: filters
    }
}

export const filterFetchingError = () => {
    return {
        type: 'FILTER_FETCHING_ERROR'
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