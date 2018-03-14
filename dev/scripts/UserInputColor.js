import React from "react";

import H2Text from "./H2Text";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class UserInputColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMainColor: ''
        }
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.colorSubmit = this.colorSubmit.bind(this);
        // here is our constructor lifecycle method
    }

    componentDidMount() {
        const userId = firebase.auth().currentUser.uid;
        const dbref = firebase
            .database()
            .ref(`/users/${userId}/name`);
        dbref.on("value", snapshot => {
            const data = snapshot.val();
            console.log(data);
            this.setState({ name: data });
        });
        // here is anything we want to happen after the component renders - like grab our AJAX data
    }

    handleOptionChange(e) {
        this.setState({
            selectedMainColor: e.target.value
        })
        console.log(e.target.value);
    }


    colorSubmit(e) {
        e.preventDefault();
        const color = this.state.selectedMainColor;
        console.log("colorSubmit")
        this.setState({
            selectedMainColor: color
        })
    }

    render() {
        return (
            <div className="UserInputColorContainer wrapper">
                <form action="" className="colorForm" onSubmit={this.colorSubmit} className="content-container">
                    <H2Text className={'mainFont'} text={'Select a Font Color for your Company Title'} />
                    <div className="mainColor">
                        <div className="radio main-color-div">
                            <input type="radio" name="mainColor" value="color-one" id="layoutOne" onChange={this.handleOptionChange} />
                            <label htmlFor="layoutOne" className="btn-color layout-one"></label>
                        </div>
                        <div className="radio main-color-div">
                            <input type="radio" name="mainColor" value={"color-two"} id="layoutTwo" onChange={this.handleOptionChange} />
                            <label htmlFor="layoutTwo" className="btn-color layout-two"></label>
                        </div>
                        <div className="radio main-color-div">
                            <input type="radio" name="mainColor" value={"color-three"} id="layoutThree" onChange={this.handleOptionChange} />
                            <label htmlFor="layoutThree" className="btn-color layout-three"></label>
                        </div>
                        <div className="radio main-color-div">
                            <input type="radio" name="mainColor" value={"color-four"} id="layoutFour" onChange={this.handleOptionChange} />
                            <label htmlFor="layoutFour" className="btn-color layout-four"></label>
                        </div>
                        <div className="radio main-color-div">
                            <input type="radio" name="mainColor" value={"color-five"} id="layoutFive" onChange={this.handleOptionChange} />
                            <label htmlFor="layoutFive" className="btn-color layout-five"></label>
                        </div>
                    </div>
                    
                </form>
                <div className="link-container">
                    <Link to={
                        {
                            pathname: "/UserLogoMark",
                            state: {
                                color: this.state.selectedMainColor
                            }
                        }
                    }><img src="./dev/assets/arrow.svg" alt="" /></Link>
                </div>
            </div>
        )
    }


}

export default UserInputColor;