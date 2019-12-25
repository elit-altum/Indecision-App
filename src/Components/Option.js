//Imports React from node_modules
import React from 'react';

const Option = (props) => (
  <div className="option">
    <p className="option__item">{props.count}. {props.optionText}</p>
    <button
      className="option__remove"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;