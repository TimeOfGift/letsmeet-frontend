import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import "./signUp.scss";
import FormTitle from '../../components/FormTitle'
import { signup } from '../../redux/actions/auth'
import Toast from "../../components/Toast";


const SignUp = () => {
    const [data, setData] = useState({});

    const dispatch = useDispatch();
    const { user, loading } = useSelector(state => state.signupReducer);

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(data));
    }

    return (
        <>  {user?.status && <Toast header={user.status} message={user.message} type={user.status} />}
            <div className="signup_page">
                <form onSubmit={handleSubmit} className="signup_cover">
                    <div className="account_login">
                        <p className="confirm_account">Have an Account ?</p>
                        <Link to={'/login'} className="account_signin">Sign in</Link>
                    </div>
                    <FormTitle text='Sign up' textColor='black' rectColor='orange' />
                    <div className="username/email">
                        <p className="username_and_email_header">Enter email address</p>
                        <input name='email' onChange={handleChange} placeholder="youremail@gmail.com" className="username_or_email" />
                    </div>
                    <div className="username_and_contact">
                        <div className="username">
                            <p className="user_name_header">Firstname</p>
                            <input name='first_name' onChange={handleChange} placeholder="Firstname" className="user_name" />
                        </div>
                        <div className="Contact_Number">
                            <p className="contact__number_header">Lastname</p>
                            <input name='last_name' onChange={handleChange} placeholder="Lastname" className="contact_number" />
                        </div>
                    </div>
                    <div className="Password">
                        <p className="password_header">Enter your Password</p>
                        <input name='password' onChange={handleChange} type='password' placeholder="Password" className="password" />
                    </div>
                    <Button text="sign up" className="signup_button" />

                </form>
            </div>
        </>

    );
}

export default SignUp;