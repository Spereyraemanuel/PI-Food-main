import React from "react";
import { Link } from "react-router-dom";
import {getDetail} from "../../redux/actions"
import {useParams} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Detail(){
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes);

   const {id} = useParams();

useEffect(()=>{
  dispatch(getDetail(id))  
},[dispatch]);
if (recipes[0] && recipes[0].id === id){
    return (
        <div>
            <div>
                <Link to={"/home"}>
                <button>Back</button>
                </Link>
            </div>
            <h2>
                {recipes[0].name}
            </h2>
            <div>
                <div>
                    <img src={recipes[0].image} alt="img not found" width="35px" height="250px" />
                </div>
               <div>
                <h4>Resumen:</h4>
                <p>{recipes[0].summary}</p>
               </div>
            </div>
             
            <div>
                <div>
                    <h4>Resumen:</h4>
                    <p>{recipes[0].summary}</p>
                </div>
            </div>
            
          <div>
            <div>
                <h4>Health Score:</h4>
                <p>{recipes[0].healthScore}</p>
                <div>
                    <div>
                        <h4>Tipo de plato:</h4>
                        <p>{recipes[0].dishtypes}</p>
                    </div>
                </div>
                
                <div>
                    <h4>
                      Paso a paso:
                    </h4>
                    <ol>
                        {Array.isArray(recipes[0].steps) ? recipes[0].steps.map(e => {
                            return (
                                <li>{e}</li>
                            )
                        }) : <p>No se informaron pason a seguir para esta receta</p>}</ol>
                        
                </div>

            </div>
         </div>
         </div>
    );
  }
}
         