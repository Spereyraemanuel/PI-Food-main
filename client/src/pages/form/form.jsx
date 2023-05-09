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

    const handleDietChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
          setRecipe((prevRecipe) => ({
            ...prevRecipe,
            diets: [...prevRecipe.diets, value],
          }));
        } else {
          setRecipe((prevRecipe) => ({
            ...prevRecipe,
            diets: prevRecipe.diets.filter((diet) => diet !== value),
          }));
        }
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
                   <label>Diets:</label>
        {diets.map((diet) => (
          <div key={diet.id}>
            <input
              type="checkbox"
              id={`diet-${diet.id}`}
              value={diet.name}
              checked={recipe.diets.includes(diet.name)}
              onChange={handleDietChange}
            />
            <label htmlFor={`diet-${diet.id}`}>{diet}</label>
            {console.log(diet)}
          </div>
        ))}
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


