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
  DELETE_FILTERS,
} from "./actions-types";


const initialState = {
  recipes: [],
  myRecipes: [],
  detail: {},
  diets: [],
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
      const selectedDiets = action.payload; // Dietas seleccionadas desde la acción
      // Filtrar las recetas según las dietas seleccionadas
      const filteredRecipes = state.recipes.filter((recipe) => {
        // Si no hay dietas seleccionadas, mostrar todas las recetas
        if (selectedDiets.length === 0) {
          return true;
        }
        // Si la receta tiene alguna de las dietas seleccionadas, mostrarla
        return selectedDiets.every((diet) => recipe.diets.includes(diet));
      });
      return {
        ...state,
        recipes: filteredRecipes, // Actualizar el estado recipes con las recetas filtradas
      };
      case ALPHABETIC_ORDER:
        const sortedRecipes = [...state.recipes]; // Copia del array de recetas
        sortedRecipes.sort((a, b) =>
            action.payload === 'A-Z'
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
        );
        return {
            ...state,
            recipes: sortedRecipes,
        };
    case HEALTH_SCORE_ORDER:
      return {
        ...state,
        recipes: state.recipes.slice().sort((a, b) => {
          if (action.payload === "Ascendente") {
            return a.healthScore - b.healthScore;
          } else {
            return b.healthScore - a.healthScore;
          }
        })
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
        recipes: initialState.recipes, // Restablecer al estado inicial de las recetas
      };
    default:
      return { ...state };
  }
}

export default rootReducer;