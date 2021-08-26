import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
      // for deciding if the modal will be open or not
      isOpen = {! !props.selectedOption}
      // for help user to close the modal via ESC button or 
      // clicking a place is not on the modal
      onRequestClose = {props.handleClearSelectedOption}
      contentLabel = "Selected Option"
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}

      <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;