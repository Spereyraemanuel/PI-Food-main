import axios from "axios"
import {
    ADD_RECIPE,
    GET_RECIPES,
    GET_DIETS,
    FILTER_BY_DIETS,
    FILTER_BY_ORIGIN,
    HEALTH_SCORE_ORDER,
    ALPHABETIC_ORDER,
    SET_LOADING,
    GET_DETAIL_RECIPE,
    CLEAN_STATES,
    NEXT_PAGE,
    PREV_PAGE,
  } from "./actions-types";

export function nextPage(){
    return{
    type: NEXT_PAGE,
    };
}

export function prevPage(){
    return{
     type: PREV_PAGE
    }
}

export const setLoading = (isLoading) => {
    return {
      type: SET_LOADING,
      payload: isLoading,
    };
  };


export const addRecipe = (recipe) => {
    return async function (dispatch) {
        try {
           const response = await axios.post("http://localhost:3001/recipes", recipe);
        return dispatch({type: ADD_RECIPE, payload: response.data});
        } catch (error) {
         alert("No se pudo crear receta");
        }
    };
};

export const getRecipes = () => {
    return async function (dispatch) {
        const getInfo = await axios.get("http://localhost:3001/recipes");
         const recipes = getInfo.data;
         dispatch({type: GET_RECIPES, payload: recipes})
    };
};

export const getQueryRecipe = (name) => {
    return async function (dispatch) {
        try {
            dispatch(setLoading(true));
            const response = await axios.get(`http://localhost:3001/recipes?name=${name}`);
            dispatch({type:GET_RECIPES, payload:
            response.data})
        } catch (error) {
            alert("No encontre la receta que estas buscando")
        }
    }
}

export const getDetail = (id) => {
    return async function (dispatch) {
        try {
            dispatch(setLoading(true));
            const response = await axios.get(`http://localhost:3001/recipes/${id}`)
            dispatch({type: GET_DETAIL_RECIPE, payload: response.data});
            dispatch(setLoading(false));
        } catch (error) {
            alert("No existe la receta con el ID indicado");
        }
    };
};
 
export const getDiets = () => {
    return async function (dispatch){ 
    try {
        const response = await axios.get("http://localhost:3001/diets");
        dispatch({type: GET_DIETS, payload: response.data });
    } catch (error) {
        alert("Mi base de datos no tiene las dietas solicitadas");
       }
    };
};

export const filterRecipeByDiets = (diets) => {
    return {
        type: FILTER_BY_DIETS,
        payload: diets,
    };
};

export const orderRecipeAlphabetic = (option) => {
    return {
        type: ALPHABETIC_ORDER,
        payload: option,
    };
};

export const filterbyOrigin = (origin) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload: origin,
    };
};

export const healthScoreOrder = (score) => {
    return {
        type: HEALTH_SCORE_ORDER,
        payload: score,
    };
};

export const deleteFilter = () => {
    return {
        type: "DELETE_FILTERS"
    };
};

export const cleanStates = () => {
    return {
        type: CLEAN_STATES
    }
};