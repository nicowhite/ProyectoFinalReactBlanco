const ItemDetail = ({producto}) => {
    return(

        <div className="informacion">
        {/* <img className="imagen" src={producto.imagen} alt={producto.nombre} /> */}
            <p className="nombre">{producto.nombre}</p>
            <p className="descripcion">{producto.descripcion}</p>
            <p className="precio">{producto.precio}</p>
            </div>


    )
}

export default ItemDetail