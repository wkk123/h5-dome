import React, { Component } from 'react';
import store from '@/store';

import './payment.scss';

class payment extends Component {
  state={
    name: '',
    ...store.getState()
  }
  componentDidMount() {

  }
  // 跳转
  goToNext = () => {
    this.props.history.push({ pathname: 'result' })
  }
  render() {
    return (
      <div className='payment_container' > 
        {'iohoho'}
        <div onClick={() => { this.goToNext() }}>下一页</div>
      </div>
    );
  }
}

export default payment;