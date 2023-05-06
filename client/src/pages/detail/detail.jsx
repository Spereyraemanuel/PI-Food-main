import style from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loader from "../../img/loader-unscreen.gif"
import {getDetail} from "../../redux/actions";

export default function DetailRecipe(){
    const { idRecipe } = useParams();
    const {detail, loading} = useSelector(state => state)
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getDetail(idRecipe))
    },[dispatch, idRecipe])
    const regExp = /<[^>]*>/g;
    return(
        <div className={style.container}>
            <Link to="/home">
                <button className={style.back}>⬅</button>
            </Link>
            {loading ? <div className={style.loader}><img src={loader} alt="Loading" /> </div> : (<div className={style.data}> 
            <h1>{detail.title}</h1>
            <img src={detail.image} alt={detail.title} />
            <h4 className={style.hs}>HealtScore: {detail.healtScore}</h4>
            <h3>Summary</h3>
            <p>{detail.summar?.replace(regExp, "")}</p>
            <h3>How To</h3>
            {detail.steps ? (
            <p>{detail.steps.replace(regExp, "")}</p>) : <p>There are no instructions to follow for this recipe, but we're
            working on it!</p>}
            <h4 className={style.diets}>Diets: {detail.diets?.map((diet, i)=> <li key={i}>{diet.name.charAt(0).toUpperCase() + diet.name.slice(1)}
            </li>)}</h4>
            </div>)}
        </div>
    );
}