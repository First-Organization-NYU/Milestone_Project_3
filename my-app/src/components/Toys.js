import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import {CartContext} from '../context/CartContext'
// import AddToCartButton from './AddToCartButton'


function Toys() {

  const [cart, setCart] = useContext(CartContext)
  console.log('cart:', cart)
  console.log('setCart', setCart)

  //fetch data from dog_toys table & display it
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      const result = await axios("ec2-34-197-91-131.compute-1.amazonaws.com/toys");

      console.log(result.data)
      setData(result.data)
    }
    fetchData()
  },[])


  // const handleAddToCart = async(item) => {
  //   console.log('clicked')
  //   try {
  //     const response = await axios.post(`http://localhost:3002/cart`, {
  //       item: item
  //     })
  //     console.log(response.data)
  //   } catch (error) {
  //     console.log(`Error Message is: ${error}`)
  //   }
  // }
  
  const handleAddToCart = async(cartItem) => {
    console.log('clocked')

    // const newItem = { ...cartItem };
    const newItem = {
      "barcode": cartItem.barcode,
      "name": cartItem.name,
      "brand": cartItem.band,
      "price": cartItem.price,
      "image": cartItem.image
      
    }

    setCart([...cart, cartItem]);
    alert('Your item has been added to cart!')

    try {

          const response = await axios.post(`ec2-34-197-91-131.compute-1.amazonaws.com/cart`, newItem)

          const response = await axios.post(`http://localhost:3002/cart`, newItem)

          console.log(response.data)
          console.log('added!')
        } catch (error) {
          console.log(`Error Message is: ${error}`)
          console.log(newItem)
          console.log(cartItem)
        }

  }

  return (
        <div className="toysPage">
      <h1>Shop For Dog Toys</h1>
      <h3>Of Course! Let's have some fun. Get your dog's next favorite toy here! 🙂 </h3>
      <h3 style={{color: 'red'}}>You have <u><Link to="/cart">{Object.keys(cart).length} item(s) </Link></u>in your shopping cart</h3>
      <div className="toyContent">
        {data.map((toys) => {
          return (
            <div className="toyDisplay" >
              <div>
                <h3><u>{toys.name}</u></h3>
                {/* <h3>Barcode: {toys.barcode}</h3> */}
                <h3>Brand: {toys.brand}</h3>
                <img src={toys.image} alt="Dog Treats"></img>
                <h3>Price: ${toys.price}</h3>
              </div>
              <div>
                <button id='addToCart' className='addToCartButton' onClick={() => {handleAddToCart(toys)}} >Add to Cart</button>
              </div>
            </div>
          )
        }
        )}
      </div>
    </div>

  );
}

export default Toys;