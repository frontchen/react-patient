import React, {Component} from 'react';
import {List, Tag} from 'antd-mobile';

export default class MedicalRecordsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          time: '2018.05.12',
          address: ['上海华山医院', '眼科'],
          des: ['泌尿B超', '血潜', '尿常规'],
          imgInfo: [
            {
              img: require('../../assets/images/doctorHeaderPerson.jpg'),
              title: '泌尿B超',
            },
            {
              img: require('../../assets/images/doctorHeaderPerson.jpg'),
              title: '血潜',
            },
            {
              img: require('../../assets/images/doctorHeaderPerson.jpg'),
              title: '尿常规',
            },
          ],
        },
        {
          time: '2018.05.12',
          address: ['上海华山医院', '普外科'],
          des: ['泌尿B超', '血潜', '尿常规'],
          imgInfo: [
            {
              img: require('../../assets/images/doctorHeaderPerson.jpg'),
              title: '泌尿B超',
            },
            {
              img: require('../../assets/images/doctorHeaderPerson.jpg'),
              title: '血潜',
            },
            {
              img: require('../../assets/images/doctorHeaderPerson.jpg'),
              title: '尿常规',
            },
          ],
        },
        {
          time: '2018.05.12',
          address: ['上海华山医院', '普外科'],
          des: ['泌尿B超', '血潜', '尿常规'],
          imgInfo: [
            {
              img: require('../../assets/images/doctorHeaderPerson.jpg'),
              title: '泌尿B超',
            },
            {
              img: require('../../assets/images/doctorHeaderPerson.jpg'),
              title: '血潜',
            },
            {
              img: require('../../assets/images/doctorHeaderPerson.jpg'),
              title: '尿常规',
            },
          ],
        },
      ],
    };
  }

  _renderMedicalRecords = (item, index) => {
    let tagsData = item.des.map((item, index) => {
      return (
        <Tag
          key={index}
          selected={false}
          className={'medical-records-photo-tags'}
        >
          {item}
        </Tag>
      );
    });
    let recordsPhotos = item.imgInfo.map((item, index) => {
      return (
        <div key={index} className={'medical-records-img-item'}>
          <img src={item.img} alt="" />
          <div>
            {item.title}
          </div>
        </div>
      );
    });
    return (
      <div key={index} className={'medical-records-item'} onClick={() => {}}>
        <div className={'medical-records-item-num'}>
          {index + 1}
        </div>
        <div className={'medical-records-item-wrapper'}>
          <List className={'medical-records-title-content'}>
            <List.Item
              className={'medical-records-title-time'}
              arrow="horizontal"
            >
              {item.time}
              <List.Item.Brief>
                {item.address[0]}
                <span>
                  {item.address[1]}
                </span>
              </List.Item.Brief>
            </List.Item>
          </List>
          <div className={'meidical-records-item-content'}>
            <div className={'medical-records-photo'}>
              {tagsData}
            </div>
            <div className={'medical-records-imginfo'}>
              {recordsPhotos}
            </div>
          </div>
        </div>
      </div>
    );
  };
  render() {
    let recordsInfo = this.state.dataSource.map((v, i) => {
      return this._renderMedicalRecords(v, i);
    });
    return (
      <div className={'container'}>
        <div className={'medical-records-info'}>
          <List className={'adivisory-patient-info'}>
            <List.Item
              arrow="horizontal"
              thumb={require('../../assets/images/person_deafult.jpeg')}
            >
              章大天
              <List.Item.Brief>男 64岁</List.Item.Brief>
            </List.Item>
          </List>
          <div className={'medical-records-title'}>看病记录</div>
          {this.state.dataSource.length > 0
            ? <div className={'medical-records-list'}>
                {recordsInfo}
                <div
                  className={'medical-add-history'}
                  onClick={() => {
                    this.props.history.push({
                      pathname: './MedicalRecordsCreate',
                    });
                  }}
                >
                  <div className={'medical-add-row'} />
                  <div className={'medical-add-column'} />
                </div>
              </div>
            : <div className={'medical-records-content'}>
                <img
                  onClick={() => {
                    this.props.history.push({
                      pathname: './MedicalRecordsCreate',
                    });
                  }}
                  src={require('../../assets/images/add_medical_records.svg')}
                  alt=""
                />
                <div className={'doctor-medical-btn-text'}>添加看病记录</div>
              </div>}
        </div>
      </div>
    );
  }
}
