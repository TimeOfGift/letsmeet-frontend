import React, { useState } from 'react'
import './forgetpassword.scss'
import Button from '../../components/Button'
import FormTitle from './../../components/FormTitle'



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
                    <FormTitle  className="forgotpassword" text="Forgot Password" rectColor="#FFA500CC"/>
                </div>
                
                <div className="secondparagraph">
                    <p className="emailentry" >Enter your email address</p>
                </div>
                <div className="emailadress">
                     <input type="text" placeholder="Email address" className="emailinput" value={email}
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

