import React, {Component} from 'react';
import {SearchBar, Toast} from 'antd-mobile';
import moment from 'moment';
import {SearchResult, CardItem} from '../../components/Index';

export default class SearchAppointList extends Component {
  constructor (props) {
    super (props);
    this.state = {searchData: [], isShow: true, empty: false};
  }

  _searchAppointDoctor (text) {
    window.App.Ddoctor.searchappointlist ({field: text}).then (
      res => {
        this.setState ({
          searchData: res.data,
          isShow: false,
          empty: res.data.length === 0 ? true : false,
        });
      },
      err => {
        Toast.offline (err, 2);
      }
    );
  }

  _renderCallDoctors = (v, i) => {
    let callTime = v.duration.map ((item, index) => {
      return (
        <div key={index} className={'doctor-job-name'}>
          {item}
        </div>
      );
    });
    let grade = v.grade.map ((j, k) => {
      return <div key={k} className={'doctor-job-name'}>{j.name}</div>;
    });

    return (
      <CardItem
        type={'doctorcall'}
        key={i}
        onClick={() => {
          this.props.history.push ('./AdvisorySelect');
        }}
        url={v.head_img}
        name={v.name}
        disease={v.disease}
        calltime={callTime}
        grade={grade}
        price={v.float_price}
        time={moment (v.time, 'X').format ('mm分钟')}
      />
    );
  };

  render () {
    const {isShow, empty} = this.state;

    console.log ([isShow, empty]);
    let list = this.state.searchData.map ((v, i) => {
      return this._renderCallDoctors (v, i);
    });

    return (
      <div className={'container'}>
        <div className={'search-pages search-appoint-list'}>
          <div className={'search_box'}>
            <SearchBar
              className={'search_group'}
              placeholder="搜索"
              onSubmit={text => {
                this.setState ({searchText: text});
                this._searchAppointDoctor (text);
              }}
              onFocus={() => {}}
            />
          </div>
          <div className={'search-list'}>
            {this.state.isShow ? <SearchResult type={'default'} /> : null}
            {this.state.empty
              ? <SearchResult type={'empty'}>没有搜索记录</SearchResult>
              : list}
          </div>
        </div>
      </div>
    );
  }
}
