import React from "react";
import MyBrands from './MyBrands';
import Home from './Home';

// signin popup

class SignIn extends React.Component {
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
        this.unsubscribe = firebase.auth().onAuthStateChanged((response) => {
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

    componentWillUnmount() {
        this.unsubscribe();
    }

    signIn() {
        console.log("signing In!");
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
        firebase.auth().signOut();
        this.setState({
            loggedIn: false
        })
    }

    render() {
        return (
            <div className="signin-container">
                <div className="signin">
                    {this.state.loggedIn ?
                        <Home loggedIn={this.state.loggedIn} />
                        :
                        <div className="log-in-launch">
                            <h1>Brand It</h1>
                            <h4>Please sign in with:</h4>
                            <button className="link-btn" onClick={this.signIn}>Google</button>
                        </div>
                    }
                </div>
            </div>
        )
    }
};

export default SignIn;