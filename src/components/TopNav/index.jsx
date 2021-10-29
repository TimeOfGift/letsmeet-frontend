import React from 'react'
import Logo from '../../images/logo.png'
import "./topnav.scss";

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="logo-wrapper">
        <img src={Logo} alt="" className="logo" />
        <span>Event's Meet</span>
      </div>
    </div>
  );
}

export default TopNav
