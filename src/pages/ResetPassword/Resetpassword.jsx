import React, { useState } from 'react'
import './Resetpassword.scss'


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
                    <button onClick={handleSubmit} className="corebutton" text="">Reset password</button>
                </div>

                </div>
        </div>


    )

}
export default Resetpassword