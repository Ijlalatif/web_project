import React from 'react';
import Home from './Home/Home';
import Contactus from './ContactUs/ContactUs';
import LoginPage from './LoginPage/Login';
import SignupPage from './Signup/signup';
import { Route, Routes } from 'react-router-dom';

import Controller from './Bats/Controller';
import Profile from './Profile/Profile';
import ItemBody from './item/Body/body';
import CartPage from './cart/cart';
import Header from './Header_Footer/Header';
import Footer from './Header_Footer/footer';
import { useState } from 'react';

function App() {

  
  const [cartItems, setCartItems] = useState([]);

  const [component,setComponent]=useState("bats");

  function HandleComponent(component){
      setComponent(component);
    }

  function pushToCart(item){
    setCartItems((prevItems) => [...prevItems, item]);
  }
  
  return (
 <div>
  <Header cartItems={cartItems} HandleComponent={HandleComponent}/>
  <Routes>
 
  <Route path='/' element={<Home />}/>

  <Route path='/items' element={<Controller pushToCart={pushToCart} component={component}/>}/>

  <Route path='/itembody' element={<ItemBody />}/>

  <Route path='/contactus' element={<Contactus />}/>
  
  <Route path='/signup' element={<SignupPage />}/>
  
  <Route path='/login' element={<LoginPage />}/>
  
  <Route path='/profile' element={<Profile />}/>
  
  <Route path='/cart' element={<CartPage cartItems={cartItems} setCartItems={setCartItems}/>}/>
   

    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
