import React, { useState } from 'react';
import './footer.css';

const Footer=() => {
    const [isActive, setIsActive] = useState(false);

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
                    <div className='accordion-item'>
                        <div className='footerNavItem' onClick={() => setIsActive(!isActive)}>
                            FAQs
                        </div>
                        <div className='toggleBtn'>{isActive ? '-' : '+' }</div>
                        { isActive && <div>
                            <a className="footerNavItem" href="/colorado-faqs">Colorado FAQs</a>
                            <a className="footerNavItem" href='/michigan-faqs'>Michigan FAQs</a>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;