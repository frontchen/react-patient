import React, {Component} from 'react';
import {Card, List, Switch, Icon, Toast} from 'antd-mobile';
import {UserAvatar, Button} from '../../components/Index';
export default class DoctorDetail extends Component {
  constructor (props) {
    super (props);
    this.state = {
      doctorId: 0,
      doctorDetail: {},
      follow: true,
    };
  }

  componentDidMount () {
    this.setState ({doctorId: this.props.location.state.doctorid});
    this._getData ();
  }

  _getData () {
    let doctorId = this.props.location.state.doctorid;
    let id = window.App.Ddoctor.data.id;
    window.App.Ddoctor
      .doctordetail ({id, doc_id: doctorId})
      .then (res => {
        this.setState ({doctorDetail: res});
      })
      .catch (err => {
        Toast.offline (err, 1);
      });
  }

  // 收藏医生
  _doctorCollect () {
    let id = window.App.Ddoctor.data.id;
    let doctorId = this.state.doctorId;
    window.App.Ddoctor
      .doctorcollect ({
        id,
        follow_id: doctorId,
        info: 1,
        judge: this.state.doctorDetail.follow ? 1 : 0,
      })
      .then (
        res => {
          console.log (res);
        },
        err => {
          Toast.offline (err, 2);
        }
      );
  }
  //职称
  _renderGradeData = (v, i) => {
    return (
      <span key={i} className={'doctor-job-name'}>
        {v.name}
      </span>
    );
  };
  //病历本
  _rendderCaseBook = (v, i) => {
    return <img key={i} src={v.head_img} alt="" />;
  };

  render () {
    let doctorDetail = this.state.doctorDetail;

    let grade = doctorDetail.grade
      ? doctorDetail.grade.map ((v, i) => {
          return this._renderGradeData (v, i);
        })
      : null;

    let caseBook = doctorDetail.casebook
      ? doctorDetail.casebook.map ((v, i) => {
          return this._rendderCaseBook (v, i);
        })
      : null;

    return (
      <div className={'container'}>
        <div className={'doctor-detail'}>
          <div
            className={'doctor-list-item doctor-ower-item '}
            onClick={() => {
              this.props.history.push ('./DoctorDetail');
            }}
          >
            <Card full>
              <Card.Header
                title={
                  <div className={'doctor-history-cart'}>
                    <div className={'doctor-card-box'}>
                      <div className={'doctor-name'}>
                        {doctorDetail.name}
                      </div>
                      <div className={'doctor-job-box'}>
                        <img
                          src={require ('../../assets/images/man.svg')}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className={'doctor-card-box'}>
                      <span className={'doctor-job-box doctor-job-right'}>
                        {grade}
                      </span>
                    </div>
                  </div>
                }
                thumb={<UserAvatar url={doctorDetail.head_img} />}
              />
            </Card>
          </div>
          <div className={'doctor-info-list'}>
            <List className="patient-person-list doctor-hospital-name">
              <List.Item
                multipleLine
                onClick={() => {}}
                extra={doctorDetail.hos_name}
              >
                所在医院
              </List.Item>
            </List>
            <div className={'doctor-info-list-center'}>
              <div
                className={'patient-group-inform doctor-good-content'}
                onClick={() => {
                  this.props.history.push ({
                    pathname: './DoctorGoodAt',
                    state: {
                      goodat: this.state.doctorDetail.disease,
                    },
                  });
                }}
              >
                <span className={'patient-group-title'}>擅长</span>
                <div
                  className={'patient-group-content'}
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                    overflow: 'hidden',
                  }}
                >
                  {doctorDetail.disease}
                </div>
                <div className={'doctor-icon-right'}>
                  <Icon type="right" size={'md'} color="#ccc" />
                </div>
              </div>

              <List className="patient-person-list">

                <List.Item
                  multipleLine
                  arrow="horizontal"
                  onClick={() => {
                    this.props.history.push ({
                      pathname: './Doctorintro',
                      state: {
                        doctorid: this.state.doctorId,
                      },
                    });
                  }}
                  extra={doctorDetail.note}
                >
                  简介
                </List.Item>
                <List.Item
                  arrow="horizontal"
                  wrap={true}
                  multipleLine
                  onClick={() => {
                    if (doctorDetail.follow) {
                      this.props.history.push ({
                        pathname: './MedicalRecordSet',
                        state: {
                          doctorid: this.state.doctorId,
                        },
                      });
                    } else {
                      this.props.history.push ('./DoctorHeadlines');
                    }
                  }}
                  extra={
                    <div className={'doctor-notes-box'}>
                      {caseBook}
                    </div>
                  }
                >
                  {doctorDetail
                    ? this.state.doctorDetail.follow
                        ? <div>
                            向他开放<div>的病历本</div>
                          </div>
                        : '三甲科普'
                    : null}
                </List.Item>
                <List.Item
                  multipleLine
                  onClick={() => {
                    this.props.history.push ('./OrderList');
                  }}
                  arrow="horizontal"
                >
                  咨询记录
                </List.Item>
                <List.Item
                  multipleLine
                  onClick={() => {
                    this.props.history.push ({
                      pathname: './DoctorPatientEvaluation',
                      state: {
                        doctorid: this.state.doctorId,
                      },
                    });
                  }}
                  arrow="horizontal"
                >
                  患者评价
                </List.Item>
                {this.state.doctorDetail.follow
                  ? <List.Item
                      multipleLine
                      arrow="horizontal"
                      onClick={() => {}}
                      extra={
                        <span className={'doctor-job-box'}>
                          {doctorDetail.outpatient
                            ? doctorDetail.outpatient.map ((v, i) => {
                                return `${v}、`;
                              })
                            : null}
                        </span>
                      }
                    >
                      可约时间
                    </List.Item>
                  : null}
              </List>

            </div>
            <div className={'doctor-info-list-bottom'}>
              <List className="patient-person-list">
                <List.Item
                  multipleLine
                  onClick={() => {}}
                  extra={
                    <Switch
                      checked={doctorDetail.follow ? true : false}
                      platform="ios"
                      onClick={checked => {
                        this._doctorCollect ();
                        doctorDetail.follow = checked;
                        this.setState (doctorDetail);
                      }}
                      color={'#C02F27'}
                    />
                  }
                >
                  收藏
                </List.Item>
                <List.Item
                  multipleLine
                  onClick={() => {
                    this.props.history.push ({
                      pathname: './DoctorComplaintContent',
                      state: {
                        doctorid: this.state.doctorId,
                      },
                    });
                  }}
                  arrow="horizontal"
                >
                  投诉
                </List.Item>
              </List>
            </div>
          </div>
          {doctorDetail.follow
            ? <Button
                onClick={() => {
                  this.props.history.push ('./DoctorCallFor');
                }}
                className={'patient-delete-btn '}
                type={'main'}
              >
                去预约
              </Button>
            : <Button
                disabled
                className={'patient-delete-btn '}
                type={'disabled'}
              >
                去预约
              </Button>}
          <Button
            onClick={() => {
              this.props.history.push ('./LetterList');
            }}
            className={'patient-delete-btn doctor-message-btn'}
            type={'white'}
          >
            去留言
          </Button>

        </div>
      </div>
    );
  }
}
