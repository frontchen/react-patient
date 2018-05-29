import React, {Component} from 'react';
import {Button} from 'antd-mobile';

export default class MedicineListDetail extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'user-medicine-wrapper'}>
          {/* 药品图片 */}
          <div className={'user-medicine-img'}>
            <img
              src={require('../../assets/images/doctorHeaderPerson.jpg')}
              alt=""
            />
          </div>
          {/* 药品信息 */}
          <div className={'user-drugs-introduce'}>
            <div className={'user-drugs-name'}>
              <div>维康达 替吉奥胶囊42粒</div>
              <div className={'user-drugs-favorite-icon'}>
                <img
                  src={require('../../assets/images/white_star.svg')}
                  alt=""
                />
              </div>
            </div>
            <div className={'user-drugs-text'}>
              <div className={'user-drugs--text-title'}>简介</div>
              <div className={'user-drugs--text-content'}>
                <div className={'user-medicine-item'}>
                  <span>【成分】</span>陈皮、厚补、生半夏、冬虫夏草啊啊啊啊啊陈皮、厚补、生半夏、冬虫夏草啊啊啊啊啊
                </div>
                <div className={'user-medicine-item'}>
                  <span>【规格】</span>每支装10毫升陈皮、厚补、生半夏、冬虫夏草啊啊啊啊啊
                </div>
                <div className={'user-medicine-item'}>
                  <span>【适用症】</span>解表化湿，理气和中等详见陈皮、厚补、生半夏、冬虫夏草啊啊啊啊啊
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'user-drugs-text user-how-use'}>
          <div className={'user-drugs--text-title'}>用法与用量</div>
          <div className={'user-how-use-content'}>
            <div className={'user-how-use-item'}>
              <span>联适用药:</span>陈皮、厚补、生半夏、冬虫夏草啊啊啊啊啊陈皮、厚补、生半夏、冬虫夏草啊啊啊啊啊每支装
              10毫升陈皮、厚补、生半夏、冬虫夏草啊啊啊啊啊解表化湿，理气和中等详见陈皮、厚补、生半夏、冬虫夏草啊啊啊啊啊
            </div>
          </div>
        </div>
        <Button
          type="primary"
          size="large"
          className={'patient-delete-btn bgColor_blue5'}
        >
          立即咨询
        </Button>
      </div>
    );
  }
}
