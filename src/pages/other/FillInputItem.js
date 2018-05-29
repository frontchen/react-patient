import React, {Component} from 'react';

import {InputItem, Toast} from 'antd-mobile';
import {Button} from '../../components/Index';
import './Index.less';
export default class FillInputItem extends Component {
  constructor (props) {
    super (props);
    this.state = {text: ''};
  }

  _updateData (name, value) {
    let id = window.App.Duser.data.id;
    window.App.Duser.updatepersoninfo ({id, name, value}).then (
      res => {
        if (res.count !== 0 && value !== '') {
          this.props.location.query.cb (res.desc);
        }
      },
      err => {
        Toast.offline (err, 2);
      }
    );
    this.props.history.goBack ();
  }

  render () {
    let name = this.props.location.state.name;
    let value = this.state.text;
    return (
      <div className={'container'}>
        <div className={'fill-info'}>
          <InputItem
            className={'inputitem'}
            placeholder={
              this.props.location.state.text
                ? this.props.location.state.text
                : ''
            }
            value={this.state.text}
            onChange={text => {
              this.setState ({text});
            }}
            clear
          />
          <div className={'fill-info-btn'}>
            <Button
              onClick={() => {
                if (value === '') {
                  Toast.offline ('没有输入内容，请重新填写', 2);
                  return;
                }
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
