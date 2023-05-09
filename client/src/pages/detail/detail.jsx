import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDetail } from "../../redux/actions"
import { useParams } from "react-router-dom";


export default function Detail() {

    const { id } = useParams()
    const { detail } = useSelector((state) => state)
    const regExp = /<[^>]*>/g;
    const dispatch = useDispatch();
    useEffect(() => {
        if (id) {
            dispatch(getDetail(id))
        }
    }, [dispatch, id]);

    return (
        <div>
            <h2>{detail.name}</h2>
            <h3>Id: {detail.id}</h3>
            <img src={detail.image} alt="" />
            <h4>Diet Types:  {detail.diets?.map((diet) => (
                    <li key={diet}>{diet}</li>
                ))}</h4>
            <h3>HealtScore: {detail.healthScore} </h3>
            <h4>Summary: </h4>
            <p>{detail.summary?.replace(regExp, "")}</p>
            {detail.steps?.map((s) => {
                return (
                    <div key={s.number}>
                        <p>paso: {s.number}</p>
                        <p>{s.step}</p>
                    </div>
                )
            })}

        </div>
    )
}