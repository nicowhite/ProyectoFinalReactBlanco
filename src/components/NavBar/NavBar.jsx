import CartWidget from "./CartWidget"
import "./NavBar.css"
import {Link} from "react-router-dom"


const navbar = () => {
  return (
    <div className="container-navbar">
        <div className="logo">

     
        </div>
        <ul className="navbar">
        <Link to="/">
        <img src="./public/logo.png" alt="" className="navbar-logo"/>
        </Link>
            <li><Link to="/categoria/magic">Magic</Link></li>
            <li><Link to="/categoria/pokemon">Pokemon</Link></li>
            <li><Link to="/categoria/yugioh">Yu Gi Oh!</Link></li>
            <li><CartWidget/></li>          
            
        </ul>
    </div>
    )
};


export default navbar;
