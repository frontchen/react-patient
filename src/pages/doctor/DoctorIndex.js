import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  SearchBar,
  List,
  ListView,
  Card,
  Toast,
  PullToRefresh,
} from 'antd-mobile';

import {UserAvatar} from '../../components/Index';
import './doctor.less';

export default class DoctorIndex extends Component {
  constructor (props) {
    super (props);
    this.navList = [
      {
        icon: `${require ('../../assets/images/wodeyisheng.png')}`,
        title: '我的医生',
      },
      {
        icon: `${require ('../../assets/images/yishengliuyan.png')}`,
        title: '医生留言',
      },
      {
        icon: `${require ('../../assets/images/quyueyisheng.png')}`,
        title: '去约医生',
      },
      {
        icon: `${require ('../../assets/images/zixundingdan.png')}`,
        title: '咨询订单',
      },
    ];
    this.timer = null;
    this.pageIndex = 0;
    this.NUM_ROWS = 1;
    const dataSource = new ListView.DataSource ({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      refreshing: true,
      isLoading: true,
      data: [],
      height: document.documentElement.clientHeight,
    };
  }

  componentDidMount () {
    this._getData ();
    const hei = this.state.height - ReactDOM.findDOMNode (this.lv).offsetTop;
    this.timer = setTimeout (() => {
      this.rData = this.genData ();
      this.setState ({
        dataSource: this.state.dataSource.cloneWithRows (this.rData),
        height: hei,
        refreshing: false,
        isLoading: false,
      });
    }, 100);
  }

  componentWillUnmount () {
    this._clearTimer ();
  }

  // 按照province分组数据
  _getProvinceList (list) {
    let map = {}, dest = [];
    for (let i = 0; i < list.length; i++) {
      let ai = list[i];
      if (!map[ai.province]) {
        dest.push ({
          province: ai.province,
          data: [ai],
        });
        map[ai.province] = ai;
      } else {
        for (let j = 0; j < dest.length; j++) {
          let dj = dest[j];
          if (dj.province === ai.province) {
            dj.data.push (ai);
            break;
          }
        }
      }
    }
    return dest;
  }

  // 重置倒计时
  _clearTimer () {
    this.timer && clearTimeout (this.timer);
  }

  _getData () {
    let id = window.App.Ddoctor.data.id;
    window.App.Ddoctor.doctorindex ({id}).then (
      res => {
        let list = res.data;
        list = this._getProvinceList (list);
        this.setState ({
          data: list,
        });
      },
      err => {
        Toast.offline (err, 2);
      }
    );
  }

  genData = (pIndex = 0) => {
    let dataArr = [];
    for (let i = 0; i < this.NUM_ROWS; i++) {
      dataArr.push (`row - ${this.pIndex * this.NUM_ROWS + i}`);
    }
    return dataArr;
  };

  onEndReached = event => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    this.setState ({isLoading: true});
    this.timer = setTimeout (() => {
      this.rData = this.genData ();
      this.setState ({
        dataSource: this.state.dataSource.cloneWithRows (this.rData),
        isLoading: false,
      });
    }, 1000);
  };

  onRefresh = () => {
    this.setState ({refreshing: true, isLoading: true});
    // simulate initial Ajax
    this.timer = setTimeout (() => {
      this.rData = this.genData ();
      this.setState ({
        dataSource: this.state.dataSource.cloneWithRows (this.rData),
        refreshing: false,
        isLoading: false,
      });
    }, 600);
  };

  //导航
  _renderNav = () => {
    return this.navList.map ((item, index) => {
      return (
        <List.Item
          key={index}
          thumb={item.icon}
          onClick={() => {
            if (item.title === '我的医生') {
              this.props.history.push ('./MyDoctor');
            }
            if (item.title === '医生留言') {
              this.props.history.push ({pathname: './DoctorMessageHistory'});
            }
            if (item.title === '去约医生') {
              this.props.history.push ('./DoctorCallFor');
            }
            if (item.title === '咨询订单') {
              this.props.history.push ('./OrderList');
            }
          }}
        >
          {item.title}
        </List.Item>
      );
    });
  };
  //医生列表
  _renderList = (item, index) => {
    let data = item.data.map ((i, rowID) => {
      let gradeData = i.grade.map ((j, k) => {
        return <span key={k} className={'doctor-job-name'}>{j.name}</span>;
      });
      return (
        <Card
          full
          key={rowID}
          onClick={() => {
            this.props.history.push ({
              pathname: './DoctorDetail',
              state: {doctorid: i.id},
            });
          }}
        >
          <Card.Header
            title={
              <div className={'doctor-history-cart'}>
                <div className={'doctor-card-box'}>
                  <span className={'doctor-name'}>
                    {i.name}
                  </span>

                  <span className={'doctor-job-box'}>
                    {gradeData ? gradeData : null}
                  </span>
                </div>
                <div className={'doctor-card-box '}>
                  <span className={'doctor-good-contents'}>
                    {i.disease}
                  </span>
                </div>
              </div>
            }
            thumb={
              <UserAvatar
                url={i.head_img}
                width={36}
                height={36}
                borderRadius={5}
              />
            }
          />
        </Card>
      );
    });

    return (
      <div className={'doctor-list-style'} key={index}>
        <div className={'doctor-area-list'}>
          {item.province}
        </div>
        <div className={'doctor-list-item doctor-ower-item doctor-index-item'}>
          {data}
        </div>
      </div>
    );
  };

  render () {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = this.state.data.length - 1;
    let row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = this.state.data.length - 1;
      }
      return this.state.data.map ((v, rowID) => {
        return this._renderList (v, rowID);
      });
    };

    return (
      <div className={'container'}>
        <div className={'doctor-index'}>
          <div className={'search_box'}>
            <SearchBar
              className={'search_group'}
              placeholder="搜索"
              onFocus={() => {
                this.props.history.push ('./SearchDoctors');
              }}
            />
          </div>

          <div className={'doctor-index-list'}>

            <ListView
              ref={el => (this.lv = el)}
              dataSource={this.state.dataSource}
              renderHeader={() => (
                <div className={'doctor-nav-list'}>
                  {this._renderNav ()}
                </div>
              )}
              renderFooter={() => (
                <div style={{padding: 30, textAlign: 'center'}}>
                  {this.state.isLoading ? '正在加载中' : '加载完成'}
                </div>
              )}
              renderRow={row}
              renderSeparator={separator}
              className="am-list"
              pageSize={1}
              useBodyScroll={false}
              onScroll={() => {
                console.log ('scroll');
              }}
              style={
                this.state.useBodyScroll
                  ? {}
                  : {
                      height: this.state.height,
                      border: '1px solid #ddd',
                      margin: '5px 0',
                    }
              }
              pullToRefresh={
                <PullToRefresh
                  refreshing={this.state.refreshing}
                  onRefresh={this.onRefresh}
                />
              }
              scrollRenderAheadDistance={500}
              onEndReached={this.onEndReached}
              onEndReachedThreshold={20}
            />

          </div>
        </div>
      </div>
    );
  }
}
