import axios from "axios"

export const GET_RECIPES = "GET_RECIPES";
// export const GET_DETAIL = "GET_DETAIL"

export const getRecipes = () => {
    return async function (dispatch) {
        const getInfo = await axios.get("http://localhost:3001/recipes");
         const recipes = getInfo.data;
         dispatch({type: GET_RECIPES, payload: recipes})
    };
};

// export const getDetail = (id) => {
//     return async function (dispatch) {
//         const getInfo = await axios.get(`http://localhost:3001/recipes/${id}`);
//         const detail = getInfo.data;
//         dispatch({type: "GET_DETAIL", payload: detail})
//     }
// }
