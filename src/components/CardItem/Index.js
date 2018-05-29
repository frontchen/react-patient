import React, {Component} from 'react';
import {Card, Icon} from 'antd-mobile';
import PropTypes from 'prop-types';
import {UserAvatar, Button} from '../../components/Index';
import './Index.less';
export default class CardItem extends Component {
  // check props
  static propTypes = {
    height: PropTypes.number,
    type: PropTypes.string,
    name: PropTypes.string,
    content: PropTypes.string,
    time: PropTypes.any,
    url: PropTypes.string,
    grade: PropTypes.any,
    disease: PropTypes.string,
    calltime: PropTypes.any,
  };

  render () {
    const {
      width,
      height,
      borderRadius,
      show,
      type,
      name,
      content,
      time,
      onClick,
      url,
      grade,
      disease,
      calltime,
      price,
    } = this.props;
    let hd = window.App.config.hd;
    let arrowStyle = {
      position: 'absolute',
      right: 10 + hd,
      top: '50%',
      color: '#eaeaea',
      transform: ' translateY(-50%)',
    };

    if (type === 'message') {
      return (
        <Card full onClick={onClick} className={'doctor-history-list'}>
          <Card.Header
            title={
              <div className={'patient-history-cart'}>
                <div className={'patient-nickname'}>{name}</div>
                <div className={'patient-history-content'}>
                  <div
                    className={'patient-hsitory-text'}
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {content}
                  </div>
                </div>
              </div>
            }
            thumb={
              <UserAvatar
                show={show}
                url={url}
                width={width}
                height={height}
                borderRadius={borderRadius}
              />
            }
            extra={<span>{time}</span>}
          />
        </Card>
      );
    }
    if (type === 'doctorlist') {
      return (
        <div className={'card-item'} onClick={onClick}>
          <Card full>
            <Card.Header
              title={
                <div className={'doctor-history-cart'}>
                  <div className={'doctor-card-box'}>
                    <div className={'doctor-name'}>{name}</div>
                    <div className={'doctor-job-box'}>
                      {grade}
                    </div>
                  </div>
                  <div className={'doctor-card-box'}>
                    <div className={'doctor-good-at'}>擅长:</div>
                    <div
                      className={'doctor-good-contents'}
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {disease}
                    </div>
                  </div>
                </div>
              }
              thumb={
                <UserAvatar
                  url={url}
                  width={width}
                  height={height}
                  borderRadius={borderRadius}
                />
              }
            />
          </Card>
          <Icon
            type="right"
            style={arrowStyle}
            className={'doctor-arrow-right'}
            size="md"
          />
        </div>
      );
    }
    if (type === 'doctorcall') {
      return (
        <div className={'doctor-list-info'}>
          <Card full>
            <Card.Header
              title={
                <div className={'doctor-history-cart'}>
                  <div className={'doctor-card-box'}>
                    <div className={'doctor-name'}>{name}</div>
                    <span className={'doctor-job-box'}>
                      {grade}
                    </span>
                  </div>
                  <div className={'doctor-card-box '}>
                    <span className={'doctor-good-at'}>医生擅长</span>
                    <span className={'doctor-good-contents'}>
                      {disease}
                    </span>
                  </div>
                  <div className={'doctor-card-box '}>
                    <span className={'doctor-call-date'}>可约日期</span>
                    <div className={'doctor-job-box'}>
                      {calltime}
                    </div>
                  </div>
                </div>
              }
              thumb={
                <UserAvatar
                  url={url}
                  width={width}
                  height={height}
                  borderRadius={borderRadius}
                />
              }
            />
            <Card.Body>
              <div className={'doctor-price-button'}>
                <div className={'doctor-price'}>&yen;{`${price}元/${time}`}</div>
                <Button
                  onClick={onClick}
                  className={'price_button'}
                  type={'main'}
                >
                  去预约
                </Button>

              </div>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }
}
