import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


//inside the home component 

// input text your company
// input text your keywords


class UserInputText extends React.Component {

  constructor() {
    super();
    this.state = {
      icons: [],
      query: "",
      icons2: [],
      query2: "",
      icons3: [],
      query3: "",
      companyName: "",
      searched: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchIcons = this.searchIcons.bind(this);
    this.searchIcons2 = this.searchIcons2.bind(this);
    this.searchIcons3 = this.searchIcons3.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  searchIcons() {
    const query = this.state.query;
    axios
      .get("https://brandit2018.herokuapp.com/v1/", {
        params: {
          url: `icons/${this.state.query}`,
          params: JSON.stringify({
          })
        }
      })
      .then(({ data }) => {
        console.log(data.icons);
        const iconsState = [];
        for (let i = 0; i < 2; i++) {
          iconsState.push(data.icons[Math.floor(Math.random() * data.icons.length)]);
          this.setState({
            icons: iconsState,
            query: ""
          });
        }
      });
  }

  searchIcons2() {
    const query = this.state.query2;
    axios
      .get("https://brandit2018.herokuapp.com/v1/", {
        params: {
          url: `icons/${this.state.query2}`,
          params: JSON.stringify({
            // limit: 2
          })
        }
      })
      .then(({ data }) => {
        console.log(data.icons);
        const iconsState = [];
        for (let i = 0; i < 2; i++) {
          iconsState.push(data.icons[Math.floor(Math.random() * data.icons.length)]);
          this.setState({
            icons2: iconsState,
            query2: ""
          });
        }
      });
  }

  searchIcons3() {
    const query = this.state.query3;
    axios
      .get("https://brandit2018.herokuapp.com/v1/", {
        params: {
          url: `icons/${this.state.query3}`,
          params: JSON.stringify({
          })
        }
      })
      .then(({ data }) => {
        console.log(data.icons);
        const iconsState = [];
        for (let i = 0; i < 2; i++) {
          iconsState.push(data.icons[Math.floor(Math.random() * data.icons.length)]);
          this.setState({
            icons3: iconsState,
            query3: ""
          });
        }
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.searchIcons();
    this.searchIcons2();
    this.searchIcons3();

    const name = this.state.companyName;
    const userId = firebase.auth().currentUser.uid;
    const dbref = firebase.database().ref(`/users/${userId}/name`)
    // const dbref = firebase.database().ref("/name");
    dbref.set(name);
    this.setState({
      companyName: name,
      searched: true
    });
  }



  render() {
    return <div className="uitWrapper clearfix">
      <form className="clearfix" onSubmit={this.handleSubmit}>
        <label htmlFor="query" className="mainFont">Your Company Name: </label>
        <input type="text" value={this.state.companyName} maxLength="15" onChange={this.handleChange} id="companyName" required />
        <label htmlFor="query" className="mainFont">Your key words: </label>

        <div className="searchHolder clearfix">
          <input type="search" value={this.state.query} onChange={this.handleChange} id="query" required />
          <input type="search" value={this.state.query2} onChange={this.handleChange} id="query2" required />
          <input type="search" value={this.state.query3} onChange={this.handleChange} id="query3" required />
        </div>

        <div className="btnHolder">
          {this.state.searched === true ? (
            <input type="submit" value="Search again" className="link-btn"/>
          ) : (
              <input type="submit" value="Search" className="link-btn"/>
            )}
        </div>
      </form>

      {this.state.icons.length > 1 ?

        <div className="linkContainer">
          <Link to={{
            pathname: "/UserLogoIcon",
            state: { icons: this.state.icons, query: this.state.query, icons2: this.state.icons2, query2: this.state.query2, icons3: this.state.icons3, query3: this.state.query3, companyName: this.state.companyName }
          }}>
            
              <img src="./dev/assets/arrow.svg" alt="" />
            
          </Link>
        </div>
        : null}

    </div>;
  }
}

export default UserInputText;



//  {this.state.logoState === true && this.state.logoStyle === "option1" ?  : null;
//  }
