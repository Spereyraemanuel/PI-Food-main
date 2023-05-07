import Paginado from "../Paginado/Paginado"
import Recipes from "../Recipes/Recipes"
import style from "./RecipesContainer.module.css"
import { useSelector } from "react-redux"

export default function RecipesContainter() {

  const infoRecipes = useSelector(state => state.recipes)
  const finalPage = page * 9;
  const startPage = finalPage - 9;
  const actualPage = Recipes?.slice(startPage, finalPage)
  const totalPage = Math.ceil(Recipes.length / 9);
  const handlerPrevPage = () => {
    setPage(page - 1);
  };
  const handlerNextPage = () => {
    setPage(page + 1);
  };
  const handlerPageNumber = (n) => {
    setPage(n);
  };



  return (
    <div className={style.container}>
      {infoRecipes.map(recipe => {
        return (
          <div>
              <Paginado
                totalPages={totalPage}
                page={page}
                prevPage={handlerPrevPage}
                nextPage={handlerNextPage}
                pageNumber={handlerPageNumber}
              />
              <Recipes
                key={recipe.id}
                name={recipe.name}
                summary={recipe.summary}
                image={recipe.image}
                healthScore={recipe.healthScore}
                diets={recipe.diets}
              />
            </div>
        )
      })}
    </div>
  )
}

