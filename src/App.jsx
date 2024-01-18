import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from  "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";  
import {CartProvider} from "./context/CartContext"
import Carrito from "./components/Carrito/Carrito";

function App() {
  return (
    <BrowserRouter>


      <CartProvider> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/categoria/:categoria" element={<ItemListContainer/>}></Route>
        <Route path="/detalle/:id" element={<ItemDetailContainer/>}></Route>
        <Route path="/carrito" element={<Carrito/>}></Route>

      


      </Routes>






      </CartProvider> 
    </BrowserRouter>
  );
}

export default App;
