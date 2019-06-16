import React, { Component } from 'react';

import '../styles/css/all.css'
import '../styles/css/press-page.css'



import Header from './layout-components/header'
import NavBar from './layout-components/navbar'


import Footer from './layout-components/footer'

class PressPage extends Component {
  render() {
    return (
      
      <div>
      <Header/>
      <NavBar/>

      <img src="/images/press-header.png" className="press-header"/>

      <div className="press-section">
      <h2 id="">PRESS</h2>
      
      <div className="centered">


        <div className="cards">
          <div className="card">
            <a href="https://www.eonline.com/photos/24507/nbcuniversal-upfront-2018-red-carpet-arrivals/846756">
          
            <img src="/images/e-news.png" 
            alt="" className="thumbnail" />
          
            </a>
            <p>E Online!</p>
            
          </div>

          <div className="card">
            <a href="https://www.usmagazine.com/entertainment/news/ana-maria-polo-i-admire-judge-judy-immensely-w495937/">
            
            <img src="/images/us-news.png" 
            alt="" className="thumbnail" />
          
            </a>
            <p>US Weekly!</p>
          </div>

          <div className="card">
            <a href="https://peopleenespanol.com/celebridades/caso-cerrado-cumple-18-anos-en-television/">
            
            <img src="/images/people-news.png" 
            alt="" className="thumbnail" />
          
            </a>
            <p>People en Español!</p>
          </div>

          <div className="card">
            <a href="https://www.eonline.com/photos/24507/nbcuniversal-upfront-2018-red-carpet-arrivals/846756">
          
            <img src="/images/e-news.png" 
            alt="" className="thumbnail" />
          
            </a>
            <p>E Online!</p>
            
          </div>

          <div className="card">
            <a href="https://www.usmagazine.com/entertainment/news/ana-maria-polo-i-admire-judge-judy-immensely-w495937/">
            
            <img src="/images/us-news.png" 
            alt="" className="thumbnail" />
          
            </a>
            <p>US Weekly!</p>
          </div>

          <div className="card">
            <a href="https://peopleenespanol.com/celebridades/caso-cerrado-cumple-18-anos-en-television/">
            
            <img src="/images/people-news.png" 
            alt="" className="thumbnail" />
          
            </a>
            <p>People en Español!</p>
          </div>

          <div className="card">
            <a href="https://www.eonline.com/photos/24507/nbcuniversal-upfront-2018-red-carpet-arrivals/846756">
          
            <img src="/images/e-news.png" 
            alt="" className="thumbnail" />
          
            </a>
            <p>E Online!</p>
            
          </div>

          <div className="card">
            <a href="https://www.usmagazine.com/entertainment/news/ana-maria-polo-i-admire-judge-judy-immensely-w495937/">
            
            <img src="/images/us-news.png" 
            alt="" className="thumbnail" />
          
            </a>
            <p>US Weekly!</p>
          </div>

        </div>

      </div>

      </div>
      
      <Footer/>

      </div>
    );
  }
}

export default PressPage;
