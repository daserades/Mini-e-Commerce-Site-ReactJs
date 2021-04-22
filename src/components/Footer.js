import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
          
            <div className="footer-links">
                <div className='footer-link-wrapper'>
                         <div class='footer-link-items'>
                           <h2>About Us</h2>
                           <Link to='/'>Testimonials</Link>
                           <Link to='/'>Careers</Link>
                           <Link to='/'>Terms of Service</Link>
                         </div>
                         <div class='footer-link-items'>
                           <h2>Contact Us</h2>
                           <Link to='/'>Contact</Link>
                           <Link to='/'>Support</Link>
                           <Link to='/'>Sponsorships</Link>
                         </div>
                </div>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                           <h2>Videos</h2>
                           <Link to='/'>Submit Video</Link>
                         </div>
                         <div class='footer-link-items'>
                         <h2>Social Media</h2>
                           <Link to='/'>Instagram</Link>
                           <Link to='/'>Facebook</Link>
                           <Link to='/'>Youtube</Link>
                           <Link to='/'>Twitter</Link>
                      </div>
                 </div>
            </div>
            <div className="footer-logo">
            <small className='website-rights'>UKazdal © 2021</small>
            </div>
                    
                
            
        </div>
    );
}

export default Footer