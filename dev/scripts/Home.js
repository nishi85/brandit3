import React from "react";
import Gallery from "./Gallery";
import Footer from "./Footer";
import SignIn from "./SignIn";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Slider from "react-slick";

//inside the home component 

//nav bar
//gallery
//button

const Home = (props) => {
  return (
    <div className="home-container">
      <div className="home">
        <div className="home-left">
          <img src="./dev/assets/brandItLogoOrange.png" alt="" />
          <h2>Brandit</h2>
          <p>
            Welcome to BrandIt - your one stop shop for bespoke logo's and custom branding. Get started below.
            </p>
          {props.loggedIn ?
            <Link to={`/UserInputText`}>
              <button className="link-btn"> Get Started </button>
            </Link>
            :
            <Link to="/signin" className="link-btn"><button className="link-btn">Sign In</button></Link>
          }
        </div>
        <div className="home-right">
          <Gallery />
        </div>
      </div>
      <Footer />

    </div>
  )
}


export default Home;
