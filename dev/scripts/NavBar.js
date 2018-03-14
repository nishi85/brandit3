import React from "react";

import Home from './Home';
import About from './About';
import MyBrands from './MyBrands';
import SignIn from './SignIn';
import Contact from './Contact';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


const navBar = (props) => {
    return (
       
        <div className="mainHeader">
            <nav className="nav-left">
                <ul>
                    <li>   
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                        
                    </li>
                </ul>
            </nav>
            <nav className="nav-right">
                {props.loggedIn ?
                <ul>
                    <li>
                        <Link to="/mybrands">My Brands</Link>
                    </li>
                    <li>
                        <a href="" onClick={() => firebase.auth().signOut()}>Sign Out</a>

                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                :
                <ul>
                    <li>
                        <Link to="/signin">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                }
            </nav>  
         
        </div>
    )
}

export default navBar;
    
    
// if sign in