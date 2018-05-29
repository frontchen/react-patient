import React, {Component} from 'react';
import {List} from 'antd-mobile';

export default class OrderRefunded extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'doctor-order-detail'}>
          <div className={'doctor-order-refund-title'}>退款已汇出</div>

          <List className={'doctor-order-refund-content'}>
            <List.Item
              className={'doctor-refund-item-money'}
              extra={
                <div className={'doctor-order-item-right'}>&yen;120.00</div>
              }
            >
              退款金额
            </List.Item>
            <List.Item className={'doctor-refund-item-bank'}>
              退款至以下账户:
              <List.Item.Brief>
                <div className={'doctor-order-bank'}>微信(中国银行储蓄卡8739)</div>
                <div className={'doctor-order-item-right'}>&yen;120.00</div>
              </List.Item.Brief>
            </List.Item>
          </List>
          <div className={'doctor-order-footer'} />
        </div>
      </div>
    );
  }
}
