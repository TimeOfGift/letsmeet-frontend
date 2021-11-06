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
    }

    return (
       <form handleClick={handleSubmit}>
        <div className="containerhouse">
            <div className="maincontainer">
                <div className='firstparagraph'>
                    <FormTitle className="" text="Forgot Password" rectColor="none"/>
                </div>
                <hr className="figma"></hr>
                <div className="secondparagraph">
                    <p className="emailentry" >Enter your email address</p>
                </div>
                <div className="emailadress">
                    <input type="text" placeholder="Email address" className="emailinput" value={email}
                        onChange={handleChange} />
                </div>
                <div className="buttondiv">
                    <Button className="corebutton" text="Submit" handleClick={handleSubmit}></Button>
                </div>


            </div>
        </div>
</form>

    )

}


export default Forgotpassword;

