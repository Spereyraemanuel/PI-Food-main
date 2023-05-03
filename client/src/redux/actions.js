import axios from "axios"

export const GET_RECIPES = "GET_RECIPES";

export const getRecipes = () => {
    return async function (dispatch) {
        const getInfo = await axios.get("http://localhost:3001/recipes");
         const recipes = getInfo.data;
         console.log(recipes)
         dispatch({type: GET_RECIPES, payload: recipes})
    };
};

