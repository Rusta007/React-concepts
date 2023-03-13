import React , {Component} from 'react';

export default class ANDoperator extends Component {
   
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
          <p>Text: {this.state.text}</p>
          
          {
            !view && (
              <p>
                <input
                  onChange={this.handleChange}
                  value={this.state.inputText} />
              </p>
            )
          }
          
          <button
            onClick={
              view 
                ? this.handleEdit 
                : this.handleSave
            }
          >
            {view ? 'Edit' : 'Save'}
          </button>
        </div>
      );
    }
  }