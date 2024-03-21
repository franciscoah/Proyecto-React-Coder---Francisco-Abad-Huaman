import './Item.css'
import logoShop from '../../icons/bt_add_to_cart.svg'
const Item = ({id, name, img, price, stock}) => {

    return (
        <div className="product-card">
        <img src={img} alt={name}/>
        <div className="product-info">
          <div>
            <p>{price}</p>
            <p>{name}</p>
          </div>
          <figure>
            <img src={logoShop} alt=""/>
          </figure>
        </div>
      </div>
    )
}

export default Item;