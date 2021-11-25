import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import { v4 as uuidv4 } from 'uuid';
import { heroeAbilityChange, heroNameChange, heroElementChange, heroCreateNew, filterFetched, filterFetchingError, filterFetching } from "../../actions";

// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
    const {heroName, heroAbility, heroElement, filtersLoadingStatus, filters} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    const onInputChange = (e, func) => {
        dispatch(func(e.target.value));
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
        request("http://localhost:3001/heroes", "POST", JSON.stringify(newHero));
    }

    return (
        <form 
            onSubmit={(e) => onAddHero(e)}
            className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    value={heroName}
                    onChange={(e) => onInputChange(e, heroNameChange)}
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
                    onChange={(e) => onInputChange(e, heroeAbilityChange)}
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
                    onChange={(e) => onInputChange(e, heroElementChange)}
                    className="form-select" 
                    id="element" 
                    name="element">
                    <option >Я владею элементом...</option>
                    <option value='Огонь'>Огонь</option>
                    <option value='Вода'>Вода</option>
                    <option value='Земля'>Земля</option>
                    <option value='Воздух'>Воздух</option>
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