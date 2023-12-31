import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./input.css"
import Home from "./components/Home";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import ShopItems from "./components/ShopItems"

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCart = (e) => {
      if (!cartItems.includes(ShopItems[e.target.closest(".shop-item").id-1])){
          addToCart(e);
      }
      else if(cartItems.includes(ShopItems[e.target.closest(".shop-item").id-1])){
          removeFromCart(e);
      }
  }
    
  const addToCart = (e) => {
      setCartItems(current => [...current, ShopItems[e.target.closest(".shop-item").id-1]]);
      setItemCount(itemCount+1);
      ShopItems[e.target.closest(".shop-item").id-1].inCart = true; 
      ShopItems[e.target.closest(".shop-item").id-1].val++; 
  }

  const removeFromCart = (e) => {
      setCartItems(current => current.filter(item => item !== ShopItems[e.target.closest(".shop-item").id-1]));
      setItemCount(itemCount-1);
      ShopItems[e.target.closest(".shop-item").id-1].inCart = false; 
      ShopItems[e.target.closest(".shop-item").id-1].val = 0; 
  }

  useEffect(() => {
    let price = 0;
    for (let i = 0; i < cartItems.length; i++){
      price += cartItems[i].price * cartItems[i].val;
    }
    setTotalPrice(Math.round(price * 100)/100);
  }, [cartItems, totalPrice]);

  return (
    <div className="App">
      <Nav itemCount={itemCount}/>
      <Routes>
        <Route path="/shopping-cart" element={<Home/>}/>
        <Route path="/shopping-cart/shop" element={<Shop handleCart={handleCart}/>}/>
        <Route path="/shopping-cart/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} setItemCount={setItemCount} itemCount={itemCount} totalPrice={totalPrice} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
