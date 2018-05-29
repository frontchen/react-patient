import React, {Component} from 'react';
import {List, Tag} from 'antd-mobile';

export default class PatientsCondition extends Component {
  constructor (props) {
    super (props);
    this.state = {
      selectList: [{selectName: '否', id: 1}, {selectName: '是', id: 2}],
      currentIndex: 1,
      illnessName: true,
      sickTime: true,
      hospitalName: true,
      departmentsName: true,
      importMedicalRecords: true,
      prescribedMedication: true,
      checkTest: true,
    }; //疾病名称 //医嘱用药
  }

  tabChoiced = id => {
    // tab切换的方法
    this.setState ({currentIndex: id});
  };
  _renderSelect = () => {
    return this.state.selectList.map ((item, index) => {
      return (
        <Tag
          key={index}
          selected={item.id === this.state.currentIndex ? true : false}
          onChange={() => {
            this.tabChoiced (item.id);
          }}
        >
          {item.selectName}
        </Tag>
      );
    });
  };

  render () {
    let isbox2Show = this.state.currentIndex === 2 ? 'block' : 'none';
    return (
      <div className={'container'}>
        <div className={'advisory-select'}>
          <List className="advisory-select-options">
            <List.Item
              multipleLine
              arrow="horizontal"
              onClick={() => {
                this.props.history.push ({
                  pathname: './PatientsMedicalRecords',
                  state: {
                    illnessName: this.state.illnessName,
                  },
                });
              }}
            >
              疾病名称
            </List.Item>

            <List.Item
              className={'advisory-select-sex-box'}
              multipleLine
              extra={
                <div className={'advisory-select-sex'}>
                  {this._renderSelect ()}
                </div>
              }
            >
              是否就诊过
            </List.Item>
          </List>

          {/* 是 */}
          <List
            style={{display: isbox2Show}}
            className="advisory-select-options"
          >
            <List.Item
              multipleLine
              arrow="horizontal"
              onClick={() => {
                this.props.history.push ({
                  pathname: './AdvisoryMedicalHistory',
                  state: this.state.importMedicalRecords,
                });
              }}
            >
              从病历本导入看病记录
            </List.Item>

            <List.Item
              className={'advisory-select-item'}
              multipleLine
              arrow="horizontal"
              extra={'2018-04-05'}
              onClick={() => {
                this.props.history.push ({
                  pathname: './MedicalRecordsCreate',
                });
              }}
            >
              上海九院<span>内分泌科</span>
            </List.Item>
          </List>

          <List className="advisory-select-options">
            <List.Item
              multipleLine
              arrow="horizontal"
              onClick={() => {
                this.props.history.push ({pathname: './AdvisoryGetHelp'});
              }}
            >
              您想要获得哪方面的帮助
            </List.Item>
          </List>

          <div className={'advisory-info-next-btn'} />
        </div>
      </div>
    );
  }
}
