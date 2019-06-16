import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/home-page";
import LandingPage from "./components/landing-page";
import ContestPage from "./components/contest-page";
import PressPage from "./components/press-page";

import { Switch, Route } from "react-router-dom";





// import ContestPage from "./components/contest-page";
import ContactUsPage from "./components/contact-us-page";

class App extends Component {
  render() {
    return (
      <div className="App">


        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/" component={LandingPage} />
          {/* <Route exact path='/signup' render={() => <Signup  {...this.props} setTheUserInTheAppComponent={this.logMeIn}/>}/> */}
          <Route exact path="/contest" component={ContestPage} /> 
          <Route exact path="/contact" component={ContactUsPage} />
          <Route exact path="/press" component={PressPage} />
        </Switch>

        
      </div>
    );
  }
}

export default App;
