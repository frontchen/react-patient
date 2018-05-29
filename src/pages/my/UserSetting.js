import React, { Component } from 'react';
import { List } from 'antd-mobile';

export default class UserSetting extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className={'container'}>
        {/* 用户设置 */}
        {this.props.location.query.userSetting ? (
          <div className={'user-setting'}>
            <List>
              <List.Item
                arrow="horizontal"
                onClick={() => {
                  this.props.location.query.cb('返回的参数');
                  this.props.history.goBack();
                }}
              >
                用户协议
              </List.Item>
              <List.Item arrow="horizontal">关于我们</List.Item>
              <List.Item arrow="horizontal">
                <a href="tel:021-54847990">联系客服</a>
              </List.Item>
            </List>
          </div>
        ) : null}
      </div>
    );
  }
}
