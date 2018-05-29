import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {SearchBar, Toast, ListView, PullToRefresh} from 'antd-mobile';

import {CardItem} from '../../components/Index';

export default class MyDoctor extends Component {
  constructor (props) {
    super (props);
    this.timer = null;
    this.pageIndex = 0;
    this.NUM_ROWS = 1;
    const dataSource = new ListView.DataSource ({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      myDoctorList: [],
      dataSource,
      refreshing: true,
      isLoading: true,
      height: document.documentElement.clientHeight,
    };
  }

  _getData () {
    let id = window.App.Ddoctor.data.id;
    window.App.Ddoctor.mydoctorlist ({id}).then (
      res => {
        this.setState ({myDoctorList: res.data});
      },
      err => {
        Toast.offline (err, 2);
      }
    );
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
    }, 300);
  }

  componentWillUnmount () {
    this._clearTimer ();
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

  // 重置倒计时
  _clearTimer () {
    this.timer && clearTimeout (this.timer);
  }

  _renderMyDoctor = (v, i) => {
    let gradeData = v.grade.map ((item, index) => {
      return (
        <span key={index} className={'doctor-job-name'}>
          {item.name}
        </span>
      );
    });

    return (
      <CardItem
        onClick={() => {
          this.props.history.push ({
            pathname: './DoctorDetail',
            state: {
              doctorid: v.id,
            },
          });
        }}
        key={i}
        type={'doctorlist'}
        name={v.name}
        grade={gradeData}
        url={v.head_img}
        disease={v.disease}
      />
    );
  };
  render () {
    let data = this.state.myDoctorList;

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
    let index = data.length - 1;
    let row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      return data.map ((v, rowID) => {
        return this._renderMyDoctor (v, rowID);
      });
    };

    return (
      <div className={'container'}>
        <div className={'my-doctor-info'}>
          <div className={'search_box'}>
            <SearchBar
              className={'search_group'}
              placeholder="输入医生名或疾病名"
              onFocus={() => {
                this.props.history.push ('./SearchMyDoctors');
              }}
            />
          </div>
          <div className={'doctor-list'}>
            <ListView
              ref={el => (this.lv = el)}
              dataSource={this.state.dataSource}
              renderFooter={() => (
                <div style={{padding: 30, textAlign: 'center'}}>
                  {this.state.isLoading ? '正在加载中' : ''}
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
