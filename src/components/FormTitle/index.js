import React from "react";
import "./formTitle.scss";
import PropTypes from 'prop-types';


const FormTitle = ({ text, textColor, rectWidth, rectColor }) => {
    return (
        <div className="form_title">
            <h1 className="form_title_update" style={{color : textColor}}>{text}</h1>
            <div className="update_rectangle" style={{width : rectWidth, background: rectColor}}></div>
        </div>
    );
}

FormTitle.proptypes = {

 stringProp : PropTypes.string,

}


export default FormTitle;