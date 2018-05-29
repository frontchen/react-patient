import React, {Component} from 'react';
import {List, Switch} from 'antd-mobile';
import {UserAvatar} from '../../components/Index';
export default class MedicalRecordSet extends Component {
  constructor (props) {
    super (props);
    this.state = {checkList: [], medicalList: []};
    this.medicalData = [
      {
        index: 0,
        image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        title: '章大天',
      },
      {
        index: 1,
        image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        title: '章中天',
      },
      {
        index: 2,
        image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        title: '章小天',
      },
      {
        index: 3,
        image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        title: '章小小',
      },
    ];
  }

  componentDidMount () {
    this._getData ();
  }

  _isChecked = id => {
    if (this.state.checkList.indexOf (id) === -1) {
      return false;
    }
    return true;
  };

  _setChecked = id => {
    let list = this.state.checkList;

    if (list.indexOf (id) === -1) {
      list.push (id);
    } else {
      list.splice (list.indexOf (id), 1);
    }
    this.setState ({checkList: list});
  };

  _getData () {
    let doctorId = this.props.location.state.doctorid;
    window.App.Ddoctor
      .openmedicallist ({id: 33, doc_id: doctorId})
      .then (res => {
        this.setState ({medicalList: res});
      });
  }

  // 医生详情页--开放病例本设置
  _openMedicalSet (id) {
    let doctorId = this.props.location.state.doctorid;
    window.App.Ddoctor
      .openmedicalset ({
        casebook_id: id,
        doc_id: doctorId,
        judge: this._isChecked (id) ? 1 : 0,
      })
      .then (res => {
        console.log (res);
      })
      .catch (err => {
        console.log (err);
      });
  }

  _renderMedical = (item, index) => {
    let casecheck = this.state.medicalList.doctor_casebook.map ((v, i) => {
      return v.casebook_id;
    });

    return (
      <List key={index}>
        <List.Item
          onClick={() => {
            this._openMedicalSet (item.id);
            this._setChecked (item.id);
          }}
          extra={
            <Switch
              checked={
                this._isChecked (item.id) || casecheck === item.id
                  ? true
                  : false
              }
              platform="ios"
              onClick={checked => {
                this.setState ({checked: checked});
              }}
              color={'#C02F27'}
            />
          }
          align={'middle'}
          thumb={
            <UserAvatar
              url={item.head_img}
              width={65}
              height={65}
              borderRadius={5}
            />
          }
          multipleLine
        >
          {item.name}
        </List.Item>
      </List>
    );
  };

  render () {
    let medicalData = this.state.medicalList.data;

    let openMedicalData = medicalData
      ? medicalData.map ((v, i) => {
          return this._renderMedical (v, i);
        })
      : null;

    return (
      <div className={'container'}>
        <div className={'doctor-medical-record-list bgColor_white'}>
          {openMedicalData}
        </div>
      </div>
    );
  }
}
