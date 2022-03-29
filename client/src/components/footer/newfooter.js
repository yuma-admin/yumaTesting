import React from "react";
import { useState } from "react";
import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import "./newfooter.css";


const newFooter = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="footerContainer">
                <div className="footerGrid">
                <div className="yumaLinks">    
                        <a href="/about" className="footerNavLink">About</a>
                        <a href="/privacy-policy" className="footerNavLink">Privacy Policy</a>
                <div className='accordion-item'>
                        <div className='footerNavLink' onClick={() => setIsActive(!isActive)}>
                           {isActive ? 'FAQs -' : 'FAQs +'}
                        </div>
                        { isActive && <div>
                            <a className="footerNavLink" href="/colorado-faqs">Colorado</a>
                            <a className="footerNavLink" href='/michigan-faqs'>Michigan</a>
                        </div>}
                    </div>
                </div>
                <div className="socialSection">
                <div className="socialHeader">
                    Follow Us!
                </div>
                <div className="socialLinks">
                        <a href="https://www.facebook.com/YumaWayColorado" target="_blank" alt="Facebook Logo"><FaFacebookSquare/></a>
                        <a href="https://www.instagram.com/yumawaycolorado/" target="_blank" alt="Instagram Logo"><FaInstagramSquare/></a>   
                        <a href="https://www.instagram.com/cherry_peak_dispensary/" target="_blank" alt="LinkedIn Logo"><FaLinkedin/></a>
                </div>
                </div>
                </div>    
                <div className="footerTrademark">
                    <a href="/" className="footerTM">
                        ©2021 Yuma Way All Rights Reserved 
                    </a>
                </div>
                </div>
    )
}

export default newFooter;
