import React from "react";
import PropTypes from 'prop-types';
import "./button.css"

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const text = this.props.text;
    const color = this.props.color;
    const onClickHandler = this.props.onClick;
    return (

      <button
        className = "button"
        style={{ backgroundColor: color }}
        onClick={onClickHandler}
      >
        {text}
      </button>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
};