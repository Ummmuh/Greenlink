import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
     <nav className='navbar'>
        <div className='navbar-logo'>
            <img src="/images/recycle2.png" alt='logo de GreenLink' />
        </div>
        <ul className='navbar-links'>
            <li><a href="/">Accueil</a></li>
            <li><a href="/marketplace">Marketplace</a></li>
            <li><a href="/about">A propos</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        <div className='navbar-auth'>
            <button className='connect-button'>Se connecter</button>
        </div>
     </nav>
    );
};

export default Navbar;