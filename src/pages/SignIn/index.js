import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import Button from './../../components/Button/index';
import FormTitle from '../../components/FormTitle';
import validation from '../validation';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../redux/actions/auth';
import Toast from '../../components/Toast';
import './signin.scss';



const SignIn = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [userLogin, setUserLogin] = useState({});
    const [errors, setErrors] = useState({});


    const dispatch = useDispatch();
    const { user, loading } = useSelector(state => state.signinReducer)

    const handleChange = (e) => {
        setUserLogin(prevUser => ({...prevUser, [e.target.name]: e.target.value}));
    }

    const toggleShownPassword = () => { setPasswordShown(!passwordShown) }

    const handleSubmit = (e) => { 
        e.preventDefault();
        setErrors(validation(userLogin))
        dispatch(signin(userLogin))
    }

    return(
        <>{user?.status && <Toast header={user.status} message={user.message} type={user.status} />}
        <div className="main">
            <div className="signin-container">
                <div className="signup-div">
                    <div className="empty-div"></div><div className="signup"><p>No Account?</p>
                        <Link to={'/signup'} className="signup-link">Sign Up</Link>
                    </div>
                </div>
                <div>
                <FormTitle text="Login" rectColor="orange" textColor="black"/>
                </div>
                <form  className="signin-form" onSubmit={handleSubmit}>
                <label className="label">
                    Enter your username or email address
                    <input type="email" name="email" onChange={handleChange}/>
                </label>
                {errors.email && <p className="danger">{errors.email}</p>}
                <label className="label">
                    Enter your password
                    <div className="input-password">
                    <input id="show-and-hide" type={passwordShown ? "text" : "password"} name="password" onChange={handleChange}/>
                    <div className="show-icon-btn" onClick={toggleShownPassword}>
                    <svg  width="13" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_3609:148)">
                        <path d="M31.9994 11.4223C31.7117 11.1318 24.8568 4.30981 16.1019 4.30981C7.34695 4.30981 0.491742 11.1318 0.204358 11.422C-0.0681193 11.6976 -0.0681193 12.0714 0.204358 12.3469C0.491742 12.6374 7.34695 19.4594 16.1019 19.4594C24.8568 19.4594 31.7117 12.6374 31.9994 12.3472C32.2723 12.0716 32.2723 11.6976 31.9994 11.4223ZM16.1019 17.8922C9.65294 17.8922 4.06747 13.3643 2.41405 11.8841C4.06533 10.4026 9.6391 5.87701 16.1019 5.87701C22.5505 5.87701 28.1356 10.4041 29.7897 11.8852C28.1384 13.3667 22.5647 17.8922 16.1019 17.8922Z" fill="#8E8E8E"/>
                        <path d="M16.1025 7.18311C12.5901 7.18311 9.73242 9.2923 9.73242 11.8847C9.73242 14.4772 12.5901 16.5864 16.1025 16.5864C19.6149 16.5864 22.4726 14.4772 22.4726 11.8847C22.4726 9.2923 19.6149 7.18311 16.1025 7.18311ZM16.1025 15.0191C13.7608 15.0191 11.8558 13.6131 11.8558 11.8847C11.8558 10.1564 13.7608 8.75035 16.1025 8.75035C18.4441 8.75035 20.3492 10.1564 20.3492 11.8847C20.3492 13.6131 18.4442 15.0191 16.1025 15.0191Z" fill="#8E8E8E"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_3609:148">
                        <rect width="32.2041" height="23.7692" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    </div>
                    </div>
                </label>
                {errors.password && <p className="danger">{errors.password}</p>}
                <div className="forget-password-div">
                    <div className="empty-div"></div>
                    <div className="forget">
                    <Link to={'/forget-password'} ><p>Forget Password</p></Link>
                    </div>
                </div>
                <Button className="sign-btn" text="Login"/>
                </form>
            </div>
        </div>
        </>
    )
}

export default SignIn;