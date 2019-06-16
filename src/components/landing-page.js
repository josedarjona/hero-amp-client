import React, { Component } from "react";

import "../styles/css/all.css";
import "../styles/css/landing.css";
import "../styles/css/mailchimp.css";

// import GithubCorner from "react-github-corner";

import MailchimpSubscribe from "./mailchimp-subscribe/mailchimp-subscribe";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://www.youtube.com/embed/8c2zVZpHtn4?ecver=2&enablejsapi=1",
        "https://www.youtube.com/embed/UZJxDAcaiwA?ecver=2&enablejsapi=1",
        "https://www.youtube.com/embed/dr5SvcHe3Gk?ecver=2&enablejsapi=1",
        "https://www.youtube.com/embed/8d0fJpilYPk?ecver=2&enablejsapi=1",
        "https://www.youtube.com/embed/JZ36vXjK8Dc?ecver=2&enablejsapi=1"
      ],
      temp: ""
    };
  }

  scroll(direction) {
    const tempArray = this.state.images.slice();
    let source = "";
    if (direction === "right") {
      source = this.state.images[0];
      tempArray.shift();
      tempArray.push(source);
      this.setState({ temp: source, images: tempArray });
    } else {
      source = this.state.images[this.state.images.length - 1];
      tempArray.pop();
      tempArray.unshift(source);
      this.setState({ temp: source, images: tempArray });
    }
  }
  render() {
    const url =
      "https://gmail.us20.list-manage.com/subscribe/post-json?u=500cf43f0dc12ed6d83d39375&amp;id=29e4bc9e01";
    return (
      <div className="landing-component">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
          </nav>
        </header>

        <video
          className="banner"
          src="images/amp-landing-mov.mp4"
          type="video/mp4"
          loop={true}
          autoPlay={true}
        />

        <div className="mailchimp wrapper">
          <div className="box">
            <div id="outer-carousel">
              <i
                className="fas fa-arrow-left left"
                onClick={() => {
                  this.scroll("left");
                }}
              />
              <div id="carousel">
                <iframe
                  title="one"
                  id="imageOne"
                  frameBorder="0"
                  className="video"
                  height="300"
                  width="300"
                  src={this.state.images[0]}
                />

                <iframe
                  title="two"
                  id="imageTwo"
                  frameBorder="0"
                  className="video hide-when-tiny"
                  height="300"
                  width="300"
                  src={this.state.images[1]}
                />

                <iframe
                  title="three"
                  id="imageThree"
                  frameBorder="0"
                  className="video hide-when-small"
                  height="300"
                  width="300"
                  src={this.state.images[2]}
                />
              </div>
              <i
                className="fas fa-arrow-right"
                onClick={() => {
                  this.scroll("right");
                }}
              />
            </div>

            <MailchimpSubscribe url={url} />

            {/* <div className="ads-div">
              <img src="images/300x200.jpg" alt="" className="ad-left"></img>

              <img src="images/300x200.jpg" alt="" className="ad-right"></img>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}


export default LandingPage;
