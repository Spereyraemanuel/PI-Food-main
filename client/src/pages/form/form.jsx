// import { useState } from "react";


//   const [form, setForm] = useState({
    //      recipe:"",
    //      summary:"",
    //      diets:""
    //   })
    
    const Form = () => {
    return (
        <Form>
            <div>
                <label htmlFor="recipe">Recipe</label>
                <input type="text" /*value={form.recipe}*/ />
            </div>
            <div>
                <label htmlFor="summary">Summary</label>
                <input type="text" /* value={form.summary}*/ />
            </div>
            <div>
                <label htmlFor="diets">Diets</label>
                <input type="text" /*value={form.diets}*/ />
            </div>
        </Form>
    )
}

export default Form;