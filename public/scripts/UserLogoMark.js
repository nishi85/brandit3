import React from "react";
import LogoMarkOne from "./LogoMarkOne";
import LogoMarkTwo from "./LogoMarkTwo";
import LogoMarkThree from "./LogoMarkThree";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class UserLogoMark extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: "",
            name: "",
            logoStyle: "",
            logoState: false,
            color: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const userId = firebase.auth().currentUser.uid;
        const dbref = firebase.database().ref(`/users/${userId}/choice`);
        dbref.on("value", snapshot => {
            const data = snapshot.val();
            this.setState({
                choice: data
            });
        });

        const userId2 = firebase.auth().currentUser.uid;
        const dbref2 = firebase.database().ref(`/users/${userId}/name`);
        dbref2.on("value", snapshot => {
            const data = snapshot.val();
            this.setState({
                name: data
            });
        });

        const colorState = this.props.location.state.color;
        this.setState({
            color: colorState
        });


    }

    handleChange(e) {
        this.setState({
            logoStyle: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const userId = firebase.auth().currentUser.uid;
        const logo = this.state.logoStyle;
        const dbref = firebase.database().ref(`/users/${userId}/logo`);

        dbref.set(logo);
        this.setState({
            logoState: true
        });
    }

    render() {
        return (
            <div className="userLogoMark-container">
                <form onSubmit={this.handleSubmit}>
                        <input className="checked" type="radio" checked value="option1" id="opt1" onChange={this.handleChange} checked={this.state.logoStyle === "option1"} />
                    <label className="label-logoMark" htmlFor="opt1">
                        <LogoMarkOne choice={this.state.choice} name={this.state.name} color={this.state.color} />
                    </label>
                        <input className="checked" type="radio" checked value="option2" id="opt2" onChange={this.handleChange} checked={this.state.logoStyle === "option2"} />
                    <label className="label-logoMark" htmlFor="opt2">
                        <LogoMarkTwo choice={this.state.choice} name={this.state.name} color={this.state.color} />
                    </label>
                        <input className="checked" type="radio" checked value="option3" id="opt3" onChange={this.handleChange} checked={this.state.logoStyle === "option3"} />
                    <label className="label-logoMark" htmlFor="opt3">
                        <LogoMarkThree choice={this.state.choice} name={this.state.name} color={this.state.color} />
                    </label>
                    <input type="submit" value="Choose an Icon" className="link-btn"/>
                </form>
                <div className="link-container">
                    <Link to={
                            {
                                pathname: "/UserMockUp",
                                state: {
                                    color: this.state.color
                                }
                            }
                        }>
                        <img src="./dev/assets/arrow.svg" alt="" />
                    </Link>
                </div>
            </div>
        )
    }
}

export default UserLogoMark;