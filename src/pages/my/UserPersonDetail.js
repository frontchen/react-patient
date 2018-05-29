import React, {Component} from 'react';
import {List, Toast} from 'antd-mobile';
import {UserAvatar} from '../../components/Index';
export default class UserPersonDetail extends Component {
  constructor (props) {
    super (props);
    this.state = {userData: {}};
  }

  componentDidMount () {
    this._getData ();
  }

  _getData () {
    let id = window.App.Duser.data.id;
    window.App.Duser.userdetail ({id}).then (
      res => {
        this.setState ({userData: res});
      },
      err => {
        Toast.offline (err, 2);
      }
    );
  }
  render () {
    let userData = this.state.userData;

    return (
      <div className={'container'}>
        <div className={'user-person-detail'}>
          <div className={'user-person-item '}>
            <div className={'user-person-current'}>头像</div>
            <div className={'user-person-img'}>
              <UserAvatar
                url={userData.head_img}
                width={64}
                height={64}
                borderRadius={4}
              />
            </div>
          </div>

          <div className={'user-person-item-center'}>
            <List className={'user-person-item-option'}>
              <List.Item
                multipleLine
                arrow="horizontal"
                extra={userData.truename}
                onClick={() => {
                  this.props.history.push ({
                    pathname: './FillInputItem',
                    state: {
                      text: userData.truename,
                      name: 'truename',
                    },
                    query: {
                      cb: data => {
                        userData.truename = data;
                        this.setState (this.state.userData);
                      },
                    },
                  });
                }}
              >
                真实姓名
              </List.Item>
              <List.Item
                multipleLine
                arrow="horizontal"
                extra={userData.identity_card}
                onClick={() => {
                  this.props.history.push ({
                    pathname: './FillInputItem',
                    state: {
                      text: userData.identity_card,
                      name: 'identity_card',
                    },
                    query: {
                      cb: data => {
                        userData.identity_card = data;
                        this.setState (this.state.userData);
                      },
                    },
                  });
                }}
              >
                身份证号
              </List.Item>
              <List.Item
                multipleLine
                arrow="horizontal"
                extra={userData.phone}
                onClick={() => {
                  this.props.history.push ({
                    pathname: './FillInputItem',
                    state: {
                      text: userData.phone,
                      name: 'phone',
                    },
                    query: {
                      cb: data => {
                        userData.phone = data;
                        this.setState (this.state.userData);
                      },
                    },
                  });
                }}
              >
                绑定手机
              </List.Item>
            </List>

          </div>
          <div className={'user-person-item-bottom'}>
            <List className={'user-person-item-option'}>
              <List.Item
                multipleLine
                arrow="horizontal"
                extra={userData.sex === 0 ? '女' : '男'}
                onClick={() => {
                  this.props.history.push ({
                    pathname: './FillCheckbox',
                    state: {
                      name: 'sex',
                    },
                    query: {
                      cb: data => {
                        userData.sex = data;
                        this.setState (this.state.userData);
                      },
                    },
                  });
                }}
              >
                性别
              </List.Item>
              <List.Item
                multipleLine
                arrow="horizontal"
                extra={userData.birthday}
              >
                出生年月
              </List.Item>
              <List.Item
                multipleLine
                arrow="horizontal"
                extra={`${userData.province_name}${userData.area_name}${userData.city_name}`}
              >
                地区
              </List.Item>
              <List.Item
                multipleLine
                arrow="horizontal"
                extra={userData.medicare_card}
              >
                医保卡号
              </List.Item>
            </List>

          </div>
        </div>
      </div>
    );
  }
}
