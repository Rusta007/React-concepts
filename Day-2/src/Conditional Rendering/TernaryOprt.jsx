import React, { Component } from 'react'

export default class Ternary extends Component{
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
    const view = this.state.mode === 'view';
    
    return (
      <div>
        <p>Message: {this.state.text}</p>
        
        {
          view ? null
          : (
            <p>
              <input
                onChange={this.handleChange}
                value={this.state.inputText} 
                placeholder = "Enter random message !!"
                />
            </p>
          )
        }
        
        <button
          onClick={
            view ? this.handleEdit : this.handleSave
          }
        >
          {view ? 'Edit' : 'Save'}
        </button>
      </div>
    );
  }
}