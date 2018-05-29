import React, {Component} from 'react';

import './Index.less';
export default class SearchResult extends Component {
  render () {
    const {type, children} = this.props;
    let hd = window.App.config.hd;
    let emptyStyle = {
      alignSelf: 'center',
      marginTop: 100 + hd,
      color: '#999',
    };
    if (type === 'default') {
      return (
        <div className={'search-result'}>
          <img src={require ('../../assets/images/sousuo.png')} alt="" />
          <div className={'search-toast'}>输入您需要查找的信息搜索</div>
        </div>
      );
    }
    if (type === 'empty') {
      return (
        <div className={'search-empty-data'} style={emptyStyle}>
          {children}
        </div>
      );
    }
  }
}
