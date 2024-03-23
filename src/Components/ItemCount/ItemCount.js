import React, { useState } from 'react'; 
import logoShop from '../../icons/bt_add_to_cart.svg'
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);
  
    const increment = () => {
      if (quantity < stock) {
        setQuantity(quantity + 1);
      }
    };
  
    const decrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    return (
      <div className='Counter'>

       <div>
          <button className='primary-button add-to-cart-button' onClick={() => onAdd(quantity)} disabled={!stock}>
              <img src={logoShop} alt='logoShopD'/>
              add to cart
          </button>
       </div>
      
       <div className='CounterButtons'>
          <button className='Button' onClick={decrement} style={{borderColor: '#ACD9B2'}}>-</button>
          <h4 className='Number'>{quantity}</h4>
          <button className='Button' onClick={increment} style={{borderColor: '#ACD9B2'}}>+</button>
       </div>

      
  </div>
    );
        
    


}

export default ItemCount;