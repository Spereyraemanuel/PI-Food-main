import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions";
import RecipesContainter from "../../components/RecipesCointeiner/RecipesContainer";




const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
     dispatch(getRecipes());
    },[])
    return (
        <>
        <h1>Esta es la vista de home</h1>
        <RecipesContainter />
        </>
    )
}

export default Home;