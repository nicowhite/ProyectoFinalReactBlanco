import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Carrito.css"


const Carrito = () => {
  const { carrito } = useContext(CartContext);

  return (
    <div>
      <ul className="carrito-model">
        {carrito.map((producto) => (
          <li key={producto.id}>
            <p>{producto.nombre}</p>
            <img src={producto.imagen} alt={producto.nombre} />
            <p>Cantidad: {producto.cantidad}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrito;
