import React from "react";
import H2Text from "./H2Text";
import LogoMarkOne from "./LogoMarkOne";
import LogoMarkTwo from "./LogoMarkTwo";
import LogoMarkThree from "./LogoMarkThree";
class MyBrands extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: [],
            name: [],
            logo: [],
            color: []
        };
    }
    componentDidMount() {
        const userId = firebase.auth().currentUser.uid;
        const dbref = firebase.database().ref(`/users/${userId}/finalChoice`);
        dbref.on("value", snapshot => {
            const data = snapshot.val();
            console.log(data);
            const state = [];
       
   for (let key in data) {
     console.log(data[key]);
     state.push(data[key]);
   }

            this.setState({
                choice: state
            });
        });

        const dbref2 = firebase.database().ref(`/users/${userId}/finalName`);
        dbref2.on("value", snapshot => {
            const data = snapshot.val();
            console.log(data);

            const state = [];
          for (let key in data) {
            console.log(data[key]);
            state.push(data[key]);
          }
            this.setState({
                name: state
            });
        });
        const dbref3 = firebase.database().ref(`/users/${userId}/finalLogo`);
        dbref3.on("value", snapshot => {
            const data = snapshot.val();
            console.log(data);
            const state = [];
          for (let key in data) {
            console.log(data[key]);
            state.push(data[key]);
          }

            this.setState({
                logo: state
            });
        });

        const dbref4 = firebase.database().ref(`/users/${userId}/finalColor`);
        dbref4.on("value", snapshot => {
            const data = snapshot.val();
            console.log(data);

            const state = [];
           for (let key in data) {
             console.log(data[key]);
             state.push(data[key]);
           }


            this.setState({
                color: state
            });
        });

    }
    render() {
//needed to loop through the firebase choices
var rows = [];
for (var i = 0; i < this.state.choice.length; i++) {
    {this.state.logo === "option1" ? (
        rows.push(<LogoMarkOne
            key={i}
            choice={this.state.choice[i]}
            name={this.state.name[i]}
            color={this.state.color[i]}
        />)
    ) : this.state.logo === "option2" ? (
       rows.push(<LogoMarkTwo
            key={i}
            choice={this.state.choice[i]}
            name={this.state.name[i]}
            color={this.state.color[i]}
        />)
    ) : (
                 rows.push(<LogoMarkThree
                    key={i}
                    choice={this.state.choice[i]}
                    name={this.state.name[i]}
                    color={this.state.color[i]}
                />)
            )}
}


        return <div className="myBrands-container">


            <div className="myBrands">
            {rows}
            </div>

                    
        </div>;
    }
}
export default MyBrands;



