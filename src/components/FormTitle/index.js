import React from "react";
import "./formTitle.scss";


const FormTitle = ({ text }) => {
    return (
        <div className="form_title">
            <h1 className="form_title_update">{text}</h1>
            <div className="update_rectangle"></div>
        </div>
    );
}

export default FormTitle;