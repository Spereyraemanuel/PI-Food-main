import style from "./Recipes.module.css"

const Recipes = ({name,image,diets}) => {


    return(
        <div className={style.recipe}>
          <img className={style.images} src={image} alt="img" />
          <h4 className={style.nombres}>{name}</h4>
          <h5 className={style.dietas} >diets:</h5>
          <p className={style.dietas2}> {diets}</p>
        </div>
    )
}


export default Recipes