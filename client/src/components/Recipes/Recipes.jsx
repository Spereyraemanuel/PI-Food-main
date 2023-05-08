import style from "./Recipes.module.css";
import { Link } from "react-router-dom";

const Recipes = ({id,name,image,diets}) => {


    return(
        <div className={style.recipe}>
          <Link to={`/detail/${id}`} className={style.images}>
          <img  src={image} alt="img" />
          </Link>
          <h4 className={style.nombres}>{name}</h4>
          <h5 className={style.dietas} >diets:</h5>
          <p className={style.dietas2}> {diets}</p>
        </div>
    )
}


export default Recipes