import React, { useState } from "react";
import tshirtImage from "./images/tshirt.jpg";
import hoodieImage from "./images/jumper.jpg";
import hatImage from "./images/hat.jpg";
import bagImage from "./images/bag.jpg";
import mugImage from "./images/mug.jpg";


function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  function updateCart(item, price, operation) {
    let itemFound = false;
    let newCartItems = cartItems.map((cartItem) => {
      if (cartItem.itemName === item) {
        itemFound = true;
        let quantity = cartItem.quantity;
        if (operation === "add") {
          quantity++;
        } else if (operation === "remove") {
          quantity--;
        }
        let newPrice = quantity * price;
        return {
          itemName: item,
          price: newPrice,
          quantity: quantity,
        };
      } else {
        return cartItem;
      }
    });

    if (!itemFound && operation === "add") {
      newCartItems.push({
        itemName: item,
        price: price,
        quantity: 1,
      });
    }

    setCartItems(newCartItems);
  }

  function removeFromCart(item, price) {
    let newCartItems = cartItems.filter(
      (cartItem) => cartItem.itemName !== item
    );
    setCartItems(newCartItems);
  }

  function calculateTotal() {
    let total = 0;
    cartItems.forEach((cartItem) => {
      total += cartItem.price;
    });
    setCartTotal(total);
  }

  function handleAddToCartClick(item, price) {
    updateCart(item, price, "add");
    calculateTotal();
  }

  function handleRemoveFromCartClick(item, price) {
    updateCart(item, price, "remove");
    calculateTotal();
  }

  return (
    <div>
      <section id ="merchandise"/>
      <h1 style={{ color: "#a18525" }}>Merchandise</h1>
      <ul style={{ listStyle: 'none' }}>
        <li>
          <img src= {tshirtImage} alt="T-Shirt" />
          <br/>
          T-Shirt - $35
          <br/>
          <button onClick={() => handleAddToCartClick("T-Shirt", 35)}>
            Add to Cart
          </button>
        </li>
        <li>
          <img src= {hoodieImage} alt="Hoodie" />
          <br/>
          Hoodie - $50 
          <br/>
          <button onClick={() => handleAddToCartClick("Hoodie", 50)}>
            Add to Cart
          </button>
        </li>
        <li>
          <img src= {hatImage} alt="Hat" />
          <br/>
          Hat - $25
          <br/>
          <button onClick={() => handleAddToCartClick("Hat", 25)}>
            Add to Cart
          </button>
        </li>
        <li>
          <img src= {bagImage} alt="Bag" />
          <br/>
          Bag - $60
          <br/>
          <button onClick={() => handleAddToCartClick("Bag", 60)}>
            Add to Cart
          </button>
        </li>
        <li>
          <img src= {mugImage} alt="Mug" />
          <br/>
          Mug - $15
          <br/>
          <button onClick={() => handleAddToCartClick("Mug", 15)}>
            Add to Cart
          </button>
        </li>
      </ul>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem.itemName}>
            {cartItem.itemName} - ${cartItem.price} ({cartItem.quantity})
            <button
              onClick={() => handleRemoveFromCartClick(cartItem.itemName, cartItem.price)}
            >
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
      <div>Total: ${cartTotal}</div>
      <br/>
      <br/>
      <div className='back-to-top'>
      <a href="#navigation" className="back-to-top">Back to top</a>
      </div>
    </div>
  );
}

export default Cart;
