import React, {Component} from 'react';
import {Card} from 'antd-mobile';

export default class Doctorintro extends Component {
  constructor (props) {
    super (props);
    this.state = {doctorIntro: {}};
  }

  componentDidMount () {
    this._getData ();
  }

  _getData () {
    let doctorId = this.props.location.state.doctorid;
    window.App.Ddoctor.doctorintro ({doc_id: doctorId}).then (res => {
      this.setState ({doctorIntro: res});
    });
  }

  render () {
    let doctorIntro = this.state.doctorIntro;

    return (
      <div className={'container'}>
        <div className={'doctor-patient-evaluation doctor-introduction'}>
          <Card full>
            <Card.Header
              title={
                <div className={'doctor-evaluation-cart'}>
                  <div className={'doctor-evaluation-box'}>
                    <span className={'doctor-evaluation-name'}>
                      {doctorIntro.name}
                    </span>
                  </div>

                </div>
              }
              thumb={
                doctorIntro.head_img
                  ? doctorIntro.head_img
                  : require ('../../assets/images/person_deafult.jpeg')
              }
            />
            <Card.Body>
              {doctorIntro.note}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
