import { useDispatch } from "react-redux";
import { useState } from "react";
import { getRecipes, getQueryRecipe } from "../../redux/actions";
import style from "./SearchBar.module.css";


export default function SearchBar (props){
    const [input, setInput] = useState('');
    const dispatch = useDispatch()
    
    
    const searchHandler = (event) =>{
        const {value} = event.target
        if(value){
            dispatch(getQueryRecipe(value))
        }else{
            dispatch(getRecipes())
            
        }
    }
    const handlerInput = (event) => {
        if(!event.target.value){
            dispatch(getRecipes());
            setInput('')
        }else{
            setInput(event.target.value)
        }
    }
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            searchHandler(event)
        }
      }
    return (
        <div className={style.searchbar}>
            <input type="text" name='search' placeholder="Recipe" value={input} onChange={handlerInput} onKeyDown={handleKeyPress}/>
            <button onClick={searchHandler} value={input}>Search</button>
        </div>
    )
}