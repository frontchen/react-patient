import React, { Component } from 'react';

import './index.less';
import iconMap from '../../config/iconMap';

export default class Icon extends Component {
  static defaultProps = {
    color: ''
  };

  componentDidMount() {
    this._loadSprite();
  }

  _svgSprite(contents) {
    return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      id="__DKWX_MOBILE_SVG_SPRITE_NODE__"
      style="position:absolute;width:0;height:0"
    >
      <defs>
        ${contents}
      </defs>
    </svg>
  `;
  }

  _renderSvgSprite() {
    const { color } = this.props;

    const symbols = Object.keys(iconMap)
      .map(iconName => {
        return iconMap[iconName].replace('{fill}', `fill="${color}"`);
      })
      .join('');
    return this._svgSprite(symbols);
  }

  _loadSprite() {
    if (!document) {
      return;
    }
    const existing = document.getElementById('__DKWX_MOBILE_SVG_SPRITE_NODE__');
    const mountNode = document.body;

    if (!existing) {
      mountNode.insertAdjacentHTML('afterbegin', this._renderSvgSprite());
    }
  }

  render() {
    const { name, size } = this.props;

    let wh = size + window.App.config.hd;
    let style = { width: wh, height: wh };

    return (
      <svg className={'dk-icon'} style={style}>
        <use xlinkHref={`#${name}`} />
      </svg>
    );
  }
}
