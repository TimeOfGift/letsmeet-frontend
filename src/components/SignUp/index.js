import React from "react";
import "./signUp.scss";


const SignUp = ({ text, textColor, rectWidth, rectColor }) => {
    return (
        <div className="signup_page">
            <h1 className="signup_page_title" style={{color : textColor}}>{text}</h1>
            <div className="signup_rectangle" style={{width : rectWidth, background: rectColor}}></div> 
        </div>
    );
}

export default SignUp;