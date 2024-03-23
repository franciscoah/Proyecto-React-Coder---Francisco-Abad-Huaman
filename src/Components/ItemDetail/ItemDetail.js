import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({
  id,
  name,
  img,
  category,
  description,
  subDescription,
  price,
  sctock,
  
}) => {
  return (
    <div className="card">
      <div className="photo">
        <img src={img} alt="name" />
      </div>
      <div className="description">
        <h2>{name}</h2>
        <h4>{subDescription}</h4>
        <h1>{price}</h1>
        <p>
          {description}
        </p>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log(`Cantidad agregada: ${quantity}`)} />
      </div>
    </div>
  );
};

export default ItemDetail;
