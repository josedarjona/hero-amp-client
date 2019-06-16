import React, { Component } from 'react';

import '../styles/homepage.css';
import '../styles/css/all.css'

import Header from './layout-components/header'
import NavBar from './layout-components/navbar'
import VideoSection from './home-page-components/video-section'
import SponsoredAd from './layout-components/sponsored-ad'

import ContestSection from './home-page-components/contest-section'
import Carousel from './home-page-components/carousel'
import SocialMediaSection from './home-page-components/social-media-section'
import NonProfitSection from './home-page-components/non-profit-section';

import GalleryPreview from './home-page-components/gallery-preview'
import JoinTheClub from './home-page-components/join-the-club'

import Footer from './layout-components/footer'

class HomePage extends Component {
  render() {
    return (

      <div>

       <Header/>
       <NavBar/>

        <div id="hp-main-image"></div>

        <VideoSection />

        <SponsoredAd />

        <ContestSection />

        <Carousel />

        <SocialMediaSection />

        <NonProfitSection />

        <SponsoredAd />

        <GalleryPreview />

        <JoinTheClub />


      </div>
    );
  }
}

export default HomePage;
