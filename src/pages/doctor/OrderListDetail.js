import React, {Component} from 'react';
import {List, NoticeBar, Button} from 'antd-mobile';

export default class OrderListDetail extends Component {
  constructor (props) {
    super (props);
    this.state = {
      remainTime: 230,
      toAsk: true,
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

  componentWillMount () {
    this.mydata = this.state.myDataSource;
    this.totalData = this.state.totalDataSource;
  }

  componentWillUnmount () {
    this._clearTimer ();
  }
  componentDidMount () {
    let remainTime = this.state.remainTime;
    this.timer = setInterval (() => {
      if (remainTime > 0) {
        remainTime--;
        this.setState ({remainTime});
      } else {
        this._clearTimer ();
      }
    }, 1000);
  }

  // 重置倒计时
  _clearTimer () {
    this.timer && clearTimeout (this.timer);
  }

  secondToDate = result => {
    var h = Math.floor (result / 3600) < 10
      ? '0' + Math.floor (result / 3600)
      : Math.floor (result / 3600);
    var m = Math.floor (result / 60 % 60) < 10
      ? '0' + Math.floor (result / 60 % 60)
      : Math.floor (result / 60 % 60);
    var s = Math.floor (result % 60) < 10
      ? '0' + Math.floor (result % 60)
      : Math.floor (result % 60);
    return (result = h + ':' + m + ':' + s);
  };
  _bodyData = state => {
    return (
      <List.Item
        arrow="horizontal"
        onClick={() => {
          this.props.history.push ({
            pathname: './MemberInfo',
            state: {
              state: state,
            },
          });
        }}
        extra={<div className={'doctor-order-item-right'}>近视手术安全吗?</div>}
      >
        提交的主诉
      </List.Item>
    );
  };

  _renderHeaderState = state => {
    if (state.unPay) {
      return (
        <NoticeBar icon={null}>
          <div>
            <span>支付剩余时间:&nbsp;</span>
            <span className={'advisory-pay-state-time'}>
              {this.secondToDate (this.state.remainTime)}
            </span>
          </div>
        </NoticeBar>
      );
    }
    if (state.toAsk) {
      return (
        <div className={'doctor-order-notice'}>
          订单状态: <span>待咨询</span>
        </div>
      );
    }
    if (state.canceled) {
      return (
        <div className={'doctor-order-notice'}>
          订单状态: <span>已取消</span>
        </div>
      );
    }
    if (state.completed) {
      return (
        <div className={'doctor-order-notice'}>
          订单状态: <span>已完成</span>
          <span
            className={'doctor-order-chat-history'}
            onClick={() => {
              this.props.history.push ({
                pathname: './ImDetail',
              });
            }}
          >
            咨询记录
          </span>
        </div>
      );
    }
    if (state.refunded) {
      return (
        <div className={'doctor-order-notice'}>
          订单状态: <span>已退款</span>
          <span
            className={'doctor-order-chat-history'}
            onClick={() => {
              this.props.history.push ({pathname: './OrderRefunded'});
            }}
          >
            退款记录
          </span>
        </div>
      );
    }
  };

  _renderFooterState = state => {
    if (state.unPay) {
      return (
        <div className={'doctor-order-footer'}>
          <div className={'doctor-order-service'}>客服</div>
          <Button
            type="primary"
            size="large"
            onClick={() => {
              this.props.history.push ({
                pathname: './PayForOrder',
              });
            }}
          >
            去支付
          </Button>
        </div>
      );
    }
    if (state.toAsk) {
      return (
        <div className={'doctor-order-footer'}>
          <div className={'doctor-order-service'}>客服</div>

          <div className={'doctor-order-btn-box'}>
            <Button type="primary" size="large">
              取消预约
            </Button>
            <Button
              type="primary"
              size="large"
              onClick={() => {
                this.props.history.push ({
                  pathname: './MemberInfo',
                  state: {
                    toAsk: this.state.toAsk,
                  },
                });
              }}
            >
              完善资料
            </Button>
          </div>
        </div>
      );
    }
    if (state.canceled || state.completed || state.refunded) {
      return (
        <div className={'doctor-order-footer'}>
          <div className={'doctor-order-service'}>客服</div>
        </div>
      );
    }
  };

  _renderBodyState = state => {
    return (
      <List.Item
        arrow="horizontal"
        onClick={() => {
          this.props.history.push ({
            pathname: './MemberInfo',
            state: {
              state: state,
            },
          });
        }}
        extra={<div className={'doctor-order-item-right'}>近视手术安全吗?</div>}
      >
        提交的主诉
      </List.Item>
    );
  };
  render () {
    let state = this.props.location.state;
    return (
      <div className={'container'}>
        <div className={'doctor-order-detail'}>
          {this._renderHeaderState (state)}
          <List className={'doctor-order-list doctor-order-list-frist'}>
            <List.Item
              arrow="horizontal"
              extra={
                <div className={'doctor-order-item-right'}>
                  <span className={'doctor-order-name'}>邹海东</span>
                  <span>眼科</span>
                </div>
              }
            >
              预约医生
            </List.Item>
            <List.Item
              extra={
                <div className={'doctor-order-item-right'}>
                  <div className={'doctor-order-item-phone'}>&yen;120.00</div>
                </div>
              }
            >
              订单价格
            </List.Item>
            <List.Item
              className={'doctor-order-item-time'}
              extra={
                <div className={'doctor-order-item-right'}>
                  <div className={'doctor-order-item-phone'}>
                    <span className={'doctor-order-name'}>2018.04.03</span>
                    <span>16:00-16:15</span>
                  </div>
                </div>
              }
            >
              预约时间
            </List.Item>
          </List>
          <List className={'doctor-order-list'}>
            {this._renderBodyState (state)}
            <List.Item
              extra={
                <div className={'doctor-order-item-right'}>
                  <div className={'doctor-order-item-phone'}>13661993960</div>
                </div>
              }
            >
              预约手机
            </List.Item>
          </List>
          <List className={'doctor-order-list'}>
            <List.Item
              extra={
                <div className={'doctor-order-item-right'}>
                  <div className={'doctor-order-item-phone'}>在线咨询</div>
                </div>
              }
            >
              订单类型
            </List.Item>
            <List.Item
              extra={
                <div className={'doctor-order-item-right'}>
                  <div className={'doctor-order-item-phone'}>
                    2018041816140890
                  </div>
                </div>
              }
            >
              订单编号
            </List.Item>
          </List>
          {this._renderFooterState (state)}
        </div>
      </div>
    );
  }
}
