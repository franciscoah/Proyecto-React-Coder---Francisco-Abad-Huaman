import { Link } from 'react-router-dom';
import './Item.css';
import logoShop from '../../icons/bt_add_to_cart.svg';

const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className="product-card">
      <Link to={`/item/${id}`}>
        <img src={img} alt={name} />
      </Link>
      <div className="product-info">
        <div>
          <p>{price}</p>
          <p>{name}</p>
        </div>
        <figure>
          <Link to={`/item/${id}`}>
            <img src={logoShop} alt="Add to cart" />
          </Link>
        </figure>
      </div>
    </div>
  );
};

export default Item;