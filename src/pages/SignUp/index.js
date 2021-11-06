import React from "react";
import { Link } from 'react-router-dom'
import Button from '../../components/Button';
import "./signUp.scss";
import FormTitle from '../../components/FormTitle'


const SignUp = () => {
    return (
        <div className="signup_page">
            <form className="signup_cover">
                <div className="account_login">
                    <p className="confirm_account">Have an Account ?</p>
                    <Link to={'/login'} className="account_signin">Sign in</Link>
                </div>
                    <FormTitle text='Sign up' textColor='black' rectColor='orange' />
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
                    <p  className="password_header">Enter your Password</p>
                    <input type='password' placeholder="Password" className="password" />
                </div>
                    <Button text="sign up" className="signup_button" />
            
            </form>
        </div>
    );
}

export default SignUp;