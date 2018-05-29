import React, {Component} from 'react';
import {List, SearchBar, Button, TextareaItem} from 'antd-mobile';
import UpLoadPhoto from '../../components/UpLoadPhoto';

export default class FillAddvisroyInfo extends Component {
  constructor (props) {
    super (props);
    this.state = {
      searchData: [],
      historyData: [],
    };
  }

  //搜索医院

  _renderHospital = text => {
    return (
      <div>
        <div className={'search_box'}>
          <SearchBar
            className={'search_group'}
            placeholder={text}
            onChange={e => {
              this.setState ({searchData: e});
            }}
          />
        </div>
        <div className={'advdsisory-fill-list'}>
          {/* 输入检索 */}
          <List>
            {this.state.searchData.length > 0
              ? <List.Item>
                  {this.state.searchData}
                </List.Item>
              : null}
          </List>
          {/* 是否有历史记录 */}
          {this.state.historyData.length > 0
            ? <div>
                <div className={'addvisory-fill-history'}>历史记录</div>
                <List>
                  <List.Item>上海第一人民医院</List.Item>
                </List>
              </div>
            : null}
        </div>

      </div>
    );
  };
  //检查、化验单
  _renderCheckTest = () => {
    return (
      <div className={'advisory-upload-checktest'}>
        <div className={'advisory-upload-checktest-title'}>
          检查、化验单(添加图片)
        </div>
        <UpLoadPhoto />
      </div>
    );
  };

  //医嘱与用药
  _renderMedication = () => {
    return (
      <div className={'advisory-upload-checktest'}>
        <div className={'advisory-upload-checktest-title'}>医嘱与用药</div>
        <TextareaItem autoHeight rows={6} placeholder="请填写医嘱，祝您早日康复" />
        <UpLoadPhoto />
      </div>
    );
  };

  //要完善的内容
  _renderUpdateInfo = () => {
    return (
      <div className={'advisory-upload-checktest'}>
        <TextareaItem autoHeight rows={6} placeholder="请输入要完善的内容" />
        <UpLoadPhoto />
      </div>
    );
  };

  //创建创建看病记录=>病情描述
  _renderDiseaseDes = () => {
    return (
      <div className={'advisory-upload-checktest'}>
        <TextareaItem count={30} autoHeight rows={6} placeholder="请输入要完善的内容" />

      </div>
    );
  };

  _buttonData = text => {
    return (
      <div className={'advisory-info-next-btn'}>
        <Button type="primary" size="large" className={'bgColor_blue5'}>
          {text}
        </Button>
      </div>
    );
  };
  _renderData = state => {
    if (state.hospitalName) {
      return this._renderHospital ('请输入医院名称');
    }
    if (state.departmentsName) {
      return this._renderHospital ('请输入科室');
    }
    if (state.checkTest) {
      return this._renderCheckTest ();
    }
    if (state.prescribedMedication) {
      return this._renderMedication ();
    }
    if (state.updateInfo) {
      return this._renderUpdateInfo ();
    }
    if (state.diseaseDes) {
      return this._renderDiseaseDes ();
    }
  };
  _renderButton = state => {
    if (
      state.hospitalName ||
      state.departmentsName ||
      state.checkTest ||
      state.prescribedMedication ||
      state.diseaseDes
    ) {
      return this._buttonData ('保存');
    }
    if (state.updateInfo) {
      return this._buttonData ('保存并提交');
    }
  };
  render () {
    let state = this.props.location.state;

    return (
      <div className={'container'}>
        <div className={'advisory-fill-info'}>
          {this._renderData (state)}
          {this._renderButton (state)}
        </div>
      </div>
    );
  }
}
