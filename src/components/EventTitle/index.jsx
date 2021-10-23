import React from "react";
import './EventTitle.scss';

const EventTitle = (props) => {

		const { topic, subTopic, street, state, date, time } = props;
		return (
				<div className="eventtitles">
					<div className="topics">
						<p className="to">{topic}</p>
						<p>{subTopic}</p>
						<button className="btnrsvp">RSVP</button>
					</div>
					<div className="location">
						<p className="loc">Location</p>
						<p className="street">{street}</p>
						<p className="state">{state}</p>
					</div>
					<div className="datetime">
						<h6>Date and Time</h6>
						<p className="date">{date}</p>
						<p className="time">{time}</p>
					</div>
				</div>
		);
	}

export default EventTitle;