import React, {Component} from 'react';
import {SearchBar, Card} from 'antd-mobile';

export default class UserFavorite extends Component {
  render () {
    return (
      <div className={'container'}>
        <div className={'user-favorite'}>
          <div className={'search_box'}>
            <SearchBar className={'search_group'} placeholder="搜索" />
          </div>
          <div className={'user-favorite-list'}>
            <Card
              className={'user-favorite-list-info'}
              onClick={() => {
                this.props.history.push ('./DoctorDetail');
              }}
            >
              <Card.Header
                title={
                  <div className={'user-favorite-hospital-box'}>
                    <div className={'user-favorite-doctor-info'}>葛军豪</div>
                    <div className={'user-favorite-hospital-info'}>
                      <span>上海第六人民医院</span>
                      <span className={'user-favorite-hospital-departments'}>
                        泌尿外科
                      </span>
                    </div>
                  </div>
                }
                thumb={require ('../../assets/images/person_deafult.jpeg')}
              />
              <Card.Body>
                <div className={'user-favorite-list-source'}>
                  <span className={'user-favorite-list-address'}>医生</span>
                  <span className={'user-favorite-list-date'}>5天前</span>
                </div>
              </Card.Body>
            </Card>
            <Card
              className={'user-favorite-list-info'}
              onClick={() => {
                this.props.history.push ('./SanJiaInforDetail');
              }}
            >
              <Card.Header
                title={
                  <div className={'user-favorite-hospital-box'}>
                    劲爆消息!劲爆消息世界医学研究中心发现，可以攻克癌症!
                  </div>
                }
                thumb={require ('../../assets/images/person_deafult.jpeg')}
              />
              <Card.Body>
                <div className={'user-favorite-list-source'}>
                  <span className={'user-favorite-list-address'}>
                    三甲医院网
                  </span>
                  <span className={'user-favorite-list-date'}>今天</span>
                </div>
              </Card.Body>
            </Card>
            <Card
              className={'user-favorite-list-info'}
              onClick={() => {
                this.props.history.push ('./MedicineListDetail');
              }}
            >
              <Card.Header
                title={
                  <div className={'user-favorite-hospital-box'}>
                    太极 麝香正气口服液
                  </div>
                }
                thumb={require ('../../assets/images/person_deafult.jpeg')}
              />
              <Card.Body>
                <div className={'user-favorite-list-source'}>
                  <span className={'user-favorite-list-address'}>药品</span>
                  <span className={'user-favorite-list-date'}>5天前</span>
                </div>
              </Card.Body>
            </Card>

          </div>
        </div>
      </div>
    );
  }
}
