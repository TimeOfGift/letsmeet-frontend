import React, { useState } from 'react'
import './Forgotpassword.scss'

const Forgotpassword = () => {

    const [email, setEmail] = useState("")

    const onChange = (e) =>{
         setEmail([e.target.email],e.target.value)
     }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('email')
    }

    return (

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
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="buttondiv">
                    <button onSubmit={handleSubmit} className="corebutton">submit</button>
                </div>


            </div>
        </div>


    )

}


export default Forgotpassword;

