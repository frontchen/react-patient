import React, {Component} from 'react';
import {Modal, Button, InputItem, Tag, TextareaItem} from 'antd-mobile';

export default class AdvisoryGetHelp extends Component {
  constructor (props) {
    super (props);
    this.state = {modalShow: false};
  }
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
  render () {
    return (
      <div className={'container'}>
        <div className={'advisory-patients-records'}>
          <div className={'advisory-add-patients-name'}>
            <InputItem placeholder="添加咨询标签" />
          </div>
          <div className={'advisory-patients-card'}>
            <Tag>病情咨询</Tag>
            <Tag>挂号咨询</Tag>
            <Tag>检查报告解读</Tag>
            <Tag>用药建议</Tag>
            <Tag>诊后指导</Tag>
            <Tag>术后注意</Tag>
          </div>
          <TextareaItem
            autoHeight
            rows={6}
            placeholder="详细描述您的病情症状，用于医生客观分析病情，更好的为您服务"
          />
          <div className={'advisory-info-next-btn'}>
            <Button
              type="primary"
              size="large"
              className={'bgColor_blue5'}
              onClick={this.showModal ('modalShow')}
            >
              保存并提交
            </Button>
          </div>
          <Modal
            className={'advisory-order-list-modal'}
            visible={this.state.modalShow}
            transparent
            maskClosable={false}
            closable={true}
            onClose={this.onClose ('modalShow')}
            title={
              <div>
                <div className={'advisory-order-list-title'}>预约完成</div>
                <div className={'adivsory-order-list-detail'}>
                  <div className={'advisory-doctor-name'}>
                    <span>预约医生:</span>
                    <span>夏术阶</span>
                  </div>
                  <div className={'advisory-datetime'}>
                    <span> 咨询时间:</span> <span>2018.04.09(周一) 09:00-09:15</span>
                  </div>
                  <div className={'advisory-patient-name'}>
                    <span>患者姓名:</span> <span>夏小雨</span>
                  </div>
                  <div className={'advisory-telephone-info'}>
                    <span>联系电话:</span> <span>136&nbsp;8889&nbsp;8960</span>
                  </div>
                  <div className={'advisory-order-num'}>
                    <span>订单号:</span> <span>1368889&nbsp;8960</span>
                  </div>
                  <div className={'advisory-order-list-detail'}>
                    请您按约定时间咨询医生,预约信息可完善。
                  </div>
                </div>
              </div>
            }
            wrapProps={{onTouchStart: this.onWrapTouchStart}}
          />
        </div>
      </div>
    );
  }
}
