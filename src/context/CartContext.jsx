import { createContext } from "react";
import { useState } from "react";

// Creamos un contexto de React llamado CartContext
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);



  const añadirProducto = (producto) => {
    const condicion = estaEnElCarrito(producto.id)
    if(condicion){
        //logica para sumar la cantidad si el producto ya estaba agregado
        const productosModificados = carrito.map((productoCarrito) =>{
            if(productoCarrito.id === producto.id) {
                return {...productoCarrito, cantidad: productoCarrito.cantidad + producto.cantidad}
            }else {
                return productoCarrito
            }
        })

        setCarrito(productosModificados)
    }else {
        setCarrito([...carrito, producto]);
    }
  };



  const estaEnElCarrito = (idProducto) => {
    return carrito.some(()=> idProducto === idProducto )
  }



  const totalCantidad = () => {
    return carrito.reduce((total, producto) => total + producto.cantidad, 0);
  };

  console.log(carrito);
  return (
    <CartContext.Provider value={{ carrito, añadirProducto, totalCantidad }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
