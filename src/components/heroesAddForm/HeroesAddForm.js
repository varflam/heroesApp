import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import { v4 as uuidv4 } from 'uuid';
import { heroCreateNew } from '../heroesList/heroesSlice';

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
    const [heroName, changeHeroName] = useState('');
    const [heroAbility, changeHeroAbility] = useState('');
    const [heroElement, changeHeroElement] = useState('');
    const { filters } = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const {request} = useHttp();

    const onInputChange = (e, func) => {
        const value = e.target.value;
        func(value);
    }

    const onAddHero = (e) => {
        const id = uuidv4();

        let newHero = {
            id,
            name: heroName,
            description: heroAbility,
            element: heroElement
        };
        e.preventDefault();
        dispatch(heroCreateNew(newHero));
        request("http://localhost:3001/heroes", "POST", JSON.stringify(newHero))
               .catch(err => console.log(err));

        changeHeroName('');
        changeHeroAbility('');
        changeHeroElement('');
    }

    const renderOptions = (arr) => {
        return arr.map(({name, label}) => {
            // eslint-disable-next-line
            if(name === 'all') return;

            return <option key={name} value={name}>{label}</option>
        })
    }

    const options = renderOptions(filters);

    return (
        <form 
            onSubmit={(e) => onAddHero(e)}
            className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    value={heroName}
                    onChange={(e) => onInputChange(e, changeHeroName)}
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    value={heroAbility}
                    onChange={(e) => onInputChange(e, changeHeroAbility)}
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    value={heroElement}
                    onChange={(e) => onInputChange(e, changeHeroElement)}
                    className="form-select" 
                    id="element" 
                    name="element">
                    <option >Я владею элементом...</option>
                    {options}
                </select>
            </div>

            <button 
                type="submit" 
                className="btn btn-primary"
                >Создать</button>
        </form>
    )
}

export default HeroesAddForm;