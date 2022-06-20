import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './password.scss';
import Button from '../../components/Button';
import FormTitle from '../../components/FormTitle';
import validation from '../validation';


const Forgetpassword = () => {
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});

    const handleChange = (e) => { setEmail(e.target.value) }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(email))
    }

    return (
        <form onSubmit={handleSubmit}>
            <Helmet>
                <title>Forget Password</title>
                <meta name="description" content="Forget Password Page" />
            </Helmet>
            <div className="containerhouse">
                <div className="maincontainer">
                    <FormTitle text="Forgot Password" rectColor="#FFA500CC" textColor='black' />
                    <div className="secondparagraph">
                        <p className="entry" >Enter your email address</p>
                    </div>
                    <div className="emailadress">
                        <input type="email" name="email" placeholder="youremail@email.com" value={email}
                            onChange={handleChange} />
                    </div>
                    {errors.email && <p className="danger">{errors.email}</p>}
                    <div className="buttondiv">
                        <Button className="corebutton" text="Submit" radius='9px' />
                    </div>
                </div>
            </div>

        </form>
    )

}


export default Forgetpassword;

