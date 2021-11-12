import React, { useState } from 'react'
import './forgetpassword.scss'
import Button from '../../components/Button'


const Forgetpassword = () => {

    const [email, setEmail] = useState("")

    const handleChange = (e) =>{
         setEmail(e.target.value)
     }

     const handleSubmit = (e) => {
        e.preventDefault();
        console.log('email')
     }

    return (
           <form >
        <div className="containerhouse">
            <div className="maincontainer">
                <div className='firstparagraph'>
                    <p className="forgotpassword">Forgot Passwords</p>
                </div>
                <hr className="figma"></hr>
                <div className="secondparagraph">
                    <p className="emailentry" >Enter your email address</p>
                </div>
                <div className="emailadress">
                     <input type="text" placeholder="email address" className="emailinput" value={email}
                        onChange={handleChange} /> 
                </div>
                <div className="buttondiv">
                    <Button className="corebutton" text="Submit"/>            
                </div>
            </div>
        </div>

        </form>
    )

}


export default Forgetpassword;

