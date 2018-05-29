import React, {Component} from 'react';
import {TextareaItem, Toast} from 'antd-mobile';
import {UserAvatar} from '../../components/Index';
export default class LetterList extends Component {
  constructor (props) {
    super (props);
    this.state = {isShow: false, chatData: []};
  }

  _isShow = () => {
    this.state.isShow
      ? this.setState ({
          isShow: false,
        })
      : this.setState ({isShow: true});
  };

  componentDidMount () {
    this._updateState ();
    this.autoFocusInst.focus ();

    this._getData ();
  }

  _getData () {
    let id = window.App.Ddoctor.data.id;
    let doc_id = this.props.location.state.doc_id;

    window.App.Ddoctor.appointmessage ({id, doc_id}).then (
      res => {
        console.log (res.data);
        this.setState ({chatData: res.data});
      },
      err => {
        Toast.offline (err, 2);
      }
    );
  }

  _updateState () {
    let ids = this.props.location.state.doc_id;
    window.App.Ddoctor.updatestate ({ids}).then (
      res => {
        console.log (res);
      },
      err => {
        Toast.offline (err, 2);
      }
    );
  }
  _renderChatData = (v, i) => {
    return (
      <li
        key={i}
        className={
          v.send_type === 0 && v.status === 0
            ? 'patient-other-side'
            : 'patient-oneself'
        }
      >
        <span className={'patient-img-box'}>
          <UserAvatar
            url={
              v.send_type === 0 && v.status === 0
                ? v.doctor_head_img
                : v.patient_head_img
            }
            width={40}
            height={40}
          />
        </span>
        <div className={'patient-dialogue-box'}>
          {v.send_type === 0 && v.status === 0
            ? <div className={'patient-chat-name'}>
                {v.doctor_name}
              </div>
            : null}

          <div className={'patient-dialogue-content'}>
            {v.send_type === 0 && v.status === 0 ? v.content : v.content}
          </div>
        </div>
      </li>
    );
  };

  render () {
    let chatData = this.state.chatData.map ((v, i) => {
      return this._renderChatData (v, i);
    });
    return (
      <div className={'container'}>
        <div className={'im-chat'}>
          <ul className={'patient-diague'}>
            {chatData}
            <li className={'patient-other-side'}>
              <span className={'patient-img-box'}>
                <img
                  src={require ('../../assets/images/person_deafult.jpeg')}
                  alt=""
                />
              </span>
              <div className={'patient-dialogue-box'}>
                <div className={'patient-dialogue-content'}>
                  在吗？医生啊啊啊啊啊啊啊啊啊啊
                </div>
              </div>
            </li>
            <li className={'patient-oneself'}>
              <span className={'patient-img-box'}>
                <img
                  src={require ('../../assets/images/person_deafult.jpeg')}
                  alt=""
                />
              </span>
              <div className={'patient-dialogue-box'}>
                <div className={'patient-dialogue-content'}>
                  贾医生 您好这是为什么啊啊啊啊啊水电费水啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊电费水电费第三方啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                </div>
              </div>
            </li>
            <li className={'patient-datetime'}>
              <span className={'patient-time'}>下午5:55</span>
            </li>
            <li className={'patient-datetime'}>
              <span className={'patient-time'}>
                “<span className={'patient-newname'}>小小生</span>”加入了群聊
              </span>
            </li>
            <li className={'patient-datetime'}>
              <div
                className={'patient-newjoin'}
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                你已加入了泌尿科患友群，本群参与人员有:<span>
                  小王、凯丽、张芬宇、李雨菲、卜谷义、莫容晓晓、白书云、小王、凯丽、张芬宇、李雨菲、卜谷义、莫容晓晓、白书云
                </span>
              </div>
            </li>
            <li className={'patient-other-side'}>
              <span className={'patient-img-box'}>
                <img
                  src={require ('../../assets/images/person_deafult.jpeg')}
                  alt=""
                />
              </span>
              <div className={'patient-dialogue-box'}>
                <div className={'patient-chat-name'}>马云</div>
                <div className={'patient-dialogue-content'}>
                  在吗？医生啊啊啊啊啊啊啊啊啊啊
                </div>
              </div>
            </li>
            <li className={'patient-oneself'}>
              <span className={'patient-img-box'}>
                <img
                  src={require ('../../assets/images/person_deafult.jpeg')}
                  alt=""
                />
              </span>
              <div className={'patient-dialogue-box'}>
                <div className={'patient-dialogue-content'}>
                  贾医生 您好这是为什么啊啊啊啊啊啊啊啊啊啊啊啊啊
                </div>
              </div>
            </li>
            <li className={'patient-datetime'}>
              <span className={'patient-time'}>下午5:55</span>
            </li>
            <li className={'patient-datetime'}>
              <span className={'patient-time'}>
                “<span className={'patient-newname'}>小小生</span>”加入了群聊
              </span>
            </li>
            <li className={'patient-datetime'}>
              <div
                className={'patient-newjoin'}
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                你已加入了泌尿科患友群，本群参与人员有:<span>
                  小王、凯丽、张芬宇、李雨菲、卜谷义、莫容晓晓、白书云、小王、凯丽、张芬宇、李雨菲、卜谷义、莫容晓晓、白书云
                </span>
              </div>
            </li>
          </ul>
          <div className={'chat-bottom'}>
            <div className={'patient-write-box '}>
              <div className={'patient-chat-sound'}>
                <img src={require ('../../assets/images/sound.svg')} alt="" />
              </div>
              <TextareaItem
                className={'patient-textinput'}
                ref={el => (this.autoFocusInst = el)}
                autoHeight
              />

              <div className={'patient-icon-bar'}>
                <img
                  src={require ('../../assets/images/smile.svg')}
                  className={'patient-icon-smile'}
                  alt=""
                />
                <img
                  src={require ('../../assets/images/add.svg')}
                  className={'patient-icon-add'}
                  onClick={() => {
                    this._isShow ();
                  }}
                  alt=""
                />
              </div>
            </div>
            {this.state.isShow
              ? <div className={'patient-chat-tools'}>
                  <div className={'patient-chat-photo'}>
                    <div className={'patient-photo-box'}>
                      <img
                        src={require ('../../assets/images/take_photos.svg')}
                        alt=""
                      />
                    </div>
                    <div className={'patient-photo-text'}>照片</div>
                  </div>
                  <div className={'patient-take-photos'}>
                    <div className={'patient-photo-box'}>
                      <img
                        src={require ('../../assets/images/photos.svg')}
                        alt=""
                      />
                    </div>
                    <div className={'patient-photo-text'}>拍摄</div>
                  </div>
                </div>
              : null}
          </div>

          <div
            className={'patient-total-icon'}
            onClick={() => {
              this.props.history.push ('./ImDetailGroupinfo');
            }}
          >
            <img src={require ('../../assets/images/qunchenyuan.png')} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
