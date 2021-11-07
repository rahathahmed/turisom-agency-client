import React from 'react';
import logo from '../Img/logo.png'

const Footer = () => {
    return (
        <div className="bg-dark ">
                <div className="container pt-5">
            <div className="row">
                <div className="col-md-3">
                   <img src={logo} style={{width:'100px'}}  alt="" />
                    <p className="text-white">Copyright © 2019 | All Rights</p>
                </div> 
                <div className="col-md-3">
                    <h5 className="text-primary">Quick Link</h5>
                    <ul className="list-unstyled text-white">
                        <li>Home</li>
                        <li>Term</li>
                        <li>Privacy & Policy</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5 className="text-primary">About Usk</h5>
                    <ul className="list-unstyled text-white">
                        <li>Our Story</li>
                        <li>Vision</li>
                        <li>How obstacle face it</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5 className="text-primary"> Support</h5>
                    <ul className="list-unstyled text-white">
                        <li>24/7 Hour</li>
                        <li>Online Website</li>
                        <li>Visit our office</li>
                        <li>a client say</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                
            </div>
        </div>
        </div>
        
    );
};

export default Footer;