import React from "react";
import "./profileDropdown.scss";


const ProfileDropdown = ({userName}) =>{
    return(
        <div className="profile_dropdown" >
        <div className="user_image"></div>
        <p className="user_name">{userName}</p>

        </div>
    );
}


export default ProfileDropdown;