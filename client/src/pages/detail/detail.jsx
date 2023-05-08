import {style} from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loader from "../../img/loader-unscreen.gif";
import { getDetail } from "../../redux/actions";

export default function DetailRecipe(){
    const {idRecipe} = useParams();
    const {detail, loading} = useSelector(state => state)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDetail(idRecipe))
    },[dispatch, idRecipe])

    // const regExp = /<[^>]*>/g;

    return (
        <div className={style.container}>
            <Link>
            <button className={style.back}>⬅</button>
            </Link>
            {loading ? <div className={style.loader}>
                <img src={loader} alt="Loading"/> </div> : <h1>{detail.title}</h1>}
        </div>
    )
}