import React from "react";
import {Link} from "react-router-dom";
import { Helmet } from "react-helmet";
import './landingPage.scss';
import event from '../../images/event.png';
import Button from '../../components/Button'


function LandingPage() {
     return (
          <div className='background-image'>
               <Helmet>
                    <title>Home</title>
                    <meta name="description" content="Home page" />
               </Helmet>
               <img src={event} alt="no" className="langimg"/>
               <p className='firstParagraph'>Get Closer to your <span> social</span> Meetup</p>
               <p className='secondParagraph'>Work hard play harder,exclusive VIP access to the best</p>
               <p className='secondParagraph'>events,parties and everything <span>FUN!!!</span></p>
               <Link to= "/signup" >
               <Button text='Join the creed now!' className='landingPagebutton'/>
               </Link>

          </div>
     );
}

export default LandingPage;