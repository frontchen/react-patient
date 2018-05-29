import React, {Component} from 'react';
import {List, Card, TextareaItem} from 'antd-mobile';

export default class SanJiaInforDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {liked: false, othersLiked: false, editorIcon: true};
  }

  componentDidMount() {
    this.autoFocusInst.focus();
  }

  render() {
    return (
      <div className={'container user-zixun'}>
        <div className={'user-sanjia-info'}>
          <div className={'user-sanjia-info-title'}>
            人工智能来袭，家庭医院和互联网医院谁能走的更远？
          </div>
          <div className={'user-author-info'}>
            <List>
              <List.Item multipleLine onClick={() => {}} extra=" 2017-08-18">
                <div className={'user-author-log-box'}>
                  <img
                    src={require('../../assets/images/doctorHeaderPerson.jpg')}
                    alt=""
                  />
                  <span>夏术阶</span>
                </div>
              </List.Item>
            </List>
          </div>
          <div className={'user-sanjia-zixun-info'} />
          <div className={'user-sanjia-read-num'}>
            阅读<span>10000+</span>
          </div>

          <div className={'user-read-like-box'}>
            {this.state.liked
              ? <div className={'user-read-like-content liked'}>
                  <div className={'user-read-liked'}>
                    <img
                      src={require('../../assets/images/liked.svg')}
                      alt=""
                    />
                  </div>
                  <div className={'user-read-like-num'}>759</div>
                </div>
              : <div className={'user-read-like-content like'}>
                  <div className={'user-read-like'}>
                    <img src={require('../../assets/images/like.svg')} alt="" />
                  </div>
                  <div className={'user-read-like-num'}>759</div>
                </div>}
          </div>
        </div>
        <div className={'user-hot-comment'}>
          <div className={'user-hot-comment-title'}>热门评论</div>
          <div className={'user-hot-comment-content'}>
            <Card full>
              <Card.Header
                title={
                  <div className={'user-hot-comment-cart'}>
                    <div className={'user-hot-comment-namedate'}>
                      <div className={'user-hot-comment-nickname'}>马云</div>
                      <div className={'user-hot-comment-nickdate'}>123</div>
                    </div>
                    <div className={'user-hot-comment-wapper'}>
                      人活一生，会遇到各式各样的人，绝大多数的人是旅途的过客，留在记忆里常来常往的人才是朋友。凡尘一世，遇见是缘；凡尘一生，好友相伴是福。
                    </div>
                  </div>
                }
                thumb={
                  <div className={'user-hot-comment-logo'}>
                    <img
                      src={require('../../assets/images/doctorHeaderPerson.jpg')}
                      alt=""
                    />
                  </div>
                }
                extra={
                  <div className={'user-hot-comment-otherislike'}>
                    {this.state.othersLiked
                      ? <div className={'user-hot-comment-otherlike'}>
                          <div className={'user-hot-comment-otherlike-num'}>
                            123
                          </div>
                          <div>
                            <img
                              src={require('../../assets/images/otherLike.svg')}
                              alt=""
                            />
                          </div>
                        </div>
                      : <div className={'user-hot-comment-otherliked'}>
                          <div className={'user-hot-comment-otherliked-num'}>
                            123
                          </div>
                          <div>
                            <img
                              src={require('../../assets/images/otherLiked.svg')}
                              alt=""
                            />
                          </div>
                        </div>}
                  </div>
                }
              />
            </Card>
            <Card full>
              <Card.Header
                title={
                  <div className={'user-hot-comment-cart'}>
                    <div className={'user-hot-comment-namedate'}>
                      <div className={'user-hot-comment-nickname'}>马云</div>
                      <div className={'user-hot-comment-nickdate'}>123</div>
                    </div>
                    <div className={'user-hot-comment-wapper'}>
                      人活一生，会遇到各式各样的人，绝大多数的人是旅途的过客，留在记忆里常来常往的人才是朋友。凡尘一世，遇见是缘；凡尘一生，好友相伴是福。
                    </div>
                  </div>
                }
                thumb={
                  <div className={'user-hot-comment-logo'}>
                    <img
                      src={require('../../assets/images/doctorHeaderPerson.jpg')}
                      alt=""
                    />
                  </div>
                }
                extra={
                  <div className={'user-hot-comment-otherislike'}>
                    {this.state.othersLiked
                      ? <div className={'user-hot-comment-otherlike'}>
                          <div className={'user-hot-comment-otherlike-num'}>
                            123
                          </div>
                          <div>
                            <img
                              src={require('../../assets/images/otherLike.svg')}
                              alt=""
                            />
                          </div>
                        </div>
                      : <div className={'user-hot-comment-otherliked'}>
                          <div className={'user-hot-comment-otherliked-num'}>
                            123
                          </div>
                          <div>
                            <img
                              src={require('../../assets/images/otherLiked.svg')}
                              alt=""
                            />
                          </div>
                        </div>}
                  </div>
                }
              />
            </Card>
          </div>
          <div className={'user-hot-comment-title'}>全部评论</div>
          <div className={'user-hot-comment-content'}>
            <Card full>
              <Card.Header
                title={
                  <div className={'user-hot-comment-cart'}>
                    <div className={'user-hot-comment-namedate'}>
                      <div className={'user-hot-comment-nickname'}>马云</div>
                      <div className={'user-hot-comment-nickdate'}>123</div>
                    </div>
                    <div className={'user-hot-comment-wapper'}>
                      人活一生，会遇到各式各样的人，绝大多数的人是旅途的过客，留在记忆里常来常往的人才是朋友。凡尘一世，遇见是缘；凡尘一生，好友相伴是福。
                    </div>
                  </div>
                }
                thumb={
                  <div className={'user-hot-comment-logo'}>
                    <img
                      src={require('../../assets/images/doctorHeaderPerson.jpg')}
                      alt=""
                    />
                  </div>
                }
                extra={
                  <div className={'user-hot-comment-otherislike'}>
                    {this.state.othersLiked
                      ? <div className={'user-hot-comment-otherlike'}>
                          <div className={'user-hot-comment-otherlike-num'}>
                            123
                          </div>
                          <div>
                            <img
                              src={require('../../assets/images/otherLike.svg')}
                              alt=""
                            />
                          </div>
                        </div>
                      : <div className={'user-hot-comment-otherliked'}>
                          <div className={'user-hot-comment-otherliked-num'}>
                            123
                          </div>
                          <div>
                            <img
                              src={require('../../assets/images/otherLiked.svg')}
                              alt=""
                            />
                          </div>
                        </div>}
                  </div>
                }
              />
            </Card>
            <Card full>
              <Card.Header
                title={
                  <div className={'user-hot-comment-cart'}>
                    <div className={'user-hot-comment-namedate'}>
                      <div className={'user-hot-comment-nickname'}>马云</div>
                      <div className={'user-hot-comment-nickdate'}>123</div>
                    </div>
                    <div className={'user-hot-comment-wapper'}>
                      人活一生，会遇到各式各样的人，绝大多数的人是旅途的过客，留在记忆里常来常往的人才是朋友。凡尘一世，遇见是缘；凡尘一生，好友相伴是福。
                    </div>
                  </div>
                }
                thumb={
                  <div className={'user-hot-comment-logo'}>
                    <img
                      src={require('../../assets/images/doctorHeaderPerson.jpg')}
                      alt=""
                    />
                  </div>
                }
                extra={
                  <div className={'user-hot-comment-otherislike'}>
                    {this.state.othersLiked
                      ? <div className={'user-hot-comment-otherlike'}>
                          <div className={'user-hot-comment-otherlike-num'}>
                            123
                          </div>
                          <div>
                            <img
                              src={require('../../assets/images/otherLike.svg')}
                              alt=""
                            />
                          </div>
                        </div>
                      : <div className={'user-hot-comment-otherliked'}>
                          <div className={'user-hot-comment-otherliked-num'}>
                            123
                          </div>
                          <div>
                            <img
                              src={require('../../assets/images/otherLiked.svg')}
                              alt=""
                            />
                          </div>
                        </div>}
                  </div>
                }
              />
            </Card>
          </div>
        </div>
        <div className={'chat-bottom user-comment-input'}>
          <div className={'user-write-box '}>
            <TextareaItem
              focus={'true'}
              title={
                this.state.editorIcon
                  ? <img
                      src={require('../../assets/images/editor.svg')}
                      alt=""
                    />
                  : null
              }
              className={'user-textinput'}
              ref={el => (this.autoFocusInst = el)}
              autoHeight
              placeholder="写评论..."
              onFocus={() => {
                this.setState({
                  editorIcon: false,
                });
              }}
              onBlur={() => {
                this.setState({editorIcon: true});
              }}
              onChange={e => {
                this.setState({
                  editorIcon: e.length > 0 ? false : true,
                });
              }}
            />

            <div className={'user-icon-bar'}>
              <img
                className={'user-icon-pingjia'}
                src={require('../../assets/images/pingjia.svg')}
                alt=""
              />
              <img
                src={require('../../assets/images/star.svg')}
                className={'user-icon-star'}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
