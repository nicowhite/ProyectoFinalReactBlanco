import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from  "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";  

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/categoria/:categoria" element={<ItemListContainer/>}></Route>
        <Route path="/detalle/:id" element={<ItemDetailContainer/>}></Route>

      


      </Routes>







    </BrowserRouter>
  );
}

export default App;
