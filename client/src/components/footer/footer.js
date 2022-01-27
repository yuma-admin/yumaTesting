import React from 'react';
import './footer.css';

const Footer=() => {
  return (
    <>
    <div className="footerBackground">
        <div className="row">
            <div className="col-12">
                <div className="footerTMContainer">
                    <a href="/" className="footerTM">
                        ©2021 Yuma Way All Rights Reserved 
                    </a>
                </div>

                <div className="footerNav">
                    <a href="/about" className="footerNavItem">About Us</a>
                    <a href="/privacy-policy" className="footerNavItem">Privacy Policy</a>
                    <a href='/colorado-faqs' className='footerNavItem'>FAQS</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;