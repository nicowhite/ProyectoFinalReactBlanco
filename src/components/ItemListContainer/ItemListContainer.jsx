import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db";
import { MoonLoader } from "react-spinners";
import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoria } = useParams();

  useEffect(() => {
    setCargando(true);

    let consulta;
    const productosRef = collection(db, "productos");

    if (categoria) {
      consulta = query(productosRef, where("categoria", "==", categoria));
    } else {
      consulta = productosRef;
    }

    getDocs(consulta)
      .then((respuesta) => {
        let productosDb = respuesta.docs.map((producto) => {
          return { id: producto.id, ...producto.data() };
        });
        setProductos(productosDb);
      })
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, [categoria]);

  return (
    <>
      {cargando ? (
        <div className="cargando">
          <MoonLoader color="#00adb5" size={50} />
        </div>
      ) : (
        <div className="item-list-container">
          <p className="saludo">{saludo}</p>
          <ItemList productos={productos} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
