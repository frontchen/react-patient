import React, {Component} from 'react';
import {Card} from 'antd-mobile';

export default class DoctorPatientEvaluation extends Component {
  constructor (props) {
    super (props);
    this.state = {commentList: []};
  }

  componentDidMount () {
    this._getData ();
  }

  _getData () {
    let doctorId = this.props.location.state.doctorid;
    window.App.Ddoctor.patientcommentlist ({doc_id: doctorId}).then (res => {
      this.setState ({commentList: res.data});
    });
  }

  _renderCommentData = (v, i) => {
    return (
      <Card full key={i}>
        <Card.Header
          title={
            <div className={'doctor-evaluation-cart'}>
              <div className={'doctor-evaluation-box'}>
                <span className={'doctor-evaluation-name'}>
                  {v.name ? v.name : v.truename}
                </span>
              </div>
              <div className={'doctor-evaluation-box '}>
                <span className={'doctor-evaluation-date'}>
                  {v.created_at}
                </span>
              </div>
            </div>
          }
          thumb={
            v.head_img
              ? v.head_img
              : require ('../../assets/images/person_deafult.jpeg')
          }
        />
        <Card.Body>
          {v.content}
        </Card.Body>
      </Card>
    );
  };

  render () {
    let commentList = this.state.commentList.map ((v, i) => {
      return this._renderCommentData (v, i);
    });

    return (
      <div className="container">
        <div className={'doctor-patient-evaluation'}>
          {commentList}
          <Card full>
            <Card.Header
              title={
                <div className={'doctor-evaluation-cart'}>
                  <div className={'doctor-evaluation-box'}>
                    <span className={'doctor-evaluation-name'}>马云</span>
                  </div>
                  <div className={'doctor-evaluation-box '}>
                    <span className={'doctor-evaluation-date'}>
                      2017年06月12日
                    </span>
                  </div>
                </div>
              }
              thumb={require ('../../assets/images/person_deafult.jpeg')}
            />
            <Card.Body>
              2018年2月3日已办理出院，你需要观察 2018年2月3日已办理出院，你需要观察
              2018年2月3日已办理出院，你需要观察2018年2月3日已办理出院，你需要观察 2018年2月3日已办理出院，你需要观察
              2018年2月3日已办理出院，你需要观察
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
