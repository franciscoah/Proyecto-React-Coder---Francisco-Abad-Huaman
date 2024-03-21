import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {getProducts} from '../../asyncMock'
import React, { useState, useEffect } from 'react';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="ItemListContainer">
      <ItemList products={products}/>
    </div>
  );



}
export default ItemListContainer;