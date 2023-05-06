import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions";
import RecipesContainter from "../../components/RecipesCointeiner/RecipesContainer";



export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch])

    return (
        <div>
            <div>
                <h1>Esta es la vista de home</h1>
                <RecipesContainter />
            </div>
         </div>
            )
}
