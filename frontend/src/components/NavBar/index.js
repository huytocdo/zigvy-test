import React from 'react';
import { Avatar } from 'antd';
import './NavBar.css';

export default () => {
  return (  
    <div className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item">
          <div className="logo-box">Logo</div>
        </li>
        <li className="nav-item">
          <a href="#" className="title">Blogs</a>
        </li>
        <li className="nav-item">
          <div className="account-box">
            <Avatar shape="square" size={44} icon="user" />
            <span className="account-name">Adam Levine</span>
          </div>
        </li>
      </ul>
    </div>
  )
}