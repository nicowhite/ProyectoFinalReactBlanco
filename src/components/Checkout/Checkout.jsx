import React from "react";
import { useState } from "react";
import "./Checkout.css";
import Form from "./Form";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });



  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };


  const enviarOrden = (event) =>{
    event.preventDefault()
    console.log(datosForm)
  }




  return (
    <div>
     <Form datosForm={datosForm} guardarDatosInput={guardarDatosInput} enviarOrden={enviarOrden}/>
    </div>
  );
};

export default Checkout;
