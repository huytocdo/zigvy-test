import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../../store/actions';
import NavBar from './../../components/NavBar/NavBar';
class Layout extends Component {

  render() {
    return (
      <>
        <NavBar 
          isAuthenticated={this.props.isAuthenticated} 
          userInfor={this.props.user}
        />
        <div className="container">
          {this.props.children}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const { token, userData } = state.authen;
  return {
    isAuthenticated: !!token,
    user: userData
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);