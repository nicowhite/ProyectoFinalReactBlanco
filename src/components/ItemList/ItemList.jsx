import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";

import "./ItemList.css";

const ItemList = ({ productos }) => {
  return (
    <div className="items">
      {productos.map((producto) => (
        <Item producto={producto} key={producto.id} />
      ))}
    </div>
  );
};

export default ItemList;
