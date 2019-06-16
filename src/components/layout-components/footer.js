

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class Footer extends Component {
  render() {
      return(

        <footer id="the-footer">

        <div className="hide-when-small" id="footer-img-contain">
        <img src="/images/name-and-sig.png"></img>
          
        </div>


        
        <div className="column">
        <h6> Connect </h6>
        <div>
          <a href="https://www.facebook.com/AnaMariaPolo/" target="_blank" className="footer-social-link">
          <i className="fab fa-facebook-f"></i>
          <span>Facebook</span>
          </a>
          
        </div>
        <div>
        <a href="https://twitter.com/anapolotv?lang=en" target="_blank" className="footer-social-link">  
           <i className="fab fa-twitter"></i>
          <span>Twitter</span>
          </a>
        </div>
        <div>

          <a href="https://www.instagram.com/anapolotv/?hl=en" target="_blank" className="footer-social-link">  
        <i className="fab fa-instagram"></i>
          <span>Instagram</span>
          </a>

        </div>
        <div>
        <i className="fab fa-youtube"></i>
          <span>You Tube</span>
        </div>
        
        </div>

        <div className="column">
        <h6> Shop </h6>
        <a>Ordering & Payment</a>
        <a>Shipping</a>
        <a>Returns</a>
        <a>FAQ</a>

        </div>

        <div className="column hide-when-tiny">
        <h6> Information </h6>
        <a>Privacy Policy</a>
        <a>Terms & Conditions</a>
        <a>Ad Choices</a>
        <a>Contest Rules</a>
        <a>Contact Us</a>
        </div>

        <form className="hide-when-teeny-tiny">
          <h6> Subscribe To Our Newsletter</h6>
          <input placeholder="email address"/>
          <button>OK</button>

        </form>
       
      </footer>

        
      )
  }
}

export default Footer;



