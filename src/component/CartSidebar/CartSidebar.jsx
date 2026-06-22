import React,{useState} from "react";
import './CartSidebar.css';

const CartSidebar=({show, setShow})=>{
    return(
        <div className="sidebar">
            <button className="closeBtn" onClick={()=>setShow(false)}>❌</button>
            <h2>Your Cart</h2>
            <div className="cartItem">
                <img src="" alt=""/>
                <div className="cartDetails">
                    <p>name</p>
                    <p>price</p>
                </div>
                <div className="qtyControl">
                    <button>-</button>
                    <span>qqty</span>
                    <button>+</button>
                </div>
                <button className="removeBtn">Remove</button>
            </div>
            <h3 className="total">Total:</h3>
            <button className="orderBtn">Place Order</button>
        </div>
    )
}
export default CartSidebar