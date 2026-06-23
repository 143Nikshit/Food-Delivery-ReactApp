import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import Home from '../component/Home/Home';
import About from '../component/About/About';
import Contact from '../component/Contact/Contact';
import NotFound from '../component/NotFound';

const Routing = () => {

    let [cart, setCart] = useState([])
    return (
        <BrowserRouter>
        <Navbar cart={cart} setCart={setCart}/>
            <Routes>
                <Route path="/" element={<Home cart={cart} setCart={setCart}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Routing