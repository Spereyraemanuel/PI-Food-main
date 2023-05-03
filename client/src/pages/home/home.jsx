import RecipesContainter from "../../components/RecipesCointeiner/RecipesContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions";



const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
     dispatch(getRecipes());
    })
    return (
        <>
        <h1>Esta es la vista de home</h1>
        <RecipesContainter />
        </>
    )
}

export default Home;