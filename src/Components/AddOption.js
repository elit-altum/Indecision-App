import React from 'react';

//component for adding new options
//Using ES6 transfrom-classes-syntax

export default class AddOption extends React.Component {
  //this.state  
  state = {
    error: undefined,
  };


  //Methods for functionality

  //for adding a new option
  handleAddOption =(e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };


  //For rendering components to screen
  render() {
    return (
      <div className="add-option">
        {this.state.error && <p className="add-option__error">{this.state.error}</p>}
        <form className="add-option__form" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">+</button>
        </form>
      </div>
    );
  }
}