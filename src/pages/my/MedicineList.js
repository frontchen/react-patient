import React, {Component} from 'react';
import {SearchBar} from 'antd-mobile';

export default class MedicineList extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'user-medicine'}>
          <div className={'search_box'}>
            <SearchBar
              cancelText={'确定'}
              className={'search_group'}
              placeholder="搜索"
            />
          </div>

          <div
            className={'user-medicine-list'}
            onClick={() => {
              this.props.history.push('./MedicineListDetail');
            }}
          >
            <div className={'user-medicine-logo'}>
              <img
                src={require('../../assets/images/person_deafult.jpeg')}
                alt=""
              />
            </div>
            <div className={'user-medicine-detail-list'}>
              <div className={'user-medicine-name'}>太极麝香正气口服液</div>
              <div className={'user-medicine-detail'}>
                <div className={'user-medicine-item'}>
                  <span>【成分】</span>陈皮、厚补、生半夏、冬虫夏草啊啊啊啊啊
                </div>
                <div className={'user-medicine-item'}>
                  <span>【规格】</span>每支装10毫升
                </div>
                <div className={'user-medicine-item'}>
                  <span>【适用症】</span>解表化湿，理气和中等详见
                </div>
              </div>
            </div>
          </div>
          <div className={'user-medicine-list'}>
            <div className={'user-medicine-logo'}>
              <img
                src={require('../../assets/images/person_deafult.jpeg')}
                alt=""
              />
            </div>
            <div className={'user-medicine-detail-list'}>
              <div className={'user-medicine-name'}>太极麝香正气口服液</div>
              <div className={'user-medicine-detail'}>
                <div className={'user-medicine-item'}>
                  <span>【成分】</span>陈皮、厚补、生半夏、冬虫夏草啊啊啊啊啊
                </div>
                <div className={'user-medicine-item'}>
                  <span>【规格】</span>每支装10毫升
                </div>
                <div className={'user-medicine-item'}>
                  <span>【适用症】</span>解表化湿，理气和中等详见
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
