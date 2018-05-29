import React, {Component} from 'react';
import {List, Picker, Toast} from 'antd-mobile';

import moment from 'moment';

export default class AdvisorySelect extends Component {
  constructor (props) {
    super (props);

    this.state = {
      pickerValue: [],
      cols: 3,
      //信息是否完善
      isBasic: true,
      data: [],
    };
  }

  componentDidMount () {
    this._getData ();
  }

  _getData () {
    let doc_id = this.props.location.state.doc_id;
    window.App.Ddoctor.durationtime ({doc_id}).then (
      res => {
        this.setState ({data: this._getDateList (res.data)});
      },
      err => {
        Toast.offline (err, 2);
      }
    );
  }

  // 按照date分组数据
  _getDateList (list) {
    let map = {}, dest = [];
    for (let i = 0; i < list.length; i++) {
      let ai = list[i];
      if (!map[ai.date]) {
        dest.push ({
          value: ai.date,
          label: ai.date,
          children: [
            {
              value: ai.time,
              label: ai.time,
              children: [
                {
                  value: ai.float_price,
                  label: ai.float_price,
                },
              ],
            },
          ],
        });

        map[ai.date] = ai;
      } else {
        for (let j = 0; j < dest.length; j++) {
          let dj = dest[j];
          if (dj.value === ai.date) {
            dj.children.push ({
              value: ai.time,
              label: ai.time,
              children: [
                {
                  value: ai.float_price,
                  label: ai.float_price,
                },
              ],
            });
            break;
          }
        }
      }
    }
    return dest;
  }

  //格式化日期
  _formatWeek (date) {
    if (date === 'Monday') {
      return '星期一';
    } else if (date === 'Tuesday') {
      return '星期二';
    } else if (date === 'Wednesday') {
      return '星期三';
    } else if (date === 'Thursday') {
      return '星期四';
    } else if (date === 'Friday') {
      return '星期五';
    } else if (date === 'Saturday') {
      return '星期六';
    } else if (date === 'Sunday') {
      return '星期日';
    }
  }

  _renderSelectTime = () => {
    return this.state.data.map ((val, i) => {
      return (
        <Picker
          key={i}
          cascade={true}
          data={this.state.data}
          cols={this.state.cols}
          onOk={e => {
            this.props.history.push ({
              pathname: './AdvisorySelectInfo',
              state: {
                isBasic: this.state.isBasic,
                data: this.state.pickerValue,
              },
            });
          }}
          value={this.state.pickerValue}
          onChange={v => {
            this.setState ({pickerValue: v});
          }}
          format={labels => {
            let priceData = val.children.map ((item, index) => {
              return item.children.map ((a, b) => {
                return a.value;
              });
            });
            return (
              <div className={'advisory-time-price'}>
                {labels[0] ? labels[0] : val.value}
                <div className={'advosory-time'}>
                  {this._formatWeek (moment (val.value).format ('dddd'))}
                </div>

                <div className={'advosory-price'}>
                  {labels[2] ? labels[2] : priceData}
                </div>
              </div>
            );
          }}
        >
          <List.Item arrow={'horizontal'} />
        </Picker>
      );
    });
  };

  render () {
    console.log (this.state.pickerValue);
    return (
      <div className={'container'}>
        <div className={'advisory-select-list'}>
          <List>
            {this._renderSelectTime ()}
          </List>
        </div>
      </div>
    );
  }
}
