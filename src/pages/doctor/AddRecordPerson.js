import React, {Component} from 'react';
import {List, DatePicker, Picker, Button} from 'antd-mobile';

const nowTimeStamp = new Date ();
const now = new Date (nowTimeStamp);

let minDate = new Date (1900, 0); //出生日期起始时间
const maxDate = new Date (2100, 0); //出生日期截止时间
export default class AddRecordPerson extends Component {
  constructor (props) {
    super (props);
    this.state = {
      date: now,
      time: now,
      files: [],
      multiple: true,
      imagesrc: [],
      pickerValue: [],
      weightArr: [],
      weightdata: [],
      heightArr: [],
      heightData: [],
      isOpen: false,
      normalcols: 4,
      index: 0,
      addAllergyInfo: true,
      familyMedicalHostory: true,
      operationHistory: true,
      babyState: true,
      healthInfo: true,
      currentIndex: 1,
      selectList: [{selectName: '男', id: 1}, {selectName: '女', id: 2}],
    };
    //模拟三维数组
    this.normalData = function (unit) {
      let val = [];

      let data = [];
      for (var j = 0; j < 10; j++) {
        val.push (j);
      }
      val.map ((v, i) => {
        let dataObj = {};

        dataObj.value = v;
        dataObj.label = v;

        dataObj.children = [];
        //第二维数组
        val.map ((item, index) => {
          let secondObj = {};
          secondObj.value = item;
          secondObj.label = item;

          secondObj.children = [];
          //第三维数组
          val.map ((k, j) => {
            let threeObj = {};
            threeObj.value = k;
            threeObj.label = k;
            threeObj.children = [];
            let fourObj = {};
            fourObj.value = '' + unit;
            fourObj.label = '' + unit;
            threeObj.children.push (fourObj);
            return secondObj.children.push (threeObj);
          });
          return dataObj.children.push (secondObj);
        });
        return data.push (dataObj);
      });
      return data;
    };
    this.activeStyle = {background: '#282c6d', color: '#fff'};
  }

  componentDidMount () {
    this.setState ({
      weightArr: ['1', '2', '0', '公斤'],
      heightArr: ['1', '2', '1', '厘米'],
      weightData: this.normalData ('公斤'),
      heightData: this.normalData ('厘米'),
    });
  }

  tabChoiced = id => {
    // tab切换的方法
    this.setState ({currentIndex: id});
  };

  _renderSelect = () => {
    return this.state.selectList.map ((item, index) => {
      let tabStyle = item.id === this.state.currentIndex
        ? this.activeStyle
        : {};
      return (
        <div
          className={'advisory-select-info'}
          key={index}
          onClick={() => {
            this.tabChoiced (item.id);
          }}
          style={tabStyle}
        >
          {item.selectName}
        </div>
      );
    });
  };

  render () {
    return (
      <div className={'container'}>
        <div className={'advisory-select add-record-person'}>
          <List className="advisory-select-options">
            <List.Item
              className={'advisory-upload-wrapper '}
              extra={
                <div className={'advisory-upload-image'}>
                  <img
                    src={require ('../../assets/images/person_deafult.jpeg')}
                    alt=""
                  />
                  <input type="file" />
                </div>
              }
            >
              头像(编辑)
            </List.Item>
            <List.Item
              multipleLine
              onClick={() => {
                this.props.history.push ({
                  pathname: './PatientsMedicalRecords',
                  state: {
                    addPatientName: this.state.addPatientName,
                  },
                });
              }}
              arrow="horizontal"
              extra="夏小雨"
            >
              姓名
            </List.Item>
            <DatePicker
              className={'advisory-height-modal'}
              mode="date"
              extra="Optional"
              value={this.state.date}
              minDate={minDate}
              maxDate={maxDate}
              use12Hours={'false'}
              onChange={date => this.setState ({date})}
            >
              <List.Item arrow="horizontal">出生年月</List.Item>
            </DatePicker>
            <List.Item
              multipleLine
              arrow="horizontal"
              extra="401083198203062914"
            >
              身份证号
            </List.Item>
            <List.Item
              multipleLine
              className={'advisory-info-mobile advisory-info-sex'}
              extra={
                <div className={'advisory-select-sex'}>
                  {this._renderSelect ()}
                </div>
              }
            >
              性别
            </List.Item>
          </List>
          <List className="advisory-select-options">
            <List.Item
              multipleLine
              onClick={() => {
                this.props.history.push ({
                  pathname: './PatientsMedicalRecords',
                  state: {
                    addAllergyInfo: this.state.addAllergyInfo,
                  },
                });
              }}
              arrow="horizontal"
              extra="填写"
            >
              过敏情况
            </List.Item>
            <List.Item
              multipleLine
              arrow="horizontal"
              extra="心脏病、哮喘"
              onClick={() => {
                this.props.history.push ({
                  pathname: './PatientsMedicalRecords',
                  state: {
                    familyMedicalHostory: this.state.familyMedicalHostory,
                  },
                });
              }}
            >
              家族病史
            </List.Item>
            <List.Item
              multipleLine
              onClick={() => {
                this.props.history.push ({
                  pathname: './PatientsMedicalRecords',
                  state: {
                    operationHistory: this.state.operationHistory,
                  },
                });
              }}
              arrow="horizontal"
              extra="颈椎手术、四肢手术"
            >
              手术史
            </List.Item>
            <List.Item
              onClick={() => {
                this.props.history.push ({
                  pathname: './PatientsMedicalRecords',
                  state: {
                    babyState: this.state.babyState,
                  },
                });
              }}
              multipleLine
              arrow="horizontal"
              extra="已婚、已生育"
            >
              婚育情况
            </List.Item>
            <List.Item
              multipleLine
              onClick={() => {
                this.props.history.push ({
                  pathname: './PatientsMedicalRecords',
                  state: {
                    healthInfo: this.state.healthInfo,
                  },
                });
              }}
              arrow="horizontal"
              extra="肥胖、吸烟、缺乏运动"
            >
              健康形态
            </List.Item>
            <Picker
              className={'advisory-height-modal'}
              data={this.state.heightData}
              cols={this.state.normalcols}
              value={this.state.heightArr}
              onChange={v => {
                this.setState ({heightArr: v});
              }}
              format={labels => {
                return (
                  <div className={'advisory-time-price'}>
                    {labels[0] ? labels[0] : this.state.heightArr[0]}
                    <div>
                      {labels[1] ? labels[1] : this.state.heightArr[1]}
                    </div>

                    <div>
                      {labels[2] ? labels[2] : this.state.heightArr[2]}
                    </div>
                    <div>
                      {labels[3] ? labels[3] : this.state.heightArr[3]}
                    </div>
                  </div>
                );
              }}
            >
              <List.Item
                multipleLine
                onClick={() => {}}
                arrow="horizontal"
                extra="75kg"
              >
                身高
              </List.Item>
            </Picker>
            <Picker
              className={'advisory-height-modal'}
              key={this._reactInternalFiber.index}
              data={this.state.weightData}
              cols={this.state.normalcols}
              value={this.state.weightArr}
              onChange={v => {
                this.setState ({weightArr: v});
              }}
              format={labels => {
                return (
                  <div className={'advisory-time-price'}>
                    {labels[0] ? labels[0] : this.state.weightArr[0]}
                    <div>
                      {labels[1] ? labels[1] : this.state.weightArr[1]}
                    </div>

                    <div>
                      {labels[2] ? labels[2] : this.state.weightArr[2]}
                    </div>
                    <div>
                      {labels[3] ? labels[3] : this.state.weightArr[3]}
                    </div>
                  </div>
                );
              }}
            >
              <List.Item multipleLine arrow="horizontal">
                体重
              </List.Item>
            </Picker>
            <div className={'advisory-info-next-btn'}>
              <Button
                type="primary"
                size="large"
                className={'bgColor_blue5'}
                onClick={() => {
                  this.props.history.push ({
                    pathname: './MedicalRecordsInfo',
                  });
                }}
              >
                保存并创建
              </Button>
            </div>
          </List>
        </div>
      </div>
    );
  }
}
