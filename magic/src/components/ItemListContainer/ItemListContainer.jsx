import { useEffect, useState } from "react";
import obtenerProductos from "../utilidades/data";
import ItemList  from "../ItemList/ItemList";
import {useParams} from "react-router-dom";



const ItemListContainer = () => {

    const [productos, setProductos ] = useState([]);

    const {categoria} = useParams();

    useEffect(()=>{

        obtenerProductos
        .then((respuesta)=>{
            if(categoria){
                const filtrados = respuesta.filter((producto) => producto.categoria === categoria
                );
                setProductos(filtrados);
            }else {
                setProductos(respuesta);
            }
        }) .catch((error)=> {
            console.log(error)
        })
    },[categoria]);



    return (
        <div>


        <ItemList productos={productos}/>
            


        </div>
    )};

export default ItemListContainer;


