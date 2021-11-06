import React from "react";
import './landingPage.scss';
import event from '../../images/event.png';
import Button from '../../components/Button';
import {Link} from "react-router-dom";

function LandingPage() {
     return (
          <div className='background-image'>
               <img src={event} alt="no"/>
               <p className='firstParagraph'>Get Closer to your <span>social</span> Meetup</p>
               <p className='secondParagraph'>Work hard play harder,exclusive VIP access to the best</p>
               <p className='secondParagraph'>events,parties and everything <span>FUN!!!</span></p>
               {/* <button className='landingPagebutton'>Join the creed now! </button> */}
               <Link to= "/signup" className="sig">
               <Button text='Join the creed now!' className='landingPagebutton'/>
               </Link>
          </div>
     );
}

export default LandingPage;