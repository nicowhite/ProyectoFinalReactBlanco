import "./ItemDetail.css"


const ItemDetail = ({ producto }) => {
  return (
    <div className="info-container">
      <div className="informacion">
        <img className="imagen" src={producto.imagen} alt={producto.nombre} />
        <p className="nombre">{producto.nombre}</p>
        <p className="descripcion">{producto.descripcion}</p>
        <p className="precio">$ {producto.precio}</p>
        <p className="stock">Stock: {producto.stock}</p>

      


      </div>
    </div>
  );
};

export default ItemDetail;
