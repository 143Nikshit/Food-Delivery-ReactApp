import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import './Navbar.css';
import CartSidebar from '../CartSidebar/CartSidebar';

const Navbar = ({ cart, setCart }) => {
    let[show, setShow] = useState(false)
    return (
        <div className='mainContainer'>
            <nav>
                <div className="logo">
                    <div className="foodLogo">🍔</div>
                    <div>Foodie</div>
                </div>
                <ul className='listItems'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li>
                        <Link to={''} onClick={()=>setShow(!show)} style={{padding: "20px"}}>
                            <FaCartShopping />
                            <span style={{
                                position: "absolute",
                                bottom: "29px",
                                left: "36px",
                            }}>{cart.length}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            {show && <CartSidebar 
                show={show} 
                setShow={setShow} 
                cart={cart} 
                setCart={setCart} />}
        </div>
    )
}

export default Navbar
