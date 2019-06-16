

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class SocialMediaSection extends Component {
  render() {
      return(
          
        <section id="hp-soc-med-section">

        <h2>Social Medial Previews</h2>

       <div id="hp-soc-med-prevs">

        {/* <div id="facebook-div"></div> */}
        <div id="facebook-div" className="fb-page" data-href="https://www.facebook.com/AnaMariaPolo/" data-tabs="timeline" data-width="275" data-height="350" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/AnaMariaPolo/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/AnaMariaPolo/">Ana Maria Polo</a></blockquote></div>

        <div id="instagram-div"></div>

        <div id="twitter-div"></div>

       </div>

        </section>
        
      )
  }
}

export default SocialMediaSection;



