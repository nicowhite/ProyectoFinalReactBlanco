import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";
import "./ItemDetailContainer.css";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [productoExiste, setProductoExiste] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const productoRef = doc(db, "productos", id);
    getDoc(productoRef).then((respuesta) => {
      const productoDb = { id: respuesta.id, ...respuesta.data() };
      if (!respuesta.exists()) {
        setProductoExiste(true);
      }
      setProducto(productoDb);
    });
  }, [id]);

  return (
    <div>
      {productoExiste ? (
        <div className="no-existe-container">
          <div className="no-existe">El Producto no existe</div>
          <button>
            <Link to="/">Ver mas Productos</Link>
          </button>
        </div>
      ) : (
        <ItemDetail producto={producto} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
