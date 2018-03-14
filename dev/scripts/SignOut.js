import React from "react";
import Home from "./Home";



// signin popup

class SignOut extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            user: {}
        };

        this.signOut = this.signOut.bind(this);
        this.signIn = this.signIn.bind(this);
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

    signIn() {
        //creating a new instance of google auth provider
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
        })

        firebase.auth().signInWithPopup(provider)
            .then((user) => {
                console.log(user);
            });
    }

    signOut() {
        // console.log("Sign out working!");
        
        this.setState({
            loggedIn: false
        })
    }

    render() {
        return (
            <div className="signin-container">
                <div className="signin">
                    {this.state.loggedIn ?
                        <div>
                            <h1>Hello!</h1>
                            <a href=""></a>
                            <button onClick={this.signOut}>Sign Out</button>
                        </div>
                        :
                        <div>
                            <Home />
                        </div>
                    }
                </div>
            </div>
        )
    }
};

export default SignOut;