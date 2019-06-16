

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class NonProfitSection extends Component {
  render() {
      return(


        <section id="non-prof-section">

        <div id="non-prof-left-side">
          <h2>This Section Is For Non Profit Work</h2>
          <p>Lorem ipsum dolor amet cred yr pour-over banjo sriracha, artisan church-key cronut bicycle rights. Fanny pack quinoa sustainable, affogato unicorn cred tacos 8-bit keytar paleo hexagon. Normcore wayfarers everyday kogi. Mlkshk pug artisan cliche XOXO, vexillologist gochujang quinoa shoreditch affogato cold-pressed four loko messenger bag try-hard. Distillery yr +1, meh retro you probably haven't heard of them jean shorts lumbersexual wolf austin vape cliche irony cardigan, butcher tbh adaptogen sustainable flannel.</p>
          <button>Donate Today</button>
        </div>

        <img src="/images/nonprofit-section.png" id="nonprofimage" className="hide-when-small" />

        </section>
        
      )
  }
}

export default NonProfitSection;



