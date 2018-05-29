import React, {Component} from 'react';

import {List, Checkbox, Toast} from 'antd-mobile';
import {Button} from '../../components/Index';
import './Index.less';
export default class FillCheckbox extends Component {
  constructor (props) {
    super (props);
    this.state = {
      selectList: [{selectName: '男', id: 1}, {selectName: '女', id: 2}],
      currentIndex: 1,
    };
  }

  _updateData (name, value) {
    let id = window.App.Duser.data.id;
    window.App.Duser.updatepersoninfo ({id, name, value}).then (
      res => {
        this.props.location.query.cb (res.desc);
        this.props.history.goBack ();
      },
      err => {
        Toast.offline (err, 2);
      }
    );
  }
  componentWillUnmount () {}
  tabChoiced = id => {
    // tab切换的方法
    this.setState ({currentIndex: id});
  };

  _renderSelectSex = (v, i) => {
    return (
      <List.Item
        key={i}
        onClick={() => {
          this.tabChoiced (v.id);
        }}
        extra={
          <Checkbox
            defaultChecked
            checked={v.id === this.state.currentIndex ? true : false}
            onChange={e => {
              this.setState ({isCheck: e.target.checked});
            }}
          />
        }
      >
        {v.selectName}
      </List.Item>
    );
  };
  render () {
    let selectSex = this.state.selectList.map ((v, i) => {
      return this._renderSelectSex (v, i);
    });
    let name = this.props.location.state.name;
    let value = this.state.currentIndex === 1 ? 1 : 0;
    return (
      <div className={'container'}>
        <div className={'fill-info'}>
          <List className={'listitem'}>
            {selectSex}
          </List>
          <div className={'fill-info-btn'}>
            <Button
              onClick={() => {
                this._updateData (name, value);
              }}
              type={'main'}
            >
              确定
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
