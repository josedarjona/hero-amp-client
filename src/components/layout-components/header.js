import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class Header extends Component {
  render() {
      return(
        <header id="hp-header">

        <span className="hp-header-left-icons">
        <a href="https://www.facebook.com/AnaMariaPolo/" target="_blank">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/anapolotv?lang=en" target="_blank">  
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/anapolotv/?hl=en" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="">
        <i className="fab fa-youtube"></i>
        </a>
        </span>

        <a id="main-amp" href="/home"> 
            <h4>
              ANA MARIA POLO
            </h4>
        </a>
          


          <span className="hp-header-right-icons">

          <i className="fas fa-user"></i>
          <i className="fas fa-shopping-cart"></i>
          </span>
        </header>
      )
  }
}

export default Header;