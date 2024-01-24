import React from "react";
import { useState } from "react";
import "./Checkout.css"



const Checkout = () => {
const [datosForm, setDatosForm] = useState({
  nombre: "",
  telefono: "",
  email: "",
});


   const guardarDatosInput = () =>{
    console.log(event.target.value)
   }

  return(
  <div>
    <form >
      <label htmlFor="nombre">Nombre </label>
      <input type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput}/>

      <label htmlFor="telefono">Telefono </label>
      <input type="text" id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput}/>

      <label htmlFor="email">Email </label>
      <input type="email" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput}/>


        <button type="submit">Enviar Orden</button>
    </form>
  </div>);
}

export default Checkout;
