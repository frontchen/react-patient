import React, {Component} from 'react';
import {List, DatePicker, Picker, Button} from 'antd-mobile';

const nowTimeStamp = new Date ();
const now = new Date (nowTimeStamp);

let minDate = new Date (1900, 0); //出生日期起始时间
const maxDate = new Date (2100, 0); //出生日期截止时间

export default class AdvisorySelectInfo extends Component {
  constructor (props) {
    super (props);
    this.state = {
      date: now,
      time: now,
      selectList: [{selectName: '男', id: 1}, {selectName: '女', id: 2}],
      currentIndex: 1,
      layerList: [],
      pickerValue: [],
      cols: 3,
      normalcols: 4,
      weightArr: [],
      weightdata: [],
      heightArr: [],
      heightData: [],
      addPatientName: true,
      addAllergyInfo: true,
      familyMedicalHostory: true,
      operationHistory: true,
      babyState: true,
      healthInfo: true,
      patientCondition: true,
    }; // 身高数据 //体重数据 //添加患者姓名//添加过敏信息//家族病史//手术史//健康形态//本次病情咨询
    this.dateList = [
      {
        value: '2018-04-08',
        label: '2018-04-08',
        children: [
          {
            value: '08:30-08:15',
            label: '09:30-09:45',
            children: [{value: '120元', label: '120元'}],
          },
          {
            value: '18:30-18:45',
            label: '20:30-20:45',
            children: [{value: '130元', label: '130元'}],
          },
        ],
      },
      {
        value: '2018-04-09',
        label: '2018-04-09',
        children: [
          {
            value: '06:30-07:15',
            label: '08:30-09:15',
            children: [{value: '135元', label: '135元'}],
          },
          {
            value: '10:30-10:45',
            label: '11:30-11:45',
            children: [{value: '150元', label: '150元'}],
          },
        ],
      },
      {
        value: '2018-04-10',
        label: '2018-04-10',
        children: [
          {
            value: '10:30-10:15',
            label: '13:30-13:15',
            children: [{value: '160元', label: '160元'}],
          },
          {
            value: '14:30-14:45',
            label: '16:30-16:45',
            children: [{value: '110元', label: '110元'}],
          },
        ],
      },
    ];
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
      layerList: this.dateList,
      pickerValue: ['2018-04-08', '06:30-07:15', '120元'],
      weightArr: ['1', '2', '0', 'kg'],
      heightArr: ['1', '2', '1', 'cm'],
      weightData: this.normalData ('kg'),
      heightData: this.normalData ('cm'),
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

  _renderData = state => {
    if (state.isBasic) {
      return (
        <div>
          <List className="advisory-select-options">
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
              患者
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
              className={'advisory-info-mobile'}
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
            <Picker
              cascade={true}
              data={this.state.layerList}
              cols={this.state.cols}
              onOk={e => {}}
              value={this.state.pickerValue}
              onChange={v => {
                this.setState ({pickerValue: v});
              }}
              format={labels => {
                return (
                  <div className={'advisory-time-price'}>
                    {labels[0] ? labels[0] : this.state.pickerValue[0]}
                    <div className={'advosory-time'}>
                      {labels[1] ? labels[1] : this.state.pickerValue[1]}
                    </div>
                  </div>
                );
              }}
            >
              <List.Item
                arrow={'horizontal'}
                className={'advisory-select-timedetail'}
              >
                预约时间段
              </List.Item>
            </Picker>

            <List.Item
              className={'advisory-info-mobile'}
              multipleLine
              onClick={() => {}}
              arrow=""
              extra="136&nbsp;8888&nbsp;8888"
            >
              联系人手机
            </List.Item>
          </List>
        </div>
      );
    }
    if (state.isPefect) {
      return (
        <div>
          <List className="advisory-select-options ">
            <List.Item multipleLine arrow="horizontal" extra="夏小雨">
              姓名
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
          </List>
          <List className="advisory-select-options">
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
          </List>
        </div>
      );
    }
  };

  render () {
    let state = this.props.location.state;
    return (
      <div className={'container'}>
        <div className={'advisory-select'}>
          {this._renderData (state)}

          <div className={'advisory-info-next-btn'}>
            <Button
              type="primary"
              size="large"
              className={'bgColor_blue5'}
              onClick={() => {
                if (this.props.location.state.isBasic) {
                  this.props.history.push ('./PayForOrder');
                } else if (this.props.location.state.isPefect) {
                  this.props.history.push ({
                    pathname: './PatientsCondition',
                  });
                }
              }}
            >
              下一步
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
