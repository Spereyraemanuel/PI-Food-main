import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";
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
 const {myRecipes, loading, diets} = useSelector((state) => state);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRecipes());
        dispatch(cleanStates())
    }, [dispatch]);

    useEffect(()=> {
   if(!diets.length){
    dispatch(getDiets())
   }
})

const filterHandler = (event) => {
    const {name, value } = event.target;
    if(name === "Diets") {
        dispatch(filterRecipeByDiets(value));
    }else {
        dispatch(filterbyOrigin(value));
    }
    if(value === "All"){
        dispatch(deleteFilter())
    }
};

const orderHandler = (event) => {
    const {name, value} = event.target;
    if(name === "Alphabetic"){
        dispatch(orderRecipeAlphabetic(value));
    }else {
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
                <RecipesContainter />
            </div>
         </div>
            )
}
