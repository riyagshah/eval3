import React, { useContext } from "react";
import {Link, useNavigate} from "react-router-dom"
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {count1} = useContext(CartContext);
  const navigate = useNavigate();
const handleLoginClick=()=>{
 
  navigate("/login");
}
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">Home</Link>
      <span data-cy="navbar-cart-items-count">Count:{count1}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default Navbar;
