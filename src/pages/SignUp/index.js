import React from "react";
import "./signUp.scss";
import FormTitle from '../../components/FormTitle'


const SignUp = () => {
    return (
        <div className="signup_page">
        <div className="signup_cover">
            <FormTitle text='Sign up' textColor='black' rectColor='orange'/>
        </div>
        </div>
    );
}

export default SignUp;