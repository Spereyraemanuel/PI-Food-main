import style from "./form.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validation from "./validation";
import { addRecipe } from "../../redux/actions"
import {getDiets} from "../../redux/actions"
import { useEffect } from "react";



export default function Form() {

    const dispatch = useDispatch();
    useEffect(()=>{
     dispatch(getDiets());
    },[dispatch])

    const  { diets } = useSelector((state) => state);
    const [diet, setDiet] = useState([]);
    const [recipe, setRecipe] = useState({
        name: "",
        image: "",
        summary: "",
        healthScore: 1,
        steps: "",
        diets: [],
    });
    const [error, setError] = useState({
        name: "",
        image: "",
        summary: "",
        healthScore: 1,
        steps: "",
        diets: [],
    });
    const inputChange = (event) => {
        const { name, value } = event.target;
        setRecipe({
            ...recipe,
            [name]: value,
        });
        setError(
            validation({
                ...recipe,
                [name]: value,
            })
        );
    };
    const handlerSubmit = (event) => {
        event.preventDefault();
        dispatch(addRecipe(recipe));
        console.log(recipe)
        alert("✅Recipe created successfully!!✅");
        
    };
    const mapDiets = () => {
        const filtered = diets.filter((d) => !diet.includes(d.name));
        return filtered.map((di, i) => {
            return (
                <option value={di} key={i}>
                    {di}</option>
            );
            
        });
    };
    const dietHandler = (event) => {
        if (event.target.value) {
            setDiet([...diets, event.target.value]);
            setRecipe({ ...recipe, diets: [...diets, event.target.value] });
            event.target.value = "Choose your diets 🥰"
        }
    };
   

    const deleteDiet = (event) => {
        setDiet(diet.filter((d) => d !== event));
        setRecipe({
            ...recipe,
            diets: recipe.diets.filter((d) => d !== event),
        });
    };
    return (
        <div className={style.container}>
            <form onSubmit={handlerSubmit}>
                <label> Name recipe: </label>
                <input type="text"
                    name="name"
                    value={recipe.name}
                    onChange={inputChange}
                />
                {error.name && <p className={style.error}></p>}
                <label>Image: </label>
                <input type="text"
                    name="image"
                    value={recipe.image}
                    onChange={inputChange}
                />
                {error.image && <p className={style.error}></p>}
                <label>HealthScore: </label>
                <input
                    id="range-input"
                    name="healthScore"
                    type="range"
                    min="1"
                    max="100"
                    value={recipe.healthScore}
                    onChange={inputChange}
                />
                <label>Steps: </label>
                <textarea
                    type="text"
                    name="steps"
                    value={recipe.steps}
                    rows="10"
                    onChange={inputChange}
                />
                  <label>summary: </label>
                <textarea
                    type="text"
                    name="summary"
                    value={recipe.summary}
                    rows="10"
                    onChange={inputChange}
                />
                {error.steps && <p className={style.error}></p>}
                <label>Diets: </label>
                <select
                    onChange={dietHandler}
                    name="diets"
                    defaultValue="Choose your diets 🥰">
                    <option disabled value="Choose your diets 🥰">
                        Choose your diets 🥰
                    </option>
                    {mapDiets()}
                </select>
                <div className={style.formDiets}>
                    {diets?.map((d, i) => {
                        return (
                            <button key={i} type="button"
                                onDoubleClick={() => deleteDiet(d)}>
                                {d}
                            </button>
                        );
                    })}
                </div>
                {error.diets && <p className={style.error}>{error.diets}</p>}
                {!error.name && !error.image &&
                 !error.healthScore && !error.steps &&
                    diet.length >= 1 ? (
                    <button className={style.createButton}>Create</button>
                ) : (
                    <button  className={style.disabledButton}>
                        Create
                    </button>
                )}
            </form>
            <div className={style.card}>
                <h6>{recipe.healthScore}</h6>
                <img src={recipe.image} alt="" className={style.image} />
                <h3>{recipe.name}</h3>
                <br />
                {recipe.diets?.map((diet) => {
                    console.log(diet)
                    return (
                        <div key={diet} className={style.diets}>
                            <span className={style.diet}>{diet.charAt(0).toUpperCase() + diet.slice(1)}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>

    );
}


