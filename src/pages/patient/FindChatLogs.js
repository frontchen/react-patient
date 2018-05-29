import React, {Component} from 'react';
import {SearchBar, Card, List} from 'antd-mobile';

export default class FindChatLogs extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {showText: true};
  }
  componentDidMount() {
    this.autoFocusInst.focus();
  }
  handleClick = () => {
    this.manualFocusInst.focus();
  };
  render() {
    console.dir(List.Item.Brief);
    return (
      <div className={' patient-find-chat'}>
        <div className={'search_box'}>
          <SearchBar
            className={'patient-find-input'}
            placeholder="搜索"
            ref={ref => (this.autoFocusInst = ref)}
            onClick={this.handleClick}
          />
        </div>
        {this.state.showText
          ? <div className={'patient-chat-history'}>
              <Card full>
                <Card.Header
                  title={
                    <div className={'patient-history-cart'}>
                      <div className={'patient-nickname'}>马云</div>
                      <div
                        className={'patient-history-content'}
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
                  thumb="/static/media/person_deafult.84f13bbe.jpeg"
                  extra={<span>2018/2/16</span>}
                />
              </Card>
              <Card full>
                <Card.Header
                  title={
                    <div className={'patient-history-cart'}>
                      <div className={'patient-nickname'}>马云</div>
                      <div
                        className={'patient-history-content'}
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
                  thumb="/static/media/person_deafult.84f13bbe.jpeg"
                  extra={<span>星期四</span>}
                />
              </Card>
              <Card full>
                <Card.Header
                  title={
                    <div className={'patient-history-cart'}>
                      <div className={'patient-nickname'}>马云</div>
                      <div
                        className={'patient-history-content'}
                        style={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        2018年2月3日已办理出院，你需要观察
                      </div>
                    </div>
                  }
                  thumb="/static/media/person_deafult.84f13bbe.jpeg"
                  extra={<span>昨天</span>}
                />
              </Card>
            </div>
          : <div className={'patient-nodata'}>
              <img src={require('../../assets/images/sousuo.png')} alt="" />
              <div className={'patient-info-tips'}>输入您需要查找的搜索信息</div>
            </div>}
      </div>
    );
  }
}
