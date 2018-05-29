import React, {Component} from 'react';

export default class DoctorGoodAt extends Component {
  constructor (props) {
    super (props);
    this.state = {goodContent: ''};
  }

  componentDidMount () {
    let goodContent = this.props.location.state.goodat;

    this.setState ({goodContent});
  }
  render () {
    return (
      <div className={'container'}>
        <div className={'doctor-good-at-info'}>
          {this.state.goodContent}
        </div>
      </div>
    );
  }
}
