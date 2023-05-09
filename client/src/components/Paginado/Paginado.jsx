import style from "./Paginado.module.css"
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions";

export default function Paginado({ viewRecipes, cantPages }) {
    const { numPage } = useSelector((state) => state);
    const dispatch = useDispatch()
    function next() {
        dispatch(nextPage())
    }
    function prev() {
        dispatch(prevPage())
    }



    return (
        <div className={style.paginate}>
            <button onClick={() => prev()} disabled={numPage <= 1} className={style.notSelected}>◀◀</button>
            <h3>{numPage}</h3>
            {viewRecipes[viewRecipes.length - 1] !== cantPages[cantPages.length - 1] 
            ?<button onClick={() => next()} className={style.notSelected}>▶▶</button> 
            : null

            }
        </div>
    )
}
