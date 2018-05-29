import React, {Component} from 'react';
import {SearchBar, List, Modal, Toast} from 'antd-mobile';

import './patient.less';

import {UserAvatar} from '../../components/Index';

export default class PatientIndex extends Component {
  constructor (props) {
    super (props);
    this.state = {modalShow: false};

    this.list = [
      {
        image: 'http://img3.a0bi.com/upload/ttq/20140813/1407915088900.jpg',
        name: '前列腺炎',
      },
      {
        image: require ('../../assets/images/doctorHeaderPerson.jpg'),
        name: '骨质疏松',
      },
      {
        image: require ('../../assets/images/person_deafult.jpeg'),
        name: '糖尿病',
      },
      {
        image: require ('../../assets/images/person_deafult.jpeg'),
        name: '血友群',
      },
      {
        image: require ('../../assets/images/person_deafult.jpeg'),
        name: '泌尿科患友群',
      },
      {
        image: require ('../../assets/images/person_deafult.jpeg'),
        name: '泌尿科患友群',
      },
    ];
  }
  closest = (el, selector) => {
    const matchesSelector =
      el.matches ||
      el.webkitMatchesSelector ||
      el.mozMatchesSelector ||
      el.msMatchesSelector;
    while (el) {
      if (matchesSelector.call (el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  };
  showModal = (key, index) => e => {
    e.preventDefault (); // 修复 Android 上点击穿透
    this.setState ({[key]: true});
  };

  onClose = key => () => {
    this.setState ({[key]: false});
  };

  onWrapTouchStart = e => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test (navigator.userAgent)) {
      return;
    }
    const pNode = this.closest (e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault ();
    }
  };

  componentWillMount () {
    this.mydata = this.state.myDataSource;
    this.totalData = this.state.totalDataSource;
  }

  componentDidMount () {
    window.App.Dpatient.doctordetail ({doc_id: 1}).then (
      res => {
        console.log (res);
      },
      err => {
        Toast.offline (err, 2);
      }
    );
  }

  _getMyData = (item, index) => {
    return (
      <List.Item
        key={index}
        thumb={
          <UserAvatar
            url={item.image}
            width={50}
            height={50}
            borderRadius={5}
          />
        }
        onClick={() => {
          this.props.history.push ('./ImDetail');
        }}
      >
        {item.name}
      </List.Item>
    );
  };

  _getTotalData = (item, index) => {
    return (
      <List.Item
        key={index}
        thumb={
          <UserAvatar
            url={item.image}
            width={50}
            height={50}
            borderRadius={5}
          />
        }
        onClick={this.showModal ('modalShow')}
      >
        {item.name}
      </List.Item>
    );
  };

  render () {
    let myData = this.list.map ((v, i) => {
      return this._getMyData (v, i);
    });

    let totalData = this.list.map ((v, i) => {
      return this._getTotalData (v, i);
    });
    return (
      <div className={'container'}>
        <div className={'patient-index '}>
          <div className={'search_box'}>
            <SearchBar
              className={'search_group'}
              placeholder="搜索想要加入的群"
              onFocus={() => {
                this.props.history.push ('./PatientSelect');
              }}
            />
            {/* <Icon name={'check'} size={50} color={'#F60'} />
            <Button type={'pay'}>按钮</Button> */}
          </div>

          <List renderHeader={() => '我的患友群'} className="patient-my-list">
            {myData}
          </List>
          <List renderHeader={() => '去加入患友群'} className="patient-empty-list">
            <List.Item>
              <div className={'patient-add-box'}>
                <div className={'patient-sum-row'} />
                <div className={'patient-sum-column'} />
              </div>
            </List.Item>
          </List>

          <List renderHeader={() => '全部患友群'} className="patient-my-list">
            {totalData}
          </List>
          <Modal
            visible={this.state.modalShow}
            transparent
            maskClosable={false}
            onClose={this.onClose ('modalShow')}
            title="是否加入&quot;骨质疏松&quot;患友群？"
            footer={[
              {
                text: '取消',
                onPress: () => {
                  this.onClose ('modalShow') ();
                },
                style: 'default',
              },
              {
                text: '加入',
                onPress: () => {
                  this.props.history.push ('./ImDetail');
                },
              },
            ]}
            wrapProps={{onTouchStart: this.onWrapTouchStart}}
          />
          {/* <Icon type="success" size="lg" />
        <Button type="primary"> PatientIndex </Button>{' '} */}
        </div>

      </div>
    );
  }
}
