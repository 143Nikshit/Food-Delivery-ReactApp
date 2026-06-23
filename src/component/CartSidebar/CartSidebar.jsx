import React, { useState } from "react";
import './CartSidebar.css';

const CartSidebar = ({ show, setShow, cart, setCart }) => {

    let total = cart.reduce((acc, item) => acc + item.price * item.qty, 0)
    
    return (
        <div className="sidebar">
            <button className="closeBtn" onClick={() => setShow(false)}>❌</button>
            <h2>Your Cart</h2>
            {cart.map((item) => {
                <div className="cartItem" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="cartDetails">
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                    <div className="qtyControl">
                        <button>-</button>
                        <span>qqty</span>
                        <button>+</button>
                    </div>
                    <button className="removeBtn">Remove</button>
                </div>
            })}
            <h3 className="total">Total: &#8377; {total}</h3>
            <button className="orderBtn">Place Order</button>
        </div>
    )
}
export default CartSidebar