import {
  ADD_RECIPE,
  GET_RECIPES,
  GET_QUERY_RECIPE,
  GET_DIETS,
  FILTER_BY_DIETS,
  FILTER_BY_ORIGIN,
  HEALTH_SCORE_ORDER,
  ALPHABETIC_ORDER,
  GET_DETAIL_RECIPE,
  CLEAN_STATES,
  NEXT_PAGE,
  PREV_PAGE,
  DELETE_FILTERS,
} from "./actions-types";


const initialState = {
  recipes: [],
  myRecipes: [],
  detail: {},
  diets: [],
  numPage: 1
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        myRecipes: action.payload
      };
    case ADD_RECIPE:
      return {
        ...state,
        myRecipes: [...state.myRecipes, action.payload],
        recipes: [...state.recipes, action.payload]
      };
      case NEXT_PAGE:
        return{
          ...state,
          numPage: state.numPage + 1
        }
        case PREV_PAGE:
          return{
            ...state,
            numPage: state.numPage - 1
          }
    case GET_QUERY_RECIPE:
      return {
        ...state,
        myRecipes: action.payload,
      }
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload
      };
    case GET_DETAIL_RECIPE:
      return {
        ...state,
        detail: action.payload,
      };
    case FILTER_BY_DIETS:
      const AllrecipesFiltered = state.recipes.filter((recipe) => recipe.diets.includes(action.payload));
      return {
        ...state,
        myRecipes: AllrecipesFiltered,
      };
    case ALPHABETIC_ORDER:
      return {
        ...state,
        myRecipes:
          action.payload === "A-Z"
            ? state.myRecipes.sort((a, b) => a.title.localeCompare(b.tittle))
            : state.myRecipes.sort((a, b) => b.title.localeCompare(a.title)),
      };
    case HEALTH_SCORE_ORDER:
      return {
        ...state,
        myRecipes:
          action.payload === "Ascendente"
            ? state.myRecipes.sort((a, b) => (a.healthScore < b.healthScore ? -1 : 1)) : state.myRecipes.sort((a, b) => (a.healthScore > b.healthScore ? -1 : 1)),
      };
    case FILTER_BY_ORIGIN:
      const filtered = state.myRecipes.filter((recipe) => {
        const regExp = /^[0-9]+$/;
        if (action.payload === "Api" && regExp.test(recipe.id)) {
          return true;
        } else if (action.payload === "DataBase" && !regExp.test(recipe.id)) {
          return true;
        }
        else if (action.payload === "All") {
          return true;
        }else {
          return false;
        }
      })
      
      return {
        ...state,
        recipes: filtered
      };
    case DELETE_FILTERS:
      return {
        ...state,
        myRecipes: state.recipes
      };
    case CLEAN_STATES:
      return {
        ...state,
        detail: {}
      };
    default:
      return { ...state };
  }
}

export default rootReducer;