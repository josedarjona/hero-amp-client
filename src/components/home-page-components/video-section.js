import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class VideoSection extends Component {
  render() {
      return(
          <div>
                    <h2 id="latest-vid-h2">Latest Featured Videos</h2>
                    
                    <section id="mid-hp-vids">


                    
                    <div className="left">

                    <img src="/images/fake-vid.png"/>
                    
                    </div>


                    <div className="right">

                    <div id="first-row-vid-thumbs">
                    <img className="hide-when-tiny" src="/images/fake-vid-thumb.png" />
                    <img className="hide-when-small" src="/images/fake-vid-thumb.png" />
                    </div>

                    <div id="second-row-vid-thumbs">

                    <img className="hide-when-tiny" src="/images/fake-vid-thumb.png" />
                    <img className="hide-when-small" src="/images/fake-vid-thumb.png" />
                    </div>
                    
                    </div>
                    </section>

                    <button id="see-all-vids-btn">See All</button>
          </div>

      )
  }
}

export default VideoSection;