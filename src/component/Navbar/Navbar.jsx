import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import './Navbar.css';
import CartSidebar from '../CartSidebar/CartSidebar';

const Navbar = () => {
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
                        <Link to={''} onClick={()=>setShow(!show)}>
                            <FaCartShopping />
                        </Link>
                    </li>
                </ul>
            </nav>
            {show && <CartSidebar show={show} setShow={setShow}/>}
        </div>
    )
}

export default Navbar
