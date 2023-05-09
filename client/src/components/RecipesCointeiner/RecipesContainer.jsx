import Paginado from "../Paginado/Paginado"
import Recipes from "../Recipes/Recipes"
import style from "./RecipesContainer.module.css"
import { useSelector } from "react-redux"


const RecipesContainter = () => {

  const infoRecipes = useSelector(state => state.recipes);

  const { numPage } = useSelector(state => state);

  let init = (numPage - 1) * 9
  let finish = numPage * 9
  let cantPages = Math.ceil(infoRecipes.length / 9)
  
  let viewRecipes = infoRecipes?.slice(init, finish)//solo mostrar 9 cartas



  return (
    <div className={style.container}>
      {viewRecipes.map(recipe => {
        return <Recipes
          key={recipe.id}
          id={recipe.id}
          name={recipe.name}
          summary={recipe.summary}
          image={recipe.image}
          healthScore={recipe.healthScore}
          diets={recipe.diets}
          />
      })}
     <div>
      <Paginado viewRecipes={viewRecipes} cantPages={cantPages}>
       
       </Paginado>
      </div>
    </div>
     
  )
}

export default RecipesContainter