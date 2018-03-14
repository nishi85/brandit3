import React from "react";
import H2Text from "./H2Text";
import LogoMarkOne from "./LogoMarkOne";
import LogoMarkTwo from "./LogoMarkTwo";
import LogoMarkThree from "./LogoMarkThree";
class MyBrands extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: "",
            name: "",
            logo: "",
            color: ""
        };
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

        const dbref4 = firebase.database().ref(`/users/${userId}/color`);
        dbref4.on("value", snapshot => {
            const data = snapshot.val();
            console.log(data);
            this.setState({
                color: data
            });
        });

    }
    render() {
        return <div className="myBrands-container">
            <div className="myBrands">
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
        </div>;
    }
}
export default MyBrands;






// import React from "react";

// import H2Text from "./H2Text";

// class MyBrands extends React.Component {
//     render() {
//         return (
//             <div className="myBrands-container">
//                 <div className="myBrands">
//                     <H2Text className={'mainFont'} text={'My Saved Brands'} />
//                     <p>This tool is coming soon!</p>
//                 </div>
//             </div>
//         )
//     }
// }

// export default MyBrands;
