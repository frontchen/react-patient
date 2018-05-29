import React, {Component} from 'react';
import {List, SwipeAction} from 'antd-mobile';

export default class MedicalList extends Component {
  constructor (props) {
    super (props);
    this.state = {checkList: []};
    this.medicalData = [
      {
        index: 0,
        image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        title: '章大天',
      },
      {
        index: 1,
        image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        title: '章中天',
      },
      {
        index: 2,
        image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        title: '章小天',
      },
      {
        index: 3,
        image: 'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg',
        title: '章小小',
      },
    ];
  }

  _renderFamilyMedical = (item, index) => {
    return (
      <List key={index}>

        <SwipeAction
          style={{backgroundColor: 'gray'}}
          autoClose
          right={[
            {
              text: '编辑',
              onPress: () => console.log ('cancel'),
              style: {
                backgroundColor: '#bfbfbf',
                color: 'white',
                width: '70px',
              },
            },
          ]}
          onOpen={() => console.log ('global open')}
          onClose={() => console.log ('global close')}
        >
          <List.Item
            onClick={() => {
              this.props.history.push ({
                pathname: './MedicalRecordsInfo',
              });
            }}
            align={'middle'}
            thumb={require ('../../assets/images/person_deafult.jpeg')}
            multipleLine
          >
            {item.title}
          </List.Item>
        </SwipeAction>
      </List>
    );
  };

  render () {
    let familyMedicalSet = this.medicalData.map ((v, i) => {
      return this._renderFamilyMedical (v, i);
    });

    return (
      <div className={'container'}>
        <div className={'doctor-medical-record-list'}>

          {familyMedicalSet}

          <div
            className={'doctor-add-medical-record'}
            onClick={() => {
              this.props.history.push ({
                pathname: './AddRecordPerson',
              });
            }}
          >
            <div className={'doctor-add-sumrow'} />
            <div className={'doctor-add-sumcolumn'} />
          </div>
        </div>
      </div>
    );
  }
}
