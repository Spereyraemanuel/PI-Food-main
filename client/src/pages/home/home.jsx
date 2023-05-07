import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipesContainter from "../../components/RecipesCointeiner/RecipesContainer";
import {
    getRecipes,
    filterbyOrigin,
    filterRecipeByDiets,
    orderRecipeAlphabetic,
    healthScoreOrder,
    getDiets,
    deleteFilter,
    cleanStates,
} from "../../redux/actions"



export default function Home() {
    const { diets } = useSelector((state) => state);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRecipes());
        dispatch(cleanStates())
    }, [dispatch]);

    useEffect(() => {
        if (!diets.length) {
            dispatch(getDiets())
        }
    })

    const filterHandler = (event) => {
        const { name, value } = event.target;
        if (name === "Diets") {
            dispatch(filterRecipeByDiets(value));
        } else {
            dispatch(filterbyOrigin(value));
        }
        if (value === "All") {
            dispatch(deleteFilter())
        }
    };

    const orderHandler = (event) => {
        const { name, value } = event.target;
        if (name === "Alphabetic") {
            dispatch(orderRecipeAlphabetic(value));
        } else {
            dispatch(healthScoreOrder(value));
        }
    };
    const reset = () => {
        dispatch(deleteFilter())
    }

    return (
        <div >
            <div>
                <h1>Esta es la vista de home</h1>
                <select name="Origin" onChange={filterHandler} defaultValue="Filter by origin">
                    <option disabled >Filter By</option>
                    <option value="All">All</option>
                    <option value="Api">Api</option>
                    <option value="DataBase">DataBase</option>
                </select>
                <select name="Diets" onChange={filterHandler} defaultValue="Filter by Diets">
                    <option disabled >Filter By</option>
                    <option value="All">All</option>
                    {diets?.map((diet) => {
                        return (
                            <option value={diet.name} key={diet.id}>
                                {diet.name}
                            </option>
                        );
                    })}
                </select>
            <select name="Alphabetic" onChange={orderHandler} defaultValue="AlphabeticOrder">
            <option disabled>Order By</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            </select>
            <select name="HealthScore" onChange={orderHandler} defaultValue="HealthScore">
            <option disabled> Order by</option>
            <option value="Ascendente">Ascendente</option>
            <option value="Decendente">Decendente</option>
            </select>
            <button onClick={reset}>Reset</button>
            <br />
                <RecipesContainter />
            </div>
        </div>
    )
}
