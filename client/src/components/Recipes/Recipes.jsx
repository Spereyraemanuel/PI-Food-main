import style from "./Recipes.module.css"

const Recipes = (props) => {
    return(
        <div className={style.recipe}>
          <p>Name:{props.name}</p>
          <p>Image:{props.image}</p>
          <p>HealthScore:{props.healthScore}</p>
        </div>
    )
}

export default Recipes