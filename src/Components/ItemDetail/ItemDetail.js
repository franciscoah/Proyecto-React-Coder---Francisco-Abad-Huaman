import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({
  id,
  name,
  img,
  description,
  subDescription,
  price,
  stock,
  
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
  }
  return (
    <div className="card">
      <div className="photo">
        <img src={img} alt="name" />
      </div>
      <div className="description">
        <h2>{name}</h2>
        <h4>{subDescription}</h4>
        <h1>{price}</h1>
        <p>{description}</p>
        <footer className="ItemFooter">
          {quantityAdded > 0 ? (
            <Link to="/cart" classname="completedPurchase">Terminar compra</Link>
          ) : (
            <ItemCount
              initial={1}
              stock={10}
              onAdd={handleOnAdd}
            />
          )}
        </footer>
        <h5 className="stock ">stock: {stock}</h5>
      </div>
    </div>
  );
};

export default ItemDetail;
