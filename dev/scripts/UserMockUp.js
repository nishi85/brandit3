import React from "react";
import LogoMarkOne from "./LogoMarkOne";
import LogoMarkTwo from "./LogoMarkTwo";
import LogoMarkThree from "./LogoMarkThree";
class UserMockUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: "",
            name: "",
            logo: "",
            color: "",
            finalChoice: [],
            finalName: [],
            finalLogo: [],
            finalColor: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        const userId = firebase.auth().currentUser.uid;
        const dbref = firebase.database().ref(`/users/${userId}/choice`);
        dbref.on("value", snapshot => {
            const data = snapshot.val();
            console.log(data);
            this.setState({
                choice: data
            });
        });
        const colorState = this.props.location.state.color;
        const logoStyle = this.props.location.state.logo;
        this.setState({
            color: colorState,
            logo: logoStyle
        });
        const dbref2 = firebase.database().ref(`/users/${userId}/name`);
        dbref2.on("value", snapshot => {
            const data = snapshot.val();
            console.log(data);
            this.setState({
                name: data
            });
        });
    }
    handleSubmit(e) {
        // e.preventDefault();
        //  const color = this.state.color;
        //  const userId = firebase.auth().currentUser.uid;
        //  const dbref7 = firebase.database().ref(`/users/${userId}/color`);
        //  dbref7.set(color);
        //  const logo = this.state.logo;
        //  const dbref8 = firebase.database().ref(`/users/${userId}/logo`);
        //  dbref8.set(logo);
        //  this.setState({
        //      color: color,
        //      logo: logo
        //  });

        e.preventDefault();
         const userId = firebase.auth().currentUser.uid;
         const color = this.state.color;
         const dbref7 = firebase.database().ref(`/users/${userId}/finalColor`);
         dbref7.push(color);
         const logo = this.state.logo;
         const dbref8 = firebase.database().ref(`/users/${userId}/finalLogo`);
         dbref8.push(logo);
         const name = this.state.name;
         const dbref9 = firebase.database().ref(`/users/${userId}/finalName`);
         dbref9.push(name);
         const choice = this.state.choice;
         const dbref10 = firebase.database().ref(`/users/${userId}/finalChoice`);
         dbref10.push(choice);
         this.setState({
             color: color,
             logo: logo,
             name: name,
             choice: choice

         });

    }
    render() {
        return <div className="userMockUp-container">
        <h3 class="mockUpHeader"> Scroll down to see your mockups. You can save the final design by clicking the 'save my profile' button below. Design will be saved to the 'my brands' section.</h3>
            <div className="tshirt-container">
                <img className="tshirt" src="./dev/assets/tshirt.png" alt="" />
                <div className="logoMark-container-tshirt">
                    {this.state.logo === "option1" ? (
                        <LogoMarkOne
                            choice={this.state.choice}
                            name={this.state.name}
                            color={this.state.color}
                        />
                    ) : this.state.logo === "option2" ? (
                        <LogoMarkTwo
                            choice={this.state.choice}
                            name={this.state.name}
                            color={this.state.color}
                        />
                    ) : (
                                <LogoMarkThree
                                    choice={this.state.choice}
                                    name={this.state.name}
                                    color={this.state.color}
                                />
                            )}
                </div>
            </div>
            <div className="stationary-container">
                <img className="stationary" src="./dev/assets/03.jpg" alt="" />
                <div className="logoMark-container-stationary1 ">
                    {this.state.logo === "option1" ? (
                        <LogoMarkOne
                            choice={this.state.choice}
                            color={this.state.color}
                        />
                    ) : this.state.logo === "option2" ? (
                        <LogoMarkTwo
                            choice={this.state.choice}
                            color={this.state.color}
                        />
                    ) : (
                                <LogoMarkThree
                                    choice={this.state.choice}
                                    color={this.state.color}
                                />
                            )}
                </div>
                <div className="logoMark-container-stationary2">
                    {this.state.logo === "option1" ? (
                        <LogoMarkOne
                            choice={this.state.choice}
                            color={this.state.color}
                        />
                    ) : this.state.logo === "option2" ? (
                        <LogoMarkTwo
                            choice={this.state.choice}
                            color={this.state.color}
                        />
                    ) : (
                                <LogoMarkThree
                                    choice={this.state.choice}
                                    color={this.state.color}
                                />
                            )}
                </div>
            </div>
            <div className="btnHolder">
                <button onClick={this.handleSubmit} className="link-btn">Save My Profile</button>
            </div>
        </div>;
    }
}
export default UserMockUp;




