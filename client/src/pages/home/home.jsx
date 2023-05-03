import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions";
import Recipes from "../../components/Recipes/Recipes";




const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
     dispatch(getRecipes());
    },[])
    return (
        <>
        <h1>Esta es la vista de home</h1>
        <Recipes />
        </>
    )
}

export default Home;