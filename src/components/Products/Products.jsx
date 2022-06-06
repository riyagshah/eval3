import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Product from "./Product/Product";
// eslint-disable-next-line
import {useNavigate } from "react-router-dom";

// eslint-disable-next-line
const Products = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:8080/products",
      method: "GET",
    }).then((res) => setData(res.data));
  }, []);
  const  handleClick =(id)=>{

    navigate(`/Products/${id}`)
   }
  return <div>
 <div >
        {data.map((el)  => (
          <div  key={el.id}>
           
            <div onClick={()=>handleClick(el.id)}><h3>Title : {el.name}</h3></div>
            <div><h4>Type : {el.description}</h4></div>
          <Product key={el.id} id={el.id} />
          </div>
        ))}
      </div>
   
  </div>;
};

export default Products;
