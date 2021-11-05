import React, { useState } from 'react'
import './Forgotpassword.scss'
import Button from '../../components/Button'
import FormTitle from '../../components/FormTitle'



const Forgotpassword = () => {

    const [email, setEmail] = useState("")

    // // const onChange = (e) =>{
    // //      setEmail([e.target.email],e.target.value)
    //  }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('email')
    }

    return (

        <div className="containerhouse">
            <div className="maincontainer">
                <div className='firstparagraph'>
                    <FormTitle className="" text="Forgot Password" />
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
                    <Button className="corebutton" text="Submit" handleClick={handleSubmit}></Button>
                </div>


            </div>
        </div>


    )

}


export default Forgotpassword;

