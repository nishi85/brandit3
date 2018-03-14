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
            finalChoice: "",
            finalName: "",
            finalLogo: "",
            finalColor: ""
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
        this.setState({
            color: colorState
        });
        const dbref2 = firebase.database().ref(`/users/${userId}/name`);
        dbref2.on("value", snapshot => {
            const data = snapshot.val();
            console.log(data);
            this.setState({
                name: data
            });
        });
        const dbref3 = firebase.database().ref(`/users/${userId}/logo`);
        dbref3.on("value", snapshot => {
            const data = snapshot.val();
            console.log(data);
            this.setState({
                logo: data
            });
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        // const choice = this.state.choice;
        // const name = this.state.name;
        // const logo = this.state.logo;
         const color = this.state.color;
         const userId = firebase.auth().currentUser.uid;
        // const dbref4 = firebase.database().ref(`/users/${userId}/finalChoice`);
        // const dbref5 = firebase.database().ref(`/users/${userId}/finalName`);
        // const dbref6 = firebase.database().ref(`/users/${userId}/finalLogo`);
         const dbref7 = firebase.database().ref(`/users/${userId}/color`);
        // dbref4.set(choice);
        // dbref5.set(name);
        // dbref6.set(logo);
         dbref7.set(color);
         this.setState({
        //     finalChoice: choice,
        //     finalName: name,
        //     finalLogo: logo,
             color: color
         });
    }
    render() {
        return <div className="userMockUp-container">
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
                <button onClick={this.handleSubmit} className="link-btn">Save my profile</button>
            </div>
        </div>;
    }
}
export default UserMockUp;


// import React from "react";
// import LogoMarkOne from "./LogoMarkOne";
// import LogoMarkTwo from "./LogoMarkTwo";
// import LogoMarkThree from "./LogoMarkThree";
// class UserMockUp extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             choice: "",
//             name: "",
//             logo: "", 
//             color: ""
//         }
//     }
//     componentDidMount() {
//         const userId = firebase.auth().currentUser.uid;
//         const dbref = firebase.database().ref(`/users/${userId}/choice`);
//         dbref.on("value", snapshot => {
//             const data = snapshot.val();
//             console.log(data);
//             this.setState({
//                 choice: data
//             });
//         });

//         const colorState = this.props.location.state.color;
//         this.setState ({
//             color: colorState
//         });
        
//         const dbref2 = firebase.database().ref(`/users/${userId}/name`);
//         dbref2.on("value", snapshot => {
//             const data = snapshot.val();
//             console.log(data);
//             this.setState({
//                 name: data
//             });
//         });
        
//         const dbref3 = firebase.database().ref(`/users/${userId}/logo`);
//         dbref3.on("value", snapshot => {
//             const data = snapshot.val();
//             console.log(data);
//             this.setState({
//                 logo: data
//             });
//         });
//     }
//     render() {
//         return (
//             <div className="userMockUp-container">
//                 <div className="tshirt-container">
//                     <img className="tshirt" src="./dev/assets/tshirt.png" alt="" />
//                     <div className="logoMark-container-tshirt">
//                         {this.state.logo === "option1" ?
//                             <LogoMarkOne choice={this.state.choice} name={this.state.name} color={this.state.color} />

//                             : this.state.logo === "option2" ?
//                                 <LogoMarkTwo choice={this.state.choice} name={this.state.name} color={this.state.color}/>
//                                 :
//                                 <LogoMarkThree choice={this.state.choice} name={this.state.name} color={this.state.color}/>

//                         }
//                     </div>
//                 </div>
//                 <div className="stationary-container">
//                     <img className="stationary" src="./dev/assets/03.jpg" alt="" />
//                     <div className="logoMark-container-stationary1 ">
//                         {this.state.logo === "option1" ?
//                             <LogoMarkOne choice={this.state.choice} color={this.state.color}/>
//                             : this.state.logo === "option2" ?
//                                 <LogoMarkTwo choice={this.state.choice} color={this.state.color}/>
//                                 :
//                                 <LogoMarkThree choice={this.state.choice} color={this.state.color}/>
//                         }
//                     </div>
//                     <div className="logoMark-container-stationary2">
//                         {this.state.logo === "option1" ?
//                             <LogoMarkOne choice={this.state.choice} color={this.state.color}/>
//                             : this.state.logo === "option2" ?
//                                 <LogoMarkTwo choice={this.state.choice} color={this.state.color}/>
//                                 :
//                                 <LogoMarkThree choice={this.state.choice} color={this.state.color}/>
//                         }
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default UserMockUp;

