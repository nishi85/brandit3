import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class UserLogoIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: "",
      selection: false
    };
    this.handleChoice = this.handleChoice.bind(this);

  }

  handleChoice(url) {
    console.log(url);
    const choice = url;
    const userId = firebase.auth().currentUser.uid;
    const dbref = firebase.database().ref(`/users/${userId}/choice`);
    dbref.set(choice);
    this.setState({
      choice: choice,
      selection: true
    });
  }

  render() {
    return <div className="uliWrapper clearfix">
      <div className="logoSelector clearfix">
        <h2>Choose your logo icon:</h2>

        {this.props.location.state.icons.map(icon => {
          return <div className="icon_ctn">
            <button onClick={() => {
              this.handleChoice(icon.preview_url);
            }}>
              <img className="icon_fill" src={icon.preview_url} alt="" />
            </button>
          </div>;
        })}

        {this.props.location.state.icons2.map(icon => {
          return <div className="icon_ctn">
            <button onClick={() => {
              this.handleChoice(icon.preview_url);
            }}>
              <img className="icon_fill" src={icon.preview_url} alt="" />
            </button>
          </div>;
        })}

        {this.props.location.state.icons3.map(icon => {
          return <div className="icon_ctn">
            <button onClick={() => {
              this.handleChoice(icon.preview_url);
            }}>
              <img className="icon_fill" src={icon.preview_url} alt="" />
            </button>
          </div>;
        })}
      </div>

      <div className="logoSelection clearfix">
        <h2>Your current selection:</h2>

        <div className="logoContainer">
          <img src={this.state.choice} alt="" />
        </div>
      </div>


      <div className="linkContainer">

        <Link to={`/UserInputColor`}>
          
            <img src="./dev/assets/arrow.svg" alt="" />
          
        </Link>
      </div>


    </div>;
  }
}

export default UserLogoIcon;