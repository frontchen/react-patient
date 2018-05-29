import React, {Component} from 'react';

import {Card} from 'antd-mobile';

export default class OrderList extends Component {
  constructor (props) {
    super (props);
    this.state = {
      unPay: true,
      toAsk: true,
      canceled: true,
      completed: true,
      refunded: true,
      statusList: [
        {state: '去咨询'},
        {state: '待支付'},
        {state: '已取消'},
        {state: '已完成'},
        {state: '已退款'},
        {state: '待咨询'},
      ],
    };
  }

  _selectStatus = state => {
    let stateTextStyles = {color: '#535DF2'};

    switch (state) {
      case '去咨询':
        stateTextStyles = {
          color: '#fff',
          backgroundColor: '#535DF2',
          height: '24px',
          width: '56px',
          textAlign: 'center',
          lineHeight: '24px',
          borderRadius: '2px',
        };

        break;
      case '待支付':
        stateTextStyles = {color: '#fc9014'};
        break;
      case '已取消':
        stateTextStyles = {color: '#999'};
        break;
      case '已完成':
        stateTextStyles = {color: '#333'};
        break;
      case '已退款':
        stateTextStyles = {color: '#535DF2'};
        break;
      default:
        break;
    }

    return (
      <span className={'doctor-order-state'} style={stateTextStyles}>
        {state}
      </span>
    );
  };

  _renderOrderList = (v, i) => {
    return (
      <Card
        full
        key={i}
        onClick={() => {
          if (v.state === '去咨询') {
            this.props.history.push ('./ImDetail');
          }
          if (v.state === '待支付') {
            this.props.history.push ({
              pathname: './OrderListDetail',
              state: {
                unPay: this.state.unPay,
              },
            });
          }
          if (v.state === '已取消') {
            this.props.history.push ({
              pathname: './OrderListDetail',
              state: {
                canceled: this.state.canceled,
              },
            });
          }
          if (v.state === '已完成') {
            this.props.history.push ({
              pathname: './OrderListDetail',
              state: {
                completed: this.state.completed,
              },
            });
          }
          if (v.state === '已退款') {
            this.props.history.push ({
              pathname: './OrderListDetail',
              state: {
                refunded: this.state.refunded,
              },
            });
          }
          if (v.state === '待咨询') {
            this.props.history.push ({
              pathname: './OrderListDetail',
              state: {
                toAsk: this.state.toAsk,
              },
            });
          }
        }}
      >
        <Card.Header
          title={
            <div className={'doctor-order-cart'}>
              <div className={'doctor-card-box'}>
                <span>
                  <span className={'doctor-name'}>马云</span>
                  <span className={'doctor-job-box'}>
                    <span className={'doctor-department'}>肾内科</span>
                    <span className={'doctor-price'}>
                      &yen;&nbsp;<span className={'doctor-price-number'}>
                        1800
                      </span>.00元
                    </span>
                  </span>
                </span>
                {this._selectStatus (v.state)}
              </div>
              <div className={'doctor-treat-box'}>
                患者:<span className={'doctor-treat-patient'}>王凤凤</span>
              </div>
            </div>
          }
          thumb={require ('../../assets/images/person_deafult.jpeg')}
        />
        <Card.Body>
          <div className={'doctor-list-bottom'}>
            <div className={'doctor-chat-message'}>近视手术安全吗</div>
            <div className={'doctor-chat-time'}>2018.04.03 10:00-10：15</div>
          </div>
        </Card.Body>
      </Card>
    );
  };
  render () {
    let orderList = this.state.statusList.map ((v, i) => {
      return this._renderOrderList (v, i);
    });

    return (
      <div className={'container'}>
        <div className={'doctor-order-list'}>
          <div className={'doctor-list-item'}>
            {orderList}
          </div>
        </div>
      </div>
    );
  }
}
