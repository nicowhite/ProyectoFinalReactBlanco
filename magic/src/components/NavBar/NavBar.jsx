import CartWidget from "./CartWidget"
import "./NavBar.css"
import {Link} from "react-router-dom"


const navbar = () => {
  return (
    <div className="container-navbar">
        <div className="logo">

        <Link to="/">
        <img src="./public/logo.png" alt="" className="navbar-logo"/>
        </Link>
        </div>
        <ul className="navbar">

            <li><Link to="/categoria/magic">Magic</Link></li>
            <li><Link to="/categoria/pokemon">Pokemon</Link></li>
            <li><Link to="/categoria/yugioh">Yu Gi Oh!</Link></li>
            <li><Link to="/"><CartWidget/></Link></li>          
            
        </ul>
    </div>
    )
};


export default navbar;
