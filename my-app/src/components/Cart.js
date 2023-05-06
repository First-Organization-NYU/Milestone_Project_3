import { Link } from "react-router-dom"
import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
// import constate from "constate";
import {CartContext} from '../context/CartContext'

function Cart(){
    
    const [cart, setCart] = useContext(CartContext)
    const [counter, setCounter] = useState(1)
    // const cart = useContext(CartContext)
    const totalPrice = cart.reduce((acc,curr) => acc + (curr.price * counter), 0)
    // const partialPrice = cart.reduce()

    function handleDeleteButton(index){
      const newCart = [...cart];
      newCart.splice(index,1)
      setCart(newCart)
    }


    
    function incrementCounter(){
      setCounter(counter+1)
    }

    function decrementCounter(){
      if(counter<=1){
        setCounter(1)
      }else{
        setCounter(counter-1)
      }
    }


    return (
        <div className="cart-item">
          <br></br>
          <h1>Total Cost: $ {totalPrice}</h1>
          {cart.length > 0 ? cart.map((item, index) => (
            <div className="shopping-cart" key={item.barcode}>
              <img src={item.image} alt={item.name} />
              <h3>Item Name: {item.name}</h3>
              <h3>Item Price: $ {item.price * counter}</h3>
              {/* <p>Counter: {counter}</p> */}
              <button className="deleteButton" onClick={()=> handleDeleteButton(index)}> Delete </button>
              <div className="itemQuantityInCart">
                <button className="incCounter"onClick={()=>{decrementCounter()}}>-</button>
                <p2 className="counter">{counter}</p2>
                <button className="decCounter" onClick={()=>{incrementCounter()}}>+</button>
              </div>
            </div>
          )) : <p>Your cart is empty.</p>}
          <div>
            {totalPrice === 0 ? 
              (<div id="cantCheckOut" className="cart-btn">Can't Checkout yet!</div>)
              : (<button className="cart-btn"><Link to="/payment">Proceed to Checkout</Link></button>) }
          
          </div>
          
           <br></br>
        </div>
      );
    }


export default Cart;



// function Cart() {

//     const [data, setData] = useState([]);

//     useEffect(()=> {
//         const fetchData = async()=>{
//             const result = await axios("http://localhost:3002/cart");
//             setData(result.data)
//         };
//         fetchData();
//     }, []);

//     const handleDelete = async(cartItem_id) => {
//         try{
//             const response = await axios.delete(`http://localhost:3002/cart/${cartItem_id}`)
//         }catch(error){
//             console.log(`Error Message is: ${error}`)
//         }
//     }

//     // retrive data when add button is clicked 
//     return (
//         <div className="cartPage">
//             <div className="carPageTitle">
//                 <h1>Shopping Cart</h1>
//             </div>
//             <div className="CartPageContent">
//                 {data.map((carts) => {
//                     return(
//                         <div className='cartDisplay' key={carts.barcode}>
                            
//                         <h3>Item: {carts.name} </h3>
//                         <p>Barcode: {carts.barcode}</p>
//                         <p>Cost: ${carts.cost}</p>
                
//                         <button onClick={()=>handleDelete(carts.barcode)}>Delete</button>
//                     </div>
//                     )
//             })}
         
//             </div>
            

//             {/* {data.map((cartItems) => (
//         <div className="cartDisplay" key={cart.barcode}>
//           <ul>
//             <li>{carts.name}</li>
//             <li>{carts.price}</li>
//             </ul>
//         </div>
//       )
//       )} */}
//             <button className="cart-btn"><Link to="/payment">Proceed to Checkout</Link></button>
// </div>)
// }