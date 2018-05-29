import React, {Component} from 'react';
import {SearchBar, Toast} from 'antd-mobile';

import {SearchResult, CardItem} from '../../components/Index';
export default class SearchDoctors extends Component {
  constructor (props) {
    super (props);
    this.state = {searchData: [], isShow: true, empty: false};
  }
  _SearchDoctors (text) {
    window.App.Ddoctor.searchdoctor ({field: text}).then (
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
  _renderList = (v, i) => {
    let gradeData = v.grade.map ((item, index) => {
      return (
        <div key={index} className={'doctor-job-name'}>
          {item.name}
        </div>
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
    let list = this.state.searchData.map ((v, i) => {
      return this._renderList (v, i);
    });
    console.log (this.state.searchData);
    return (
      <div className={'container'}>
        <div className={'search-pages'}>
          <div className={'search_box'}>
            <SearchBar
              className={'search_group'}
              placeholder="搜索"
              onSubmit={text => {
                this.setState ({searchText: text});
                this._SearchDoctors (text);
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
