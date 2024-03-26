import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {getProductsByCategory, getProducts} from '../../asyncMock'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const {categoryId} = useParams();

  useEffect(() => {
    
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;
    
    asyncFunc(categoryId)
      .then(response => {
      setProducts(response)
    })

    .catch(error => {
      console.error(error)
    })
  }, [categoryId]);

  return (
    <div className="ItemListContainer">
      <ItemList products={products}/>
    </div>
  );



}
export default ItemListContainer;