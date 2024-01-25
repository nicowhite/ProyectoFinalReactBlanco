import React from "react";
import { useState } from "react";
import "./Checkout.css";
import Form from "./Form";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import db from "../../db/db";
import { addDoc, collection } from "firebase/firestore";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const [idOrden, setIdOrden] = useState(null);
  const { carrito, totalPrecio, borrarCarrito } = useContext(CartContext);

  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrden = (event) => {
    event.preventDefault();
    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      total: totalPrecio(),
    };
    subirOrden(orden);
  };

  const subirOrden = (orden) => {
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, orden).then((respuesta) => {
      setIdOrden(respuesta.id);
      // limpiar carrito
      borrarCarrito();
    });
  };

  return (
    <div>
      {idOrden ? (
        <div className="orden-generada">
          <h2>Orden Generada Correctamente!</h2>
          <p>N° de orden: {idOrden} </p>
        </div>
      ) : (
        <Form
          datosForm={datosForm}
          guardarDatosInput={guardarDatosInput}
          enviarOrden={enviarOrden}
        />
      )}
    </div>
  );
};

export default Checkout;
