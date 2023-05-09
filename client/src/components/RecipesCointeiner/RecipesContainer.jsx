import Paginado from "../Paginado/Paginado"
import Recipes from "../Recipes/Recipes"
import style from "./RecipesContainer.module.css"
import { useSelector } from "react-redux"
import { useState } from "react"


const RecipesContainter = () => {

  const infoRecipes = useSelector(state => state.recipes);
console.log(infoRecipes)
  const [page, setPage] = useState(1)
 const finalPage = page * 9
 const startPage = finalPage - 9
  const actualPages = infoRecipes?.slice(startPage,  finalPage)//solo mostrar 9 cartas
  const totalPage = Math.ceil(infoRecipes.length / 9)
 
  const handlerPrevPage = () => {
    setPage(page - 1)
  };
  const handlerNextPage = () => {
    setPage(page + 1);
  }
  const handlerPageNumber = (n) => {
    setPage(n)
  }

  return (
    <div className={style.container}>
      {actualPages.map(recipe => {
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
      <div className={style.paginado}>
           <Paginado 
           totalPages={totalPage}
           page={page}
           prevPage={handlerPrevPage}
           nextPage={handlerNextPage}
           pageNumber={handlerPageNumber}>
            </Paginado>
             </div>
    </div>
     
  )
}

export default RecipesContainter