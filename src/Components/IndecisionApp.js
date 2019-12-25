import React from 'react';

//For individual components
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

//Normalize css for cross browser styling
import 'normalize.css/normalize.css'

//For styles
import './styles/style.css';

//Using ES6 transform class syntax

export default class IndecisionApp extends React.Component {
  //this.state
  state = {
    options : [],
    selectedOption: undefined,
  };

  //methods for functionality

  //for removing all options
  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }));
  };

  //for removing a single option
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  //for picking a random option
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState( () => ({selectedOption: option}));
  };

  //for adding a new option
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  };

  //for closing the React modal
  closeReactModal = () => {
    this.setState( () => ({selectedOption : undefined}) );
  }
  
  //Renders components to screen
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />

        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
          <OptionModal 
            selectedOption={this.state.selectedOption}
            closeReactModal={this.closeReactModal}
          />
        </div>
      </div>
    );
  }

  //Life-time methods for session storage

  //Checks if previous storage available
  componentDidMount() {
    try {
      const json = sessionStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  };

  //Updates storage on any change
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      sessionStorage.setItem('options', json);
    }
  };
}

