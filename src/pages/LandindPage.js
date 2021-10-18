import React from "react";
import './landingPage.scss';
import event from '../images/event.png';


function LandingPage() {
     return (
          <div className='background-image'>
               <img src={event}/>
               <p className='firstParagraph'>Get Closer to your <span>social</span> Meetup</p>
               <p className='secondParagraph'>Work hard play harder,exclusive VIP access to the best</p>
               <p className='thirdParagraph'>events,parties and everything <span>FUN!!!</span></p>
               <button className='landingPagebutton'>Join the creed now! </button>

          </div>
     );
}

export default LandingPage;