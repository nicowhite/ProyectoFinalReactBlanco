import CartWidget from "./CartWidget"
import "./NavBar.css"


const navbar = () => {
  return (
    <div className="container-navbar">
        <div>
        <img src="./public/logo.png" alt="" />
        </div>
        <ul className="navbar">
            <li><a href="">Magic</a></li>
            <li><a href="">Pokemon</a></li>
            <li><a href="">Yu-Gi-Oh!</a></li>
            <li><a href=""><CartWidget/></a></li>
            
        </ul>
    </div>
    )
};


export default navbar;
