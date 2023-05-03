import style from "./Recipes.module.css"

const Recipes = ({id,name,summary,image,healthScore}) => {
  console.log(id)
    return(
        <div className={style.recipe}>
          <p>id:{id}</p>
          <p>Name:{name}</p>
          <p>HealthScore:{healthScore}</p>
        </div>
    )
}


export default Recipes