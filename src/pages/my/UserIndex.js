import React, {Component} from 'react';
import {List, Toast} from 'antd-mobile';
import {UserAvatar} from '../../components/Index';
import './user.less';
export default class UserIndex extends Component {
  constructor (props) {
    super (props);
    this.state = {userSetting: true, userData: {}};
  }

  componentDidMount () {
    this._getData ();
  }

  _getData () {
    let id = window.App.Duser.data.id;
    window.App.Duser.userindex ({id}).then (
      res => {
        console.log (res);
        this.setState ({userData: res});
      },
      err => {
        Toast.offline (err, 2);
      }
    );
  }

  render () {
    let userData = this.state.userData;
    console.log (userData);
    return (
      <div className={'container'}>
        <div className={'mydata-set-list'}>
          <div
            className={'mydata-set-item  '}
            onClick={() => {
              this.props.history.push ('./UserPersonDetail');
            }}
          >
            <List className="mydata-set-item-card">
              <List.Item
                multipleLine
                arrow="horizontal"
                thumb={
                  <UserAvatar
                    url={userData.head_img}
                    width={64}
                    height={64}
                    borderRadius={4}
                  />
                }
              >
                <div className={'mydata-current'}>

                  <div className={'mydata-person-card'}>
                    <div className={'mydata-person-name'}>{userData.name}</div>
                    <div className={'mydata-phone-box'}>
                      <div className={'mydata-phone-name'}>手机号&nbsp;</div>
                      <div className={'mydata-phone-code'}>
                        {userData.phone}
                      </div>
                    </div>
                  </div>
                </div>
              </List.Item>
            </List>
          </div>
          <List
            className={'mydata-set-item-option '}
            onClick={() => {
              this.props.history.push ('./DoctorHeadlines');
            }}
          >
            <List.Item multipleLine arrow="horizontal">
              三甲科普
            </List.Item>
          </List>
          <div className={'mydata-set-item-bottom'}>
            <List className={'mydata-set-item-option'}>
              <List.Item
                multipleLine
                arrow="horizontal"
                onClick={() => {
                  this.props.history.push ('./UserFavorite');
                }}
              >
                我的收藏
              </List.Item>
              <List.Item
                multipleLine
                arrow="horizontal"
                onClick={() => {
                  this.props.history.push ({
                    pathname: './MedicalList',
                  });
                }}
              >
                家庭病历本
              </List.Item>
              <List.Item
                multipleLine
                arrow="horizontal"
                onClick={() => {
                  this.props.history.push ('./MedicineList');
                }}
              >
                药物知识
              </List.Item>
            </List>
          </div>
          <List className={'mydata-set-item-option '}>
            <List.Item
              multipleLine
              arrow="horizontal"
              onClick={() => {
                this.props.history.push ({
                  pathname: './UserSetting',
                  query: {
                    userSetting: this.state.userSetting,
                    cb: data => {
                      console.log (data);
                    },
                  },
                });
              }}
            >
              设置
            </List.Item>
          </List>
        </div>
      </div>
    );
  }
}
