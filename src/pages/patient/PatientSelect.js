import React, {Component} from 'react';
import {SearchBar, List} from 'antd-mobile';
import {Link} from 'react-router-dom';

import '../../styles/Base.less';
import './patient.less';

export default class PatientSelect extends Component {
  constructor (props) {
    super (props);
    this.state = {isJoin: false, myDataSource: [], totalDataSource: []};
    this.list = [
      {
        image: require ('../../assets/images/doctorHeaderLogo.jpg'),
        name: '前列腺炎',
      },
      {
        image: require ('../../assets/images/doctorHeaderLogo.jpg'),
        name: '骨质疏松',
      },
      {
        image: require ('../../assets/images/doctorHeaderLogo.jpg'),
        name: '糖尿病',
      },
      {
        image: require ('../../assets/images/doctorHeaderLogo.jpg'),
        name: '血友群',
      },
      {
        image: require ('../../assets/images/doctorHeaderLogo.jpg'),
        name: '泌尿科患友群',
      },
      {
        image: require ('../../assets/images/doctorHeaderLogo.jpg'),
        name: '泌尿科患友群',
      },
    ];
  }

  componentWillMount () {
    document.title = '患者录';
    this.mydata = this.state.myDataSource;
    this.totalData = this.state.totalDataSource;
  }

  _getMyData = (item, index) => {
    return (
      <Link to="/ImDetailGroupinfo" key={index}>
        <List.Item thumb={item.image} onClick={() => {}}>
          {item.name}
        </List.Item>
      </Link>
    );
  };

  render () {
    let myData = this.list.map ((v, i) => {
      return this._getMyData (v, i);
    });
    return (
      <div className={'container'}>
        <div className={'search_box'}>
          <SearchBar className={'search_group'} placeholder="搜索想要加入的群" />
        </div>

        <List renderHeader={() => '推荐患友群'} className="patient-my-list">
          {myData}
        </List>

      </div>
    );
  }
}
