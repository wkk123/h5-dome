import React, { Component } from 'react'
import './home.scss';
import store from '@/store';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'首页',
      ...store.getState()
    };
  }

  componentDidMount() {

  }
  // 跳转
  goToNext =() =>{
    this.props.history.push({ pathname:'interim'})
  }
  render() {
    const { name } = this.state;
    return (
      <div className="home_container">
        {name}
        <div onClick={() => { this.goToNext() }}>下一页</div>
      </div>
    );
  }
}

export default home