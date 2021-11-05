import React from "react";
import "./formTitle.scss";


const FormTitle = ({ text, textColor, rectWidth, rectColor }) => {
    return (
        <div className="form_title">
            <h1 className={`form_title_update`} style={{color : textColor}}>{text}</h1>
            <div className="update_rectangle" style={{width : rectWidth, background: rectColor}}></div>
        </div>
    );
}

export default FormTitle;