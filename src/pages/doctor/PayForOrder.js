import React, {Component} from 'react';
import {List, NoticeBar, Checkbox, Button, Modal} from 'antd-mobile';

export default class PayForOrder extends Component {
  constructor (props) {
    super (props);

    this.state = {
      remainTime: 230,
      payChecked: false,
      agreementChecked: false,
      modalShow: false,
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

  closest = (el, selector) => {
    const matchesSelector =
      el.matches ||
      el.webkitMatchesSelector ||
      el.mozMatchesSelector ||
      el.msMatchesSelector;
    while (el) {
      if (matchesSelector.call (el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  };
  showModal = (key, index) => e => {
    e.preventDefault (); // 修复 Android 上点击穿透
    this.setState ({[key]: true});
  };

  onClose = key => () => {
    this.setState ({[key]: false});
  };

  onWrapTouchStart = e => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test (navigator.userAgent)) {
      return;
    }
    const pNode = this.closest (e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault ();
    }
  };

  toggleChecked = val => {
    this.setState ({agreementChecked: val});
  };

  render () {
    return (
      <div className={'container'}>
        <div className={'advisory-pay-order'}>
          <NoticeBar icon={null}>
            <div>
              <span>支付剩余时间</span>
              <span className={'advisory-pay-state-time'}>
                {this.secondToDate (this.state.remainTime)}
              </span>
            </div>
          </NoticeBar>
          <List className={'advisory-pay-person-info'}>
            <List.Item
              extra={
                <div className={'advisory-pay-price-name'}>
                  <div className={'advisory-pay-name'}>夏术阶</div>
                  <div className={'advisory-pay-price'}>
                    &yen;<span>120</span>
                  </div>
                </div>
              }
            >
              预约医生
            </List.Item>
            <List.Item
              extra={
                <div className={'advisory-pay-price-name'}>
                  <div className={'advisory-pay-name'}>
                    2018-04-09<span>周一</span>
                  </div>
                  <div className={'advisory-pay-name'}>09:00-09:15</div>
                </div>
              }
            >
              咨询时间
            </List.Item>
            <List.Item
              extra={
                <div className={'advisory-pay-price-name'}>
                  <div className={'advisory-pay-name'}>夏小雨</div>
                </div>
              }
            >
              患者
            </List.Item>
            <List.Item
              extra={
                <div className={'advisory-pay-price-name'}>
                  <div className={'advisory-pay-name'}>201804090941008</div>
                </div>
              }
            >
              订单号
            </List.Item>
          </List>
          <List
            className={'advisory-pay-weixin'}
            onClick={() => {
              this.toggleChecked (this.state.payChecked);
            }}
          >
            <List.Item
              thumb={require ('../../assets/images/weixin.svg')}
              extra={
                <Checkbox
                  defaultChecked
                  checked={this.state.payChecked}
                  onChange={e => {
                    this.setState ({payChecked: e.target.checked});
                  }}
                />
              }
            >
              微信支付
            </List.Item>
          </List>
          <List
            className={'advisory-pay-agreement'}
            onClick={() => {
              this.toggleChecked (this.state.agreementChecked);
            }}
          >
            <Checkbox.AgreeItem
              checked={this.state.agreementChecked}
              onChange={e => {
                this.setState ({agreementChecked: e.target.checked});
              }}
            >
              我已阅读并同意平台支付规则
            </Checkbox.AgreeItem>
          </List>

          <List className={'advisory-pay-person-info advisory-pay-btn'}>
            <List.Item
              extra={
                <div className={'advisory-pay-price-name'}>
                  <div className={'advisory-pay-num'}>
                    还需支付:<span
                      style={{
                        fontSize: '18px',
                        color: '#f62f29',
                        paddingLeft: '10px',
                      }}
                    >
                      &yen;120
                    </span>
                  </div>

                  <Button
                    className={'advisory-pay-btn '}
                    type="primary"
                    onClick={this.showModal ('modalShow')}
                  >
                    去支付
                  </Button>
                </div>
              }
              thumb={require ('../../assets/images/servicephone.svg')}
            >
              <a href="tel:021-54847990">客服</a>
            </List.Item>
          </List>
          <Modal
            className={'advisory-pay-modal'}
            visible={this.state.modalShow}
            transparent
            maskClosable={false}
            onClose={this.onClose ('modalShow')}
            title={
              <div className={'advisory-pay-modal-wrapper'}>
                <div className={'advisory-pay-modal-title'}>您没有阅读平台支付规则</div>
                <div className={'advisory-pay-modal-content'}>
                  请阅读平台支付规则，确认无误后请支付.如需帮助请<span>联系客服</span>
                </div>
              </div>
            }
            footer={[
              {
                text: '取消',
                onPress: () => {
                  this.onClose ('modalShow') ();
                },
                style: 'default',
              },
              {
                text: '立即阅读',
                onPress: () => {
                  if (!this.state.agreementChecked || !this.state.payChecked) {
                    this.setState ({
                      agreementChecked: true,
                      payChecked: true,
                    });
                  }
                  this.onClose ('modalShow') ();
                },
              },
            ]}
            wrapProps={{onTouchStart: this.onWrapTouchStart}}
          />
        </div>
      </div>
    );
  }
}
