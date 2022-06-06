// import React from "react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
// eslint-disable-next-line
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
const Product = ({id}) => {
  // Note: this id should come from api
  // const product = { id: 1 };
  // eslint-disable-next-line
  const {count,add,sub ,addNavbar,subNavbar,togglefunc,toggle} = useContext(CartContext);

  const [product,setProduct] = useState({})

  // const {id} = useParams();


  useEffect(() => {

    axios.get(`http://localhost:8080/Products/${id}`)
    .then((r)=> setProduct(r.data))
  }, [ id])
console.log(product)
  return (
    
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name"> {product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
    
 <div>
      <button data-cy="product-add-item-to-cart-button" onClick={addNavbar}  >Add to cart </button></div> 
      
  <div>
 <button data-cy="product-increment-cart-item-count-button"  onClick={add}>+</button>
 <span data-cy="product-count">
   {
    count
   }
 </span>
 <button data-cy="product-decrement-cart-item-count-button" onClick={sub}>-</button>
 <button data-cy="product-remove-cart-item-button" >Remove</button>
</div>
   


     
    </div>
  );
};

export default Product;
