import React from "react";
import "./signUp.scss";
import FormTitle from '../../components/FormTitle'


const SignUp = () => {
    return (
        <div className="signup_page">
            <div className="signup_cover">
                <div className="account_login">
                    <p className="confirm_account">Have an Account ?</p>
                    <p className="account_signin">Sign in</p>
                </div>
                <div className="signup_formtitle">
                    <FormTitle text='Sign up' textColor='black' rectColor='orange' />
                </div>
                <div className="username/email">
                    <p className="username_and_email_header">Enter your username or email address</p>
                    <input placeholder="Username or email address" className="username_or_email" />
                </div>
                <div className="username_and_contact">
                    <div className="username">
                        <p className="user_name_header">Username</p>
                        <input placeholder="User name" className="user_name" />
                    </div>
                    <div className="Contact_Number">
                        <p className="contact__number_header">Contact Number</p>
                        <input placeholder="Contact_number" className="contact_number" />
                    </div>
                </div>
                <div className="Password">
                    <p className="password_header">Enter your Password</p>
                    <input placeholder="Password" className="password" />
                </div>
                <div className="signUp_button">
                    <button className="signup_button">sign up</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;