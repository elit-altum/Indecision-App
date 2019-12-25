import React from 'react';
import Modal from 'react-modal'

const OptionModal = (props) => (
    
    <Modal 
        isOpen={!!props.selectedOption}
        onRequestClose={props.closeReactModal}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
        contentLabel="Selected Option"
    >
        <h3 className="modal__header">Selected Option: </h3>
        <p className="modal__selected-option">{props.selectedOption}</p>
        <button
            onClick={props.closeReactModal}
            className="button modal-close-button"
        >
            Okay!
        </button>
    </Modal>
);

export default OptionModal;

