import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import './password.scss'
import Button from "../../components/Button"
import FormTitle from '../../components/FormTitle'


const Resetpassword = () => {

    const [password, setPassword] = useState("")

    const handleChange = (e) => {
         setPassword( e.target.value)
    }

    

    return (
      <div>
        <Helmet>
          <title>Reset Password</title>
          <meta name="description" content="Reset Password Page" />
        </Helmet>
        <div className="containerhouse">
          <div className="maincontainer">
            <FormTitle
              textColor="black"
               className="resetpassword"
              text="Reset Password"
              rectColor=" #FFA500CC"
            />
            <p className="entry"> Enter new password</p>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <Button
              textColor="black"
              radius="9px"
              className="corebutton"
              text="Reset Password"
            ></Button>
          </div>
        </div>
      </div>
    );

}
export default Resetpassword;