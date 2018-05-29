import React, {Component} from 'react';
import {Carousel, Card, TextareaItem} from 'antd-mobile';

const imgWidth = 35;
const screenWidth = document.querySelector('body').offsetWidth;
const PaddingWidth = (screenWidth - 24 - 30) % (imgWidth + 3) / 2;

export default class DoctorHeadlines extends Component {
  constructor(props) {
    super(props);
    this.doctorData = [
      {
        index: 0,
        time: '今天',
        image: require('../../assets/images/doctorHeaderPerson.jpg'),
        content:
          '三月，醉一场青春的流年。慢步在三月的春光里，走走停停，看花开嫣然，看春雨绵绵，感受春风拂面，春天，就是青春的流年。青春，是人生中最美的风景。青春，是一场花开的遇见；青春，是一场痛并快乐着的旅行；青春，是一场轰轰烈烈的比赛；青春，是一场鲜衣奴马的争荣岁月；青春，是一场风花雪月的光阴。',
      },
      {
        index: 1,
        time: '昨天',
        image: require('../../assets/images/doctorHeaderPerson.jpg'),
        content:
          '因为有了春风，我们感受到友谊的温暖；因为有了春风，我们不再寂寞；因为有了春风，我们总在需要帮助的时候，有他们伸出援助之手。春风，是那样感情丰富，温婉细腻。在春风里，我们跳着，唱着，欢呼着，只因为这如春风的情谊。',
      },
      {
        index: 2,
        time: '3月17',
        image: require('../../assets/images/doctorHeaderPerson.jpg'),
        content:
          '醉一场青春的流年。人生的三月，我们正值青春，风华正茂。在这样一个充满活力的年纪，我们要把握机遇，朝人生的巅峰冲刺；我们要珍惜每一个让我们流连忘返的风景，保持年青的心态，随时准备着与时间赛跑；我们要在时光深处，保持一种淡然而洒脱，矜持而深情的微笑，让三月的风景陪我们笑语盈盈，清芬一路。',
      },
    ];
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
      doctorLineShow: false,
      modalShow: false,
      showInput: false,
      modalList: [],
    };
    this.swiperData = [
      require('../../assets/images/banner/banner.png'),
      require('../../assets/images/banner/banner01.jpg'),
      require('../../assets/images/banner/banner02.jpg'),
      require('../../assets/images/banner/banner03.jpg'),
    ];
  }

  _isChecked = id => {
    if (this.state.modalList.indexOf(id) === -1) {
      return false;
    }

    return true;
  };
  _setChecked = id => {
    let list = this.state.modalList;
    if (list.indexOf(id) === -1) {
      list.push(id);
    } else {
      list.splice(list.indexOf(id), 1);
    }
    this.setState({modalList: list});
  };
  _renderDoctorHeadLine = () => {
    return this.doctorData.map((item, index) => {
      return (
        <div key={index} className={'doctor-head-lines-small'}>
          <div className={'doctor-head-lines-time'}>
            {item.time.length > 2 && item.time.length < 5
              ? <div>
                  {item.time.substr(2, item.time.length - 1)}
                  <span>
                    {item.time.substring(0, 2)}
                  </span>
                </div>
              : item.time}
          </div>
          <div className={'doctor-head-comment-content'}>
            <div
              className={'doctor-head-lines-box'}
              onClick={() => {
                if (this.state.doctorLineShow) {
                  this.props.history.push('./DoctorHeadlinesDetail');
                } else {
                  this.props.history.push('./SanJiaInforDetail');
                }
              }}
            >
              <div
                className={'doctor-head-content-img'}
                style={{backgroundImage: `url(${item.image})`}}
              />
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
                {item.content}
              </div>
            </div>
            <div className={'doctor-head-time-good'}>
              <div className={'doctor-head-time'}>2018年3月16日&nbsp;15:35</div>
              <img
                src={require('../../assets/images/pinglundianzan.svg')}
                alt=""
                onClick={() => {
                  this._setChecked(index);
                }}
              />
              {this._isChecked(index)
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
                  <span>张三、李四、张三、李四、张三、李四、张三、李四</span>
                </div>
              </div>
              <Card className={'doctor-comment-other-content'} full>
                <Card.Header
                  title={
                    <div className={'doctor-comment-other-card'}>
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
                        <span className={'doctor-head-lines-name'}>
                          马云:&nbsp;
                        </span>
                        2018年2月3日已办理出院，你需要观察 2018年2月3日已办理出院，你需要观察
                        2018年2月3日已办理出院，你需要观察2018年2月3日已办理出院，你需要观察
                        2018年2月3日已办理出院，你需要观察 2018年2月3日已办理出院，你需要观察
                      </div>
                    </div>
                  }
                />
              </Card>
            </div>
          </div>
        </div>
      );
    });
  };
  _renderSwiper = () => {
    return this.swiperData.map((item, index) => {
      return (
        <div key={index}>
          <a style={{display: 'inline-block', height: this.state.imgHeight}}>
            <img
              src={item}
              alt=""
              style={{width: '100%', verticalAlign: 'top'}}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({
                  imgHeight: 'auto',
                });
              }}
            />
          </a>
        </div>
      );
    });
  };
  render() {
    return (
      <div className={'container'}>
        <div className={'doctor-head-content'}>
          {this.state.doctorLineShow
            ? <div className={'doctor-head-logo'}>
                <div className={'doctor-head-nickname'}>往事如烟</div>
                <div className={'doctor-head-person'} />
              </div>
            : <div className={'swiper-container '}>
                <Carousel
                  autoplay={false}
                  autoplayInterval={'2000'}
                  infinite
                  beforeChange={(from, to) =>
                    console.log(`slide from ${from} to ${to}`)}
                  afterChange={index => console.log('slide to', index)}
                >
                  {this._renderSwiper()}
                </Carousel>
              </div>}

          <div
            className={'doctor-head-lines-list'}
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
            {this._renderDoctorHeadLine()}
            <div className={'doctor-head-lines-year'}>2017年</div>
            {this._renderDoctorHeadLine()}
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
