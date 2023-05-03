import Recipes from "../Recipes/Recipes"
import style from "./RecipesContainer.module.css"
import { useSelector }  from "react-redux"

const RecipesContainter = () => {

    const infoRecipes = useSelector(state=>state.recipes)
     console.log(infoRecipes)
    return(
        <div className={style.container}>
          {infoRecipes.map(recipe=>{
            return <Recipes
               id={recipe.id}
               name={recipe.name}
               summary={recipe.summary}
               image={recipe.image}
               healthScore={recipe.healthScore}

            />
          })}
          
             
        </div>
    )
}

export default RecipesContainter