import { Item } from "./Item";

export const ItemList = ({ productos }) => {
  return (
    <div className="ListGroup">
      {productos.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};
