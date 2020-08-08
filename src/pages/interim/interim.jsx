import React, { Component } from 'react';
import store from '@/store';

import './interim.scss';

class interim extends Component {
  state={
    name: '',
    ...store.getState()
  }
  componentDidMount() {

  }
  // 跳转
  goToNext = () => {
    this.props.history.push({ pathname: 'question' })
  }
  render() {
    return (
      <div className='interim_container' > 
        {'iohoho'}
        <div onClick={() => { this.goToNext() }}>下一页</div>
      </div>
    );
  }
}

export default interim;