import React, { Component } from 'react';
import store from '@/store';

import './result.scss';

class result extends Component {
  state={
    name: '',
    ...store.getState()
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className='result_container' > 
        {'iohoho'}
      </div>
    );
  }
}

export default result;