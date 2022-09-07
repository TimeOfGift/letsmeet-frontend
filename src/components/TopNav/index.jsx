import React from 'react'
import Notification from "./../NotificationDropdown";
import Profile from "./../ProfileDropdown";
import { notifications } from "./../../components/NotificationDropdown/dummydata";

import Logo from '../../images/logo.png';
import defaultImg from "../../images/user-img.jpeg";

import "./topnav.scss";

const TopNav = ({imgUrl}) => {
  return (
    <div className="top-nav">
      <div className="logo-wrapper">
        <img src={Logo} alt="" className="logo" />
        <span>Event's Meet</span>
      </div>
      <div className="user-notification">
        <Notification notifications={notifications} />
        <Profile imgUrl={imgUrl || defaultImg} userName="UserName" />
      </div>
    </div>
  );
}

export default TopNav
