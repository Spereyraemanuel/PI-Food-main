import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RecipesContainter from "../../components/RecipesCointeiner/RecipesContainer";
import {
    getRecipes,
    filterbyOrigin,
    orderRecipeAlphabetic,
    healthScoreOrder,
    getDiets,
    deleteFilter,
    cleanStates,
} from "../../redux/actions"



export default function Home() {
    // const { diets } = useSelector((state) => state);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRecipes());
        dispatch(cleanStates())
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
                {/* <select name="Diets" onChange={filterHandler} defaultValue='Filter By Diets'>
                    <option disabled >Filter By</option>
                    <option value="Diets">Diets</option>
                    {diets?.map((diet) => {
                        return (
                            <option key={diet.id}>
                                {diet}
                            </option>
                        );
                    })}
                </select> */}
                <select name="Alphabetic" onChange={orderHandler} defaultValue='Alphabetic Order'>
                    <option disabled >Order By</option>
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
