import React, {Component} from 'react';
import {SearchBar, Toast} from 'antd-mobile';

import {SearchResult, CardItem} from '../../components/Index';

export default class SearchChatLogs extends Component {
  constructor (props) {
    super (props);
    this.state = {searchData: [], isShow: true, empty: false};
  }

  _SearchMessage (text) {
    let id = window.App.Ddoctor.data.id;
    window.App.Ddoctor.searchmessage ({id, field: text}).then (
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
    return (
      <CardItem
        onClick={() => {
          this.props.history.push ({
            pathname: './LetterList',
            state: {
              doc_id: v.doctor_id,
            },
          });
        }}
        key={i}
        type={'message'}
        name={v.name}
        content={v.content}
        url={v.head_img}
        time={v.send_time}
      />
    );
  };

  render () {
    let list = this.state.searchData.map ((v, i) => {
      return this._renderList (v, i);
    });

    return (
      <div className={'container'}>
        <div className={'search-pages'}>
          <div className={'search_box'}>
            <SearchBar
              className={'search_group'}
              placeholder="搜索"
              onSubmit={text => {
                this.setState ({searchText: text});
                this._SearchMessage (text);
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
