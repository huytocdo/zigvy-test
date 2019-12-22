import React, { Component } from 'react';
import { connect } from 'react-redux';

import { get as _get } from 'lodash';
import * as actions from './../../store/actions';

class Blogs extends Component {
  state = {

  }

  render() {
    return (
      <h1>CREATE NEW POST PAGE</h1>
    )
  }
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);