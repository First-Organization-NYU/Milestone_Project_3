import './App.css';
import About from './components/About';
import Cart from './components/Cart';
import Home from './components/Home';
import Login from './components/Login';
import DogBreeds from './components/DogBreeds';
import Dog from './components/Dog';
import Payment from './components/Payment'
import Signup from './components/Signup'
import Toys from './components/Toys'
import Treats from './components/Treats'
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import React, {useContext} from 'react';
import Confirmation from './components/Confirmation';
import CartProvider from './context/CartContext'
import { CartContext } from './context/CartContext';
// import OuterApp from './OuterApp';

function App() {

  // const [cart, setCart] = useContext(CartContext)

  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <header>
          <div className='header'>
            <div className='titleheader'>
              <h1>Barking Boutique</h1>
            </div>
            <div className='logsign-btn'>
              <button className='login-btn'><Link to="/login">Log in</Link></button>
              <button className='signup-btn'><Link to="/signup">Sign up</Link></button>
              <button className='cart-btn'><Link to="/cart">Shopping Cart</Link></button>
            </div>
          </div>
        </header>

        <nav className='navbar'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/treats">Treats</Link></li>
            <li><Link to="/toys">Toys</Link></li>
            <li><Link to="/dogbreeds">Dog Breeds</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><a href='https://nyu-milestonetwo.herokuapp.com/'>Pet Adoption</a></li>
          </ul>
        </nav>

        <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/treats" element={<Treats />} />
              <Route path="/toys" element={<Toys />} />
              <Route path="/dogbreeds" element={<DogBreeds />} />
              <Route path="/:name" element={<Dog />} />
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
        </div>

      </BrowserRouter>
      </CartProvider>

    </div>
  );

}

export default App;