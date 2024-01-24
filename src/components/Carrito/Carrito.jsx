import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Carrito.css";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, borrarCarrito, borrarProducto, totalPrecio } =
    useContext(CartContext);
  console.log(23);

  return (
    <div>
      <ul className="carrito-model">
        {carrito.map((producto) => (
          <li key={producto.id}>
            <p>{producto.nombre}</p>
            <img src={producto.imagen} alt={producto.nombre} />
            <p>Cantidad: {producto.cantidad}</p>
            <div className="text">precio c/u: ${producto.precio}</div>
            <button onClick={() => borrarProducto(producto.id)}>
              Eliminar Producto
            </button>
          </li>
        ))}
      </ul>
      <h4 className="total-pago">Total a pagar: ${totalPrecio()}</h4>
      <div className="borrar-todo">
        <button onClick={borrarCarrito}>Eliminar Carrito</button>
      </div>
      <Link className="comprar-boton" to="/checkout">
        <button>Comprar</button>
      </Link>
    </div>
  );
};

export default Carrito;
