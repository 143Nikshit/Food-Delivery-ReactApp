import React,{useState} from "react";
import './CartSidebar.css';
import QRCode from "react-qr-code";

const CartSidebar=({show, setShow, cart, setCart})=>{

    const [showQr, setShowQr] = useState(false);

    const removeItem = (index)=>{
        const updatedCart = [...cart];
        if (updatedCart[index].qty>1){
            updatedCart[index].qty-=1;
        } else{
            updatedCart.splice(index,1)
        }
        setCart(updatedCart);
    }

    const deleteItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
}

    let total = cart.reduce((acc, item)=> acc + item.price * item.qty,0);
    return(
        <div className="sidebar">
            <button className="closeBtn" onClick={()=>setShow(false)}>❌</button>
            <h2>Your Cart</h2>
            {cart.map((item, index)=>{
                return <div className="cartItem" key={item.id}>
                <img src={item.img} alt=""/>
                <div className="cartDetails">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
                <div className="qtyControls">
                    <button onClick={()=> removeItem(index)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={ ()=>{
                        const updatedCart = [...cart];
                        updatedCart[index].qty+=1;
                        setCart(updatedCart);
                    }}> + </button>
                </div>


                <button className="removeBtn" onClick={()=> deleteItem(index)}>Remove</button>
            </div>
            })}
            
            <h3 className="total">Total: &#8377; {total}</h3>
            <button className="orderBtn" onClick={()=> setShowQr(true)}>Place Order</button>

            {showQr && 
            <div className="qrBox" style={{marginTop: "20px", marginLeft: "37px"}}>
                <h2 style={{padding:"20px 55px"}}>Scan and pay</h2>
                <QRCode value='shruti@gpay' size={250} />
                <h3 style={{padding:"10px 55px"}}>Total Amount : {total}</h3>
                
            </div> }
        </div>

    )
}
export default CartSidebar