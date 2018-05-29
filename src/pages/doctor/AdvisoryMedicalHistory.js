import React, {Component} from 'react';
import {List, Button, Checkbox, DatePicker} from 'antd-mobile';
const nowTimeStamp = new Date ();
const now = new Date (nowTimeStamp);

let minDate = new Date (1900, 0); //出生日期起始时间
const maxDate = new Date (2100, 0); //出生日期截止时间
export default class PatientsConditionInfo extends Component {
  constructor (props) {
    super (props);
    this.state = {
      medicalHistory: false,
      date: now,
      time: now,
      hospitalName: true,
      departmentsName: true,
      checkTest: true,
      prescribedMedication: true,
    }; //检查化验单 //医嘱用药
    this.medicalHistoryData = [
      {hospitalname: '上海九院', departmentsname: '内分泌科', datetime: '2018-03-25'},
      {hospitalname: '上海三院', departmentsname: '骨科', datetime: '2018-03-28'},
    ];
  }

  _renderMedicalHistory = (item, index) => {
    return (
      <List.Item multipleLine extra={<Checkbox />} key={index}>
        <div className={'advisory-patients-options-card'}>
          <div className={'advisory-patients-options-hospital'}>
            {item.hospitalname} <span>{item.departmentsname}</span>
          </div>
          <div className={'advisory-patients-options-date'}>
            {item.datetime}
          </div>
        </div>
      </List.Item>
    );
  };
  render () {
    let medicalHistory = this.medicalHistoryData.map ((v, i) => {
      return this._renderMedicalHistory (v, i);
    });
    return (
      <div className={'container'}>
        <div className={'addvisory-medical-history'}>
          {this.medicalHistoryData.length > 0
            ? <List className="advisory-patients-options">
                {medicalHistory}
              </List>
            : null}

          <div className={'addvisory-add-medical-history'}>
            <div className={'addvisory-add-medical-history-title'}>添加看病记录</div>
            <List className="advisory-patients-options">
              <DatePicker
                mode="date"
                extra="Optional"
                value={this.state.date}
                minDate={minDate}
                maxDate={maxDate}
                use12Hours={'false'}
                onChange={date => this.setState ({date})}
              >
                <List.Item arrow="horizontal">就诊日期</List.Item>
              </DatePicker>
              <List.Item
                multipleLine
                arrow="horizontal"
                onClick={() => {
                  this.props.history.push ({
                    pathname: './FillAddvisroyInfo',
                    state: {
                      hospitalName: this.state.hospitalName,
                    },
                  });
                }}
              >
                医院
              </List.Item>
              <List.Item
                multipleLine
                arrow="horizontal"
                onClick={() => {
                  this.props.history.push ({
                    pathname: './FillAddvisroyInfo',
                    state: {
                      departmentsName: this.state.departmentsName,
                    },
                  });
                }}
              >
                科室
              </List.Item>
              <List.Item
                multipleLine
                arrow="horizontal"
                onClick={() => {
                  this.props.history.push ({
                    pathname: './FillAddvisroyInfo',
                    state: {
                      checkTest: this.state.checkTest,
                    },
                  });
                }}
              >
                检查、化验单
              </List.Item>
              <List.Item
                multipleLine
                arrow="horizontal"
                onClick={() => {
                  this.props.history.push ({
                    pathname: './FillAddvisroyInfo',
                    state: {
                      prescribedMedication: this.state.prescribedMedication,
                    },
                  });
                }}
              >
                医嘱与用药
              </List.Item>
            </List>
          </div>
          <div className={'advisory-history-next-btn'}>
            <Button type="primary" size="large" className={'bgColor_blue5'}>
              保存
            </Button>
            <Button
              type="primary"
              size="large"
              onClick={() => {
                this.props.history.push ({pathname: './PatientsCondition'});
              }}
            >
              都不是,返回病情页面
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
