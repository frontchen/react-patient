import React, {Component} from 'react';
import {List, Button, DatePicker} from 'antd-mobile';

const nowTimeStamp = new Date ();
const now = new Date (nowTimeStamp);

let minDate = new Date (1900, 0); //出生日期起始时间
const maxDate = new Date (2100, 0); //出生日期截止时间

export default class MedicalRecordsCreate extends Component {
  constructor (props) {
    super (props);

    this.state = {
      date: now,
      time: now,
      hospitalName: true,
      departmentsName: true,
      diseaseDes: true,
    };
  }

  render () {
    return (
      <div className={'container'}>
        <div className={'medical-records-create'}>
          <List className={'medical-records-head'}>
            <DatePicker
              mode="date"
              extra="Optional"
              value={this.state.date}
              minDate={minDate}
              maxDate={maxDate}
              use12Hours={'false'}
              onChange={date => this.setState ({date})}
            >
              <List.Item arrow="horizontal">
                时间<span>(必填)</span>
              </List.Item>
            </DatePicker>

            <List.Item
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
              className={'meidical-records-department'}
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
          </List>
          <div className={'medical-records-title'}>添加您关注的指标(如血压、血糖等)</div>
          <List className={'medical-records-upload-photo'}>
            <List.Item
              onClick={() => {
                this.props.history.push ({
                  pathname: './FillRecordsTarget',
                });
              }}
              thumb={require ('../../assets/images/plus_icon.svg')}
            />

          </List>
          <div className={'medical-records-title'}>检查、检验记录</div>
          <List className={'medical-records-item'}>
            <List.Item
              onClick={() => {
                this.props.history.push ({
                  pathname: './FillRecordsLink',
                });
              }}
              thumb={require ('../../assets/images/link_default.png')}
            />
            <List.Item thumb={require ('../../assets/images/add_photo.png')} />
          </List>
          <div className={'medical-records-title'}>医嘱与用药记录</div>
          <List className={'medical-records-footer'}>
            <List.Item className={'medical-records-section'} arrow="horizontal">
              填写医嘱
            </List.Item>
            <List.Item thumb={require ('../../assets/images/add_photo.png')} />
          </List>
          <div className={'medical-records-title'}>病情描述等情况</div>
          <List
            className={'medical-records-footer'}
            onClick={() => {
              this.props.history.push ({
                pathname: './FillAddvisroyInfo',
                state: {
                  diseaseDes: this.state.diseaseDes,
                },
              });
            }}
          >
            <List.Item className={'medical-records-section'} arrow="horizontal">
              备注
            </List.Item>
          </List>
          <div className={'medical-records-save-btn'}>
            <Button type="primary" size="large" className={'bgColor_blue5'}>
              保存
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
