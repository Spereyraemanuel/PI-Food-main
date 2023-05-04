import { Link } from "react-router-dom";
import style from "./Landing.module.css";
const Landing = () => {
    return (
        <div className={style.landing}>
          <div className={style.container}>
            <h1>PI FOODS</h1>
            <div className={style.frase}>
              <h4>
              Demos un paseo por el universo culinario y deleitemos nuestra vista
            con delicias para todos los gustos.
              </h4>
            </div>
            <Link to="/home">
              <button>Time to eat!🍴</button>
            </Link>
          </div>
        </div>
      );
}

export default Landing;