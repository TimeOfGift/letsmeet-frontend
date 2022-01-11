import React from 'react'
import moment from 'moment'
import "./eventcard.scss";

const EventCard = ({ event }) => {
  console.log(event);
  return (
    <div className="event-card" style={{ backgroundImage: `url(${event.img})` }}>
      <h2 className="title">{event.title}</h2>
      <p className="date">{ moment(event.date).format('LLLL') }</p>
      <div className="tags">
        {event?.tags?.map(tag => <p> #{tag}</p>)}
      </div>
    </div>
  );
};


export default EventCard;

