import React, { useState } from 'react'
import './Forgotpassword.scss'
import Button from '../../components/Button'
import FormTitle from '../../components/FormTitle'

const Forgotpassword = () => {

    const [email, setEmail] = useState("")

     const handleChange = (e) =>{
         setEmail(e.target.value)
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('email')
        //the Api goes here
    }

    return (
         <form handClick={handleSubmit}> 
        <div className="containerhouse">
            <div className="maincontainer">
                    <FormTitle className="forgotpassword" text="Forgot Password" rectColor="none" />
                <hr className="figma"></hr>
                <div className="secondparagraph">
                    <p className="emailentry" >Enter your email address</p>
                </div>
                <div className="emailadress">
                    <input type="text" placeholder="Email address" className="emailinput" value={email}
                        onChange={handleChange} />
                </div>
                <div className="buttondiv">
                    <Button onChange={handleSubmit}className="corebutton" text="Submit"/>
                    {/* <button onSubmit={handleSubmit} className="corebutton">submit</button> */}
                </div>
            </div>
        </div>
        </form>

    )

}


export default Forgotpassword;

