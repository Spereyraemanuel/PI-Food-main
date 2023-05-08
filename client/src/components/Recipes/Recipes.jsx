import style from "./Recipes.module.css"
import { useNavigate } from "react-router-dom"

const Recipes = ({id,name,image,diets}) => {
   const navigate = useNavigate();
   const toDetail = () => {
    navigate(`/detailrecipe/${id}`)
   }

    return(
        <div onClick={toDetail} className={style.recipe}>
          <img  className={style.images} src={image} alt="img" />
          <h4 className={style.nombres}>{name}</h4>
          <h5 className={style.dietas} >diets:</h5>
          <p className={style.dietas2}> {diets}</p>
        </div>
    )
}


export default Recipes