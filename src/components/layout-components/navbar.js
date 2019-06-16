

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'

import { Link } from 'react-router-dom';



class NavBar extends Component {
  render() {
      return(

        <nav className="hp-navbar">
        {/* <a href="#">ABOUT</a> */}
        <Link to='/contest'> CONTESTS </Link>
        
        {/* <a href="#">VIDEOS</a> */}
        <a href="/press">PRESS</a>
        <a href="/contact">CONTACT</a>
      </nav>
        
      )
  }
}

export default NavBar;



