import React, { Component } from 'react';
import store from '@/store';

import './question.scss';

class question extends Component {
  state={
    name: '',
    ...store.getState()
  }
  componentDidMount() {

  }
  // 跳转
  goToNext = () => {
    this.props.history.push({ pathname: 'payment' })
  }
  render() {
    return (
      <div className='question_container' > 
        {'iohoho'}
        <div onClick={() => { this.goToNext() }}>下一页</div>
      </div>
    );
  }
}

export default question;