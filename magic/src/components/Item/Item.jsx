import {Link} from "react-router-dom"

const Item = ({producto}) => {

    return (
     
        
        <div className="card-container">

            <img className="imagen" src={producto.imagen} alt={producto.nombre} />
            <p className="nombre">{producto.nombre}</p>
            <p className="descripcion">{producto.descripcion}</p>
            <p className="precio">{producto.precio}</p>
            <Link to={`/informacion/${producto.id}`}>Informacion</Link>
       


        </div>
        
        
        
      
    )
}


export default Item
