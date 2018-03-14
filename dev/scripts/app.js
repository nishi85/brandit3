import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer'


import About from './About';
import SignIn from './SignIn';
import Contact from './Contact';
import MyBrands from './MyBrands';
import UserInputText from './UserInputText'
import UserLogoIcon from './UserLogoIcon';
import UserInputColor from './UserInputColor';
import UserLogoMark from './UserLogoMark';
import UserMockUp from './UserMockUp';


import {
  BrowserRouter as Router,
  Route,
  Link,
  } from 'react-router-dom';


  // Initialize Firebase

var config = {
  apiKey: "AIzaSyD9jDcaoMT9Tc8KnBiMKRXjlaKsQg3PCzU",
  authDomain: "branditproject.firebaseapp.com",
  databaseURL: "https://branditproject.firebaseio.com",
  projectId: "branditproject",
  storageBucket: "branditproject.appspot.com",
  messagingSenderId: "734808400111"
};
firebase.initializeApp(config);



class App extends React.Component {
 constructor() {
   super()
   this.state = {
     loggedIn: false,
     user: {}

   }
 }

 componentDidMount() {
    //setting up google authentication
    firebase.auth().onAuthStateChanged((response) => {
      // console.log(response);
      if (response) {
        this.setState({
          loggedIn: true,
          user: response
        })
      } else {
        this.setState({
          loggedIn: false,
          user: {}
        })
      }
    })
 } 
 
  render() {

    return (
      <Router>
        <div>
            <div className="app-container">
              {/* <NavBar signIn={this.state.signIn}/> */}
              <NavBar loggedIn={this.state.loggedIn}/>
              {/* Adding paths to different "pages" */}
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/mybrands" exact component={MyBrands} />
              <Route path="/signin" exact component={SignIn} />
              <Route path="/contact" exact component={Contact} /> 
              <Route path="/UserInputText" exact component={UserInputText} /> 
              <Route path="/UserLogoIcon" exact component={UserLogoIcon} /> 
              <Route path="/UserInputColor" exact component={UserInputColor} />
              <Route path="/UserLogoMark" exact component={UserLogoMark} />
              <Route path="/UserMockUp" exact component={UserMockUp} />
            </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

