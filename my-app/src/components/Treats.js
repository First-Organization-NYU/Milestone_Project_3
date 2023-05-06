import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import {CartContext} from '../context/CartContext'


function Treats() {

  const [cart, setCart] = useContext(CartContext)

  //fetch data from dog_treats table & display it 
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("ec2-34-197-91-131.compute-1.amazonaws.com/treats");
      setData(result.data)
    }
    fetchData()
  }, [])

  const handleAddToCart = async(cartItem) => {
    console.log('clocked')

    const newItem = { ...cartItem };

    setCart([...cart, cartItem]);
    alert('Your item has been added to cart!')


    try {
          const response = await axios.post(`ec2-34-197-91-131.compute-1.amazonaws.com/cart`, {newItem})
          console.log(response.data)
          console.log('added!')
        } catch (error) {
          console.log(`Error Message is: ${error}`)
     
        }


  }

  return (
    <div className="treatsPage">
      <h1>Shop For Dog Treats</h1>
      <h3>Some delicious treats just for your pet 🐶 </h3>
      <h3 style={{color: 'red'}}>You have <u><Link to="/cart">{Object.keys(cart).length} item(s) </Link></u>in your shopping cart</h3>
      <div className="treatContent">
        {data.map((dog_treats) => (
          <div className="treatDisplay" key={dog_treats.barcode}>
            <h3><u>{dog_treats.name}</u></h3>
            <h3>{dog_treats.brand}</h3>
            <img src={dog_treats.image} alt="Dog Treats"></img>
            <h3>Price: ${dog_treats.price}</h3>
            {/* <h6>Product Weight: {dog_treats.weight}</h6> */}
            <button id='addToCart2' className='addToCartButton' onClick={() => {handleAddToCart(dog_treats)}} >Add to Cart</button>
            {/* <button className="add-btn">Add to Cart</button> */}
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Treats;