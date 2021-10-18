import React from "react";
import "./formTitle.scss";


const FormTitle = ({ text, textColor, rectWidth }) => {
    return (
        <div className="form_title">
            <h1 className="form_title_update" style={{color : textColor}}>{text}</h1>
            <div className="update_rectangle" style={{width : rectWidth}}></div>
        </div>
    );
}

export default FormTitle;