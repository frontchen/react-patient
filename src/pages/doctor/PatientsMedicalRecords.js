import React, {Component} from 'react';
import {Tag, Button, InputItem} from 'antd-mobile';

export default class PatientsMedicalRecords extends Component {
  constructor (props) {
    super (props);
    this.state = {
      //信息是否完善
      isPefect: true,
      patientNameList: [],
      sickTimeList: [],
      babyList: [],
      currentIndex: 1,
      isSelected: false,
    };

    this.patientNameData = [
      {patientname: '夏诗雨', id: 1},
      {patientname: '夏雨荷', id: 2},
      {patientname: '张晓红', id: 3},
      {patientname: '夏小雨', id: 4},
      {patientname: '欧阳光明', id: 5},
      {patientname: '夏东宇', id: 6},
    ];
    this.sickTimeData = [
      {sickTime: '一周内', id: 1},
      {sickTime: '一个月内', id: 2},
      {sickTime: '半年内', id: 3},
      {sickTime: '大于半年', id: 4},
    ];
    this.babyData = [
      {babystate: '已婚', id: 1},
      {babystate: '未婚', id: 2},
      {babystate: '离异', id: 3},
      {babystate: '丧偶', id: 4},
      {babystate: '未生育', id: 5},
      {babystate: '备孕期', id: 6},
      {babystate: '怀孕期', id: 7},
      {babystate: '已生育', id: 8},
    ];
    this.activeStyle = {background: '#282c6d', color: '#fff'};
  }

  componentDidMount () {
    this.setState ({
      patientNameList: this.patientNameData,
      sickTimeList: this.sickTimeData,
      babyList: this.babyData,
    });
  }

  tabChoiced = id => {
    // tab切换的方法
    this.setState ({currentIndex: id});
  };

  _renderPatientName = () => {
    return this.state.patientNameList.map ((item, index) => {
      return (
        <Tag
          key={index}
          selected={item.id === this.state.currentIndex ? true : false}
          onChange={() => {
            this.tabChoiced (item.id);
          }}
        >
          {item.patientname}
        </Tag>
      );
    });
  };
  _renderSickTime = () => {
    return this.state.sickTimeList.map ((item, index) => {
      return (
        <Tag
          key={index}
          selected={item.id === this.state.currentIndex ? true : false}
          onChange={() => {
            this.tabChoiced (item.id);
          }}
        >
          {item.sickTime}
        </Tag>
      );
    });
  };

  _renderBabyState = () => {
    return this.state.babyList.map ((item, index) => {
      return (
        <Tag
          key={index}
          selected={item.id === this.state.currentIndex ? true : false}
          onChange={() => {
            this.tabChoiced (item.id);
          }}
        >
          {item.babystate}
        </Tag>
      );
    });
  };

  _renderData = state => {};
  render () {
    return (
      <div className={'container'}>
        <div className={'advisory-patients-records'}>
          {/* 添加患者姓名 */}
          {this.props.location.state.addPatientName
            ? <div>
                <div className={'advisory-add-patients-name'}>
                  <InputItem placeholder="添加患者姓名" />
                </div>
                <div className={'advisory-patients-card'}>
                  {this._renderPatientName ()}
                </div>
              </div>
            : null}
          {/* 添加过敏情况 */}
          {this.props.location.state.addAllergyInfo
            ? <div>
                <div className={'advisory-add-patients-name'}>
                  <InputItem placeholder="添加过敏情况" />
                </div>
                <div className={'advisory-sort-medical'}>
                  <div className={'advisory-sort-medical-title'}>
                    药品类<span>(可多选)</span>
                  </div>
                  <div className={'advisory-patients-card'}>
                    <Tag>无</Tag>
                    <Tag>张晓红</Tag>
                    <Tag>夏小雨</Tag>
                    <Tag>夏风</Tag>
                    <Tag>欧阳光明</Tag>
                  </div>
                </div>
                <div className={'advisory-sort-medical'}>
                  <div className={'advisory-sort-medical-title'}>
                    其他类<span>(可多选)</span>
                  </div>
                  <div className={'advisory-patients-card'}>
                    <Tag>无</Tag>
                    <Tag>张晓红</Tag>
                    <Tag>夏小雨</Tag>
                    <Tag>夏风</Tag>
                    <Tag>欧阳光明</Tag>
                  </div>
                </div>
              </div>
            : null}

          {/* 添加家族病史 */}
          {this.props.location.state.familyMedicalHostory
            ? <div>
                <div className={'advisory-add-patients-name'}>
                  <InputItem placeholder="添加家族病史" />
                </div>
                <div className={'advisory-patients-card'}>
                  <Tag>暂无</Tag>
                  <Tag>高血压</Tag>
                  <Tag>糖尿病</Tag>
                  <Tag>心脏病</Tag>
                  <Tag>脑梗</Tag>
                  <Tag>脑出血</Tag>
                  <Tag>癌症</Tag>
                  <Tag>过敏性疾病</Tag>
                  <Tag>哮喘</Tag>
                  <Tag>癫痫</Tag>
                  <Tag>白癜风</Tag>
                  <Tag>近视</Tag>
                </div>
              </div>
            : null}
          {/* 添加手术史 */}
          {this.props.location.state.operationHistory
            ? <div>
                <div className={'advisory-add-patients-name'}>
                  <InputItem placeholder="添加手术史" />
                </div>
                <div className={'advisory-patients-card'}>
                  <Tag>暂无</Tag>
                  <Tag>高血压</Tag>
                  <Tag>糖尿病</Tag>
                  <Tag>心脏病</Tag>
                  <Tag>脑梗</Tag>
                  <Tag>脑出血</Tag>
                  <Tag>癌症</Tag>
                  <Tag>过敏性疾病</Tag>
                  <Tag>哮喘</Tag>
                  <Tag>癫痫</Tag>
                  <Tag>白癜风</Tag>
                  <Tag>近视</Tag>
                </div>
              </div>
            : null}
          {/* 选择婚育状态 */}
          {this.props.location.state.babyState
            ? <div>
                <div className={'advisory-add-patients-name'}>
                  <InputItem placeholder="选择婚育状态" />
                </div>
                <div className={'advisory-patients-card'}>
                  {this._renderBabyState ()}
                </div>
              </div>
            : null}
          {/* 健康形态 */}
          {this.props.location.state.healthInfo
            ? <div>
                <div className={'advisory-add-patients-name'}>
                  <InputItem placeholder="健康形态" />
                </div>
                <div className={'advisory-patients-card'}>
                  <Tag>已婚</Tag>
                  <Tag>未婚</Tag>
                  <Tag>离异</Tag>
                  <Tag>丧偶</Tag>
                  <Tag>未生育</Tag>
                  <Tag>备孕期</Tag>
                  <Tag>怀孕期</Tag>
                  <Tag>已生育</Tag>
                </div>
              </div>
            : null}
          {/* 添加疾病名称 */}
          {this.props.location.state.illnessName
            ? <div>
                <div className={'advisory-add-patients-name'}>
                  <InputItem placeholder="添加疾病名称" />
                </div>
                <div className={'advisory-patients-card'}>
                  <Tag>不知道</Tag>
                  <Tag>肾积水</Tag>
                  <Tag>泌尿系结石</Tag>
                  <Tag>前列腺炎</Tag>
                  <Tag>肾肿瘤</Tag>
                </div>
              </div>
            : null}
          {/* 患病时长 */}
          {this.props.location.state.sickTime
            ? <div>
                <div className={'advisory-add-patients-name'}>
                  <InputItem placeholder="选择患病时长" />
                </div>
                <div className={'advisory-patients-card'}>
                  {this._renderSickTime ()}
                </div>
              </div>
            : null}
          <div className={'advisory-info-next-btn'}>
            <Button
              type="primary"
              size="large"
              className={'bgColor_blue5'}
              onClick={() => {
                //添加患者姓名跳转完善信息
                if (this.props.location.state.addPatientName) {
                  this.props.history.push ({
                    pathname: './AdvisorySelectInfo',
                    state: {
                      isPefect: this.state.isPefect,
                    },
                  });
                }
              }}
            >
              保存
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
