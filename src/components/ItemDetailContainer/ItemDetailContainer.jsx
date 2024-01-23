import { useEffect, useState }from "react";
import obtenerProductos from "../utilidades/data";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {


    const [producto, setProducto] =useState({})
    const {id} = useParams()

    useEffect(()=>{

    //     const productoRef = doc(db, "productos", id);
    //     getDoc(productoRef).then((respuest) => {
    //         const productoDb = {id: respuesta.id, ...respuesta.data() };
    //         setProducto(productoDb);
    //     });
    // }, [id]);



        obtenerProductos
        .then((respuesta)=> {
        const productoEncontrado = respuesta.find((prod)=> prod.id ===id)
        setProducto(productoEncontrado)
        })
        .catch((error)=>{
            console.log(error)
        }
    )},[])










   return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
   )
}


export default ItemDetailContainer