import React from "react";
import PropTypes from 'prop-types';
import "./modal.css"

export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal (e) {
      if (!e.target.closest(".modal")) {
      this.props.onCloseClick();
    }
  }

  render() {
    const headerText = this.props.headerText;
    const isCloseButton = this.props.isCloseButton;
    const mainText = this.props.mainText;
    const actionButtons = this.props.actionButtons;
    const onCloseClick = this.props.onCloseClick;

    const closeButton = isCloseButton ?
      <button
        className="close-button"
        onClick={onCloseClick}
      >X</button> : "";

    if (this.props.show === false) return null;
    return (
      <div className="backdrop" onClick={this.closeModal}>
        <div className="modal">
          <div className="modal__header">            
            <h1 className="modal__header__text">{headerText}</h1>
            {closeButton}
          </div>
          <div className="modal__body">
            <p className="modal__text">
              {mainText}
            </p>
          </div>
          <div className="modal__footer">
            {actionButtons}
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  headerText: PropTypes.string,
  isCloseButton: PropTypes.bool,
  mainText: PropTypes.string,
  actionButtons: PropTypes.array,
  onCloseClick: PropTypes.func
};