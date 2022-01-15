import React, { useState, useEffect, useRef } from "react";
import "./profileDropdown.scss";

const ProfileDropdown = ({ userName, imgUrl }) => {

  const [showMenu, setShowmenu] = useState(false);
  const [color, setColor] = useState("#CCCCCC" );

  const showList = () => setShowmenu(!showMenu);

  const userRef = useRef()
  function handleClickOutside(event) {
    if (!userRef?.current?.contains(event.target)) {
      setShowmenu(false)
    }
  }
    useEffect(() => {
      
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [userRef]);
  


  
  return (
    <div className="dropdown" ref={userRef} >
      <div className="dropdown_header" 
      onClick={showList}
       onMouseEnter={() => setColor('orange')}
        onMouseLeave={() => setColor("#CCCCCC")}
       >
        <img className='user_image' src={imgUrl} alt="profile" />
      
          <span className="dropdown_username" style={{color}}>{userName}</span>
          <svg width="9" height="7" viewBox="0 0 9 7" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <path 
            className='profile-icon'
            fillRule="evenodd"
             clipRule="evenodd" 
             d={`M4.65312 
             5.98759L8.47804 
             0.799359C8.5878 
             0.650753 8.60808 
             0.448165 8.53043 
             0.278065C8.45288 
             0.107965 8.29096 
             0 8.11351 0L0.463673 
             0C0.28622 0 0.124298 0.107965
              0.0466404 0.278065C0.0153456 0.346747 4.57764e-05 0.420618 
              4.57764e-05 0.494118C4.57764e-05 0.6027 0.033658 0.710665 0.0991459 
              0.799359L3.92395 5.98759C4.01192 6.10692 4.14626 6.17647 4.28859 6.17647C4.43081
               6.17647 4.56526 6.10692 4.65312 5.98759Z`}
              fill={color}/>
          </svg>
      </div>
      {showMenu &&
        <div className="dropdown_menu">
          <span className="dropdown_item">Settings</span>
          <div className="divider"></div>
          <span className="dropdown_item">Logout</span>
        </div>
      }
    </div>
  );
}

export default ProfileDropdown;



