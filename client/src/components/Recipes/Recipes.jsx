import style from "./Recipes.module.css"

const Recipes = ({name, image, healthScore}) => {
    return(
        <div className={style.recipe}>
          <p>Name:{name}</p>
          <p>Image:{image}</p>
          <p>HealthScore:{healthScore}</p>
        </div>
    )
}


export default Recipes