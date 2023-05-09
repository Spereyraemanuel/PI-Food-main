import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipesContainter from "../../components/RecipesCointeiner/RecipesContainer";
import {
    getRecipes,
    filterbyOrigin,
    orderRecipeAlphabetic,
    getDiets,
    clearFilters,
    healthScoreOrder,
    filterRecipeByDiets
} from "../../redux/actions"





export default function Home() {
    const dispatch = useDispatch();
    const [option, setOption] = useState('');
    const [selectedDiets, setSelectedDiets] = useState([]);
    const { diets } = useSelector((state) => state);

    const handleFilterByDiets = () => {
        dispatch(filterRecipeByDiets(selectedDiets));
    };

    useEffect(() => {
        dispatch(getRecipes());
        dispatch(clearFilters())
    }, [dispatch]);

    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch])

    const filterHandler = (event) => {
        const { name, value } = event.target;
        if (name === "Origin") {
            dispatch(filterbyOrigin(value));
        }
    };

    const handleOrderAlphabetic = () => {
        dispatch(orderRecipeAlphabetic(option));
    };

    const handleHealthScoreOrder = (event) => {
        const selectedOption = event.target.value;
        dispatch(healthScoreOrder(selectedOption));
    };
    const handleClearFilters = () => {
        dispatch(getRecipes());
    };

    return (
        <div>
            <div>
                <select name="Origin" onChange={filterHandler} defaultValue="Filter by origin">
                    <option disabled >Filter By</option>
                    <option value="All">All</option>
                    <option value="Api">Api</option>
                    <option value="DataBase">DataBase</option>
                </select>
                <select onClick={handleOrderAlphabetic} defaultValue="Filter by Alphabetetic" onChange={(e) => setOption(e.target.value)}>
                    <option disabled>Order by Alphabetic</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                <select defaultValue="Filter by healthScore" onChange={handleHealthScoreOrder}>
                    <option disabled>order by healthScore</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select multiple={true} onClick={handleFilterByDiets} value={selectedDiets} onChange={(e) => setSelectedDiets(Array.from(e.target.selectedOptions, (option) => option.value))}>
                    {diets.map((diet) => (
                        <option key={diet} value={diet}>
                            {diet}
                        </option>
                    ))}
                </select>
                <button onClick={handleClearFilters}>Delete filters</button>
            </div>
            <br />
            <RecipesContainter />
        </div>
    )
}
