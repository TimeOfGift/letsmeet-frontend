import React, { useState } from "react";
import "./dropdown.scss";


  const NotificationDropdown = ({ notifications }) => {
    const [isActive, setIsActive] = useState(false);

    const isToggled = () => {
      setIsActive(!isActive);
    };
    return (
      <div className="main">
        <i className="dd_icon" onClick={isToggled}>
          <svg
            width="27"
            height="29"
            viewBox="0 0 27 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.668 21.9622C13.6087 21.9622 13.5503 21.9662 13.4932 21.9744C13.4361 21.9662 13.3777 21.9622 13.3184 21.9622H6.0957C7.23726 19.8315 7.23695 16.5171 7.23695 13.4151C7.23695 8.45941 9.39692 5.82983 13.3184 5.82983H13.668C17.5898 5.82983 19.7495 8.45941 19.7495 13.4151C19.7495 16.5171 19.7495 19.8315 20.8907 21.9622H13.668ZM14.1727 25.5813C14.0495 25.7101 13.8549 25.8957 13.4384 25.8957C13.0339 25.8957 12.8533 25.7 12.7412 25.5789C12.5016 25.3201 12.3644 25.006 12.292 24.3972H13.3187C13.3779 24.3972 13.4363 24.393 13.4934 24.3848C13.5506 24.393 13.6089 24.3972 13.6682 24.3972H14.6649C14.5785 25.006 14.4284 25.3144 14.1727 25.5813ZM25.1115 22.1098C23.0551 22.1098 22.2601 20.9084 22.2601 13.4635C22.2601 7.62599 19.6042 3.95755 15.0208 3.41362V1.55231C15.0208 0.879013 14.4742 0.333252 13.7986 0.333252C13.1233 0.333252 12.5764 0.879013 12.5764 1.55231V3.3777C7.6875 3.7731 4.85652 7.47898 4.85652 13.4635C4.85652 20.9084 3.964 22.1098 1.9073 22.1098C1.23202 22.1098 0.667969 22.5801 0.667969 23.2534C0.667969 23.9267 1.19933 24.397 1.87461 24.397H9.8218C9.91622 25.3101 10.1912 26.4327 10.9346 27.2417C11.5684 27.9312 12.434 28.3333 13.4381 28.3333C14.4354 28.3333 15.3041 27.9169 15.9512 27.2359C16.7222 26.4242 17.028 25.3101 17.146 24.397H25.1115C25.7871 24.397 26.3346 23.9267 26.3346 23.2534C26.3346 22.5801 25.7871 22.1098 25.1115 22.1098Z"
              fill="#DEDEDE"
            />
          </svg>
        </i>
        {isActive && (
          <div className="dd_wraapper">
            {notifications.map((notification, id) => {
              return (
                <div key={id} className="dd_flex">
                  <div className="dd_img_wrapper">
                    <img
                      className="dd_img"
                      src={notification.img}
                      alt={notification.name}
                    />
                  </div>
                  <div className="dd_content">
                    <div className="ddtxt_content">
                      <span className="ddtxt">{notification.name}</span>
                      <span className="ddtxt _txt">{notification.details}</span>
                      <span className="ddtxt">{notification.eventTitle}</span>
                    </div>
                    <span className="time">{notification.time}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  export default NotificationDropdown;
