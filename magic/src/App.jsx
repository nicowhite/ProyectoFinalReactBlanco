import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from  "./components/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar/>
      <h1 className="main-title">Cartas</h1>
      <ItemListContainer/>
    </div>
  );
}

export default App;
