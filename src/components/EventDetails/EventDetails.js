import React, {useState} from 'react';
import './EventDetails.scss';

const EventDetails = ({event}) => {

    return(
        <div className="">
            <div className="border-div">
                <div className="event-description">
                    <h2>{event.title}</h2>
                    <p>{event.text1}</p>
                    <p>{event.text2}</p>
                    <p id="attend">Attending: <span id="attendant-name">
                    {event.attendant}</span></p>
                    <p id="attend">Tags</p>
                    <p>{event.tags}</p>
                </div>
                <div className="img-div"><img className='event-img' src={event.img} alt='event'/></div>
            </div>
        </div>
    );
}

export default EventDetails;