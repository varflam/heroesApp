import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import Spinner from "../spinner/Spinner";
import { fetchFilters, filterSet, selectAll } from "./heroesFilterSlice";
import store from '../../store';

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active

const HeroesFilters = () => {

    const dispatch = useDispatch();
    const {activeFilter, filtersLoadingStatus} = useSelector(state => state.filters);
    const filters = selectAll(store.getState());

    useEffect(() => {
        dispatch(fetchFilters());
        // eslint-disable-next-line
    }, [])

    if (filtersLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (filtersLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderFilters = (arr) => {
        if(arr.length === 0) {
            return <h5 className="text-center mt-5">Фильтры не найдены</h5>
        }

        return arr.map(({name, className, label}) => {
            const btnClass = classNames('btn', className, {
                'active': name === activeFilter
            });

            return <button 
                    key={name}
                    id={name}
                    onClick={() => dispatch(filterSet(name))}
                    className={btnClass}>{label}</button>
        })
    }

    const btns = renderFilters(filters);

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {btns}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;