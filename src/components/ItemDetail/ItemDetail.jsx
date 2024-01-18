import "./ItemDetail.css";

import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ producto }) => {
  const [toggle, setToggle] = useState(false);
  const { añadirProducto, texto, saludar } = useContext(CartContext);

 

  const agregarAlCarrito = (contador) => {
    const productoNuevo = { ...producto, cantidad: contador };
    añadirProducto(productoNuevo);
    setToggle(true);
  };

  return (
    <div className="info-container">
      <div className="informacion">
        <img className="imagen" src={producto.imagen} alt={producto.nombre} />
        <p className="nombre">{producto.nombre}</p>
        <p className="descripcion">{producto.descripcion}</p>
        <p className="precio">$ {producto.precio}</p>
        <p className="stock">Stock: {producto.stock}</p>



    <div className="button-container">
        {toggle ? (
          <>
            <Link className="button-terminar" to="/carrito">
              Terminar compra
            </Link>
            <Link className="button-terminar" to="/">
              Seguir comprando
            </Link>
          </>
        ) : (
          <ItemCount
            stock={producto.stock}
            agregarAlCarrito={agregarAlCarrito}
          />
        )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
