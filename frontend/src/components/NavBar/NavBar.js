import React from 'react';
import { Avatar } from 'antd';

export default () => {
  return (  
    <div class="nav-bar">
      <ul class="nav-list">
        <li class="nav-item">
          <div class="logo-box">Logo</div>
        </li>
        <li class="nav-item">
          <a href="#" class="title">Blogs</a>
        </li>
        <li class="nav-item">
          <div class="account-box">
            <Avatar shape="square" size={44} icon="user" />
            <span class="account-name">Adam Levine</span>
          </div>
        </li>
      </ul>
    </div>
  )
}