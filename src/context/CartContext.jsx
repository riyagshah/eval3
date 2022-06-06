import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count,setCount]=useState(0)
  const [count1,setCount1]=useState(0)
  // const [toggle,setToggle]=useState(false)
  const add=()=>{
    setCount(count+1)
  }
  const sub=()=>{
    setCount(count-1)
  }
const togglefunc=()=>{
  if(count1>0)
  {
    setToggle(!toggle)
  }

  else{
    setToggle(false)
  }
}

  const addNavbar=()=>{
setCount1(count1+1)
  }
  const subNavbar=()=>{
    setCount1(count1-1)
  }

  return <CartContext.Provider value={{add,sub,count ,addNavbar,subNavbar,count1 }}>{children}</CartContext.Provider>;
};
