import React, {Component} from 'react';
import {List, Tag, Modal, SearchBar, Accordion} from 'antd-mobile';

export default class FillRecordsTarget extends Component {
  constructor (props) {
    super (props);
    this.state = {
      searchData: [],
      historyData: [],
      modalShow: false,
      noTarget: true,
    };
  }

  onChange = key => {
    console.log (key);
  };

  render () {
    return (
      <div className={'container'}>
        <div className={'medical-record-target-info'}>
          <div className={'search_box'}>
            <SearchBar
              className={'search_group'}
              placeholder={'填写指标'}
              onChange={e => {
                this.setState ({searchData: e});
              }}
            />
          </div>
          <div className={'advdsisory-fill-list'}>
            {/* 输入检索 */}

            {this.state.searchData.length > 0
              ? <List>
                  <List.Item
                    onClick={() => {
                      Modal.prompt (
                        '',
                        `${this.state.searchData}`,
                        [
                          {text: '取消'},
                          {
                            text: '确定',
                            onPress: value => console.log (`输入的内容:${value}`),
                          },
                        ],
                        'placeholders',
                        '请输入指标'
                      );
                    }}
                  >
                    {this.state.searchData}
                  </List.Item>
                </List>
              : <div>
                  <div className={'medical-record-target-history'}>
                    <Tag>血常规</Tag>
                    <Tag>血糖检查</Tag>
                    <Tag>血脂检查</Tag>
                    <Tag>肝功能</Tag>
                    <Tag>凝血四项</Tag>
                    <Tag>孕期检查</Tag>
                  </div>
                  <div className={'medical-record-target-list'}>
                    <Accordion
                      defaultActiveKey="0"
                      openAnimation={{}}
                      onChange={this.onChange}
                      accordion={true}
                    >
                      <Accordion.Panel header="血常规">
                        <List className="my-list">
                          <List.Item>铁蛋白</List.Item>
                          <List.Item>叶酸</List.Item>
                          <List.Item>维生素B12</List.Item>
                        </List>
                      </Accordion.Panel>
                      <Accordion.Panel header="尿常规">
                        <List.Item>凝血四项</List.Item>
                        <List.Item>叶酸</List.Item>
                        <List.Item>维生素B12</List.Item>
                      </Accordion.Panel>
                      <Accordion.Panel header="肝功能">
                        <List.Item>孕期检查</List.Item>
                        <List.Item>叶酸</List.Item>
                        <List.Item>维生素B12</List.Item>
                      </Accordion.Panel>
                    </Accordion>
                  </div>
                  <div className={'medical-record-target-desc'}>
                    <span
                      onClick={() => {
                        this.props.history.push ({
                          pathname: './PatientsCondition',
                          state: {
                            noTarget: this.state.noTarget,
                          },
                        });
                      }}
                    >
                      没有我的指标?
                    </span>
                  </div>
                </div>}

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
      </div>
    );
  }
}
