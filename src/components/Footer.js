import React from 'react';
import Button from './Button';
import './Footer.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-learnmore">
        <p className="footer-learnmore-heading">
            Contact me
        </p>
        <div className='input-areas'>
            <form>
            <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
            <Button buttonStyle='btn--outline'>Submit</Button>
            </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>About this website</h2>
                <Link to='/Projects'></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
