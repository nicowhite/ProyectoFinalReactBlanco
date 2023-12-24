import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({ producto }) => {
  return (
   
    <div className="card-container">
      <img className="imagen" src={producto.imagen} alt={producto.nombre} />
      <p className="nombre">{producto.nombre}</p>
      <p className="descripcion">{producto.descripcion}</p>
      <p className="precio">$ {producto.precio}</p>
      <button><Link to={`/informacion/${producto.id}`}>Detalle</Link></button>


    </div>

  );
};

export default Item;
