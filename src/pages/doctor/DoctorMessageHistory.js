import React, {Component} from 'react';
import {SearchBar, Toast, SwipeAction} from 'antd-mobile';
// import moment from 'moment';

import {CardItem} from '../../components/Index';

export default class DoctorMessageHistory extends Component {
  constructor (props) {
    super (props);
    this.state = {
      messageHistory: [],
    };
  }

  componentDidMount () {
    this._getData ();
  }

  //获取留言
  _getData () {
    let id = window.App.Ddoctor.data.id;

    window.App.Ddoctor.letterlist ({id}).then (
      res => {
        this.setState ({messageHistory: res.data});
      },
      err => {
        Toast.offline (err, 2);
      }
    );
  }

  //删除留言
  _deleteData (id, index) {
    window.App.Ddoctor.deleteletter ({ids: id}).then (
      res => {
        this.state.messageHistory.splice (index, 1);
        this.setState (this.state.messageHistory);
      },
      err => {
        Toast.offline (err, 2);
      }
    );
  }

  _renderMessageHistory = (v, i) => {
    console.log (v.send_type, v.status);
    return (
      <SwipeAction
        key={i}
        style={{backgroundColor: 'gray'}}
        autoClose
        right={[
          {
            text: '删除',
            onPress: () => this._deleteData (v.id, i),
            style: {backgroundColor: '#bfbfbf', color: 'white', width: '60px'},
          },
        ]}
        onOpen={() => console.log ('global open')}
        onClose={() => console.log ('global close')}
      >
        <CardItem
          onClick={() => {
            this.props.history.push ({
              pathname: './LetterList',
              state: {
                doc_id: v.doctor_id,
                ids: v.id,
              },
            });
          }}
          type={'message'}
          name={v.name}
          show={v.send_type === 0 && v.status === 0 ? 'true' : 'false'}
          content={v.content}
          url={v.head_img}
          time={v.send_time}
        />
      </SwipeAction>
    );
  };

  render () {
    let data = this.state.messageHistory.map ((v, i) => {
      return this._renderMessageHistory (v, i);
    });

    return (
      <div className={'container'}>
        <div className={'doctor-letter-list'}>
          <div className={'search_box'}>
            <SearchBar
              className={'search_group'}
              placeholder="搜索"
              ref={ref => (this.autoFocusInst = ref)}
              onFocus={() => {
                this.props.history.push ('./SearchChatLogs');
              }}
              onClick={this.handleClick}
            />
          </div>
          <div className={'patient-chat-history doctor-message-history'}>
            {data}

          </div>
        </div>
      </div>
    );
  }
}
