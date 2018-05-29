import React, {Component} from 'react';
import {ImagePicker} from 'antd-mobile';

import lrz from 'lrz'; //图片压缩
import WxImageViewer from 'react-wx-images-viewer'; //图片预览

export default class UpLoadPhoto extends Component {
  constructor (props) {
    super (props);
    this.state = {multiple: true, imagesrc: [], isOpen: false, index: 0};
  }
  onClose = () => {
    this.setState ({isOpen: false});
  };

  openViewer (index) {
    this.setState ({index, isOpen: true});
  }

  //压缩图片
  onChange = (files, type, index) => {
    if (type === 'add') {
      let imageList = [];
      files.map ((item, index) => {
        return lrz (item.url, {
          quality: 0.7,
        }).then (rst => {
          // 处理成功会执行
          imageList.push (rst.base64);
          this.setState ({imagesrc: imageList});
        });
      });
    } else {
      this.setState ({imagesrc: []});
    }

    this.setState ({files});
  };

  render () {
    let {files, index, isOpen} = this.state;
    return (
      <div>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={index => {
            this.openViewer (index);
          }}
          multiple={true}
        />
        {isOpen
          ? <WxImageViewer
              onClose={this.onClose}
              urls={this.state.imagesrc}
              index={index}
            />
          : null}
      </div>
    );
  }
}
