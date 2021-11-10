import React, {useState} from 'react';
import Button from './../../components/Button/index'

import './signin.scss'

const SignIn = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [userLogin, setUserLogin] = useState({});

    const handleChange = (e) => {
        setUserLogin(prevUser => ({...prevUser, [e.target.name]: e.target.value}));
    } 

    const toggleShownPassword = () => {
        setPasswordShown(!passwordShown)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userLogin, "========")
    }

    return(
        <div className="main">
            <div className="signin-container">
                <div className="signup-div">
                    <div className="empty-div"></div><div className="signup"><p>No Account?</p><p id="signup">Sign Up</p></div>
                </div>
                <div>
                <h1>Login</h1>
                <hr />
                </div>
                <form onSubmit={handleSubmit}>
                <label className="label">
                    Enter your username or email address
                    <input type="email" name="name" onChange={handleChange}/>
                </label>
                <label className="label">
                    Enter your password
                    <div className="input-password">
                    <input id="show-and-hide" type={passwordShown ? "text" : "password"} name="password" onChange={handleChange}/>
                    <Button className="show-icon-btn" text="&#128065;" handleClick={toggleShownPassword}/>
                    </div>
                </label>
                <div className="forget-password-div">
                    <div className="empty-div"></div><p id="forget">Forget Password</p>
                </div>
                <Button className="sign-btn" text="Login"/>
                </form>
            </div>
        </div>
    )
}

export default SignIn;