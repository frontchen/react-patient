import React, {Component} from 'react';
import {List, TextareaItem, Button} from 'antd-mobile';

export default class DoctorComplaintContent extends Component {
  constructor (props) {
    super (props);
    this.state = {checked: false, textContent: ''};
  }

  _sendComplaint (text) {
    let doctorId = this.props.location.state.doctorid;
    window.App.Ddoctor
      .doctorcomplaint ({id: 33, doc_id: doctorId, content: text})
      .then (res => {
        console.log (res);
      })
      .catch (err => {
        console.log (err);
      });
  }

  render () {
    return (
      <div className={'container'}>
        <div className={'doctor-complaint-content'}>
          <List renderHeader={() => '请输入投诉该医生的原因'}>
            <TextareaItem
              rows={5}
              count={200}
              onChange={text => {
                this.setState ({textContent: text});
              }}
            />
          </List>
          <Button
            type={'primary'}
            size="large"
            className={'patient-delete-btn bgColor_base'}
            onClick={() => {
              this._sendComplaint (this.state.textContent);
            }}
          >
            提交给泌尿科医生团队
          </Button>
          <div className={'doctor-complaints-procedure'}>投诉须知</div>
        </div>
      </div>
    );
  }
}
