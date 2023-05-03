import axios from "axios"

export const GET_RECIPES = "GET_RECIPES";

export const getRecipes = () => {
    return async function (dispatch) {
        const apiData = await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`
        );
        const recipes = apiData.data;
        dispatch({ type: GET_RECIPES, payload: recipes})
    };
};

