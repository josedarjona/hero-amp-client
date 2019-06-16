

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class Carousel extends Component {

    constructor(props){
        super(props)
        this.state = {
            images: ["/images/carousel-2.png", "/images/carousel-3.png", "/images/carousel-1.png", "/images/carousel-3.png", "/images/carousel-2.png"],
            temp: "",
           
        }
    }


   scroll(direction){
       const tempArray = this.state.images.slice();
       let source = "";
    if(direction ==="right"){
        source = this.state.images[0];
        tempArray.shift();
        tempArray.push(source);
        this.setState({temp: source, images: tempArray})

    } else{

        source = this.state.images[this.state.images.length - 1];
        tempArray.pop();
        tempArray.unshift(source);
        this.setState({temp: source, images: tempArray})
    }
    }


  render() {
      return(


        <div id="hp-carousel-ads">

        <i className="fas fa-angle-left" onClick={()=>{this.scroll('left')}}></i>

        <img src={this.state.images[0]} />

        <img src={this.state.images[1]} />

        <img className="hide-when-small" src={this.state.images[2]} />

        <i className="fas fa-angle-right"  onClick={()=>{this.scroll('right')}} ></i>

        </div>
        
      )
  }
}

export default Carousel;



