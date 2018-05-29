import React, {Component} from 'react';
import {Badge} from 'antd-mobile';
import PropTypes from 'prop-types';

import './Index.less';

export default class UserAvatar extends Component {
  // check props
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    borderRadius: PropTypes.number,
    url: PropTypes.string,
    alt: PropTypes.string,
    show: PropTypes.string,
  };

  // default props
  static defaultProps = {
    width: 50,
    height: 50,
    borderRadius: 5,
    url: '',
    alt: '',
    show: 'false',
  };

  render () {
    const {width, height, borderRadius, url, alt, onClick, show} = this.props;

    let hd = window.App.config.hd;
    let avatarStyle = {
      width: width + hd,
      height: height + hd,
      borderRadius: borderRadius + hd,
    };

    let avatar = require ('../../assets/images/pic_avatar.png');
    if (url && url.substring (0, 4) === 'http') {
      avatar = url;
    }
    let dotStyle = {};
    //小红点的状态
    if (show === 'false') {
      dotStyle = {display: 'none'};
    } else if (show === 'true') {
      dotStyle = {display: 'block'};
    }

    return (
      <div className={'dk-avatar'} show={show} onClick={onClick}>
        <Badge dot style={dotStyle} />
        <img src={avatar} style={avatarStyle} alt={alt} />
      </div>
    );
  }
}
