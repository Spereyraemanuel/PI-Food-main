import style from "./Recipes.module.css";
import { Link } from "react-router-dom";

const Recipes = ({id,name,image,diets, healthScore}) => {


    return(
        <div className={style.recipe}>
          <Link to={`/detail/${id}`} className={style.images}>
          <img className={style.images} src={image} alt="img" />
          </Link>
          <h4 className={style.nombres}>{name}</h4>
          <h5 className={style.dietas} >diets:</h5>
          <p className={style.dietas2}> {diets}</p>
          <h5 className={style.hs}> healthScore: { healthScore}</h5>
        </div>
    )
}


export default Recipes