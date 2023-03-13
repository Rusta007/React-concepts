import React, { Component } from 'react';

export default class ComponentDidMount extends Component{
    state = {favoritecolor: "red"};

    componentDidMount() {
        setTimeout(() => {
          this.setState({favoritecolor: "yellow"})
        }, 1000)
      }
    render(){
        return(<>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        </>)
    }
}