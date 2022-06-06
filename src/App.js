import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Products from "./components/Products/Products"
// eslint-disable-next-line
 import RequiredAuth from "./hoc/RequiredAuth";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Products/Product/Product";
// eslint-disable-next-line
import { AuthContext } from "./context/AuthContext";
function App() {
  return (
    <div className="App">
 
      <Navbar />
      <Routes>
      
        <Route path='/' element={
          <RequiredAuth>
        <Home/>
        </RequiredAuth>
        }></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Products' element={<Products />} >
                </Route>
                <Route
            path="/Products/:id"
            element={
             
                <Product />
           
            }
          />
     </Routes> 
   
    </div>
  );
}

export default App;
