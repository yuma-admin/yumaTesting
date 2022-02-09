import React from 'react';
import './navbar.css';
// import Logo from './../images/cropped-TOPNAVLOGO.png';

const Navbar=() => {
  return (
    <>
   

        <div id="navbar">
            <div className="row">
                <div className="col-12">
                    <div className="navbarImage">
                        <a href="/" className="navLogo">
                            <img src="/images/homeImages/cropped-TOPNAVLOGO.png" />
                        </a>
                    </div>
                    <div className="navbarMainItems">
                        <a href="/" className="mainNavItem">Home</a>
                        <a href="/colorado-deals" className="mainNavItem">Deals</a>
                        <a href="/locations" className="mainNavItem">Shop</a>
                        <a href="/delivery" className='mainNavItem'>Delivery</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='mobileNav'>
            <div className='navbarImage'>
                <a href="/" className='navLogo'>
                    <img src='/images/homeImages/cropped-TOPNAVLOGO.png' />
                </a>
            </div>
            <label for="toggle">&#9776;</label>
            <input type="checkbox" id="toggle" />
            <div className='navMenu'>
                <a href="/">Home</a>
                <a href='/colorado-deals'>Deals</a>
                <a href='/locations'>Shop</a>
                <a href='/delivery'>Delivery</a>
            </div>
        </div>
    </>
  )
};
export default Navbar;