import React, {Component} from 'react';
import {List, InputItem, Button} from 'antd-mobile';

export default class FillRecordsLink extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.autoFocusInst.focus();
  }

  render() {
    return (
      <div className={'container'}>
        <div className={'medical-record-link-info'}>
          <List className={'medical-record-fill-info'}>
            <InputItem clear ref={el => (this.autoFocusInst = el)}>
              标签名称
            </InputItem>
            <InputItem clear placeholder="医院检查链接地址">
              链接地址
            </InputItem>
          </List>
          <div className={'meidical-record-submit-btn'}>
            <Button type="primary" size="large" className={'bgColor_blue5'}>
              保存
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
