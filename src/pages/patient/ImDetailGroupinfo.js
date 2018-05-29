import React, {Component} from 'react';
import {Button, List, Icon} from 'antd-mobile';

const imgWidth = 50;
const screenWidth = document.querySelector ('body').offsetWidth;
const PaddingWidth = screenWidth % (imgWidth + 20) / 2;

export default class ImDetailGroupinfo extends Component {
  constructor (props) {
    super (props);

    this.groupList = [
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '马云',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '刘强东',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '章泽天',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '马化腾',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '吴军',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '王健林',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '马云',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '刘强东',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '章泽天',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '马化腾',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '吴军',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '王健林',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '马云',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '刘强东',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '章泽天',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '马化腾',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '吴军',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '王健林',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '马云',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '刘强东',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '章泽天',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '马化腾',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '吴军',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '王健林',
      },
      {
        image: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
        name: '马云',
      },
    ];
  }

  //群成员列表
  _renderList = (item, index) => {
    return (
      <div key={index} className={'patient-person-info'}>
        <img src={item.image} className={'patient-info-avatar'} alt="" />
        <div className={'patient-title-name'}>
          {item.name}
        </div>
      </div>
    );
  };

  render () {
    let renderList = this.groupList.map ((v, i) => {
      return this._renderList (v, i);
    });

    return (
      <div className={'container'}>
        <div className={'patient-group'}>
          <div
            className={'patient-group-info'}
            style={{paddingLeft: PaddingWidth, paddingRight: PaddingWidth}}
          >
            {renderList}
            <Button size="small" className={'patient-see-more'}>
              查看更多群成员
              <Icon type="right" size="small" />
            </Button>
          </div>
          <div className={'patient-content-top'}>
            <List className="patient-person-list">
              <List.Item
                className={'patient-group-name'}
                multipleLine
                onClick={() => {}}
                extra="泌尿外科住院部09876号3楼110室啊啊啊啊啊啊"
              >
                患友群名称
              </List.Item>
            </List>

            <div className={'patient-group-inform'}>
              <div className={'patient-group-title'}>群公告</div>
              <div
                className={'patient-group-content'}
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                Multiple line，long text will wrap；Long Text Long Text Long Text
                Long Text Long Text Long Text， Multiple line，long text will
                wrap；Long Text Long Text Long Text Long Text Long Text Long Text
                Multiple line，long text will wrap；Long Text Long Text Long Text
                Long Text Long Text Long Text
              </div>
            </div>
            <List className="patient-person-list">
              <List.Item
                multipleLine
                onClick={() => {
                  this.props.history.push ('./FindChatLogs');
                }}
              >
                查看聊天内容
              </List.Item>
            </List>
          </div>
          <div className={'patient-nick-name'}>
            <List className="patient-person-list">
              <List.Item
                multipleLine
                onClick={() => {
                  this.props.history.push ('./ImGroupNickEdit');
                }}
                extra="花婆婆"
                arrow="horizontal"
              >
                我在本群的昵称
              </List.Item>
            </List>
          </div>
          <Button type="warning" size="large" className={'patient-delete-btn'}>
            删除并退出
          </Button>
        </div>

      </div>
    );
  }
}
