import React, {Component} from 'react';
import {List} from 'antd-mobile';

export default class MemberInfo extends Component {
  constructor (props) {
    super (props);
    this.state = {
      sourceTopData: [
        {title: '姓名', content: '王凤凤 女 56岁'},
        {title: '过敏史', content: '无'},
        {title: '家族病史', content: '糖尿病'},
        {title: '手术史', content: '无'},
        {title: '婚育情况', content: '已婚'},
        {title: '健康形态', content: '高血压'},
      ],
      sourceCenterData: [
        {title: '疾病名', content: '斜视'},
        {title: '患病时长', content: '半年'},
        {title: '看病记录', content: '无'},
      ],
    };
  }

  _renderData = (v, i) => {
    return (
      <List.Item
        key={i}
        extra={
          <div className={'doctor-name-box'}>
            {v.content}
          </div>
        }
      >
        {v.title}
      </List.Item>
    );
  };

  _buttonData = () => {
    return (
      <div className={'doctor-medical-add-history'}>
        <img
          onClick={() => {
            this.props.history.push ({
              pathname: './MedicalRecordsCreate',
            });
          }}
          src={require ('../../assets/images/add_medical_records.svg')}
          alt=""
        />
        <div className={'doctor-medical-btn-text'}>添加看病记录</div>
      </div>
    );
  };

  _renderFooter = state => {
    if (state.toAsk) {
      return this._buttonData ();
    } else {
      return <div className={'doctor-medical-add-history'} />;
    }
  };

  render () {
    let state = this.props.location.state;
    console.log (state);
    let topData = this.state.sourceTopData.map ((v, i) => {
      return this._renderData (v, i);
    });

    let centerData = this.state.sourceCenterData.map ((v, i) => {
      return this._renderData (v, i);
    });

    return (
      <div className={'container'}>
        <div className={'doctor-member-list'}>
          <div className={'doctor-member-title'}>基本资料</div>
          <List className={'doctor-member-info'}>
            {topData}
          </List>
          <div className={'doctor-member-title'}>本次主诉</div>
          <List className={'doctor-member-info'}>
            {centerData}
          </List>
          {/* 已有病历列表 */}
          <div className={'doctor-medical-record-container'}>
            <div className={'doctor-meidcal-record-head'}>
              <div className={'doctor-medical-record-time'}>
                <div className={'doctor-medical-border'} /> 2018.04.03
              </div>
              <img
                src={require ('../../assets/images/editor_icon.svg')}
                alt=""
              />
            </div>
            <div className={'doctor-medical-section-hostpital'}>
              上海第九人民医院<span>眼科</span>
            </div>
            <div className={'doctor-medical-record-history'}>
              <div className={'doctor-medical-section-title'}>检查、化验单</div>
              <div className={'doctor-medical-record-image'}>
                <img
                  src={require ('../../assets/images/doctorHeaderPerson.jpg')}
                  alt=""
                />
                <img
                  src={require ('../../assets/images/doctorHeaderPerson.jpg')}
                  alt=""
                />
                <img
                  src={require ('../../assets/images/doctorHeaderPerson.jpg')}
                  alt=""
                />
                <img
                  src={require ('../../assets/images/doctorHeaderPerson.jpg')}
                  alt=""
                />
                <img
                  src={require ('../../assets/images/doctorHeaderPerson.jpg')}
                  alt=""
                />
                <img
                  src={require ('../../assets/images/doctorHeaderPerson.jpg')}
                  alt=""
                />
              </div>
            </div>
            <div className={'doctor-medical-use'}>
              <div className={'doctor-medical-section-title'}>医嘱与用药</div>
              <div className={'doctor-advice-use'}>
                <div className={'doctor-advice-use-item'}>三级护理 普食 </div>
                <div className={'doctor-advice-use-item'}>
                  5%GS100ml+克林霉素0.6 ivgtt q12h{' '}
                </div>
                <div className={'doctor-advice-use-item'}>
                  加替沙星液100ml：0.1×4瓶 ivgtt qd
                </div>
              </div>
              <div className={'doctor-medical-record-image'}>
                <img
                  src={require ('../../assets/images/doctorHeaderPerson.jpg')}
                  alt=""
                />
                <img
                  src={require ('../../assets/images/doctorHeaderPerson.jpg')}
                  alt=""
                />
                <img
                  src={require ('../../assets/images/doctorHeaderPerson.jpg')}
                  alt=""
                />
              </div>
            </div>
            <div className={'doctor-medical-need-help'}>
              <div className={'doctor-medical-section-title'}>
                <div>需要获得的帮助</div>
                <div className={'doctor-meidical-advisory-help'}>病情咨询、诊后指导</div>
              </div>
              <div className={'doctor-advice-use'}>
                <div className={'doctor-advice-use-item'}>三级护理 普食 </div>
                <div className={'doctor-advice-use-item'}>
                  5%GS100ml+克林霉素0.6 ivgtt q12h{' '}
                </div>
                <div className={'doctor-advice-use-item'}>
                  加替沙星液100ml：0.1×4瓶 ivgtt qd
                </div>
              </div>
            </div>

          </div>

          {this._renderFooter (state)}
        </div>
      </div>
    );
  }
}
