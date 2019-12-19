import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import * as actionTypes from '../store/actions';

const TestRouter = () => (
  <div>
    <h1>BLOG DETAILS</h1>
    <h2>{this.props.count}</h2>
    <Button>Button Up</Button>
    <Button>Button Down</Button>
  </div>
);

const mapStateToProps = state => {
  return {
    count: state.count
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onButtonUpClicked: () => dispatch({type: actionTypes.COUNT_UP}),
    onButtonDownClicked: () => dispatch({type: actionTypes.COUNT_DOWN})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestRouter);