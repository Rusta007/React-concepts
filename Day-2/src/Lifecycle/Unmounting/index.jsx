import React , { Component} from 'react';

export default class ComponentWillUpdate extends Component {
   state = {favoritecolor: "red"};

   componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 1000)
    }
    componentDidUpdate() {
      document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
    }
    componentWillUnmount() {
        document.getElementById("mydiv").innerHTML =
        "The State is Unmount favorite ";
      }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv"></div>
        </div>
      );
    }
  }