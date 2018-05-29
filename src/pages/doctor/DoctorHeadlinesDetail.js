import React, {Component} from 'react';
import {TextareaItem, Card} from 'antd-mobile';

const imgWidth = 35;
const screenWidth = document.querySelector('body').offsetWidth;
const PaddingWidth = (screenWidth - 24 - 30) % (imgWidth + 3) / 2;
export default class DoctorHeadlinesDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {modalShow: false, showInput: false};
  }

  render() {
    return (
      <div className={'container'}>
        <div className={'doctor-head-content'}>
          <div className={'doctor-head-lines-detail '}>
            <div className={'doctor-head-lines-small'} onClick={() => {}}>
              <div className={'doctor-head-person'} />
              <div
                className={'doctor-head-right-content'}
                onClick={e => {
                  e.stopPropagation();
                  e.nativeEvent.stopImmediatePropagation();
                  if (this.state.modalShow) {
                    this.setState({modalShow: false});
                  }
                  if (this.state.showInput) {
                    this.setState({showInput: false});
                  }
                }}
              >
                <div className={'doctor-head-lines-name'}>张晓成</div>
                <div className={'doctor-head-lines-box'}>
                  <div className={'doctor-head-content-img'} />
                  <div
                    className={'doctor-head-lines-content'}
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    在心理因素之外，很多人不再愿意在朋友圈里过多展现自己，还在于朋友圈已经从最初个人的一方天地，变成了如今人群芜杂的公共场域。每个人的微信好友里，
                    或多或少都会有一些仅一面之缘的人、时刻准备向你推销的人，或者随时对你“求转发”“求投票”的人……
                  </div>
                </div>
                <div className={'doctor-head-time-good'}>
                  <div className={'doctor-head-time'}>
                    2018年3月16日&nbsp;15:35
                  </div>
                  <img
                    src={require('../../assets/images/pinglundianzan.svg')}
                    alt=""
                    onClick={e => {
                      e.stopPropagation();
                      e.nativeEvent.stopImmediatePropagation();
                      this.state.modalShow
                        ? this.setState({
                            modalShow: false,
                          })
                        : this.setState({modalShow: true});
                    }}
                  />
                  {this.state.modalShow
                    ? <div className={'doctor-head-good-modal'}>
                        <div className={'doctor-head-icon-box'}>
                          <div className={'doctor-head-icon-good'}>
                            <img
                              src={require('../../assets/images/good.svg')}
                              alt=""
                            />
                            赞
                          </div>
                        </div>
                        <div
                          className={'doctor-head-icon-box'}
                          onClick={() => {
                            this.setState({
                              showInput: this.state.showInput ? false : true,
                            });
                          }}
                        >
                          <div className={'doctor-head-icon-comment'}>
                            <img
                              src={require('../../assets/images/comment.svg')}
                              alt=""
                            />
                            评论
                          </div>
                        </div>
                      </div>
                    : null}
                </div>
              </div>
            </div>
            <div className={'doctor-comment-content'}>
              <div className={'doctor-comment-person-box'}>
                <img src={require('../../assets/images/good1.svg')} alt="" />
                <div
                  className={'doctor-comment-person'}
                  style={{
                    paddingLeft: PaddingWidth,
                    paddingRight: PaddingWidth,
                  }}
                >
                  <img
                    src={require('../../assets/images/doctorHeaderPerson.jpg')}
                    alt=""
                  />
                  <img
                    src={require('../../assets/images/doctorHeaderPerson.jpg')}
                    alt=""
                  />
                  <img
                    src={require('../../assets/images/doctorHeaderPerson.jpg')}
                    alt=""
                  />
                  <img
                    src={require('../../assets/images/doctorHeaderPerson.jpg')}
                    alt=""
                  />
                  <img
                    src={require('../../assets/images/doctorHeaderPerson.jpg')}
                    alt=""
                  />
                  <img
                    src={require('../../assets/images/doctorHeaderPerson.jpg')}
                    alt=""
                  />
                  <img
                    src={require('../../assets/images/doctorHeaderPerson.jpg')}
                    alt=""
                  />
                  <img
                    src={require('../../assets/images/doctorHeaderPerson.jpg')}
                    alt=""
                  />
                  <img
                    src={require('../../assets/images/doctorHeaderPerson.jpg')}
                    alt=""
                  />
                  <img
                    src={require('../../assets/images/doctorHeaderPerson.jpg')}
                    alt=""
                  />
                  <img
                    src={require('../../assets/images/doctorHeaderPerson.jpg')}
                    alt=""
                  />
                  <img
                    src={require('../../assets/images/doctorHeaderPerson.jpg')}
                    alt=""
                  />
                </div>
              </div>
              <Card className={'doctor-comment-other-content'} full>
                <Card.Header
                  title={
                    <div className={'doctor-comment-other-card'}>
                      <div className={'doctor-head-lines-name'}>马云</div>
                      <div
                        className={'doctor-head-lines-comment'}
                        style={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        2018年2月3日已办理出院，你需要观察 2018年2月3日已办理出院，你需要观察
                        2018年2月3日已办理出院，你需要观察2018年2月3日已办理出院，你需要观察
                        2018年2月3日已办理出院，你需要观察 2018年2月3日已办理出院，你需要观察
                      </div>
                    </div>
                  }
                  thumb={
                    <div className={'doctor-other-logo-box'}>
                      <img
                        className={'doctor-comment-icon'}
                        src={require('../../assets/images/comment1.svg')}
                        alt=""
                      />
                      <img
                        className={'doctor-other-head-logo'}
                        src={require('../../assets/images/doctorHeaderPerson.jpg')}
                        alt=""
                      />
                    </div>
                  }
                  extra={<span>2018/2/16</span>}
                />
              </Card>
              <Card className={'doctor-comment-other-content'} full>
                <Card.Header
                  title={
                    <div className={'doctor-comment-other-card'}>
                      <div className={'doctor-head-lines-name'}>马云</div>
                      <div
                        className={'doctor-head-lines-comment'}
                        style={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        2018年2月3日已办理出院，你需要观察 2018年2月3日已办理出院，你需要观察
                        2018年2月3日已办理出院，你需要观察2018年2月3日已办理出院，你需要观察
                        2018年2月3日已办理出院，你需要观察 2018年2月3日已办理出院，你需要观察
                      </div>
                    </div>
                  }
                  thumb={
                    <div className={'doctor-other-logo-box'}>
                      <img
                        className={'doctor-comment-icon'}
                        src={require('../../assets/images/comment1.svg')}
                        alt=""
                      />
                      <img
                        className={'doctor-other-head-logo'}
                        src={require('../../assets/images/doctorHeaderPerson.jpg')}
                        alt=""
                      />
                    </div>
                  }
                  extra={<span>2018/2/16</span>}
                />
              </Card>
            </div>
          </div>
          {this.state.showInput
            ? <div className={'chat-bottom doctor-comment-input'}>
                <div className={'doctor-write-box '}>
                  <TextareaItem
                    focus={'true'}
                    className={'doctor-textinput'}
                    ref={el => (this.autoFocusInst = el)}
                    autoHeight
                  />

                  <div className={'doctor-icon-bar'}>
                    <img
                      src={require('../../assets/images/smile.svg')}
                      className={'patient-icon-smile'}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            : null}
        </div>
      </div>
    );
  }
}
