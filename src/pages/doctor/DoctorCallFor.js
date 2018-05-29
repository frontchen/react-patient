import React, {Component} from 'react';
import {SearchBar, Toast} from 'antd-mobile';
import moment from 'moment';
import {CardItem} from '../../components/Index';
export default class DoctorCallFor extends Component {
  constructor (props) {
    super (props);

    this.state = {callDoctorData: []};
  }

  componentDidMount () {
    this._getData ();
  }

  _getData () {
    let id = window.App.Ddoctor.data.id;
    window.App.Ddoctor.calldoctorlist ({id}).then (
      res => {
        this.setState ({callDoctorData: res.data});
      },
      err => {
        Toast.offline (err, 2);
      }
    );
  }

  _renderCallDoctors = (v, i) => {
    let callTime = v.duration.map ((item, index) => {
      return (
        <div key={index} className={'doctor-job-name'}>
          {item}
        </div>
      );
    });
    let grade = v.grade.map ((j, k) => {
      return <div key={k} className={'doctor-job-name'}>{j.name}</div>;
    });

    return (
      <CardItem
        type={'doctorcall'}
        key={i}
        onClick={() => {
          this.props.history.push ({
            pathname: './AdvisorySelect',
            state: {
              doc_id: v.id,
            },
          });
        }}
        url={v.head_img}
        name={v.name}
        disease={v.disease}
        calltime={callTime}
        grade={grade}
        price={v.float_price}
        time={moment (v.time, 'X').format ('mm分钟')}
      />
    );
  };
  render () {
    let data = this.state.callDoctorData;
    console.log (data);
    let callDoctors = data
      ? data.map ((v, i) => {
          return this._renderCallDoctors (v, i);
        })
      : null;
    return (
      <div className={'container'}>
        <div className={'doctor-call-list '}>
          <div className={'search_box'}>
            <SearchBar
              className={'search_group'}
              placeholder="搜索"
              onFocus={() => {
                this.props.history.push ('./SearchAppointList');
              }}
            />
          </div>
          <div className={'doctor-list'}>
            {callDoctors}
          </div>
        </div>
      </div>
    );
  }
}
