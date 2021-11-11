import React, { useState } from 'react'
import './resetpassword.scss'
import Button from "./../../components/Button"
import FormTitle from './../../components/FormTitle'


const Resetpassword = () => {

    const [password, setPassword] = useState("")

    const handleChange = (e) => {
         setPassword( e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div handleClick={handleSubmit}>
            <div className="containerhouse">
                <div className="maincontainer">
                    <FormTitle className="resetpassword" text="Reset Password" rectColor=" #FFA500CC" />
                    <p className="passwordentry" > Enter new password</p>
                    <div>
                        <input type="password" placeholder="Password" className="passwordinput" value={password}
                            onChange={handleChange} />
                    </div>
                    <Button className="corebutton" text="Reset Password" handleClick={handleSubmit}></Button>

                </div>
            </div>
        </div>

    )

}
export default Resetpassword;