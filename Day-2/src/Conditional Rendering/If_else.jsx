import React, { Component } from 'react'

class Ifelse extends Component{
    
        state = {text: '', inputText: '', mode:'view'};
        
        handleChange = this.handleChange.bind(this);
        handleSave = this.handleSave.bind(this);
        handleEdit = this.handleEdit.bind(this);
      
      handleChange(e) {
        this.setState({ inputText: e.target.value });
      }
      
      handleSave() {
        this.setState({text: this.state.inputText, mode: 'view'});
      }
    
      handleEdit() {
        this.setState({mode: 'edit'});
      }
      
      render () {
        if(this.state.mode === 'view') {
          return (
            <div>
              <p>Message: {this.state.text}</p>
              <button onClick={this.handleEdit}>
                Edit
              </button>
            </div>
          );
        } else {
          return (
            <div>
              <p>Message: {this.state.text}</p>
                <input
                  onChange={this.handleChange}
                  value={this.state.inputText}
                  placeholder = "Enter Random Text"
                />
              <button onClick={this.handleSave}>
                Save
              </button>
            </div>
          );
        }
      }
}

export default Ifelse