import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import * as actions from './../store/actions';

class Blogs extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <Button onClick={this.props.onCountUp}>UP</Button>
        <Button onClick={this.props.onCountDown}>DOWN</Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const count = (state || {}).count;
  return {
    count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCountUp: () => dispatch(actions.countUp()),
    onCountDown: () => dispatch(actions.countDown())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Blogs);