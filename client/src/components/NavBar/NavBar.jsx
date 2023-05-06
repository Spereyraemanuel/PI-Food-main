import style from "./NavBar.module.css"
import { Link, useLocation } from "react-router-dom";
import image from "../../img/toHomeLogo.png"
import SearchBar from "../SearchBar/SearchBar"

export default function NavBar() {
    const location = useLocation();
    return (
        <div className={style.nav}>
            <Link to="/home">
            <img src={image} alt="toHome" />
            </Link>
            <br />
            <div className={style.botones}>
                <Link to="/create">
                {location.pathname === "/create" || <button>New Recipe</button>}
                </Link>
                <div className={style.searchbar}>
            {location.pathname !== "/create" ? <SearchBar /> : null}
             </div>
            </div>
        </div>
    )
}

