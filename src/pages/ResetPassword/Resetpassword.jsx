import React, { useState } from 'react'
import './Resetpassword.scss'
import Button from "./../../components/Button"


const Resetpassword = () => {

    const [password,setPassword] = useState("")

    const handleChange = (e) =>{
      setPassword([e.target.password],e.target.value)
    }

    const handleSubmit = (e) => {
       e.preventDefault();
        
    }

    return (

        <div className="containerhouse">
            <div className="maincontainer">
                <div className='firstparagraph'>
                    <p className="resetpassword">Passwords Reset </p>
                </div>
                <hr className="figma"></hr>
                <div className="secondparagraph">
                    <p className="passwordentry" > Enter new password</p>
                </div>
                <div>
                    <input type="text" placeholder="Password" className="passwordinput" value={password}
                        onChange={handleChange} />
                </div>
                <div className="buttondiv">
                    <Button className="corebutton" text="Reset Password" handleClick={handleSubmit}></Button>
                </div>

                </div>
        </div>


    )

}
export default Resetpassword;