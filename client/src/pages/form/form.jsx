import style from "./form.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validation from "./validation";
import { addRecipe } from "../../redux/actions"
import { getDiets } from "../../redux/actions"
import { useEffect } from "react";



export default function Form() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDiets());
    }, [dispatch])

    const { diets } = useSelector((state) => state);
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

    const handleDiets = (e) => {
        if (e.target.checked) {
          setDiet([...diet, e.target.value]);
          setRecipe({ ...recipe, diets: [...diet, e.target.value] });
        }else{
           console.log("la receta no tiene ninguna dieta")
        };
    }

    const inputChange = (event) => {
        const { name, value, summary } = event.target;
        setRecipe({
            ...recipe,
            [name]: value,
            [summary]: value,
        });
        setError(
            validation({
                ...recipe,
                [name]: value,
                [summary]: value,     
            })
        );
    };


    const handlerSubmit = (event) => {
        event.preventDefault();
        dispatch(addRecipe(recipe));
        alert("✅Recipe created successfully!!✅");
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
                 <div className={style.types}>
            <h3>Diets: </h3>
            <div className={style.typesOrder}>
              {diets.map((e) => (
            
                <div className={style.container}>
                  <ul className={style.ksCboxtags}>
                    <li>
                      <input
                        onChange={handleDiets}
                        type="checkbox"
                        id={`checkbox${e}`}
                        value={e}
                      />
                      <label for={`checkbox${e}`}>{e}</label>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

                {error.diets && <p className={style.error}>{error.diets}</p>}
                {!error.name && !error.image &&
                    !error.healthScore && !error.steps &&
                    diets.length >= 1 ? (
                    <button className={style.createButton}>Create</button>
                ) : (
                    <button className={style.disabledButton}>
                        Create
                    </button>
                )}
            </form>
            <div className={style.card}>
                <h6>{recipe.healthScore}</h6>
                <img src={recipe.image} alt="" className={style.image} />
                <h3>{recipe.name}</h3>
                <br />
            </div>
        </div>

    );
}

