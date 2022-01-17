import {useHttp} from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { fetchHeroes } from './heroesSlice';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

import './heroesList.sass';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => { 
    const filteredHeroesSelector = createSelector(
        state => state.heroes.heroes,
        state => state.filters.activeFilter,
        (heroes, filter) => {
            if(filter === 'all') {
                return heroes;
            } else {
                return heroes.filter(hero => hero.element === filter)
            }
        }
    )
    const { heroesLoadingStatus } = useSelector(state => state);
    const filteredHeroes = useSelector(filteredHeroesSelector);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(fetchHeroes(request));
        // eslint-disable-next-line
    }, []);

    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return (
                <CSSTransition 
                        timeout={0}
                        classNames="hero">
                    <h5 className="text-center mt-5">Героев пока нет</h5>
                </CSSTransition>
               )
        }

        return arr.map(({id, ...props}) => {
            return (
                <CSSTransition 
                        key={id}
                        timeout={500}
                        classNames="hero">
                    <HeroesListItem id={id} {...props}/>
                </CSSTransition>
            )

        })
    }

    const elements = renderHeroesList(filteredHeroes);
    return (
        <TransitionGroup component="ul">
            {elements}
        </TransitionGroup>
    )
}

export default HeroesList;