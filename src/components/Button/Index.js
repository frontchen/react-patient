import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Button} from 'antd-mobile';

export default class UserAvatar extends Component {
  // check props
  static propTypes = {
    type: PropTypes.string,
  };

  // default props
  static defaultProps = {
    type: 'main',
  };

  render () {
    const {children, type, onClick} = this.props;

    let buttonColor, buttonBjColor, buttonbdColor;

    switch (type) {
      case 'main':
        buttonColor = '#FFFFFF';
        buttonBjColor = '#282C6D';
        buttonbdColor = buttonBjColor;
        break;
      case 'disabled':
        buttonColor = '#fff';
        buttonBjColor = '#AAAAAA';
        buttonbdColor = buttonColor;
        break;
      case 'pay':
        buttonColor = '#FFFFFF';
        buttonBjColor = '#FC9014';
        buttonbdColor = buttonBjColor;
        break;
      case 'white':
        buttonColor = '#333';
        buttonBjColor = '#FFFFFF';
        buttonbdColor = buttonColor;
        break;
      default:
        break;
    }

    let className = {
      color: buttonColor,
      backgroundColor: buttonBjColor,
      borderColor: buttonbdColor,
    };

    return (
      <Button onClick={onClick} style={className} {...this.props}>
        {children}
      </Button>
    );
  }
}
