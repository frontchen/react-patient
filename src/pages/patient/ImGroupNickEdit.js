import React, {Component} from 'react';
import {InputItem} from 'antd-mobile';

export default class ImGroupNickEdit extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'patient-fill-nick-name'}>
          <InputItem
            ref={el => (this.labelFocusInst = el)}
            editable={true}
            disabled={false}
            clear={true}
          />
        </div>
        <div className={'patient-explain'}>在这里你可以设置你在这个群的昵称。这个昵称只会在此群内显示</div>
      </div>
    );
  }
}
