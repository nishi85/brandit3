import React from "react";
import H2Text from "./H2Text";
import LogoMarkOne from "./LogoMarkOne";
import LogoMarkOneFinal from "./LogoMarkOneFinal";
import LogoMarkTwo from "./LogoMarkTwo";
import LogoMarkTwoFinal from "./LogoMarkTwoFinal";
import LogoMarkThree from "./LogoMarkThree";
import LogoMarkThreeFinal from "./LogoMarkThreeFinal";
import deleteBTN from "./deleteBTN";
class MyBrands extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: [],
            choiceKey: [],
            name: [],
            nameKey: [],
            logo: [],
            logoKey: [],
            color: [],
            colorKey:[]
        };
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove(a,b,c,d) {
    const userId = firebase.auth().currentUser.uid;
    const dbref= firebase.database().ref(`/users/${userId}/finalChoice/${a}`);
    const dbref2 = firebase.database().ref(`/users/${userId}/finalName/${b}`);
    const dbref3 = firebase.database().ref(`/users/${userId}/finalColor/${c}`);
    const dbref4 = firebase.database().ref(`/users/${userId}/finalLogo/${d}`);
    dbref.remove();
    dbref2.remove();
    dbref3.remove();
    dbref4.remove();

    }


    componentDidMount() {
        const userId = firebase.auth().currentUser.uid;
        const dbref = firebase.database().ref(`/users/${userId}/finalChoice`);
        dbref.on("value", snapshot => {
            const data = snapshot.val();
            console.log(data);
            const state = [];
            const stateKey =[];
       
   for (let key in data) {
     console.log(key);
     stateKey.push(key);
     state.push(data[key]);
   }

            this.setState({
                choice: state,
                choiceKey: stateKey
            });
        });

        const dbref2 = firebase.database().ref(`/users/${userId}/finalName`);
        dbref2.on("value", snapshot => {
            const data = snapshot.val();
            console.log(data);
            const stateKey = [];
            const state = [];
          for (let key in data) {
            console.log(data[key]);
            state.push(data[key]);
          }
            this.setState({
                name: state,
                nameKey: stateKey
            });
        });
        const dbref3 = firebase.database().ref(`/users/${userId}/finalLogo`);
        dbref3.on("value", snapshot => {
            const data = snapshot.val();
            console.log(data);
            const stateKey = [];
            const state = [];
          for (let key in data) {
            console.log(data[key]);
            state.push(data[key]);
          }

            this.setState({
                logo: state,
                logoKey: stateKey
            });
        });

        const dbref4 = firebase.database().ref(`/users/${userId}/finalColor`);
        dbref4.on("value", snapshot => {
            const data = snapshot.val();
            console.log(data);
            const stateKey = [];
            const state = [];
           for (let key in data) {
             console.log(data[key]);
             state.push(data[key]);
           }


            this.setState({
                color: state,
                colorKey: stateKey
            });
        });

    }
    render() {
//needed to loop through the firebase choices
var rows = [];
for (var i = 0; i < this.state.choice.length; i++) {
    {this.state.logo[i] === "option1" ? (
        rows.push(<LogoMarkOneFinal
            key={i}
            choiceKey={this.state.choiceKey[i]}
            colorKey={this.state.colorKey[i]}
            nameKey={this.state.nameKey[i]}
            logoKey={this.state.logoKey[i]}
            choice={this.state.choice[i]}
            name={this.state.name[i]}
            color={this.state.color[i]}
            remove ={this.handleRemove}
            logo={this.state.logo[i]}
        />)
    ) : this.state.logo[i] === "option2" ? (
       rows.push(<LogoMarkTwoFinal
            key={i}
            choiceKey={this.state.choiceKey[i]}
             colorKey={this.state.colorKey[i]}
            nameKey={this.state.nameKey[i]}
            logoKey={this.state.logoKey[i]}
            choice={this.state.choice[i]}
            name={this.state.name[i]}
            color={this.state.color[i]}
            remove ={this.handleRemove}
             logo={this.state.logo[i]}
        />)
    ) : (
                 rows.push(<LogoMarkThreeFinal
                    key={i}
                    choiceKey={this.state.choiceKey[i]}
                     colorKey={this.state.colorKey[i]}
                    nameKey={this.state.nameKey[i]}
                     logoKey={this.state.logoKey[i]}
                    choice={this.state.choice[i]}
                    name={this.state.name[i]}
                    color={this.state.color[i]}
                    remove ={this.handleRemove}
                     logo={this.state.logo[i]}
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



